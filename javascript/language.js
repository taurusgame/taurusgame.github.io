var lang = {
	cn: {
		com: {
			title: "Taurus",
			copy: "复制",
			copySuccess: "复制成功",
			balance: "账户余额",
			details: "明细",
			tip: "提示",
			home: "首页",
			main: "主面板",
			invite: "邀请",
			rule: "游戏规则",
		},
		index: {
			title: "史上最公平、最有效的财富游戏",
			intro: "• TAURUS是一款基于TRONChain的智能合约小游戏，投入10000TRX，即可激活帐号，收获邀请、网体、全网随机等多种收益；\n\
• X3矩阵网体结构，自动滑落机制帮助广大玩家快速填充，快速到达收益层；\n\
• 全网随机投放，帮助玩家获得更多收益机会；",
			gameRule: "游 戏 规 则",
			joinNow: "立即参与",
			contractAddress: "合约地址",
			feature: [{
					title: "去中心化 零风险",
					txt: "链上永续存在，任何人无法篡改的智能合约。不存在任何风险,100%资金流转，无任何隐藏费用，平台0资金沉淀。",
				},
				{
					title: "即时交易，资金100%在线",
					txt: "不发币，无资金池，平台不抽佣，资金100%分配，合约余额始终为零。",
				},
				{
					title: "透明度和匿名性",
					txt: "无需注册，100%匿名，用户可在浏览器上查看全部交易记录保证交易透明。",
				},
				{
					title: "分权化，所有人机会均等",
					txt: "没有管理者、项目方，即使是合约创造者也与所有人一样，没有特权。",
				},
			],
		},
		faq: {
			title: "常见问题",
			list: [{
					ask: "TAURUS是什么？",
					answer: "TAURUS是一个完全去中心化的自动执行的智能合约算法。节点激活或升级帐号投入一定数量的TRX，TAURUS对投入的TRX进行自动分配，在一定条件下，使节点的收益获得数十倍，数百倍的增长。在这个过程中，TAURUS不会抽取任何佣金，也不存在任何的TRX的损耗，因此，TAURUS是一个零风险的平台。",
				},
				{
					ask: "如何参与TAURUS？",
					answer: "参与TAURUS的方法非常简单，你只需拥有一个支持TRON链的加密钱包，在你的钱包地址上拥有10000枚以上的TRX币（你可能需要额外存入一些Gas燃料费，这是一笔非常小的数额），然后在你的钱包浏览器里输入TAURUS的访问地址（https://TAURUS.io），即可以进入TAURUS参与游戏。",
				},
				{
					ask: "TAURUS支持哪些加密钱包？",
					answer: "所有支持TRON Chain的加密钱包都可以访问TAURUS，通常我们建议使用TronLink、imToken、TokenPocket等被更多人使用的加密钱包。",
				},
				{
					ask: "我在TAURUS可以获得哪些收益？",
					answer: "TAURUS玩家有三种收益：\n\
A. 邀请收益Invite Profits（IP）：玩家发送自身邀请链接，邀请其他玩家加入，获得激活帐号和升级帐号投入TRX的20%；\n\
B. 网体收益Net Profits（NP）：玩家获得自身网体下面第五层玩家激活帐号以及升级帐号所支付的TRX的80%；\n\
C. 全网随机无差别收益Random Undifferentiated Profits（RP）：当某些条件被触发时，TAURUS将进行全网随机节点选择。当选择到有效节点时，相对应的网体收益（NP）将转帐给该随机节点向上数第5层对应的节点。全网随机无差别收益（RP）对所有节点机会均等，每个节点都有相同概率获得RP收益。",
				},
				{
					ask: "TAURUS的收益有封顶限制吗？",
					answer: "TAURUS的三种收益中，邀请收益（IP）、全网随机无差别收益（RP）是没有任何限制的，上不封顶。网体收益（NP）受到激活帐户和升级帐户相应倍数的限制。当达到相应倍数的极限值后，多余的收益将进行全网随机无差别投放，随机分配给其它节点。",
				},
				{
					ask: "什么情况下会进行全网无差别投放？",
					answer: "当以下三种情况发生时，TAURUS将进行全网随机无差别投放：\n\
A. 当某节点网体收益（NP）超过倍数限制时，则超出的网体收益（NP）将触发全网随机无差别投放，形成全网随机无差别收益（RP）；\n\
B. 当新玩家激活节点时，按顺序每第100个节点，其网体收益进行全网随机无差别投放；\n\
C. 当邀请人为 1 号节点或没有邀请人的节点被激活时，新节点支付的网体收益将进行全网随机无差别投放；",
				},
				{
					ask: "TAURUS节点激活与升级的规则是怎样的？",
					answer: "激活节点需要支付10000TRX，获得50倍收益权。如果想获得更高收益倍数，可升级节点。升级节点的规则如下：\n\
升级到100倍收益权：支付20000TRX，获得100倍收益权；\n\
升级到150倍收益权：支付30000TRX，获得150倍收益权；\n\
升级到200倍收益权：支付10000TRX，获得200倍收益权；\n\
激活节点、升级到100倍收益权、升级到150倍收益权所支付的TRX，20%自动转帐给邀请人，80%自动转帐给该节点向上数第5-7层节点；\n\
升级到100倍时，80%的TRX由上数第5、6层节点均分；\n\
升级到150倍时，80%的TRX由上数第5、6、7层节点均分；\n\
升级到200倍收益权所支付的TRX，20%自动转帐给邀请人，80%自动转帐给一个系统随机寻找到的节点；",
				},
				{
					ask: "我如何邀请我的好友加入游戏？",
					answer: "当你激活你的帐号时，你会得到一个邀请ID和一个含有你邀请ID的访问链接地址，如https://TAURUS.io/?ID=XXXX，把这个邀请链接发给你的好友，帮助他用加密钱包浏览器访问到属于你的TAURUS，并让他激活他的帐号，你就成功邀请了一位好友加入游戏。",
				},
				{
					ask: "我邀请的好友有人数限制吗？",
					answer: "虽然你在TAURUS界面上看到你的下面一层只有3个位置，但实际上，你可以无限制地邀请你的好友加入，他们会自动地按一定规则排到你网体下面的某个位置，而你获得的邀请收益是没有最大额限制的。",
				},
				{
					ask: "当我下面第5层已经满员时，TAURUS如何安置我邀请的好友？",
					answer: "首先恭喜你已经获得了超过200倍以上的收益。当你节点下面第5层已经满员时，TAURUS会按规则继续向你的网体下面排放好友，这不影响你获得邀请好友的收益，但你当前的节点将无法继续获得网体收益（NP）。基于这个原因，我们建议你在当前节点下一层的最左侧也安排为自己的节点，甚至，这个节点下一层的最左侧也是你自己的节点。这样，你就可以继续获得更多的网体收益。这样的组合，将使你获得无限的可观收益。",
				},
				{
					ask: "TAURUS的管理者和创造者是谁？",
					answer: "TAURUS是由一群对智能合约有共同爱好的开发者联合创造的，它不归属于某一位人或组织，它是一组智能合约程序代码，一经发布，没有任何人或组织能改变游戏规则或停止游戏，TAURUS将永远地运行。整个社区就是它的管理者，社区会员以共识的方式共同维护TAURUS的运行。",
				},
				{
					ask: "在哪里可以获得有关TAURUS的更多信息？",
					answer: "你可以在TAURUS官方网页的底部看到TAURUS的Telegram、Twitter链接，也可以发邮件给TAURUS的运营社区，总之，TAURUS提供了丰富的沟通方式与社区会员进行交流。",
				},
			],

		},
		main: {
			youID: "你已激活帐号，你的ID",
			noActive: "你的帐号暂未激活",
			activeNow: "立即激活",
			update: [
				"升级到 100 倍",
				"升级到 150 倍",
				"升级到 200 倍",
				"不可再升级"
			],
			needPay: "你需支付",
			times: "倍",
			totalIncome: "总收入",
			earn: "你已经赚取",
			which: "其中",
			inviteIncome: "邀请收益（IP）",
			netIncome: "网体收益（NP）",
			limit: "当前上限",
			randomIncome: "全网随机收益（RP）",
			treeType: ["", "我的邀请", "他人邀请", "随机滑落"],
			limit_tip:"网体收益(NP)上限为10000TRX的倍数",

		},
		member: {
			inviteLink: "我的邀请链接",
			address: "钱包地址",
			parentID: "我的邀请人ID",
			topID: "上级ID",
			myInvite: "我的邀请",
			myTeam: "我的团队",
			myID: "我的ID",
			invitationList: "我的邀请列表",
			memberInfo: "我的信息",
		},
		data: {
			title: "全网数据统计",
			totalMembers: "全网总账户",
			todayMembers: "今日新增账户",
			totalIncome: "全网总额",
			totalRandom: "全网随机",
			todayRandom: "今日随机",
			totalSlide: "全网滑落",
			todaySlide: "今日滑落",
			levelTitle: "各倍数会员量",
			income: "获得收益(TRX)",

			moreData: "查看更多数据统计",
			members: "会员",
			amount: "金额",
			times: "次数",

		},
		history: {
			record: "收益记录",
			total: "共",
			strip: "条",
			time: "日期",
			type: "类型",
			quota: "超额",
			incomeType: ["邀请收益(IP)", "网体收益(NP)", "全网随机收益(RP)"]
		},
		rule: {
			title: "Taurus规则说明",
			table:{
				update:"激活和升级",
				invest:"投入（TRX）",
				limit:"网体收益上限（TRX）",
				up5:"向上第5代",
				up6:"向上第6代",
				up7:"向上第7代",
				multiple:[
					"激活50倍",
					"升级100倍",
					"升级150倍",
					"升级200倍",
				],
				random:"全网随机投放8,000TRX",
			},
			txt1: "1、Taurus是基于TRON区块链运行的智能合约程序，无需注册，激活帐号即可参与。所有金额即时分配到玩家钱包地址，平台无任何手续费、佣金收取。\n\
2、X3矩阵网体结构，遵循自由滑落规则（自上而下、从左到右），玩家可以借助网体推广的力量，快速到达收益层。\n\
3、无邀请人的玩家激活节点时，该节点将滑落到全网随机一个节点下的自由滑落位置，帮助其它玩家快速填充。",
           txt2:"4、玩家投入10000TRX激活节点，即可获得丰厚回报，包括邀请收益（IP）、网体收益（NP）、全网随机收益（RP）。其中网体收益激活时获得50倍收益权，后续通过升级节点，可提升到100倍、150倍、200倍网体收益权。邀请收益与全网随机收益无上限。",
		   txt3:"5、邀请收益（IP）\n\
玩家邀请其他玩家加入，获得新玩家激活和升级所投TRX的20%。\n\
6、网体收益（NP）\n\
玩家激活和升级支付的费用的80%按如下规则奖励网体：",
          txt4:"7、	全网随机收益（RP）\n\
当满足如下条件之一时，系统面向全网任何节点平等、随机投放：\n\
(1) 玩家账户网体收益达到上限时，超额的网体奖励进行全网随机投放；\n\
(2) 玩家编号为100的整数倍时，激活产生的网体奖励全网随机投放；\n\
(3) 邀请人为1号账户时，激活产生的网体奖励全网随机投放；"
           
		}, //rule

	}, //cn
	en: {
		com: {
			title: "Taurus",
			copy: "Copy",
			copySuccess: "Copy Complete",
			balance: "Balance",
			details: "Details",
			tip: "Tips",
			home: "Home",
			main: "Main Panel",
			invite: "Invite",
			rule: "Game Rules",
		},
		index: {
			title: "The Fairest And Most Effective Wealth Game In History",
			intro: "• Taurus is a small smart contract game based on tronchain. If 10000 TRX is invested, the account can be activated, and various benefits such as invitation, network body, and network wide random are obtained.\n\
• X3, fast access to the player's network structure, and help players to quickly fill in the network structure.\n\
• The whole network is randomly launched to help players get more revenue opportunities.",
			gameRule: "Game Rules",
			joinNow: "Join Now",
			contractAddress: "Contract Address",
			feature: [{
					title: "DECENTRASLIZATION , ZERO RISK",
					txt: "The smart contract that exists forever on the chain and can not be tampered with by anyone. There is no risk, 100% capital flow, no hidden costs, platform 0 fund precipitation.",
				},
				{
					title: "REALTIME TRADING, 100% CAPITAL ONLINE",
					txt: "No token is issued, no capital pool is available, no commission is drawn from the platform, 100% capital is allocated, and the contract balance is always zero.",
				},
				{
					title: "TRANSPARENCY AND ANONYMITY",
					txt: "No registration, 100% anonymity, users can view all transaction records on the browser to ensure transaction transparency.",
				},
				{
					title: "DECENTRALIZATION AND EQUAL OPPORTUNITIES FOR ALL",
					txt: "There are no managers, no project parties, and even contract creators have the same privileges as everyone else.",
				},
			],
		},
		faq: {
			title: "FAQ",
			list: [{
					ask: "What is TAURUS?",
					answer: "TAURUS is a fully decentralized and automatically executed smart contract algorithm. When a node activates or upgrades an account and invests a certain amount of TRX, TAURUS automatically allocates the TRX invested. Under certain conditions, the profit of the node can be increased by tens and hundreds of times. In this process, TAURUS will not take any commission and there will be no loss of TRX. Therefore, TAURUS is a zero risk platform.",
				},
				{
					ask: "How to participate in TAURUS?",
					answer: "The way to participate in TAURUS is very simple. You just need to have an encrypted wallet that supports the Tron chain, have more than 10000 TRX coins on your wallet address (you may need to deposit some gas fuel charges, which is a very small amount), and then enter the access address of TAURUS in your wallet browser（ https://TAURUS.io ）, that is, you can enter TAURUS to participate in the game.",
				},
				{
					ask: "What encrypted wallets does TAURUS support?",
					answer: "All encrypted wallets supporting Tron Chain can access TAURUS. Generally, we recommend using encrypted wallets such as TronLink, imToken and TokenPocket that are used by more people.",
				},
				{
					ask: "What benefits can players get from TAURUS?",
					answer: "There are three types of TAURUS player Revenue: \n\
A. Invite Profits (IP): players send their own invitation links to invite other players to join, and get 20% of the TRX invested in the activated account and upgraded account; \n\
B. Net Profits (NP): players get 80% of the TRX paid by players to activate their accounts and upgrade their accounts under the fifth layer of the net body; \n\
C. Random undifferentiated Profits (RP): When some conditions are triggered, TAURUS will select random nodes in the whole network. When an effective node is selected, the corresponding net income (NP) will be transferred to the node corresponding to the fifth layer of the random node. The random undifferentiated profits (RP) of the whole network has equal opportunities for all nodes, and each node has the same probability to obtain RP benefits.",
				},
				{
					ask: "Is there a cap on TAURUS' earnings?",
					answer: "Among the three kinds of profits of TAURUS, invite profits (IP) and random undifferentiated Profits (RP) of the whole network are unrestricted and have no ceiling. Net profits (NP) is limited by the corresponding multiple of activated account and upgrade account. When the limit value of the corresponding multiple is reached, the surplus revenue will be randomly distributed to other nodes.",
				},
				{
					ask: "Under what circumstances will launch the random and undifferentiated allocation in the whole network?",
					answer: "When one of the following three scenarios occurs, TAURUS will launch the random undifferentiated allocation in the whole network: \n\
A. When the net profits (NP) of A node exceeds the multiple limit, the exceeded net profits (NP) will launch the random undifferentiated allocation in the whole network to form the random undifferentiated profits (RP) of the whole network; \n\
B. When new players activate nodes, the net profits of each 100th node will launch the random undifferentiated allocation in the whole network; \n\
C. When the inviter is activated for node No. 1 or the node without inviter, the net profits by the new node will  launch the random undifferentiated allocation in the whole network;",
				},
				{
					ask: "What are the rules of TAURUS node activation and upgrade?",
					answer: "The activation node needs to pay 10000 TRX to obtain 50x of the revenue right. If you want to get a higher profit multiple, you can upgrade the node. The rules for upgrading nodes are as follows:\n\
Upgrade to 100x revenue right: pay 20000TRX and get 100x revenue right; \n\
Upgrade to 150x revenue right: pay 30000TRX and get 150x revenue right; \n\
Upgrade to 200X revenue right: pay 10000TRX and get 200X revenue right; \n\
20% of TRX paid by activating node, upgrading to 100x revenue right and upgrading to 150x revenue right will be automatically transferred to the inviting person, and 80% will be automatically transferred to the node up to the 5th-7th layer;\n\
When upgrading to 100x revenue right, 80% of the TRX will be divided equally by the notes up to the 5th and 6th layer;\n\
When upgrading to 150x revenue right, 80% of the TRX will be divided equally by the notes up to the 5th, 6th, and 7th layer; \n\
When the node is upgraded to 200x revenue right, 20% of the TRX will be automatically transferred to the inviting person, and 80% will be automatically transferred to a node randomly found by the system.",
				},
				{
					ask: "How do I invite my friends to join the game?",
					answer: "When you activate your account, you will get an invitation ID and a link address containing your invitation ID, such as https://TAURUS.io/?ID=XXXX. Send the invitation link to your friend, help him access your TAURUS with the encrypted wallet browser, and let him activate his account. You have successfully invited a friend to join the game.",
				},
				{
					ask: "Is there a limit to the number of friends I can invite?",
					answer: "Although you can see that there are only three nodes under your node on the TAURUS interface, in fact, you can invite your friends to join, and they will automatically arrange to a certain position under your network according to certain rules, and there is no maximum limit on the invitation income you get.",
				},
				{
					ask: "How does TAURUS place my invited friends when I'm full on the fifth layer below?",
					answer: "First of all, congratulations on your income more than 200 times. When the fifth layer under your node is full, TAURUS will continue to arrange friends under your network body according to the rules, which does not affect you to obtain the income of inviting friends, but your current node will not be able to continue to obtain the net profits (NP). For this reason, we suggest that you arrange your own node on the left side of the next layer of the current node. Even, the left side of the next layer of the current node is also your own node. In this way, you can continue to get more net profits. This combination will make you get unlimited considerable benefits.",
				},
				{
					ask: "Who is the manager and creator of TAURUS?",
					answer: "TAURUS is created by a group of developers who have a common interest in smart contracts. It does not belong to any one person or organization. It is a group of smart contract program code. Once released, no one or organization can change the rules of the game or stop the game. TAURUS will run forever. The whole community is its manager, and its members maintain the operation of TAURUS by consensus.",
				},
				{
					ask: "Where can I get more information about TAURUS?",
					answer: "You can see the Telegram and Twitter links of TAURUS at the bottom of the official website of TAURUS, and you can also send email to the operating community of TAURUS. In short, TAURUS provides a wealth of communication methods to communicate with community members.",
				},
			],

		},
		main: {
			youID: "You have activated, your ID",
			noActive: "Your  has not been activated yet",
			activeNow: "Activate Now",
			update: [
				"Upgrade to 100X",
				"Upgrade to 150X",
				"Upgrade to 200X",
				"No further upgrade"
			],
			needPay: "You need to pay",
			times: "X",
			totalIncome: "Total Income",
			earn: "You've Earned",
			which: "Of Which",
			inviteIncome: "The Invite Profits (IP)",
			netIncome: "The Net Profits(NP)",
			limit: "The Upper Limit",
			randomIncome: "The Random  Profits(RP)",
			treeType: ["", "My Invite", "Invited By Others", "Random slided"],
			limit_tip:"Net Profits (NP) is limited to multiple of 10000TRX",

		},
		member: {
			inviteLink: "Your Invitation Link",
			address: "Wallet Address",
			parentID: "Your Inviter's ID",
			topID: "Upper Layer ID",
			myInvite: "My Invitation",
			myTeam: "My Team",
			myID: "My ID",
			invitationList: "Invitation List",
			memberInfo: "Member information",
		},
		data: {
			title: "Data Statistics",
			totalMembers: "Total Account",
			todayMembers: "New Account Today",
			totalIncome: "Total Amount",
			totalRandom: "Number Of Random Accounts",
			todayRandom: "Number Of Random Accounts Today",
			totalSlide: "Number Of Accounts Auto Slided",
			todaySlide: "Number Of Accounts Auto Slided Today",
			levelTitle: "Number Of Members In Each Multiple",
			income: "Gain (TRX)",

			moreData: "View More Statistics",
			members: "Members",
			amount: "Amount",
			times: "Times",

		},
		history: {
			record: "Revenue Records",
			total: "Total",
			strip: "Items",
			time: "Date",
			type: "Type",
			quota: "Over",
			incomeType: ["Invite Profits (IP)", "Net Profits (NP)", "Random Profits (RP)"]
		},
		rule: {
					title: "Description Of TAURUS Rules",
					table:{
						update:"Activation and upgrade",
						invest:"investment（TRX）",
						limit:"Upper limit of net income（TRX）",
						up5:"Up to the 5th generation",
						up6:"Up to the 6th generation",
						up7:"Up to the 7th generation",
						multiple:[
							"Activate 50 times",
							"Upgrade 100 times",
							"Upgrade 150 times",
							"Upgrade 200 times",
						],
						random:"Random delivery of the whole network 8,000TRX",
					},
					txt1: "1. Taurus is a smart contract program based on Tron blockchain, which can participate without registration and activation of account. All amounts are immediately allocated to the player's wallet address, and there is no service charge or commission charged on the platform. \n\
2. X3 matrix network structure, following the free sliding rules (from top to bottom, from left to right), players can use the power of network promotion to quickly reach the revenue layer. \n\
3. When a player without an invitee activates the node, the node will slide to the free sliding position undera random node in the whole network, which helps other players to fill in quickly.",
		           txt2:"4. Players who invest 10000 TRX to activate nodes can get rich returns, including IP, NP and RP. Among them, when the network body income is activated, it can be increased to 100 times, 150 times and 200 times by upgrading nodes. There is no upper limit for invitation revenue and random income of the whole network.",
				   txt3:"5. Invitation benefits (IP)\n\
Players invite other players to join and get 20% of the TRX that new players activate and upgrade. \n\
6. Net income (NP)\n\
80% of the cost of activation and upgrade is awarded to the net according to the following rules:",
		          txt4:"7. Network wide random return (RP)\n\
When one of the following conditions is met, the system is equal and random for any node in the whole network:\n\
(1) When the net income of player's account reaches the upper limit, the excessive net body reward will be randomly put into the whole network\n\
(2) When the player number is an integer multiple of 100, the net body reward generated will be launched randomly in the whole network\n\
(3) When the inviting person is No.1 account, the net body reward generated will be randomly put into the whole network;"
		           
		} //rule
		
	}, //en
	ru: {
		com: {
			title: "Taurus",
			copy: "копировать",
			copySuccess: "Копирование завершено",
			balance: "сальдо счета",
			details: "подробности",
			tip: "подсказка",
			home: "Первая страница",
			main: "Основная панель",
			invite: "приглашать",
			rule: "правила игры",
		},
		index: {
			title: "самая справедливая и эффективная игра богатства в истории",
			intro: "• TaURUS представляет собой небольшую игру по интеллектуальному договору, основанную на TRONChain и включающую в себя 100 00TRX, которая может активировать учётную запись, собрать приглашения, сетевые тела, случайные и другие выгоды. \n\
 • структура матричной сети X3, механизм автоматического скольжения помогает игрокам быстро заполнять и быстро получать доход. \n\
 • случайный сброс всей сети, чтобы помочь игрокам получить больше возможностей для получения дохода. ",
			gameRule: "правила игры",
			joinNow: "присоединение",
			contractAddress: "адрес контракта",
			feature: [{
					title: "рассеяние риска",
					txt: "интеллектуальный договор всегда существует в цепи, и никто не может его изменить.Никаких рисков, 100% потоков капитала, никаких скрытых расходов, платформа 0 финансовых осадок.",
				},
				{
					title: "операции в реальном времени, 100% акций онлайн",
					txt: "без эмиссии комиссионных, без предоставления денежного пула, без взимания комиссионных с платформы, 100% распределения капитала, контракт остается нулевым.",
				},
				{
					title: "транспарентность и анонимность",
					txt: "без регистрации, 100% анонимно, пользователь может просмотреть все записи в браузере, чтобы обеспечить прозрачность работы.",
				},
				{
					title: "Децентрализация и равенство возможностей для всех",
					txt: "Здесь нет ни менеджера, ни участников проекта, ни даже создателей контракта, которые имеют те же привилегии, что и другие.",
				},
			],
		},
		faq: {
			title: "ответ на вопрос",
			list: [{
					ask: "Что такое TAURUS?",
					answer: "TAURUS - это полностью децентрализованный и автоматически исполняемый алгоритм смарт-контрактов. Когда узел активирует или обновляет учетную запись и инвестирует определенную сумму TRX, TAURUS автоматически выделяет инвестированные TRX. При определенных условиях прибыль узла может быть увеличена в десятки и сотни раз. В этом процессе TAURUS не будет брать комиссию, и TRX не будет потерян. Следовательно, TAURUS - платформа с нулевым риском.",
				},
				{
					ask: "Как насчет участия в TAURUS?",
					answer: "Способ участвовать в Тельце очень прост. Вам просто нужно иметь зашифрованный кошелек, поддерживающий цепочку Tron, иметь более 10000 монет TRX на адресе вашего кошелька (вам может потребоваться внести некоторые сборы за газовое топливо, что является очень небольшой суммой), а затем ввести адрес доступа TAURUS в браузере вашего кошелька (https://TAURUS.io), то есть вы можете ввести TAURUS, чтобы участвовать в игре.",
				},
				{
					ask: "Какие зашифрованные кошельки поддерживает TAURUS?",
					answer: "Все зашифрованные кошельки, поддерживающие Tron Chain, могут получить доступ к TAURUS. Как правило, мы рекомендуем использовать зашифрованные кошельки, такие как TronLink, imToken и TokenPocket, которые используются большим количеством людей.",
				},
				{
					ask: "Какие преимущества игроки могут получить от TAURUS?",
					answer: "Есть три типа дохода игрока-TAURUS: \n\
A. Прибыль от приглашения (IP): игроки отправляют свои собственные пригласительные ссылки, чтобы пригласить других игроков присоединиться и получить 20% TRX, вложенных в активированную учетную запись и обновленную учетную запись;\п\
B. Чистая прибыль (NP): игроки получают 80% TRX, выплачиваемого игроками за активацию своих учетных записей и обновление своих учетных записей под пятым уровнем сети;\п\
C. Случайная недифференцированная прибыль (RP): при срабатывании некоторых условий TAURUS выберет случайные узлы во всей сети. Когда выбран эффективный узел, соответствующий чистый доход (NP) будет переведен на узел, соответствующий пятому уровню случайного узла. Случайная недифференцированная прибыль (RP) всей сети имеет равные возможности для всех узлов, и каждый узел имеет одинаковую вероятность получить преимущества RP.",
				},
				{
					ask: "Есть ли ограничение на заработок TAURUS?",
					answer: "Среди трех видов прибыли TAURUS прибыль от приглашений (IP) и случайная недифференцированная прибыль (RP) всей сети не ограничены и не имеют потолка. Чистая прибыль (NP) ограничена соответствующим кратным количеством активированной учетной записи и обновления учетной записи. Когда будет достигнуто предельное значение соответствующего мультипликатора, избыточный доход будет случайным образом распределен между другими узлами.",
				},
				{
					ask: "При каких обстоятельствах запускается случайное и недифференцированное распределение во всей сети?",
					answer: "Когда происходит один из следующих трех сценариев, TAURUS запускает случайное недифференцированное распределение во всей сети: \n\
A. Когда чистая прибыль (NP) узла A превышает многократный предел, превышенная чистая прибыль (NP) запускает случайное недифференцированное распределение во всей сети для формирования случайной недифференцированной прибыли (RP) всей сети;\п\
B. Когда новые игроки активируют узлы, чистая прибыль каждого сотого узла запускает случайное недифференцированное распределение во всей сети;\п\
C. Когда приглашающий активируется для узла № 1 или узла без приглашающего, чистая прибыль нового узла запускает случайное недифференцированное распределение во всей сети;",
				},
				{
					ask: "Каковы правила активации и обновления узла TAURUS?",
					answer: "Узел активации должен заплатить 10000 TRX, чтобы получить право на 50-кратный доход. Если вы хотите получить более высокую прибыль, вы можете обновить узел. Правила обновления узлов следующие: \n\
Право на повышение до 100-кратного дохода: заплатите 20000TRX и получите 100-кратный доход правильно; \n\
Право на повышение до 150-кратного дохода: заплатите 30000TRX и получите 150-кратный доход правильно; \n\
Право на повышение дохода до 200X: заплатите 10000TRX и получите право 200X дохода;\n\
20% TRX, уплаченного при активации узла, обновлении права до 100-кратного дохода и повышения права до 150-кратного дохода, будут автоматически переданы приглашающему лицу, а 80% будут автоматически переведены на узел до 5-7 уровня;\n\
При обновлении до 100-кратного дохода 80% TRX будет поровну разделено на примечания до 5-го и 6-го уровня;\n\
При обновлении до 150-кратного дохода 80% TRX будет разделено поровну на примечания до 5-го, 6-го и 7-го уровня; \n\
Когда узел будет повышен до 200-кратного дохода, 20% TRX будет автоматически передано приглашающему лицу, а 80% будет автоматически переведено на узел, случайно найденный системой.",
				},
				{
					ask: "Как мне пригласить друзей присоединиться к игре?",
					answer: "Когда вы активируете свою учетную запись, вы получите идентификатор приглашения и адрес ссылки, содержащий ваш идентификатор приглашения, например https://TAURUS.io/?ID=XXXX. Отправьте ссылку-приглашение своему другу, помогите ему получить доступ к вашему TAURUS с помощью зашифрованного браузера кошелька и позвольте ему активировать свою учетную запись. Вы успешно пригласили друга присоединиться к игре.",
				},
				{
					ask: "Есть ли ограничение на количество друзей, которых я могу пригласить?",
					answer: "Хотя вы можете видеть, что есть только три узла под вашим узлом в интерфейсе TAURUS, на самом деле вы можете пригласить своих друзей присоединиться, и они автоматически займут определенное место в вашей сети в соответствии с определенными правилами, и нет максимальный лимит дохода по приглашению, который вы получаете.",
				},
				{
					ask: "Как TAURUS размещает моих приглашенных друзей, когда я нахожусь на пятом уровне ниже?",
					answer: "Прежде всего, поздравляем с доходом более 200 раз. Когда пятый слой под вашим узлом будет заполнен, TAURUS продолжит размещать друзей под вашим сетевым телом в соответствии с правилами, что не повлияет на вас для получения дохода от приглашения друзей, но ваш текущий узел не сможет продолжать получать чистая прибыль (NP). По этой причине мы предлагаем вам расположить свой собственный узел слева от следующего слоя текущего узла. Даже левая сторона следующего слоя текущего узла также является вашим собственным узлом. Таким образом, вы можете продолжать получать больше чистой прибыли. Эта комбинация позволит вам получить неограниченные значительные преимущества.",
				},
				{
					ask: "Кто менеджер и создатель TAURUS?",
					answer: "TAURUS создан группой разработчиков, которые имеют общий интерес к смарт-контрактам. Он не принадлежит ни одному человеку или организации. Это группа программного кода смарт-контракта. После выпуска никто или организация не может изменить правила игры или остановить игру. TAURUS будет бежать вечно. Все сообщество является его менеджером, и его члены поддерживают работу TAURUS на основе консенсуса.",
				},
				{
					ask: "де я могу получить дополнительную информацию о TAURUS?",
					answer: "Вы можете увидеть ссылки Telegram и Twitter на TAURUS внизу официального сайта TAURUS, а также можете отправить электронное письмо рабочему сообществу TAURUS. Короче говоря, TAURUS предоставляет множество способов общения с членами сообщества.",
				},
			],

		},
		main: {
			youID: "Вы активировали свой аккаунт, свой пригласительный ID",
			noActive: "Ваш аккаунт еще не был активирован",
			activeNow: "Активировать теперь",
			update: [
				"Обновить до 100X",
				"Обновить до 150X",
				"Обновить до 200X",
				"Никаких дальнейших обновлений"
			],
			needPay: "Требуется активация",
			times: "X",
			totalIncome: "общий доход",
			earn: "Вы заработали",
			which: "Из которых",
			inviteIncome: "Прибыль от приглашения (IP)",
			netIncome: "Чистая прибыль (NP)",
			limit: "Верхний предел",
			randomIncome: "Случайная  прибыль (RP))",
			treeType: ["", "мое приглашение", "Другие приглашения", "Случайный слайд"],
			limit_tip:"максимальный размер дохода сетевого тела (NP) 100 00TRX",

		},
		member: {
			inviteLink: "Ваша пригласительная ссылка",
			address: "Адрес кошелька",
			parentID: "ID вашего приглашающего",
			topID: "ID верхнего слоя",
			myInvite: "Мое приглашение",
			myTeam: "Моя команда",
			myID: "Мой ID",
			invitationList: "Список",
			memberInfo: "сведения о членском составе",
		},
		data: {
			title: "Статистика данных",
			totalMembers: "Итого счет",
			todayMembers: "Новая учетная запись сегодня",
			totalIncome: "Общее количество",
			totalRandom: "Количество случайных счетов",
			todayRandom: "Количество случайных аккаунтов сегодня",
			totalSlide: "Количество счетов автоматически сдвигается",
			todaySlide: "Количество счетов, автоматически сдвинутое сегодня",
			levelTitle: "Количество членов в каждом кратном",
			income: "Прирост (TRX)",
			moreData: "Посмотреть больше статистики",
			members: "Члены",
			amount: "Количество",
			times: "Раз",

		},
		history: {
			record: "Отчеты о доходах",
			total: "Всего",
			strip: "Предметы",
			time: "Дата",
			type: "Тип",
			quota: "Над",
			incomeType: ["Приглашение прибыли (IP)", "Чистая прибыль (NP)", "Случайная недифференцированная прибыль (RP)"]
		},
		rule: {
					title: "Описание правил TAURUS",
					table:{
						update:"активировать и обновить",
						invest:"затраты（TRX）",
						limit:"верхний предел дохода сетчатого тела（TRX）",
						up5:"5 - е поколение вверх",
						up6:"6 - е поколение вверх",
						up7:"7 - е поколение вверх",
						multiple:[
							"Активировать в 50 раз",
							"эскалация в 100 раз",
							"эскалация в 150 раз",
							"эскалация в 200 раз",
						],
						random:"стохастический сброс 8,000TRX",
					},
					txt1: "1.Taurus представляет собой интеллектуальную контрактную программу, основанную на цепочке блоков TRON, в которой без регистрации может быть задействована активация счета.  Все суммы сразу распределены по адресу кошелька игрока, платформа без комиссионных и сборов.\n\
2, X3 матричная сеть структура тела, в соответствии с правилами свободного скольжения (сверху вниз, слева направо), игрок может с помощью сетевых тело для распространения силы, быстро добраться до слоя доходов.\n\
3, игрок без приглашения активирует узел, который будет скользить по всей сети случайным узлом, чтобы помочь другим игрокам быстро заполнить. ",
		           txt2:"4, игрок вложил 10000TRX активации узла, чтобы получить высокую прибыль, включая приглашение (IP), сетевые доходы (NP) и интернет - случайные выгоды (RP).  при активации сетчатого тела при 50 - кратном праве на доход, а затем путем модернизации узлов, может быть увеличен в 100, 150 и 200 раз.  приглашение не ограничено случайными поступлениями по всей сети. ",
				   txt3:"5, приглашение (IP) \n\
 игрок приглашает к себе других игроков, получает новые игроки, активированные и модернизированные на 20%.  \n\
 6, доход сетки (NP) \n\
игрок активирует и обновит 80% платы за подключение к сети по следующим правилам: ",
		          txt4:"7, вся сеть случайно (RP) \n\
 при выполнении следующих условий система ориентирована на все узлы сети одинаково и произвольно: \n\
(1) в случае превышения потолка доходов от сети игроков, избыток сетевого стимула для произвольного сброса по всей сети; \n\
(2) игрок со 100 - кратным целым числом, активируя создание сетчатки награждать сеть за случайный сброс; \n\
(3) предложить владельцу счета 1, чтобы он активировал генерируемые сетевые стимулы для их случайного размещения в сети; "
		           
				} //rule

	}, //ru

	jp: {
		com: {
			title: "Taurus",
			copy: "コピー",
			copySuccess: "コピー完了",
			balance: "勘定残高",
			details: "詳細",
			tip: "チップ",
			home: "ホーム",
			main: "メインパネル",
			invite: "招待",
			rule: "ゲームのルール",
		},
		index: {
			title: "歴史上最も公正で最も効果的な富のゲーム",
			intro: "• TAURUSはTRONSChainに基づくスマート契約ミニゲームで、1000 TRXを投入すれば、アカウントがアクティブになります。招待、ネット、全ネットランダムなどの様々な収益が得られます；\n\
• X3マトリックスネットワーク構造、自動滑り機構は、多くのプレイヤーが素早く充填し、収益層に迅速に到達するように助けます；\n\
• 全ネットでランダムに投入して、プレイヤーがより多くの収益機会を獲得するように助けます；",
			gameRule: "ゲームのルール",
			joinNow: "今すぐ参加",
			contractAddress: "契約住所",
			feature: [{
					title: "地方分権化、ゼロリスク",
					txt: "チェーン上に永遠に存在し、誰も改ざんできないスマートコントラクト。 リスク、100％の資本フロー、隠れたコスト、プラットフォーム0の資金の流出はありません。",
				},
				{
					title: "リアルタイム取引、100％資本オンライン",
					txt: "トークンは発行されず、資本プールは利用できず、プラットフォームからコミッションは引き出されず、100％の資本が割り当てられ、契約残高は常にゼロです。",
				},
				{
					title: "透明性と匿名性",
					txt: "登録なし、100％匿名、ユーザーはブラウザですべてのトランザクションレコードを表示して、トランザクションの透明性を確保できます。",
				},
				{
					title: "すべての人のための地方分権化と機会均等",
					txt: "管理者もプロジェクト関係者もいませんし、契約作成者でさえ他の人と同じ特権を持っています。",
				},
			],
		},
		faq: {
			title: "よくある質問",
			list: [{
					ask: "TAURUSとは何ですか？",
					answer: "TAURUSは、完全に分散化され、自動的に実行されるスマートコントラクトアルゴリズムです。 ノードがアカウントをアクティブ化またはアップグレードし、一定量のTRXを投資すると、TAURUSは投資されたTRXを自動的に割り当てます。 特定の条件下では、ノードの利益は数十倍から数百倍に増加する可能性があります。 このプロセスでは、TAURUSは手数料を取りませんし、TRXの損失もありません。 したがって、TAURUSはリスクゼロのプラットフォームです。",
				},
				{
					ask: "TAURUSに参加するには？",
					answer: "TAURUSに参加する方法はとても簡単です。 Tronチェーンをサポートする暗号化されたウォレットが必要で、ウォレットアドレスに10000を超えるTRXコインがあり（非常に少量のガス燃料料金をデポジットする必要がある場合があります）、次のアクセスアドレスを入力します。 ウォレットブラウザ（https://TAURUS.io）のTAURUS、つまり、TAURUSを入力してゲームに参加できます。",
				},
				{
					ask: "TAURUSはどの暗号化ウォレットをサポートしていますか？",
					answer: "TronChainをサポートするすべての暗号化されたウォレットはTAURUSにアクセスできます。 一般的に、より多くの人が使用するTronLink、imToken、TokenPocketなどの暗号化されたウォレットを使用することをお勧めします。",
				},
				{
					ask: "TAURUSからプレイヤーはどのようなメリットを得ることができますか？",
					answer: "TAURUSプレーヤーの収益には3つのタイプがあります：\n\
A. Invite Profits（IP）：プレーヤーは、他のプレーヤーを招待するために独自の招待リンクを送信し、アクティブ化されたアカウントとアップグレードされたアカウントにTRXの20％を投資します。 \n\
B.Net Profits（NP）：プレーヤーは、アカウントをアクティブ化し、ネット本体の第5層の下でアカウントをアップグレードするために、プレーヤーによって支払われるTRXの80％を受け取ります。 \n\
C.Random undifferentiated Profits（RP）：いくつかの条件がトリガーされると、TAURUSはネットワーク全体でランダムなノードを選択します。 有効なノードが選択されると、対応する純利益（NP）は、ランダムノードの第5層に対応するノードに転送されます。 ネットワーク全体のランダムな未分化利益（RP）は、すべてのノードに対して機会均等があり、各ノードはRPの利益を得る確率が同じです。",
				},
				{
					ask: "TAURUSの収益に上限はありますか？",
					answer: "TAURUSの3種類の利益のうち、ネットワーク全体の招待利益（IP）とランダム未分化利益（RP）は無制限であり、上限はありません。 純利益（NP）は、アクティブ化されたアカウントとアップグレードアカウントの対応する倍数によって制限されます。 対応する倍数の制限値に達すると、余剰収益はランダムに他のノードに分配されます。",
				},
				{
					ask: "どのような状況で、ネットワーク全体でランダムで差別化されていない割り当てが開始されますか？",
					answer: "次の3つのシナリオのいずれかが発生すると、TAURUSはネットワーク全体でランダムな未分化の割り当てを開始します。\n\
A. Aノードの純利益（NP）が複数の制限を超えると、超過した純利益（NP）はネットワーク全体でランダムな未分化の割り当てを開始し、ネットワーク全体のランダムな未分化の利益（RP）を形成します。 \n\
B.新しいプレーヤーがノードをアクティブ化すると、各100番目のノードの純利益により、ネットワーク全体でランダムな未分化の割り当てが開始されます。\n\
C.招待者がノードNo.1または招待者のないノードに対してアクティブ化されると、新しいノードによる純利益は、ネットワーク全体でランダムな未分化の割り当てを開始します。",
				},
				{
					ask: "TAURUSノードのアクティブ化とアップグレードのルールは何ですか？",
					answer: "アクティベーションノードは、収益の50倍の権利を取得するために、10000 TRXを支払う必要があります。より高い利益の倍数を取得したい場合は、ノードをアップグレードできます。ノードをアップグレードするためのルールは次のとおりです。\n\
100倍の収益権にアップグレード：20000TRXを支払い、100倍の収益権を獲得します。 \n\
150倍の収益権にアップグレード：30000TRXを支払い、150倍の収益権を獲得します。 \n\
200倍の収益権にアップグレード：10000TRXを支払い、200倍の収益権を獲得します。 \n\
ノードのアクティブ化、100倍の収益権へのアップグレード、150倍の収益権へのアップグレードによって支払われるTRXの20％は自動的に招待者に転送され、80％は5〜7層までのノードに自動的に転送されます。 \n\
100倍の収益権にアップグレードすると、TRXの80％が第5層と第6層までのノートで均等に分割されます。\n\
150倍の収益権にアップグレードすると、TRXの80％が、第5層、第6層、および第7層までのノートで均等に分割されます。\n\
ノードが200倍の収益権にアップグレードされると、TRXの20％が自動的に招待者に転送され、80％がシステムによってランダムに検出されたノードに自動的に転送されます。",
				},
				{
					ask: "友達をゲームに招待するにはどうすればよいですか？",
					answer: "アカウントをアクティブ化すると、https：//TAURUS.io/？ID = XXXXなど、招待IDと招待IDを含むリンクアドレスが取得されます。 招待リンクを友達に送信し、暗号化されたウォレットブラウザを使用して友達がTAURUSにアクセスできるようにし、アカウントをアクティブ化できるようにします。 友達をゲームに招待することに成功しました。",
				},
				{
					ask: "招待できる友達の数に制限はありますか？",
					answer: "TAURUSインターフェースのノードの下にはノードが3つしかないことがわかりますが、実際には、友達を招待すると、特定のルールに従ってネットワークの下の特定の位置に自動的に配置されます。 あなたが得る招待収入の上限。",
				},
				{
					ask: "下の5番目のレイヤーがいっぱいになったとき、TAURUSは招待された友達をどのように配置しますか？",
					answer: "まず、200回以上おめでとうございます。 ノードの下の第5層がいっぱいになると、TAURUSはルールに従ってネットワーク本体の下に友達を配置し続けます。これは、招待する友達の収入を得るためにあなたに影響を与えませんが、現在のノードは取得し続けることができません。 純利益（NP）。 このため、現在のノードの次のレイヤーの左側に独自のノードを配置することをお勧めします。 さらに、現在のノードの次のレイヤーの左側も独自のノードです。 このようにして、より多くの純利益を得ることができます。 この組み合わせにより、無制限のかなりのメリットが得られます。",
				},
				{
					ask: "TAURUSのマネージャー兼クリエーターは誰ですか？",
					answer: "TAURUSは、スマートコントラクトに共通の関心を持つ開発者のグループによって作成されています。 それは特定の個人または組織に属していません。 これは、スマートコントラクトプログラムコードのグループです。 リリースされると、誰も組織もゲームのルールを変更したり、ゲームを停止したりすることはできません。 TAURUSは永遠に実行されます。 コミュニティ全体がそのマネージャーであり、そのメンバーはコンセンサスによってTAURUSの運用を維持しています。",
				},
				{
					ask: "TAURUSの詳細はどこで入手できますか？",
					answer: "TAURUSの公式ウェブサイトの下部にあるTAURUSの電報とTwitterのリンクを見ることができます。また、TAURUSの運営コミュニティに電子メールを送信することもできます。 つまり、TAURUSは、コミュニティのメンバーと通信するための豊富な通信方法を提供します。",
				},
			],

		},
		main: {
			youID: "アカウント、招待IDをにしました",
			noActive: "あなたのアカウントはまだ認証されていません",
			activeNow: "今すぐアクティブ化",
			update: [
				"100Xにアップグレード",
				"150Xにアップグレード",
				"200Xにアップグレード",
				"これ以上のアップグレードはありません"
			],
			needPay: "アクティベーションには",
			times: "回",
			totalIncome: "総収入",
			earn: "あなたが稼ぐ金額",
			which: "そのうちの",
			inviteIncome: "利益の招待（IP）",
			netIncome: "純利益（NP）",
			limit: "上限",
			randomIncome: "ランダムな利益（RP）",
			treeType: ["", "私の招待", "他の人の招待", "ランダムスライド"],
			limit_tip:"ネット収益（NP）の上限は10000 TRXの倍数です",

		},
		member: {
			inviteLink: "あなたの招待リンク",
			address: "ウォレットアドレス",
			parentID: "あなたの招待者のID",
			topID: "上位層ID",
			myInvite: "私の招待状",
			myTeam: "私のチーム",
			myID: "私のID",
			invitationList: "招待リスト",
			memberInfo: "会員資料",
		},
		data: {
			title: "データ統計",
			totalMembers: "合計アカウント",
			todayMembers: "今日の新しいアカウント",
			totalIncome: "合計金額",
			totalRandom: "ランダムアカウントの数",
			todayRandom: "今日のランダムアカウントの数",
			totalSlide: "自動スライドされたアカウントの数",
			todaySlide: "今日自動スライドされたアカウントの数",
			levelTitle: "各倍数のメンバー数",
			income: "ゲイン（TRX）",

			moreData: "統計をもっと見る",
			members: "メンバー",
			amount: "量",
			times: "回",

		},
		history: {
			record: "収益記録",
			total: "合計",
			strip: "アイテム",
			time: "日付",
			type: "タイプ",
			quota: "過剰",
			incomeType: ["招待収入（IP）", "純体収入（NP）", "ランダム収入（RP）"]
		},
		rule: {
					title: "TAURUSルールの説明",
					table:{
						update:"アクティブとアップグレード",
						invest:"投げ入れる（TRX）",
						limit:"ネット収益上限（TRX）",
						up5:"上向き5代目",
						up6:"上向き6代目",
						up7:"上向き7代目",
						multiple:[
							"アクティブな50倍",
							"レベル100倍",
							"レベル150倍",
							"レベル200倍",
						],
						random:"全網ランダム投入8,000TRX",
					},
					txt1: "1、TaurusはTRONブロックチェーンに基づいて運行する知能契約プログラムで、登録する必要がなく、アカウントをアクティブにして参加できます。すべての金額は直ちにプレイヤーの財布の住所に割り当てられます。プラットフォームには手数料、手数料は一切かかりません。\n\
2、X 3マトリックスネット構造は、自由滑り規則（上から下へ、左から右へ）に従い、プレーヤーはネットの普及の力を借りて、収益層に迅速に到達することができます。\n\
3、招待者がいないプレイヤーがノードをアクティブにすると、ノードは全ネットワークのランダムなノードの下の自由落下位置にずり落ち、他のプレイヤーが素早く塗りつぶしてくれるようになります。",
		           txt2:"4、プレイヤーは10000 TRX活性化ノードを投入すれば、招待収益（IP）、ネット収益（NP）、ネット全体のランダム収益（RP）を含む豊かなリターンが得られます。このうち、ネット収益がアクティブになった時には50倍の収益権を獲得し、その後アップグレードノードを通じて、100倍、150倍、200倍のネット収益権を獲得することができる。招待収益はネット全体のランダム収益に上限がない。",
				   txt3:"5、招待収益（IP）\n\
プレイヤーは他のプレイヤーを招待して、新しいプレイヤーの活性化とTRXの20%アップグレードを獲得します。\n\
6、ネットワーク収益（NP）\n\
プレイヤーがアクティブにしてアップグレードして支払う費用の80%は、以下のルールでネット体を奨励します：",
		          txt4:"7、ネット全体のランダム収益（RP）\n\
次の条件を満たす時、システムは全ネットワークのいかなるノードに対しても平等で、ランダムに投入します。\n\
（1）ゲーマーズアカウントのネット収益が上限に達した場合、超過額のネットボーナスは全ネットランダムに投入されます。\n\
（2）プレイヤー番号が100の整数倍の場合、アクティブにして発生したネットワークインセンティブは全ネットワークにランダムに投入されます。\n\
（3）招待者が1番口座の場合、アクティブにして発生したネットの奨励が全ネットでランダムに投入されます。"
		           
				}, //rule
				
				
		

	}, //jp		
	kr: {
		com: {
			title: "Taurus",
			copy: "복제 하 다",
			copySuccess: "복사 성공",
			balance: "계정 잔액",
			details: "세부",
			tip: "제시 하 다",
			home: "홈 페이지",
			main: "메인 패널",
			invite: "초대",
			rule: "게임의 규칙",
		},
		index: {
			title: "역사상 가장 공정하고 효과적인 부 게임",
			intro: "• TAURUS 는 TRNChain 기반 의 스마트 계약 게임 으로 1000 TRX 를 투입 하면 계 정 을 활성화 시 키 고 초대, 네트, 네트 랜 덤 등 다양한 수익 을 얻 을 수 있 습 니 다. \n\
• X3 매트릭스 네트워크 구조, 자동 슬라이드 메커니즘 은 많은 게이머 들 이 빠 른 충전 을 도와 수익 층 에 빠르게 도달 합 니 다. \n\
• 전 네트워크 를 랜 덤 으로 투입 하여 게이머 들 이 더 많은 수익 기 회 를 얻 도록 도와 준다.",
			gameRule: "게임의 규칙",
			joinNow: "지금 가입하세요",
			contractAddress: "계약 주소",
			feature: [{
					title: "탈 중앙화, 위험 없음",
					txt: "체인에 영원히 존재하며 누구도 훼손 할 수없는 스마트 계약. 위험, 100 % 자본 흐름, 숨겨진 비용, 플랫폼 0 자금 침전이 없습니다.",
				},
				{
					title: "실시간 거래, 100 % 자본 온라인",
					txt: "토큰이 발행되지 않고, 사용 가능한 자본 풀이없고, 플랫폼에서 수수료가 발생하지 않으며, 100 % 자본이 할당되며, 계약 잔액은 항상 0입니다.",
				},
				{
					title: "투명성과 익명 성",
					txt: "등록 불필요, 100 % 익명 성, 사용자는 거래 투명성을 보장하기 위해 브라우저에서 모든 거래 기록을 볼 수 있습니다.",
				},
				{
					title: "모두를위한 탈 중앙화 및 평등 한 기회",
					txt: "관리자도, 프로젝트 당사자도없고, 계약 작성자도 다른 모든 사람과 동일한 권한을 갖습니다.",
				},
			],
		},
		faq: {
			title: "자주하는 질문",
			list: [{
					ask: "TAURUS는 무엇입니까?",
					answer: "TAURUS는 완전히 분산되고 자동으로 실행되는 스마트 계약 알고리즘입니다. 노드가 계정을 활성화하거나 업그레이드하고 일정량의 TRX를 투자하면 TAURUS는 투자 한 TRX를 자동으로 할당합니다. 특정 조건에서 노드의 이익은 수십 배까지 증가 할 수 있습니다. 이 과정에서 TAURUS는 커미션을받지 않으며 TRX의 손실도 없습니다. 따라서 TAURUS는 제로 리스크 플랫폼입니다.",
				},
				{
					ask: "TAURUS에 어떻게 참여하나요?",
					answer: "TAURUS에 참여하는 방법은 매우 간단합니다. Tron 체인을 지원하는 암호화 된 지갑이 있어야하고 지갑 주소에 10000 개 이상의 TRX 코인이 있어야합니다 (매우 적은 양의 가스 연료 요금을 입금해야 할 수도 있음). 지갑 브라우저 (https://TAURUS.io)에서 TAURUS를 입력하면 게임에 참여할 수 있습니다.",
				},
				{
					ask: "TAURUS는 어떤 암호화 된 지갑을 지원합니까?",
					answer: "Tron Chain을 지원하는 모든 암호화 지갑은 TAURUS에 접근 할 수 있습니다. 일반적으로 더 많은 사람들이 사용하는 TronLink, imToken 및 TokenPocket과 같은 암호화 된 지갑을 사용하는 것이 좋습니다.",
				},
				{
					ask: "플레이어는 TAURUS에서 어떤 이점을 얻을 수 있습니까?",
					answer: "TAURUS 플레이어 수익에는 세 가지 유형이 있습니다. \n\
A. 수익 초대 (IP) : 플레이어는 자신의 초대 링크를 보내 다른 플레이어를 초대하고 활성화 된 계정과 업그레이드 된 계정에 투자 된 TRX의 20 %를받습니다.\n\
B. Net Profits (NP) : 플레이어는 자신의 계정을 활성화하고 넷 바디의 다섯 번째 레이어 아래에서 계정을 업그레이드하기 위해 플레이어가 지불하는 TRX의 80 %를받습니다. \n\
C. Random undifferentiated Profits (RP) : 일부 조건이 트리거되면 TAURUS는 전체 네트워크에서 임의의 노드를 선택합니다. 유효 노드를 선택하면 해당 순이익 (NP)이 랜덤 노드의 다섯 번째 계층에 해당하는 노드로 전송됩니다. 전체 네트워크의 무작위 미 차별 수익 (RP)은 모든 노드에 대해 동일한 기회를 가지며 각 노드는 RP 혜택을 얻을 확률이 동일합니다.",
				},
				{
					ask: "TAURUS의 수입에 상한선이 있습니까?",
					answer: "TAURUS의 세 가지 수익 중 전체 네트워크의 초대 수익 (IP) 및 무작위 미 차별 수익 (RP)은 제한이 없으며 한도도 없습니다. 순이익 (NP)은 활성화 된 계정과 업그레이드 계정의 해당 배수에 의해 제한됩니다. 해당 배수의 한계 값에 도달하면 잉여 수익이 무작위로 다른 노드에 분배됩니다.",
				},
				{
					ask: "어떤 상황에서 전체 네트워크에서 무작위적이고 차별화되지 않은 할당을 시작합니까?",
					answer: "다음 세 가지 시나리오 중 하나가 발생하면 TAURUS는 전체 네트워크에서 차별되지 않은 무작위 할당을 시작합니다. \n\
A. A 노드의 순이익 (NP)이 다중 한도를 초과하면 초과 된 순이익 (NP)은 전체 네트워크에서 무작위 미분화 할당을 시작하여 전체 네트워크의 무작위 미분화 이익 (RP)을 형성합니다. \n\
B. 새로운 플레이어가 노드를 활성화하면 각 100 번째 노드의 순이익은 전체 네트워크에서 무작위로 차별화되지 않은 할당을 시작합니다.\n\
C. 초대자가 노드 1 번 또는 초대자가없는 노드에 대해 활성화되면 새 노드의 순이익이 전체 네트워크에서 임의의 미분화 할당을 시작합니다. ",
				},
				{
					ask: "TAURUS 노드 활성화 및 업그레이드 규칙은 무엇입니까?",
					answer: "활성화 노드는 수익권의 50 배를 얻으려면 10000 TRX를 지불해야합니다. 더 높은 수익 배수를 얻으려면 노드를 업그레이드 할 수 있습니다. 노드 업그레이드 규칙은 다음과 같습니다. \n\
100 배 수익 권리로 업그레이드 : 20000TRX를 지불하고 100 배 수익을 올바르게 얻으십시오.\n\
150 배 수익 권한으로 업그레이드 : 30000TRX를 지불하고 150 배 수익을 올바로 얻으십시오. \n\
200 배 수익으로 업그레이드 : 10000TRX를 지불하고 200 배 수익을 올바로 얻으십시오. \n\
노드 활성화, 수익권 100 배로 업그레이드, 수익권 150 배로 업그레이드하여 지불 한 TRX의 20 %는 초대 자에게 자동으로 이전되며, 80 %는 5 ~ 7 층까지 노드로 자동 이전됩니다. \n\
100 배 수익권으로 업그레이드 할 때 TRX의 80 %는 5 번째 및 6 번째 레이어까지 노트로 균등하게 나뉩니다. \n\
150 배 수익권으로 업그레이드 할 때 TRX의 80 %가 5, 6, 7 층까지 노트로 균등하게 나뉩니다. \n\
노드가 200 배 수익권으로 업그레이드되면 TRX의 20 %는 초대 한 사람에게 자동으로 이전되고 80 %는 시스템에서 무작위로 찾은 노드로 자동 이전됩니다.",
				},
				{
					ask: "친구를 게임에 초대하려면 어떻게하나요?",
					answer: "계정을 활성화하면 초대 ID와 초대 ID가 포함 된 링크 주소 (예 : https://TAURUS.io/?ID=XXXX)를 받게됩니다. 친구에게 초대 링크를 보내고 암호화 된 지갑 브라우저를 사용하여 TAURUS에 액세스하도록 돕고 그의 계정을 활성화하도록하십시오. 게임에 친구를 초대했습니다.",
				},
				{
					ask: "초대 할 수있는 친구 수에 제한이 있나요?",
					answer: "TAURUS 인터페이스에서 노드 아래에 노드가 세 개 뿐인 것을 알 수 있지만 실제로 친구를 초대 할 수 있으며 특정 규칙에 따라 네트워크 아래 특정 위치에 자동으로 정렬됩니다. 받는 초대 수입의 최대 한도.",
				},
				{
					ask: "TAURUS는 내가 아래 다섯 번째 레이어에서 배가 부르면 초대받은 친구를 어떻게 배치하나요?",
					answer: "우선 수입을 200 회 이상 축하드립니다. 노드 아래의 다섯 번째 레이어가 가득 차면 TAURUS는 규칙에 따라 네트워크 바디 아래에 친구를 계속 배치합니다. 이는 초대 친구의 수입을 얻는 데 영향을 미치지 않지만 현재 노드는 계속해서 얻을 수 없습니다. 순이익 (NP). 따라서 현재 노드의 다음 레이어 왼쪽에 자체 노드를 배치하는 것이 좋습니다. 심지어 현재 노드의 다음 레이어 왼쪽도 자신의 노드입니다. 이런 식으로 더 많은 순이익을 계속 얻을 수 있습니다. 이 조합을 통해 무한한 상당한 혜택을 얻을 수 있습니다.",
				},
				{
					ask: "TAURUS의 관리자이자 제작자는 누구입니까?",
					answer: "TAURUS는 스마트 계약에 공통 관심을 가진 개발자 그룹에 의해 만들어졌습니다. 그것은 한 사람이나 조직에 속하지 않습니다. 스마트 계약 프로그램 코드 그룹입니다. 출시되면 누구도 게임 규칙을 변경하거나 게임을 중단 할 수 없습니다. 토러스는 영원히 달릴 것입니다. 전체 커뮤니티는 관리자이며 구성원은 합의에 의해 TAURUS의 운영을 유지합니다.",
				},
				{
					ask: "TAURUS에 대한 자세한 정보는 어디서 얻을 수 있습니까?",
					answer: "TAURUS 공식 홈페이지 하단에서 TAURUS의 Telegram 및 Twitter 링크를 확인할 수 있으며, TAURUS 운영 커뮤니티에 이메일을 보낼 수도 있습니다. 요컨대, TAURUS는 커뮤니티 회원들과 소통 할 수있는 풍부한 커뮤니케이션 방법을 제공합니다.",
				},
			],

		},
		main: {
			youID: "계정, 초대 ID를 활성화했습니다",
			noActive: "귀하의 계정은 아직 활성화되지 않았습니다",
			activeNow: "지금 실행 시켜라",
			update: [
				"100X로 업그레이드",
				"150X로 업그레이드",
				"200X로 업그레이드",
				"추가 업그레이드 없음"
			],
			needPay: "활성화하려면",
			times: "배",
			totalIncome: "총수입",
			earn: "당신이 버는 금액",
			which: "어느",
			inviteIncome: "초대 수익 (IP)",
			netIncome: "순이익 (NP)",
			limit: "상한선",
			randomIncome: "무차별 수익 (RP)",
			treeType: ["", "나의 초대", "타인 의 요청", "무작위 슬라이드"],
			limit_tip:"네트워크 수익 (NP) 상한 선 은 1000 TRX 의 배수 이다",

		},
		member: {
			inviteLink: "초대 링크",
			address: "지갑 주소",
			parentID: "초대 자의 ID",
			topID: "상위 레이어 ID",
			myInvite: "내 초대장",
			myTeam: "내 팀",
			myID: "내 ID",
			invitationList: "초대 목록",
			memberInfo: "회원 정보",
		},
		data: {
			title: "데이터 통계",
			totalMembers: "총 계정",
			todayMembers: "오늘 새 계정",
			totalIncome: "총액",
			totalRandom: "임의 계정 수",
			todayRandom: "오늘 임의 계정 수",
			totalSlide: "자동 슬라이드 된 계정 수",
			todaySlide: "오늘 자동 슬라이드 된 계정 수",
			levelTitle: "각 배수의 회원 수",
			income: "이득 (TRX)",

			moreData: "더 많은 통계보기",
			members: "회원",
			amount: "금액",
			times: "횟수",

		},
		history: {
			record: "수익 기록",
			total: "합계",
			strip: "아이템",
			time: "데이트",
			type: "유형",
			quota: "초과",
			incomeType: ["초대 소득 (IP)", "순체 소득 (NP)", "임의 소득 (RP)"]
		},
		rule: {
					title: "TAURUS 규칙에 대한 설명",
					table:{
						update:"활성화 및 진급",
						invest:"투입 하 다.（TRX）",
						limit:"네트워크 체 수익 상한 선（TRX）",
						up5:"5 대 에 오르다",
						up6:"6 대 에 오르다",
						up7:"7 대 에 오르다",
						multiple:[
							"50 배 활성화",
							"100 배 승급",
							"100 배 승급",
							"200 배 승급",
						],
						random:"네트워크 전체 가 랜 덤 으로 투입 되다 8,000TRX",
					},
					txt1: "1. Taurus 는 TRON 블록 체인 을 바탕 으로 하 는 스마트 계약 프로그램 으로 가입 하지 않 아 도 계 정 을 활성화 하면 참여 할 수 있 습 니 다.모든 금액 을 게이머 의 지갑 주소 에 즉시 배정 하고 플랫폼 은 그 어떠한 수수료, 커미션 도 받 지 않 습 니 다.\n\
2. X3 매트릭스 구조, 자유 슬라이드 규칙 (위 에서 아래로, 왼쪽 에서 오른쪽으로) 에 따라 유 저 는 네트워크 홍보 의 힘 을 빌려 수익 층 에 신속하게 도달 할 수 있 습 니 다.\n\
3. 초대 하 는 사람 이 없 는 유저 가 노드 를 활성화 할 때 이 노드 는 네트워크 의 랜 덤 한 노드 아래 의 자유 슬라이드 위치 로 내 려 가 다른 유저 가 신속하게 채 울 수 있 도록 도와 준다.",
		           txt2:"4. 유저 가 1000 TRX 를 투입 하여 노드 를 활성화 하면 풍부 한 수익 을 얻 을 수 있 습 니 다. 초대 수익 (IP), 네트워크 수익 (NP), 네트워크 랜 덤 수익 (RP) 을 포함 합 니 다.그 중에서 네트워크 수익 을 활성화 할 때 50 배 수익 권 을 얻 고 그 다음 에 업 그 레이 드 를 통 해 100 배, 150 배, 200 배 네트워크 수익 권 을 얻 을 수 있다.초청 수익 과 전 네트워크 랜 덤 수익 은 상한 이 없습니다.",
				   txt3:"5 、 수익 요청 (IP) \n\
유 저 는 기타 유 저 를 초청 하여 가입, 새 유 저 를 활성화 및 진급 에 투입 한 TRX 의 20% 를 획득.\n\
6 、 네트워크 수익 (NP) \n\
유저 가 활성화 및 업그레이드 하여 지불 하 는 비용 의 80% 는 다음 과 같은 규칙 에 따라 보상 망 체:",
		          txt4:"7 、 네트워크 랜 덤 수익 (RP) \n\
다음 과 같은 조건 을 충족 시 키 는 순간 에 시스템 은 전 네트워크 의 모든 노드 에 대해 평등 하고 임 의 투입:  \n\
(1) 유저 계 정 망 체 수익 이 상한 에 도달 하면 초과 한 망 체 보상 을 전 망 랜 덤 으로 집행 합 니 다.  \n\
(2) 유저 번호 가 100 의 정수 배 일 경우, 활성 화 된 네트워크 보상 전 네트워크 를 랜 덤 으로 투입 합 니 다.  \n\
(3) 사람 을 1 번 계 정 으로 초대 할 때 활성 화 된 네트워크 보상 전 네트워크 를 랜 덤 으로 집행 한다."
		           
				}, //rule

	}, //kr


}
