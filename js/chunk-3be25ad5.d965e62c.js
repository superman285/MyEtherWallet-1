(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be25ad5"],{"0200":function(t,e,n){t.exports=n.p+"img/defaultToken.a834d91c.png"},"0a60":function(t,e,n){},"0d25":function(t,e,n){},"0d2b":function(t,e,n){},"13f8":function(t,e,n){"use strict";var s=n("0d25"),a=n.n(s);a.a},1964:function(t,e,n){},3131:function(t,e,n){"use strict";var s=n("8f32"),a=n.n(s);a.a},"434f":function(t,e,n){},"43db":function(t,e,n){"use strict";var s=n("0d2b"),a=n.n(s);a.a},4820:function(t,e,n){"use strict";var s=n("69b7"),a=n.n(s);a.a},"4fdd7":function(t,e,n){"use strict";var s=n("0a60"),a=n.n(s);a.a},"54a4":function(t,e,n){"use strict";var s=n("5ce6"),a=n.n(s);a.a},"5ce6":function(t,e,n){},"69b7":function(t,e,n){},"7f4fa":function(t,e,n){"use strict";var s=n("1964"),a=n.n(s);a.a},"81f9":function(t,e,n){"use strict";var s=n("9687"),a=n.n(s);a.a},"8e92":function(t,e,n){"use strict";var s=n("d43a"),a=n.n(s);a.a},"8f32":function(t,e,n){},"8f6a":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return ht}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-kitties-manager"},[n("interface-container-title",{attrs:{title:t.$t("nftManager.title")}}),!t.isReady&&t.isOnlineAndEth?n("div",[n("loading-sign",{attrs:{loadingmessage1:t.$t("common.loading")}})],1):t._e(),t.isReady&&t.hasNfts?n("div",{staticClass:"content-container"},[n("nft-side-menu",{attrs:{"supported-nft-obj":t.nftConfig,"nft-config":t.nftConfig,"initial-highlighted":t.selectedContract,"loading-complete":t.countsRetrieved,"sent-update":t.sentUpdate,"nft-card-url":t.nftUrl},on:{selected:t.changeSelectedContract,openCustomModal:t.openCustomModal,removeCustomNft:t.openRemovalConfirmModal}}),n("div",{staticClass:"block-divider"}),t.showDetails?n("div",[n("nft-details",{attrs:{nft:t.detailsFor,"selected-title":t.nftTitle,"get-image":t.getImage},on:{nftTransferred:t.removeSentNft,resetNFT:t.resetNFT,back:t.comeBack}})],1):t._e(),t.showDetails?t._e():n("div",[n("content-block-title",{attrs:{"button-text":t.ntfCount,title:t.nftTitle}}),n("b-row",t._l(t.nftToShow,(function(e){return n("b-col",{key:e.key,staticClass:"mb-4",attrs:{cols:"6",lg:"4",md:"4"}},[n("div",{staticClass:"text-center cursor-pointer",on:{click:function(n){return t.showNftDetails(e)}}},[t.hasImage(e)?t._e():n("div",{staticClass:"spinner-box d-flex justify-content-center align-items-center"},[n("b-spinner",{staticStyle:{width:"50px",height:"50px"},attrs:{label:"Large Spinner",variant:"secondary"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasImage(e),expression:"hasImage(nft)"}],staticClass:"product-img"},[n("img",{attrs:{src:t.getImage(e),alt:""},on:{load:function(n){return t.hasLoaded(e)}}})]),n("p",{staticClass:"text-monospace"},[t._v("#"+t._s(t._f("ConcatToken")(e.name)))])])])})),1),n("div",{staticClass:"pagination-container",class:t.collectionLoading?"loading":""},[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.selectedNft.tokens.length>9,expression:"selectedNft.tokens.length > 9"}],attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination justify-content-center"},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.startIndex>0,expression:"startIndex > 0"}],staticClass:"page-item",on:{click:function(e){return t.getPrevious()}}},[n("div",{staticClass:"page-link prev-button"},[t._v("Previous")])]),n("li",{staticClass:"page-item"},[t.startIndex+1!=t.endIndex?n("div",{staticClass:"page-link page-index-button"},[t._v(" "+t._s(t.$t("nftManager.showing-range",{first:t.startIndex+1,last:t.endIndex,count:t.endIndex-t.startIndex}))+" ")]):t._e(),t.startIndex+1==t.endIndex?n("div",{staticClass:"page-link page-index-button"},[t._v(" "+t._s(t.$t("nftManager.showing",{first:t.startIndex+1,count:t.endIndex-t.startIndex}))+" ")]):t._e()]),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNextButton,expression:"showNextButton"}],staticClass:"page-item",on:{click:function(e){return t.getNext()}}},[n("div",{staticClass:"page-link next-button"},[t._v("Next")])])])])])],1)],1):t._e(),t.isReady&&!t.hasNfts?n("div",{staticClass:"inner-side-menu content-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.reLoading,expression:"!reLoading"}]},[n("h3",{staticClass:"no-nft-notice"},[t._v(t._s(t.$t("nftManager.no-nft")))]),n("standard-button",{attrs:{options:{title:t.$t("nftManager.add-custom"),buttonStyle:"green",helpCenter:!1,noMinWidth:!0,fullWidth:!1},"click-function":t.openCustomModal}})],1),n("span",{directives:[{name:"show",rawName:"v-show",value:t.reLoading,expression:"reLoading"}]},[t._v(t._s(t.$t("nftManager.reloading")))])]):t._e(),t.isOnlineAndEth?t._e():n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.online,expression:"!online"}]},[t._v(t._s(t.$t("nftManager.nft-are")))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.online,expression:"online"}],staticClass:"not-supported-txt"},[t._v(" "+t._s(t.$t("nftManager.not-supported",{value:t.network.type.name_long}))+" ")])]),n("div",{staticClass:"flex--row--align-start mft-manager-content-container"}),n("nft-custom-add-modal",{ref:"customModal",attrs:{"add-token":t.addCustom,"active-address":t.activeAddress}}),n("nft-custom-confirm-remove-modal",{ref:"customRemoveModal",attrs:{"for-removal":t.forRemoval},on:{remove:t.removeCustomNft}})],1)},a=[],o=(n("99af"),n("4de4"),n("7db0"),n("c740"),n("4160"),n("d81d"),n("fb6a"),n("a434"),n("b0c0"),n("b64b"),n("d3b7"),n("07ac"),n("159b"),n("96cf"),n("c964")),i=n("f3f3"),r=n("8ded"),c=n.n(r),d=n("c1be"),l=n("55c1"),u=function(t,e){var n=e._c;return n("div",{staticClass:"flex--row--align-center content-block-title"},[n("h4",{staticClass:"mr-2"},[e._v(e._s(e.props.title))]),n("p",[e._v(e._s(e.props.buttonText))])])},f=[],m={props:{title:{type:String,default:""},buttonText:{type:String,default:""}}},h=m,p=(n("3131"),n("2877")),g=Object(p["a"])(h,u,f,!0,null,"075c81fe",null),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nft-side-menu"},[n("div",{staticClass:"desktop-menu"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",[n("h2",{staticClass:"mr-4 mb-0"},[t._v(t._s(t.$t("nftManager.avail-nft")))])]),n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:t.openCustomModal}},[t._v(t._s(t.$t("nftManager.custom")))])],1),n("p",{staticClass:"mb-4"},[t._v(" "+t._s(t.$t("nftManager.select-item"))+" ")]),n("b-row",t._l(t.sortByCount,(function(e){return n("b-col",{key:e.key,staticClass:"mb-4",attrs:{cols:"4",md:"4",lg:"3"}},[n("NftProductCard",{attrs:{data:e,selected:e.contract===t.selected,"nft-card-url":t.nftCardUrl},nativeOn:{click:function(n){return t.selectNft(e)}}},[n("i",{directives:[{name:"show",rawName:"v-show",value:e.customNft,expression:"v.customNft"}],staticClass:"fa fa-times-circle clickable remove",on:{click:function(n){return t.removeCustomEntry(e)}}})])],1)})),1)],1),n("div",{staticClass:"mobile-menu"},[n("b-dropdown",{attrs:{text:t.currentProduct}},t._l(t.sortByCount,(function(e){return n("b-dropdown-item",{key:e.key,nativeOn:{click:function(n){return t.selectNft(e)}}},[t._v(" "+t._s(e.name)+" ("+t._s(e.tokens.length)+") ")])})),1)],1)])},C=[],k=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"text-center",class:[t.data.tokens.length>0?"active":"inactive",t.selected?"selected":""]},[t._e(),n("div",{staticClass:"card-image mb-2"},[n("img",{attrs:{src:t.getImgUrl(t.data.contract)}})]),n("div",{staticClass:"count text-dark"},[t._v(t._s(t.data.tokens.length))]),n("p",{staticClass:"nft-name font-weight-bold text-dark"},[t._v(t._s(t.data.name))])])}),y=[],w={components:{},props:{data:{type:Object,default:function(){return{}}},selected:{type:Boolean,default:!1},nftCardUrl:{type:String,default:""}},data:function(){return{}},methods:{getImgUrl:function(t){return"".concat(this.nftCardUrl,"tokenImage?token=").concat(t)}}},_=w,x=(n("54a4"),Object(p["a"])(_,k,y,!1,null,"7f083e15",null)),N=x.exports,$={components:{NftProductCard:N},props:{supportedNftObj:{type:Object,default:function(){return{}}},initialHighlighted:{type:String,default:""},loadingComplete:{type:Boolean,default:!1},sentUpdate:{type:Number,default:0},nftCardUrl:{type:String,default:""}},data:function(){return{selected:"",searchResults:[],currentProduct:""}},computed:{sortByCount:function(){return Object.values(this.supportedNftObj).sort((function(t,e){return t.tokens.length<e.tokens.length?1:t.tokens.length>e.tokens.length?-1:0}))}},watch:{loadingComplete:function(){this.setSelectedToTop()},sentUpdate:function(){this.setSelectedToTop()}},mounted:function(){this.selected=this.initialHighlighted},methods:{openCustomModal:function(){this.$emit("openCustomModal")},setSelectedToTop:function(){this.selected=this.sortByCount[0].contract,this.$emit("selected",this.selected)},selectNft:function(t){this.currentProduct=t.name+" ("+t.tokens.length+")",this.searchResults=[],t.tokens.length>0&&(this.selected=t.contract,this.$emit("selected",t.contract))},showDetails:function(t){this.searchResults=[],this.$emit("showTokenDetails",t)},removeCustomEntry:function(t){this.$emit("removeCustomNft",t)}}},M=$,O=(n("13f8"),n("becd"),Object(p["a"])(M,b,C,!1,null,"06e004b8",null)),S=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-kitties-details"},[n("div",{staticClass:"crypto-kitties-details-content-container"},[n("back-button",{staticStyle:{display:"inline"},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"product-title-mobile mt-4"},[n("h3",[t._v(t._s(t.$t("nftManager.send-my",{value:t.selectedTitle})))]),n("p",[t._v("#"+t._s(t.nft.name))])]),n("div",{staticClass:"kitty-image"},[n("img",{attrs:{src:t.getImage(t.nft),alt:""}})]),n("div",{staticClass:"kitty-text"},[t.canSend?n("div",{staticClass:"product-title-desktop"},[n("h3",[t._v(t._s(t.$t("nftManager.send-my",{value:t.selectedTitle})))]),n("p",[t._v("#"+t._s(t.nft.name))])]):t._e(),t.canSend?t._e():n("div",{staticClass:"product-title-desktop"},[n("h3",[t._v(" "+t._s(t.$t("nftManager.sending-disabled",{value:t.selectedTitle}))+" ")]),n("p",[t._v("#"+t._s(t.nft.name))])]),t.canSend?n("div",{staticClass:"address-input-container"},[n("dropdown-address-selector",{attrs:{title:t.$t("sendTx.to-addr")},on:{toAddress:t.prepareTransfer}}),n("div",{staticClass:"send-button-container"},[n("standard-button",{attrs:{"button-disabled":!t.isValidAddress,options:{title:t.$t("sendTx.send"),buttonStyle:"green",helpCenter:!0,noMinWidth:!0,fullWidth:!0},"click-function":t.transfer}})],1)],1):t._e()])])],1)])},A=[],j=(n("caad"),n("2532"),n("2f62")),I=n("ce96"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-back-button"},[n("p",{on:{click:function(e){return e.preventDefault(),t.back(e)}}},[t._v("< "+t._s(t.$t("common.back")))])])},P=[],E={props:{url:{type:String,default:""}},methods:{back:function(){this.$router.push("/interface/nft-manager")}}},F=E,B=(n("8e92"),Object(p["a"])(F,R,P,!1,null,"6bdf08f6",null)),U=B.exports,D=n("94b2"),L=n("a8f0"),W={components:{"back-button":U,"dropdown-address-selector":D["a"],"standard-button":L["a"]},props:{selectedTitle:{type:String,default:"Error"},nft:{type:Object,default:function(){return{}}},selectedContract:{type:String,default:"Error"},nftConfig:{type:Object,default:function(){return{}}},getImage:{type:Function,default:function(){}}},data:function(){return{toAddress:"",tokenContract:{},ERC721tokenContract:{},ERC721SafeTransferFrom:{},cryptoKittiesContract:{},cryptoKittiesConfig:"0x06012c8cf97bead5deae237070f9587f8e7a266d",cannotSend:{decentralland:"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d"},isValidAddress:!1}},computed:Object(i["a"])({},Object(j["c"])("main",["account","web3"]),{canSend:function(){return!Object.values(this.cannotSend).includes(this.nft.contract)}}),watch:{},mounted:function(){this.ERC721tokenContract=new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}])},methods:{prepareTransfer:function(t){this.toAddress=t.address,this.isValidAddress=t.valid,this.ERC721tokenContract.options.address=this.nft.contract},buildData:function(){return this.nft.contract.toLowerCase()===this.cryptoKittiesConfig.toLowerCase()?(this.cryptoKittiesContract=new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]),this.cryptoKittiesContract.methods.transfer(this.toAddress,this.nft.id).encodeABI()):this.ERC721tokenContract.methods.transferFrom(this.account.address,this.toAddress,this.nft.id).encodeABI()},transfer:function(){var t=this;if(this.isValidAddress){var e=this.buildData(),n={from:this.account.address,to:this.nft.contract,data:e};this.web3.eth.sendTransaction(n).on("transactionHash",(function(){t.$emit("nftTransferred",t.nft),t.toAddress=""})).catch((function(e){t.$emit("resetNFT",t.nft),I["e"].responseHandler(e,I["e"].ERROR)}))}},goBack:function(){this.$emit("back")}}},K=W,H=(n("81f9"),Object(p["a"])(K,T,A,!1,null,"295459e8",null)),V=H.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding max-height-1",attrs:{title:t.$t("nftManager.add-custom"),"hide-footer":"",centered:""},on:{hidden:t.resetCompState}},[n("form",{staticClass:"tokens-modal-body",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contractAddress,expression:"contractAddress"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:["custom-input-text-1",""===t.contractAddress||t.validAddress?"":"invalid-address"],attrs:{placeholder:t.$t("nftManager.ph-token-addr"),name:"Address",type:"text"},domProps:{value:t.contractAddress},on:{input:function(e){e.target.composing||(t.contractAddress=e.target.value)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.contractAddress&&!t.validAddress,expression:"contractAddress !== '' && !validAddress"}],staticClass:"error-message"},[t._v(" "+t._s(t.$t("nftManager.invalid-addr"))+" ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.nonStandardMessage,expression:"nonStandardMessage"}]},[t._v(" "+t._s(t.$t("nftManager.no-method-no-token",{token:t.tokenSymbol}))+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tokenSymbol,expression:"tokenSymbol"}],staticClass:"custom-input-text-1",attrs:{placeholder:t.$t("nftManager.name"),name:"Name",type:"text"},domProps:{value:t.tokenSymbol},on:{input:function(e){e.target.composing||(t.tokenSymbol=e.target.value)}}})]),n("div",{staticClass:"button-block"},[n("button",{class:[t.allFieldsValid?"":"disabled","save-button large-round-button-green-filled clickable"],on:{click:function(e){return e.preventDefault(),t.addCustom(t.contractAddress,t.tokenSymbol)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.dont-know"),link:"https://kb.myetherwallet.com"}})],1)])])],1)},z=[],J=(n("4d63"),n("ac1f"),n("25f0"),n("498a"),n("539d")),G=n("b7d3"),Z={components:{"interface-bottom-text":J["a"]},props:{addToken:{type:Function,default:function(){}},activeAddress:{type:String,default:""}},data:function(){return{contractAddress:"",tokenSymbol:"",tokenDecimal:"",validAddress:!1,nonStandardMessage:!1}},computed:Object(i["a"])({},Object(j["c"])("main",["web3"]),{allFieldsValid:function(){return!!this.validAddress&&(""!==this.tokenSymbol&&(!this.errors.has("address")&&!this.errors.has("symbol")))}}),watch:{contractAddress:function(t){var e=t.toLowerCase().trim(),n=new RegExp(/[a-zA-Z0-9]/g);this.validAddress=n.test(e)&&Object(G["a"])(e),this.toAddress=e,this.contractAddress=e},tokenSymbol:function(t){this.tokenSymbol=t}},methods:{resetCompState:function(){this.contractAddress="",this.tokenSymbol="",this.tokenDecimal="",this.validAddress=!1,this.nonStandardMessage=!1},addCustom:function(t,e){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:n.addToken(t,e);case 1:case"end":return s.stop()}}),s)})))()},openCustomModal:function(){this.$refs.customModal.$refs.modal.show()}}},Q=Z,X=(n("43db"),Object(p["a"])(Q,q,z,!1,null,"2006e3f4",null)),Y=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding max-height-1",attrs:{title:t.$t("nftManager.remove-custom"),"hide-footer":"",centered:""}},[n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:{title:t.$t("nftManager.remove"),buttonStyle:"red",helpCenter:!1,noMinWidth:!0,fullWidth:!1},"click-function":t.continueRemove}}),n("standard-button",{attrs:{options:{title:t.$t("common.cancel"),buttonStyle:"grey-border",helpCenter:!1,noMinWidth:!0,fullWidth:!1},"click-function":t.cancelRemove}})],1)])],1)},et=[],nt={components:{"standard-button":L["a"]},props:{forRemoval:{type:Object,default:function(){return{}}}},methods:{continueRemove:function(){this.$emit("remove",this.forRemoval),this.$refs.modal.hide()},cancelRemove:function(){this.$refs.modal.hide()}}},st=nt,at=(n("4fdd7"),Object(p["a"])(st,tt,et,!1,null,"6786967c",null)),ot=at.exports,it=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{name:"tokenAddr",type:"address"},{name:"addr",type:"address"}],name:"getTokenBalance",outputs:[{name:"bal",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenAddr",type:"address"},{name:"owner",type:"address"},{name:"tokenId",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"token",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"number",type:"uint256"}],name:"getByteSize",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAddresses",type:"address[]"},{name:"_owner",type:"address"}],name:"getTokenBalances",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAddress",type:"address"},{name:"_owner",type:"address"},{name:"idxOffset",type:"uint256"},{name:"count",type:"uint256"}],name:"getOwnedTokens",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"}],rt=n("0200"),ct=n.n(rt),dt=n("1131"),lt=n.n(dt),ut={components:{"nft-custom-add-modal":Y,"nft-custom-confirm-remove-modal":ot,"loading-sign":d["a"],"content-block-title":v,"nft-side-menu":S,"interface-container-title":l["a"],"nft-details":V,"standard-button":L["a"]},filters:{ConcatToken:function(t){return t?t.length>20?"".concat(t.substr(0,15),"...").concat(t.substr(t.length-6)):t:""}},data:function(){return{nftABI:it,nftUrl:"https://nft2.mewapi.io/",countPerPage:9,currentPage:1,nftConfig:{},countsRetrieved:!1,showDetails:!1,reLoading:!1,selectedContract:"",detailsFor:{},nftTokens:{},ownedTokens:[],sentUpdate:0,customNFTs:[],forRemoval:{},collectionLoading:!1,nftObjectClone:{}}},computed:Object(i["a"])({},Object(j["c"])("main",["account","online","network"]),{nftTitle:function(){return this.nftConfig[this.selectedContract]?"UNKNOWN"!==this.nftConfig[this.selectedContract].symbol||this.nftConfig[this.selectedContract].custom?this.nftConfig[this.selectedContract].name:"".concat(this.$t("nftManager.unknown-token-title",{address:this.nftConfig[this.selectedContract].name})):"".concat(this.$t("common.loading"))},startIndex:function(){return this.currentPage*this.countPerPage-this.countPerPage},endIndex:function(){return this.nftConfig[this.selectedContract]&&this.nftConfig[this.selectedContract].tokens&&this.nftConfig[this.selectedContract].tokens.length&&this.nftConfig[this.selectedContract].tokens.length<this.currentPage*this.countPerPage?this.nftConfig[this.selectedContract].tokens.length:this.currentPage*this.countPerPage},nftToShow:function(){return this.nftConfig[this.selectedContract]&&this.nftConfig[this.selectedContract].tokens?this.nftConfig[this.selectedContract].tokens.length>this.countPerPage?this.nftConfig[this.selectedContract].tokens.slice(this.startIndex,this.endIndex):this.nftConfig[this.selectedContract].tokens:[]},ntfCount:function(){return this.nftConfig[this.selectedContract]&&this.nftConfig[this.selectedContract].tokens?this.$t("nftManager.per-page-count",{perPage:this.countPerPage,count:this.nftConfig[this.selectedContract].tokens.length}):this.$t("nftManager.none-owned")},selectedNft:function(){return this.selectedContract?this.nftConfig[this.selectedContract]:{tokens:[]}},showNextButton:function(){if(this.nftConfig[this.selectedContract]){if(!this.nftConfig[this.selectedContract].tokens)return!1;var t=this.nftConfig[this.selectedContract].tokens.length;return this.endIndex!==t&&this.endIndex<=t}return null},activeAddress:function(){return this.account.address},hasNfts:function(){return Object.values(this.nftConfig).length>0},isReady:function(){return this.isOnlineAndEth&&this.countsRetrieved},isOnlineAndEth:function(){return this.online&&"ETH"===this.network.type.name}}),watch:{},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.setup();case 2:case"end":return e.stop()}}),e)})))()},methods:{addCustom:function(t,e){this.reLoading=!0,this.customNFTs.push({ERC721Extension:!0,contract:t,customNft:!0,title:e}),this.$refs.customModal.$refs.modal.hide(),c.a.set("customNFTs",this.customNFTs),this.sentUpdate+=1,this.setup()},removeCustomNft:function(t){this.reLoading=!0;var e=c.a.get("customNFTs");if(void 0!==e&&null!==e){var n=e.findIndex((function(e){return t.contract===e.contract}));e.splice(n,1),c.a.set("customNFTs",e),this.setup(),this.sentUpdate+=1}},openRemovalConfirmModal:function(t){this.forRemoval=t,this.$refs.customRemoveModal.$refs.modal.show()},openCustomModal:function(){this.$refs.customModal.$refs.modal.show()},hasLoaded:function(t){this.$set(t,"loaded",!0)},hasImage:function(t){return!(!t.customNft&&""!==t.image)||(!!t.loaded||void 0)},getImage:function(t){return t.customNft||""===t.image?ct.a:"".concat(this.nftUrl,"tokenImage?path=").concat(t.image)},removeSentNft:function(t){this.nftObjectClone=lt.a._.clone(this.nftConfig[t.contract]);var e=this.nftConfig[t.contract].tokens.filter((function(e){return e.id!==t.id}));this.$set(this.nftConfig[t.contract],"tokens",e),this.nftConfig[t.contract].tokens&&0===this.nftConfig[t.contract].tokens.length&&(this.sentUpdate+=1),this.showDetails=!1},resetNFT:function(t){Object.keys(this.nftObjectClone).length>0&&(this.nftConfig[t.contract]=this.nftObjectClone)},changeSelectedContract:function(t){this.selectedContract=t,this.showDetails=!1},comeBack:function(){this.showDetails=!1},getTokens:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.nftUrl,"tokens?owner=").concat(t.activeAddress,"&chain=mainnet"),{mode:"cors",cache:"no-cache",method:"GET","Cache-Control":"no-cache"});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},setup:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("ETH"!==t.network.type.name){e.next=9;break}return n=c.a.get("customNFTs"),t.customNFTs=void 0!==n&&null!==n?n:[{}],e.next=5,t.getTokens();case 5:s=e.sent,s.error||(a=Object.keys(s),a.forEach((function(e){s[e]=Object(i["a"])({},s[e]);var n=t.customNFTs.find((function(t){return t.contract===e}));s[e]&&(s[e].custom=!1,"UNKNOWN"===s[e].symbol&&n?(s[e].name=n.title,s[e].custom=!0):"UNKNOWN"===s[e].symbol&&(s[e].name=e),s[e].contract=e,s[e].tokens=s[e].tokens.map((function(t){return t.contract=e,t})),s[e].startIndex=0,s[e].priorIndex=0,s[e].currentIndex=0)})),t.nftConfig=Object(i["a"])({},s),t.selectedContract=Object.keys(t.nftConfig)[0]),t.reLoading=!1,t.countsRetrieved=!0;case 9:case"end":return e.stop()}}),e)})))()},getNext:function(){this.currentPage++},getPrevious:function(){this.currentPage>=1&&this.currentPage--},showNftDetails:function(t){this.detailsFor=t,this.showDetails=!0}}},ft=ut,mt=(n("7f4fa"),Object(p["a"])(ft,s,a,!1,null,"5c0390b4",null)),ht=mt.exports},9687:function(t,e,n){},becd:function(t,e,n){"use strict";var s=n("434f"),a=n.n(s);a.a},c1be:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=function(t,e){var n=e._c;return n("div",[n("div",{class:[e.props.color,"loading-container","loading-sign"]},[e._m(0),""!=e.props.loadingmessage1?n("p",{staticClass:"loading-message1"},[e._v(" "+e._s(e.props.loadingmessage1)+" ")]):e._e(),""!=e.props.loadingmessage2?n("p",{staticClass:"loading-message2"},[e._v(" "+e._s(e.props.loadingmessage2)+" ")]):e._e()])])},a=[function(t,e){var n=e._c;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],o={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},i=o,r=(n("4820"),n("2877")),c=Object(r["a"])(i,s,a,!0,null,"3944612c",null),d=c.exports},d43a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3be25ad5.d965e62c.js.map