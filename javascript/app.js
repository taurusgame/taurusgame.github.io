 Vue.component('layer-up', {
 	props: ['title', 'message'],
 	template: '\
 	    <div class="modal">\
 	        <div class="modal_dialog">\
 	            <div class="modal_content">\
 	                <h3 class="modal_title">{{title}}</h3>\
 	                <div class="pop_text">{{message}}</div>\
 	                <a href="javascript:void(0)" class="modal_close" @click="app.hidePop()">X</a>\
 	            </div>\
 	        </div>\
 	    </div>'
 });



 Vue.component('loading', {
 	template: '\
 	    	<div class="loading">\
				<div class="mask"></div>\
				<div class="loadEffect">\
					<span></span>\
					<span></span>\
					<span></span>\
					<span></span>\
					<span></span>\
					<span></span>\
					<span></span>\
					<span></span>\
				</div>\
	</div>'
 });

 Vue.filter("numFilter", function(value) {
 	if(isNaN(value)) {
 		return "--"
 	}
 	let realVal = parseFloat(value).toFixed(2);
 	return realVal
 });
 Vue.filter("numFilter0", function(value) {
 	if(value == 0) {
 		return "--"
 	} else {
 		return value
 	}
 });
 Vue.filter("toNumber", function(value) {
 	if(value == "") {
 		return ""
 	} else if(value==0){
		return 0
	}else{
 		return parseInt(value);
 	}
 });
 Vue.filter("formatTimeStamp", function(t, fmt) {
 	if(t == 0 || t == null || t == "") {
 		return "none";
 	} else {
 		var date = new Date(t * 1000);
 		fmt = fmt || 'yyyy-MM-dd';
 		var o = {
 			'M+': date.getMonth() + 1,
 			'd+': date.getDate(),
 			'h+': date.getHours(),
 			'm+': date.getMinutes(),
 			's+': date.getSeconds()
 		};
 		if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
 		for(var k in o)
 			if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
 		return fmt;
 	}
 });

 Vue.filter("formatAddress", function(value) {
 	return value.substr(0, 4) + "****" + value.substr(-4);
 });
 var compare = function(obj1, obj2) {
 	var val1 = obj1.id;
 	var val2 = obj2.id;
 	if(val1 < val2) {
 		return 1;
 	} else if(val1 > val2) {
 		return -1;
 	} else {
 		return 0;
 	}
 };

var data = {
	defaultLang: "cn",
	langItem: lang["cn"],
	lang: lang,
	menu: false,
	langList: {
			en: "English",
			jp: "日本語",
			kr: "한국어",
			cn: "中文",
			ru: "Россия",
	},
	currentLang:"cn",
	copySuccess:false,
	noId:false,
	noRegister:false,
	idError:false,
	defaultAddress:"--",
	trxBalance: "--",
	playerID: 0,
	pid: 0,
	parentID:"--",
	topID:0,
	treeCurrentID:0,
	address:"--",
	income:"--",
	inviteIncome:"--",
	netIncome:"--",
	randomIncome:"--",
	upperLimit:"--",
	level:0,
	joinTime:"--",
	inviteCount:"--",
	teamCount:"--",
	investCount:"--",
	historyCount:0,
	joinCount:[10000,20000,30000,10000],
	nextSlide:"--",
	distance:"--",
	showLoading:true,
    treeData:[0,0,0,0,0,0,0,0,0,0,0,0],
	treeType:["--","--","--","--"],
	stat:["--","--","--","--","--","--","--","--","--","--","--","--",["--","--","--","--"]],
	multiple:[50,100,150,200],
	matrixHistory:[],
	logCount:"--",
	logIndex:0,
	logPageCount:0,
	inviteIndex:0,
	invitePageCount:0,
	pageSize:12,
	task:null,
	inviteList:[],
	contractAddress: "TDJ1r4Lfrb7uYguDjmdNGudhuXoQ6xz3yZ",
	contract:null,
	feeLimit: 100000000,
	callValue: 0,
	abi:"",
}

 var app = new Vue({
	el: "#app",
	data: data,
	methods: {
		SC: function(name, value) {
			var Days = 7;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		},
		GC: function(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return unescape(arr[2]);
			else
				return null;
		},
		IL: function() {
			var _t = this,
				value = this.GC("lang");
			_t.currentLang = value;
			for (var key in _t.lang) {
				if (key == value) {
					_t.langItem = _t.lang[key];
					break;
				}
			}
		},
		changeLang: function(index) {
			this.SC("lang", index), this.IL(), this.menu = false
		},
		displayMenu: function() {
			this.menu = !this.menu;
		},
		tokenTab: function(index) {
			this.tabData.tokenItem = index
		},
		clickTab: function(index) {
			this.tabData.ecologyItem = index
		},
		investTab: function(index) {
			this.gameData.investNumber = index;
		},
		daysTab: function(index) {
			this.financial.joinDays = index;
		},
		hidePop: function() {
			this.copySuccess = false;
			this.noId = false;
			this.noRegister = false;
			this.idError = false;
		},
		getQuantity: function(val) {
			this.quantity = val;
		},
		i: async function() {
			return (this.IL(), this.PID(), await this.I3());
		},
		wait: async function() {
			var _t = this;
			if (window.tronWeb) {
				var tronWeb = window.tronWeb;
				var nodes = await tronWeb.isConnected();
				if (nodes && nodes["fullNode"] && nodes["solidityNode"]) {
					return (await _t.A(), _t.I());
				} else {
					setTimeout(async () => {
						await _t.wait();
					}, 1000);
				}
			} else {
				setTimeout(async () => {
					await _t.wait();
				}, 1000);
			}
		},
		I3: async function() {
			this.wait().then();
		},
		tg: async function(methodName, args, callback) {
			let myContract = await window.tronWeb.contract().at(this.contractAddress)
			var callSend = 'send'
			this.abi.forEach(function(val) {
				if (val.name === methodName) {
					callSend = /payable/.test(val.stateMutability) ? 'send' : 'call'
				}
			})
			myContract[methodName](...args)[callSend]({
				feeLimit: this.feeLimit,
				callValue: this.callValue || 0,
			}).then(function(res) {
				if (res) {
					callback && callback(res);
				}
			})
		},
		getInvitePage: function(n) {
			var _t = this;
			_t.showLoading = true;
			_t._invitePageList(_t.playerID, n);
		},
		_invitePageList: function(uid, n) {
			var _t = this;
			if (_t.invitePageCount == 0) {
				_t.inviteIndex = 0;
				_t.showLoading = false;
				return false;
			}
			_t.inviteIndex += n;
			if (_t.inviteIndex < 1) _t.inviteIndex = 1;
			_t.getInviteList(uid, _t.inviteCount - _t.inviteIndex * _t.pageSize, function(r) {
				_t.showLoading = false;
			});
		},
		getInviteList: async function(uid, start, callback) { 
			if(start<0)start=0;
			
			var _t = this;
			_t.contract.getInviteList(uid, start).call().then(function(r) {
				
				var uids = r[1];
				callback && callback(r);
				_t.inviteList = [];
				for (var i = 0; i < uids.length; i++) {
					if (uids[i] > 0) {
						_t.getUserInfoById(uids[i], function(r) {
							_t.inviteList.push({
								id: ~~r[0],
								time: ~~r[2],
							}), _t.inviteList.sort(compare);
						});
					}
				}
			}).catch(function(err) {
				console.log(err.message + " at getInviteList");
			});
		},
		getMenu: function(index) {
			var _t = this;
			if (_t.lg("pid") > 0) {
				window.location.href = index + ".html?pid=" + _t.lg("pid")
			} else {
				window.location.href = index + ".html";
			}
		},
		MN:function(){
			var _t = this;
			_t.getUserInfo(function(){
				_t.getTreeInfo(_t.playerID, function(){_t.showLoading = false;});
			});
		},
		DT:function(){
			var _t = this;
			_t.logIndex = 1;
			_t.getRewardInfo(function(r) {
				_t.showLoading = false;
			});
		},
		IX:function(){
			var _t = this;
			_t.getGameInfo(function(r) {
				_t.showLoading = false;
			});
		},
		IT:function(){
			var _t = this;
			_t.getUserInfo(function(){
					_t.invitePageCount = ~~((_t.inviteCount+_t.pageSize-1)/_t.pageSize);
					_t._invitePageList(_t.playerID, 0); 
			});
		},
		I: function() {
			var _t = this;_t.copy();
			if (TAG == "INDEX") {_t.IX();
			} else if (TAG == "STAT") {_t.IX()
			} else if (TAG == "INVITE") {_t.IT()
			} else if (TAG == "MAIN") {_t.MN()
			} else if (TAG == "DETAIL") {_t.DT()
			} else {_t.showLoading = false;
			}
		},
		getGameInfo: function(callback) { 
			var _t = this;
			_t.contract.getGameInfo().call().then(function(r) {
				_t.stat = r;
				_t.stat = _t.stat.map(parseFloat);
				_t.stat[r.length - 1] = r[r.length - 1].map(parseFloat);
				callback&&callback(r);
			});
		},
		getUserInfo: function(callback) { 
			var _t = this;
			_t.contract.getUserInfo(_t.defaultAddress).call().then(function(r) {
				

				_t.parentID = ~~r[0][0];
				_t.topID = ~~r[0][1];
				_t.joinTime = ~~r[0][2];
				_t.randomIncome=r[0][3] / 10 ** 6;
				_t.netIncome=r[0][4] / 10 ** 6;
				_t.inviteIncome=r[0][5] / 10 ** 6;
				
				_t.income =r[0][3] / 10 ** 6 + r[0][4] / 10 ** 6 + r[0][5] / 10 ** 6;

			

				_t.distance = r[0][6] / 10 ** 6;
				_t.trxBalance = r[0][7] / 10 ** 6;
				_t.inviteCount = ~~r[0][9];
				_t.teamCount = ~~r[0][10];

				_t.playerID = ~~r[1];
				_t.level = ~~r[3];

				callback&&callback(r);
			}).catch(function(err) {
				console.log(err.message + " at getUserInfo");
			});

		},
		getUserInfoById: function(uid, callback) { 
			var _t = this;
			_t.contract.getUserInfoById(uid).call().then(function(r) {
				callback && callback(r);
			}).catch(function(err) {
			});
		},
		PID: function() { 
			var reg = new RegExp('(^|&)' + 'pid' + '=([^&]*)(&|$)'),
				r = window.location.search.substr(1).match(reg);
			this.pid = r != null ? parseInt(decodeURIComponent(r[2])) : 0;

			if (this.pid >= 0) {
				this.ls("pid", this.pid);
			} else {
				this.pid = ~~this.lg("pid");
			}
		},
		getBalance: async function() { 
			this.trxBalance = tronWeb.fromSun(await tronWeb.trx.getBalance(this.defaultAddress));
		},
		copy: function() { 
			var _this = this;
			var clipboard = new ClipboardJS('.btn');
			clipboard.on('success', function(e) {
				e.clearSelection();
				_this.copySuccess = true;
			});
			clipboard.on('error', function(e) {
				alert("copy failed!")
			});
		},
		h: function(a) {
			return TronWeb.address.fromHex(a);
		},
		join: async function() {
			var _t = this;
			
			_t.contract.Join(_t.pid).send({
				feeLimit: _t.feeLimit,
				callValue: _t.joinCount[0] * 1000000,
			}).then(function(r) {});
			setInterval(function() {
				_t.getUserInfo();
			}, 5000);
		},
		upgrade: async function() { 
			var _t = this;
			_t.contract.Upgrade(_t.level + 1).send({
				feeLimit: _t.feeLimit,
				callValue: _t.joinCount[_t.level + 1] * 1000000,
			}).then(function(r) {
			});
			setInterval(function() {_t.getUserInfo();}, 5000);
		},
		format_next_position: function(s) {
			var p = s.shift();
			var b = s.filter(function(n) {
				return n > 0;
			});
			b.reverse();
			return b.join("->") + "(" + (++p) + ")";
		},
		getTreeInfo: function(index, callback) { 
			var _t = this;
			
			_t.contract.getTreeInfo(index, _t.playerID).call().then(function(r) {
				_t.topID = ~~r[3];
				_t.treeCurrentID = index;
				_t.treeData = r[0].map(parseFloat);
				_t.treeType = r[1].map(parseFloat);
				_t.nextSlide = _t.format_next_position(r[2]);
				
				callback&&callback(r);
			});
		},
		viewTree: function(index, n) { 
			var _t = this;
			if(index < _t.playerID)return;
			if(n>0)index = ~~(index / 10);
			_t.showLoading = true;
			_t.getTreeInfo(index, function(){_t.showLoading = false;});
		},
		getLogPage: function(n) { 
			var _t = this;
			if (_t.logPageCount == 0) {
				_t.logIndex = 0;
				_t.showLoading = false;
				return False;
			}
			_t.logIndex += n;
			if (_t.logIndex < 1) _t.logIndex = 1;
			if (_t.logIndex > _t.logPageCount) _t.logIndex = _t.logPageCount;
			_t.showLoading = true;
			_t.getRewardInfo(function(r) {
				_t.showLoading = false;
			});
		},
		getRewardLog: async function(uid, index, callback) {
			var _t = this;
			_t.contract.getRewardLog(uid, index).call().then(function(r) {
				callback && callback(r);
			});
		},
		getRewardInfo: function(callback) { 
			var _t = this;
			_t.contract.getRewardInfo(_t.defaultAddress).call().then(function(r) {
			
				_t.playerID = ~~r[0];
				_t.income = r[1] / 10 ** 6 + r[3] / 10 ** 6 + r[4] / 10 ** 6;
				_t.logCount = ~~r[2];
				_t.logPageCount = ~~((_t.logCount + _t.pageSize - 1) / _t.pageSize);
				_t.matrixHistory = [];
				callback && callback(r);
				if (_t.logCount == 0) {
					_t.logIndex == 0;
					return false;
				}
				var start = _t.logCount - (_t.logIndex - 1) * _t.pageSize;
				var limit = start - _t.pageSize < 0 ? 0 : start - _t.pageSize;
				while (start > limit) {
					_t.getRewardLog(_t.playerID, --start, (function(i) {
						return function(r) {
							if (~~r[1] > 0) {
								_t.matrixHistory.push({
									address: _t.h(r[0]),
									id: i,
									uid: ~~r[1],
									time: ~~r[2],
									income: r[3] / 10 ** 6,
									type: ~~r[4]
								}), _t.matrixHistory.sort(compare);
							}
						}
					})(start));
				}

			}).catch(function(err) {
				console.log(err.message + " at getRewardInfo");
			});;

		},
		ls: function(k, v) {
			localStorage.setItem(k, v);
		},
		lg: function(k) {
			return localStorage.getItem(k);
		},
		A: async function() {
			var _t = this;
			_t.contract = await window.tronWeb.contract().at(_t.contractAddress);
			_t.defaultAddress = window.tronWeb.defaultAddress.base58;

			setInterval(function() {
				if (_t.defaultAddress != window.tronWeb.defaultAddress.base58) {

					_t.ls("_uID", 0);
					window.location.reload();
				}
			}, 3000);
		},
	},
	computed: {
		formatMyURL: function() {
			var url = window.location.href;
			var index = url.lastIndexOf("\/");
			str = url.substring(0, index + 1);
			return str + "index.html?pid=" + this.playerID;
		},
	},
	mounted: function() {
		return (this.GC("lang") || this.SC("lang", this.defaultLang), this.i());
	}
})
