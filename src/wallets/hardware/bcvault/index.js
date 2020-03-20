import { Transaction } from 'ethereumjs-tx';
import { bufferToHex, hexToNumber } from 'ethereumjs-util';
import * as bc from 'bc-vault-js';
import { BCVAULT as bcVault } from '../../bip44/walletTypes';
import HDWalletInterface from '@/wallets/HDWalletInterface';
import errorHandler from './errorHandler';
import BigNumber from 'bignumber.js';
import commonGenerator from '@/helpers/commonGenerator';
import store from '@/store';

import {
  getBufferFromHex,
  sanitizeHex,
  getSignTransactionObject,
  calculateChainIdFromV
} from '../../utils';

const NEED_PASSWORD = false;

class BCVault {
  constructor() {
    this.identifier = bcVault;
    this.isHardware = true;
    this.needPassword = NEED_PASSWORD;
    this.selectedAddress = '';
    this.bcWallet = new bc.BCJS(() => {});
    this.deviceNumber = null;
    this.bcWalletType = bc.WalletType.ethereum;
  }

  async init() {
    // fetch devices
    this.deviceNumber = await this.bcWallet.getDevices().catch(errorHandler);
    // get wallet of first device and password
    // not sure if we want the users to pass this as a parameter or ask user
    // for which wallet to use
    await this.bcWallet
      .EnterGlobalPin(this.deviceNumber[0], this.bcWalletType)
      .catch(errorHandler);
    const walletAddresses = await this.bcWallet.getBatchWalletDetails(
      this.deviceNumber[0],
      [bc.WalletType.ethereum]
    );

    return walletAddresses;
  }

  getAccount(address) {
    this.selectedAddress = address;
    const path = null;
    const publickey = address;
    const txSigner = async tx => {
      if (store.state.main.network.type.chainID === 1) {
        delete tx['from'];
        tx['from'] = address;
        tx = new Transaction(tx, {
          common: commonGenerator(store.state.main.network)
        });
        const newTx = {};
        newTx['feeCount'] = hexToNumber(tx['gasLimit']);
        newTx['feePrice'] = new BigNumber(
          bufferToHex(tx['gasPrice'])
        ).toString();
        newTx['amount'] =
          new BigNumber(bufferToHex(tx['value'])).toString() || 0;
        newTx['contractData'] = bufferToHex(tx['data']);
        newTx['to'] = bufferToHex(tx['to']);
        newTx['from'] = bufferToHex(tx['to']);
        newTx['advanced'] = {
          eth: {
            nonce:
              bufferToHex(tx['nonce']) === '0x' ? 0 : hexToNumber(tx['nonce'])
          }
        };
        const networkId = tx.getChainId();
        const result = await this.bcWallet
          .GenerateTransaction(
            this.deviceNumber[0],
            this.bcWalletType,
            newTx,
            false
          )
          .catch(errorHandler);
        if (result) {
          const resultTx = new Transaction(result);
          tx.v = getBufferFromHex(sanitizeHex(resultTx.v.toString('hex')));
          tx.r = getBufferFromHex(sanitizeHex(resultTx.r.toString('hex')));
          tx.s = getBufferFromHex(sanitizeHex(resultTx.s.toString('hex')));
          const signedChainId = calculateChainIdFromV(tx.v);
          if (signedChainId !== networkId)
            throw new Error(
              'Invalid networkId signature returned. Expected: ' +
                networkId +
                ', Got: ' +
                signedChainId,
              'InvalidNetworkId'
            );
          return getSignTransactionObject(tx);
        }

        return result;
      }
      errorHandler({
        jsError: 'mew2'
      });
    };
    const msgSigner = async msg => {
      const result = await this.bcWallet
        .SignData(
          this.deviceNumber[0],
          this.bcWalletType,
          this.selectedAddress,
          msg
        )
        .catch(errorHandler);
      if (result) {
        const signature = result.substr(2);
        const r = '0x' + signature.slice(0, 64);
        const s = '0x' + signature.slice(64, 128);
        const v = '0x' + signature.slice(128, 130);
        return Buffer.concat([
          getBufferFromHex(sanitizeHex(r)),
          getBufferFromHex(sanitizeHex(s)),
          getBufferFromHex(sanitizeHex(v))
        ]);
      }
      return result;
    };

    return new HDWalletInterface(
      path,
      publickey,
      true,
      this.identifier,
      errorHandler,
      txSigner,
      msgSigner
    );
  }
}

const createWallet = () => {
  const _bcvault = new BCVault();
  return _bcvault;
};

createWallet.errorHandler = errorHandler;

export default createWallet;