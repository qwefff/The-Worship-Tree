addLayer("Ach",{
	startData() { return {                  
        unlocked: true,                     
        points: new ExpantaNum(0),
		rpoings: new ExpantaNum(0),
		clicks: new ExpantaNum(0),
		
		addP: function(){
			player.Ach.points=player.Ach.points.add(1)
		},
		C: function(){
			player.Ach.clicks=player.Ach.clicks.add(1)
		},
		toMult: function(){
			return ExpantaNum(1).add(player.Ach.points.mul(ExpantaNum("0.1")))
		},
		toPowP: function(){
			// return ExpantaNum(1)
			return player.Ach.clicks.add(1).log().mul(player.Ach.toMult()).div(98.1).add(1)
		},
    }},

    color: "#FFFF00",                         
    resource: "成就点数",    
    symbol: "A",
    row: "side",                

    // baseResource: "w",                 
    // baseAmount() { return player.points }, 

    // requires: new ExpantaNum(5),
    type: "none",
	update(diff){
		player.Ach.clicks=player.Ach.clicks.add(buyableEffect('Cil',11).mul(diff))
	},
	clickables: {
		masterButtonPress(){if(player.Ach.clicks.gte(1)) player.Ach.clicks=player.Ach.clicks.add(-1)},
		masterButtonText: "-1(?)",
		11: {
			title(){return "点击！"},
			display() {return `你一共点击了 ` + player.Ach.clicks.floor() + ` 次<br>
				当前点数加成: +^` + format(player.Ach.toPowP().sub(1),3)},
			canClick(){return true},
			onClick(){player.Ach.C()},
			onHold(){player.Ach.C()},
			tooltip: "应该没人这么闲点击这个按钮吧（雾）",
		}
	},
	achievements: {
		11: {
			name: "开始膜拜",
			tooltip: "膜拜 1 次",
			done(){return player.M.points.gte(1)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		12: {
			name: "一组膜拜",
			tooltip: "膜拜 64 次",
			done(){return player.M.points.gte(64)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		13: {
			name: "不要再膜拜了",
			tooltip: "购买膜拜升级 21",
			done(){return hasUpgrade('M',21)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		14: {
			name: "恶 臭 膜 拜",
			tooltip: "膜拜 114514 次",
			done(){return player.M.points.gte(114514)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		15: {
			name: "恶 臭 膜 拜 2.0",
			tooltip: "膜拜 1145141919810(1.14e12) 次",
			done(){return player.M.points.gte("1145141919810")},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		21: {
			name: "stO",
			tooltip: "获得 1 个 Orz",
			done(){return player.O.points.gte(1)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		22: {
			name: function(){return shen_ben},
			tooltip: "获得 5 个 Orz",
			done(){return player.O.points.gte(5)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		23: {
			name: "Orz",
			tooltip: "获得 20 个 Orz",
			done(){return player.O.points.gte(20)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		24: {
			name: "ORz?",
			tooltip: "获得 1 个 R",
			done(){return player.R.points.gte(1)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		25: {
			name: "RRhaR'il(?)",
			tooltip: "获得 3 个 R",
			done(){return player.R.points.gte(3)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		26: {
			name: "ORZ!",
			tooltip: function(){
				let a="获得 1 个 Z"
				if(hasAchievement('Ach',this.id)) a+=`<br>
upd: R 不再重置膜拜次数/Orz`
				return a},
			done(){return player.Z.points.gte(1)},
			onComplete(){player.Ach.addP()},
		},
		31: {
			name: "教徒？",
			tooltip: "获得 1 个教徒",
			done(){return player.A.points.gte(1)},
			onComplete(){player.Ach.points=player.Ach.points.add(1)}
		},
		32: {
			name: "教堂?",
			tooltip: "获得 1 个教堂",
			done(){return player.C.points.gte(1)},
			onComplete(){player.Ach.addP()}
		},
		33: {
			name: "自动点击？",
			tooltip: function(){
				let a=`获得 5 个教堂`
				if(hasAchievement('Ach',this.id)) a+=`<br>
upd: 解锁一个新层在成就的下面`
				return a
			},
			done(){return player.C.points.gte(20)},
			onComplete(){player.Ach.addP()}
		},
		34: {
			name: "你至今不知道为什么教堂比教徒多",
			tooltip: "获得教堂里程碑 4",
			done(){return hasMilestone('C',4)},
			onComplete(){player.Ach.addP()}
		},
		41: {
			name: "这是反物质维度?",
			tooltip: "获得 1 个 z1",
			done(){return player.Z.z1.gte(1)},
			onComplete(){player.Ach.addP()}
		},
		42: {
			name: "更多的 z_",
			tooltip: "获得 1 个 z2",
			done(){return player.Z.z2.gte(1)},
			onComplete(){player.Ach.addP()}
		},
		43: {
			name: "还有 4 个 z_",
			tooltip: "获得 1 个 z4",
			done(){return player.Z.z4.gte(1)},
			onComplete(){player.Ach.addP()}
		},
		44: {
			name: "没有 z9",
			tooltip: "获得 1 个 z6",
			done(){return player.Z.z6.gte(1)},
			onComplete(){player.Ach.addP()}
		},
		45: {
			name: "我说我是故意水了几个成就你信吗",
			tooltip: function(){
				let a=`获得 1 个 z8`
				if(hasAchievement('Ach',this.id)) a+=`<br>
upd: 添加一个 Z 里程碑`
				return a
			},
			done(){return player.Z.z8.gte(1)},
			onComplete(){player.Ach.addP()}
		},
	},
	tabFormat: [
        [
            "display-text",
            function() {
				return "你有 "+format(player.Ach.points)+" 成就点数，为下面的按钮加成 x"+format(player.Ach.toMult())
            }
        ],
		"blank",
		"clickables",
		"blank",
		"blank",
        "achievements",
    ],
	hotkeys: [
		{
			key: "=",
			description: "=: 点数清零",
			onPress(){player.points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
	]
})
























addLayer("Cil", {
    startData() { return {                  
        unlocked: true,                 
        points: new ExpantaNum("0"),

		toAdd: function(){
			let gain = ExpantaNum(0)

			return gain
		}
    }},

    color: "#00FF00",                         
    resource: "可用成就点数",         
    symbol: "C",
    row: "side",                

    type: "none",

    layerShown() { return hasAchievement('Ach',33)},
	// update(diff){
	// 	player.Ach.cilcks=player.Ach.cilcks.add(1)
	// 	player.Ach.cilcks=player.Ach.cilcks.add(buyableEffect('Cil',11).mul(diff))
	// },
	buyables: {
		respecText: "刷新可用成就点数并且重置此层可购买",
		respec(){
			setBuyableAmount(this.layer,11,OmegaNumZero)
			setBuyableAmount(this.layer,12,OmegaNumZero)
			setBuyableAmount(this.layer,13,OmegaNumZero)
			player.Cil.points=player.Ach.points
		},
		respecMessage: "点击按钮会刷新可用成就点数并且重置可购买，但不会重置其他内容，是否确定？",
		11: {
			title: "自动点击器",
			cost(x) { return ExpantaNum(1) },
			effect(){return getBuyableAmount(this.layer,this.id).mul(2).pow(buyableEffect(this.layer,13)).mul(buyableEffect(this.layer,12))},
			display() { return "你有 " + format(getBuyableAmount(this.layer,this.id)) + ` 个
当前: +` + format(buyableEffect(this.layer,this.id)) + "/s"},
			canAfford() { return player[this.layer].points.gte(this.cost()) },
			buy() {
				player[this.layer].points=player[this.layer].points.sub(this.cost())
				setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
			},
		},
		12: {
			title: "倍增点击器",
			cost(x) { return ExpantaNum(1) },
			effect(){return getBuyableAmount(this.layer,this.id).mul(0.25).add(1).pow(buyableEffect(this.layer,13))},
			display() { return "你有 " + format(getBuyableAmount(this.layer,this.id)) + ` 个
当前: *` + format(buyableEffect(this.layer,this.id))},
			canAfford() { return player[this.layer].points.gte(this.cost()) },
			buy() {
				player[this.layer].points=player[this.layer].points.sub(this.cost())
				setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
			},
		},
		13: {
			title: "指数点击器",
			cost(x) { return ExpantaNum(1) },
			effect(){return getBuyableAmount(this.layer,this.id).pow(0.5).mul(0.1).add(1)},
			display() { return "你有 " + format(getBuyableAmount(this.layer,this.id)) + ` 个
当前: ^` + format(buyableEffect(this.layer,this.id))},
			canAfford() { return player[this.layer].points.gte(this.cost()) },
			buy() {
				player[this.layer].points=player[this.layer].points.sub(this.cost())
				setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
			},
		},
	}
})
























addLayer("M", {
    startData() { return {                  
        unlocked: true,                     
        points: new ExpantaNum("0"),
		
		toMult: function(){
			let gain=player.M.points.add(1).log().add(1)
			if(hasUpgrade('M',21)) gain=gain.pow(upgradeEffect('M',21))
			
			return gain.max(1)
		},
    }},

    color: "#00FF00",                         
    resource: "膜拜次数",         
    symbol: "M",
    row: 0,                

    baseResource: "点数",                 
    baseAmount() { return player.points }, 

    requires: new ExpantaNum(5),
    type: "normal",
    exponent: 0.5,

    gainMult() {
        let gain=new ExpantaNum(1)
		gain=gain.mul(player.O.toMult())
        return gain  
    },
    gainExp() {   
        return new ExpantaNum(1)
    },
	passiveGeneration(){
		return player.A.toAdd()
	},
	doReset(resettingLayer){
		// if(!hasMilestone('A',2)) layerDataReset(this.layer,["upgrades"])
		if(layers[resettingLayer].row>this.row){
			if(hasAchievement('Ach',26) && resettingLayer=='R') return;
			let t_upgrades=[]
			if(hasMilestone('A',2) && (resettingLayer=="A" || resettingLayer=="O") || hasMilestone('C',2) &&  resettingLayer=="C") t_upgrades=player[this.layer].upgrades
			let t_points=new ExpantaNum(0)
			if(hasMilestone('A',4) && (resettingLayer=="A" || resettingLayer=="O") || hasMilestone('C',2) &&  resettingLayer=="C") t_points=player[this.layer].points
			layerDataReset(this.layer, [])
			
			player[this.layer].upgrades=t_upgrades
			player[this.layer].points=t_points
		}
	},
	updata(diff){
		// shen_ben=player[this.layer].sb
		shen_ben = "fanghaolin"
	},
    layerShown() { return true},    
    upgrades: {
        11:{
			name: "11",
			description: "双倍点数",
			cost: new ExpantaNum("10"),
			effect(){
				return ExpantaNum(2)
			},
			effectDisplay(){return (hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1)))+"x"}
		},
		12:{
			name: "12",
			description: "双倍点数，再一次",
			cost: new ExpantaNum("20"),
			unlocked(){
				return hasUpgrade(this.layer,11)
			},
			effect(){
				return ExpantaNum(2)
			},
			effectDisplay(){return (hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1)))+"x"}
		},
		13:{
			name: "13",
			description: "叒倍点数",
			cost: new ExpantaNum("40"),
			unlocked(){
				return hasUpgrade(this.layer,12)
			},
			effect(){
				return ExpantaNum(3)
			},
			effectDisplay(){return (hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1)))+"x"}
		},
		14:{
			name: "14",
			description: "叕倍点数...",
			cost: new ExpantaNum("80"),
			unlocked(){
				return hasUpgrade(this.layer,13)
			},
			effect(){
				return ExpantaNum(4)
			},
			effectDisplay(){return (hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1)))+"x"}
		},

		21:{
			name: "21",
			description: "平方膜拜次数对点数的加成",
			cost: new ExpantaNum("200"),
			unlocked(){
				return hasUpgrade(this.layer,14)
			},
			effect(){
				return ExpantaNum(2)
			},
			effectDisplay(){return ("^"+(hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1))))}
		},
		22:{
			name: "22",
			description: "平方 Orz 对点数/膜拜次数的加成",
			cost: new ExpantaNum("50000"),
			unlocked(){
				return hasMilestone('A',2)
			},
			effect(){
				return ExpantaNum(2)
			},
			effectDisplay(){return ("^"+(hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1))))}
		},
    },
	// tabFormat:{
	// 	"主要": {
	// 		shouldNotify: true,
	// 		content: [
	// 			[
	// 				"display-text",
	// 				function() {
	// 					let a="你膜拜了 " + shen_ben + " " + format(player.M.points)+" 次"
	// 					if(player.M.points.gte(1)) a+="，为你的点数获取 *"+format(player.M.toMult())
	// 					return a
	// 				}
	// 			],
	// 			"blank",
	// 			"prestige-button",
	// 			// "blank",
	// 			// ["display-text","你当前膜拜的人: "],
	// 			// "blank",
	// 			["text-input", "sb"],
	// 			// ["slider",["awa",1,10]],
	// 			"blank",
	// 			"blank",
	// 			"upgrades"
	// 		],
	// 	}
	// },
	tabFormat: [
        [
            "display-text",
            function() {
				let a="你膜拜了 " + shen_ben + " " + format(player.M.points)+" 次"
                if(player.M.points.gte(1)) a+="，为你的点数获取 *"+format(player.M.toMult())
				return a
            }
        ],
		"blank",
        "prestige-button",
		// "blank",
		// ["display-text","你当前膜拜的人: "],
		// "blank",
        // ["text-input", "sb"],
		// ["slider",["awa",1,10]],
        "blank",
		"blank",
        "upgrades"
    ],

	hotkeys: [
        {
            key: "m",
            description: "m: 重置获得膜拜次数",
            onPress(){if(player.M.unlocked) doReset(this.layer)}
        },
		{
			key: "M",
			description: "shift+m(M): 膜拜次数清零",
			onPress(){player.M.points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
    ]
})
























addLayer("O", {
    startData() { return {                  
        unlocked: false,                     
        points: new ExpantaNum("0"),

		
		toMult: function(){
			let gain=player.O.points
			if(gain.gte(21)) {
				gain=gain.sub(20)
				gain=gain.div(gain.add(Math.E*Math.E).log().sub(1))
				gain=gain.add(20)
			}
			gain=gain.add(1)
			if(hasUpgrade('M',22)) gain=gain.pow(upgradeEffect('M',22))
			gain=gain.pow(player.R.toPow())
			return gain.max(1)
		},
    }},

    color: "#FFFF00",
    resource: "Orz",
    symbol: "O",
    row: 1,
	branches: ["M"],

    baseResource: "膜拜次数",                 
    baseAmount() { return player.M.points }, 

    type: "static",
    requires: function(){
		let gain = ExpantaNum(500)
		gain=gain.pow(OmegaNumOne.div(player.R.toPow()))

		return gain
	},
	base: function(){
		let gain = ExpantaNum(1.14)
		gain=gain.pow(OmegaNumOne.div(player.R.toPow()))

		return gain
	},
    exponent: 1.514,
	canBuyMax(){
		return hasMilestone('A',3)
	},

    gainMult() {
        let gain=new ExpantaNum(1)

        return gain  
    },
    gainExp() {   
        return new ExpantaNum(1)
    },
	doReset(resettingLayer){
		// if(!hasMilestone('A',2)) layerDataReset(this.layer,["upgrades"])
		if(layers[resettingLayer].row>this.row){
			if(resettingLayer == "C") return;
			if(hasAchievement('Ach',26) && resettingLayer=='R') return;
			layerDataReset(this.layer, [])
		}
	},
    layerShown() { return hasAchievement('Ach',21) || player.M.points.gte(200)},    
    upgrades: {
        // 11:{
		// 	name: "11",
		// 	description: "双倍点数",
		// 	cost: new ExpantaNum("10"),
		// 	effect(){
		// 		return ExpantaNum(2)
		// 	},
		// 	effectDisplay(){return (hasUpgrade(this.layer,this.id)?format(upgradeEffect(this.layer,this.id)):format(ExpantaNum(1)))+"x"}
		// },
    },
	
	tabFormat: [
		[
            "display-text",
			function(){
				let a="你有 " + format(player.O.points) + " Orz"
				if(player.O.points.gte(1)) a+="，为点数/膜拜次数获取 x " + format(player.O.toMult())
				if(player.O.points.gte(21)) a+=" (软上限)"
				return a
			},
        ],
		"blank",
        "prestige-button",
		"blank",
		[
            "display-text",
            function(){
				if(!player.O.points.add(player.R.points).gte(1)) return ""
				let rr=""
				// if(player.O.points<=new ExpantaNum(20)){
				if(player.O.points.add(player.R.points).gte(21)){
					if(player.R.points.gte(21)) rr="RRRRRRRRRRRRRRRR...R"
					else if(player.R.points.gte(16)) rr="RRRRRRRRRRRRRRRR...r"
					else{
						// rr="awa"
						let t=player.R.points
						let tt=0
						while(t.gte(1)){
							rr+="R"
							t=t.sub(1)
							++tt
						}
						while(tt<16) rr+="r",++tt
						rr+="...r"
					}
				}
				else{
					let t=player.R.points
					while(t.gte(1)){
						rr+="R"
						t=t.sub(1)
					}
					t=player.O.points
					while(t.gte(1)){
						rr+="r"
						t=t.sub(1)
					}
				}
				return shen_ben + " O" + rr + "z";
            },
        ],
        "blank",
		"blank",
        "upgrades"
    ],

	hotkeys: [
        {
            key: "o",
            description: "o: 重置获得 Orz",
            onPress(){if(player.O.unlocked) doReset(this.layer)}
        },
		{
			key: "O",
			description: "shift+o(O): Orz 清零",
			onPress(){player.O.points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
    ]
})
























addLayer('A',{
	startData() { return {                  
        unlocked: false,                     
        points: new ExpantaNum("0"),
		
		toAdd: function(){
			let gain=player.A.points.mul("0.1")
			if(player.A.points.gte(11)) gain=gain.pow(player.C.toAdd())
			if(hasMilestone('A',5)) gain=gain.mul(this.toAdd4())
			if(hasMilestone('C',4)) gain=gain.mul(player.C.toMult())
			// gain=gain.mul(player.C.toMult())

			return gain.max("0")
		},
		toAdd4: function(){
			let gain=player.A.points.add(1).log().add(1)
			gain=gain.pow(player.C.toAdd())
			return gain
		}
    }},

    color: "#F39C12",
    resource: "教徒",
    symbol: "A",
    row: 1,
	branches: ["M"],

    baseResource: "膜拜次数",                 
    baseAmount() { return player.M.points }, 

    type: "static",
    requires: function(){
		let gain=new ExpantaNum(20000)
		gain=gain.pow(player.C.toAdd().pow(1.14))
		return gain
	},
	// base: function(){
	// 	let gain = new ExpantaNum(1.514)
	// 	return gain
	// },
	base: 1.514,
    exponent: 1.14,
	canBuyMax(){
		// return false
		// return true
		// return 10
		return hasMilestone('A',3)
	},

    gainMult() {
        let gain=new ExpantaNum(1)
		// gain=getNextAt(this.layer, canMax=false, useType = "static")
		// gain=1
		// gain=getResetGain(this.layer, useType = "static")
        return gain  
    },
    gainExp() {   
		// let gain=player.C.toAdd().pow(-1.14)
		let gain=new ExpantaNum(1)
        return gain
    },
	update(diff){
		if(hasMilestone('C',1) && canReset('A')) player.A.points=player.A.points.add(getResetGain('A',"static"))
	},
	directMult(){
		let gain=player.C.toAdd()
		return gain
	},
	doReset(resettingLayer){
		// if(!hasMilestone('A',2)) layerDataReset(this.layer,["upgrades"])
		if(layers[resettingLayer].row>this.row){
			if(resettingLayer == 'R') return;
			if(resettingLayer == 'C' && hasMilestone('C',2)) return;
			if(resettingLayer == 'Z') return;
			layerDataReset(this.layer, [])
		}
	},
	layerShown() { return hasAchievement('Ach',31) || player.M.points.gte(5000)},
	milestones: {
		1: {
			requirementDescription: "1 教徒",
			effectDescription: function(){
				return `根据教徒数量自动膜拜<br>
`+"当前: "+format(player.A.toAdd().mul(100))+"%/s 膜拜次数"
			},
			done() { return player.A.points.gte(1) }
		},
		2: {
			requirementDescription: "4 教徒",
			effectDescription: "膜拜升级不再被教徒/Orz 重置，并且增加一个新的膜拜升级",
			done() { return player.A.points.gte(4) },
		},
		3:{
			requirementDescription: "8 教徒",
			effectDescription: "你可以最大获得教徒/Orz",
			done() { return player.A.points.gte(8) },
		},
		4:{
			requirementDescription: "16 教徒",
			effectDescription: "膜拜次数不再被教徒/Orz 重置",
			done() { return player.A.points.gte(16) },
		},
		5:{
			requirementDescription: "22 教徒",
			effectDescription: function(){return `略微提升教徒里程碑 1 效果<br>
`+"当前：x"+format(player.A.toAdd4());},
			done() { return player.A.points.gte(22) },
		},
	},
	hotkeys: [
        {
            key: "a",
            description: "a: 重置获得教徒",
            onPress(){if(player.A.unlocked) doReset(this.layer)}
        },
		{
			key: "A",
			description: "shift+a(A): 教徒清零",
			onPress(){player.A.points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
    ]
})
























addLayer("R", {
    startData() { return {                  
        unlocked: false,                     
        points: new ExpantaNum("0"),

		toPow: function(){
			let gain = ExpantaNum(1).add(player.R.points.mul("0.1"))
			
			if(gain.gte(1.5)) {
				gain=gain.sub(1.5).mul(10)
				gain=gain.div(gain.add(Math.E).log())
				gain=gain.div(10).add(1.5)
			}
			return gain.max(1)
		},
    }},

    color: "#D35400",
    resource: "R",
    symbol: "R",
    row: 2,
	branches: ["O"],

    baseResource: "Orz",
    baseAmount() { return player.O.points }, 

    type: "custom",
    requires: new ExpantaNum(21),
	// base: new ExpantaNum(1.14),
    // exponent: 1.514,
	getResetGain(){
		// return ExpantaNum(1)

		let gain = tmp[this.layer].baseAmount.sub(20).pow(0.5)
		gain = gain.add(0.001).floor().sub(player[this.layer].points).max(0)
		if(tmp[this.layer].canBuyMax) return gain
		return gain.min(1)
	},
	getNextAt(canMax=false){
		// return ExpantaNum(1)

		let tp=player[this.layer].points
		if(canMax) tp=tp.add(tmp[this.layer].getResetGain)

		let gain = player[this.layer].points.add(1).pow(2).add(20)
		return gain
	},
	canReset(){
		// return true

		return tmp[this.layer].baseAmount.gte(layers[this.layer].getNextAt())
	},
    prestigeButtonText(){
		let a="重置以获得+" + format(tmp[this.layer].getResetGain) + " R"
		a+=`<br>
		<br>
		`
		a+=(tmp[this.layer].canBuyMax && tmp[this.layer].getResetGain.gte(1)?"下一个在：":"要求：") + format(tmp[this.layer].baseAmount) + " / " + format(tmp[this.layer].getNextAt) + " " + tmp[this.layer].baseResource
		// a+="下一个在 " + format(tmp[this.layer].getNextAt)
		return a
	},
	
	// prestigeNotify(){
	// 	return true

	// 	// if(player[this.layer].is_l) return true
	// 	// if(player.O.points.gte(21)) is_l = OmegaNumOne
	// 	// return is_l
	// 	return tmp[this.layer].getResetGain.gte(player.R.points)
	// },

	canBuyMax(){
		return false
	},

    // gainMult() {
    //     let gain=new ExpantaNum(1)

    //     return gain  
    // },
    // gainExp() {   
    //     return new ExpantaNum(1)
	// 	let gain=ExpantaNum(1)
	// 	gain.floor
    // },

	// doReset(){
	// 	layerDataReset(this.layer,[])
	// },

    layerShown() { //return true 
		return hasAchievement('Ach',23)},
    upgrades: {
		
    },
	
	tabFormat: [
		[
            "display-text",
			function(){
				let a="你有 " + format(player.R.points) + " R"
				if(player.R.points.gte(1)) a+="，为 Orz 对点数/膜拜的加成 ^" + format(player.R.toPow()) + "，对 Orz 成本 ^" + format(OmegaNumOne.div(player.R.toPow())) 
				if(player.R.points.gte(6)) a+=" (软上限)"
				return a
			},
        ],
		"blank",
        "prestige-button",
    ],

	hotkeys: [
		{
			key: "r",
			description: "r: 重置获得 R",
			onPress(){if(canReset("R")) doReset("R")},
		},
		{
			key: "R",
			description: "shift+r(R): R 清零",
			onPress(){player.R.points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
    ]
})
























addLayer('C',{
	startData() { return {                  
        unlocked: false,                     
        points: new ExpantaNum("0"),
		
		toAdd: function(){
			let gain=player.C.points.mul("0.2").add(Math.E).log()
			if(gain.gte(1.35)) gain=gain.pow(0.75).mul(1.07)
			if(gain.gte(1.48)) gain=gain.pow(0.5).mul(1.22)
			if(gain.gte(1.55)) gain=gain.pow(0.25).mul(1.39)
			// if(gain.gte(1.564)) gain=gain.pow(0.15).mul(1.463)
			return gain.max(1)
		},
		toMult: function(){
			let gain=this.points.div(player.A.points.add(1))

			return gain.max(1)
		}
    }},

    color: "#C0C0C0",
    resource: "教堂",
    symbol: "C",
    row: 2,
	branches: ["A"],

    baseResource: "教徒",
    baseAmount() { return player.A.points }, 

    type: "normal",
    requires: new ExpantaNum(25),
    exponent: 0.5,
	
    gainMult() {
        let gain=player.C.points.add(1).pow("-0.1")
		// gain=getNextAt(this.layer, canMax=false, useType = "static")
		// gain=1
		// gain=getResetGain(this.layer, useType = "static")
        return gain //x^5/9765625=c
    },
	doReset(resettingLayer){
		// if(!hasMilestone('A',2)) layerDataReset(this.layer,["upgrades"])
		if(layers[resettingLayer].row>this.row){
			if(resettingLayer == 'Z') return;
			
			layerDataReset(this.layer, [])
		}
	},
	updata(diff){
		if(hasMilestone(this.layer,3)) player[this.layer].points=player[this.layer].points.max(player.A.points.pow(5).div(9765625).floor())
	},
	layerShown() { return hasMilestone('A',5) || hasAchievement('Ach',32)},
	milestones: {
		1: {
			requirementDescription: "1 教堂",
			effectDescription: "自动获得教徒且不重置任何东西",
			done() { return player.C.points.gte(1) }
		},
		2:{
			requirementDescription: "10 教堂",
			effectDescription: "教堂不再重置教徒/膜拜次数/升级",
			done() { return player.C.points.gte(10) }
		},
		3:{
			requirementDescription: "500 教堂",
			effectDescription: "自动获得教堂",
			done() { return player.C.points.gte(500) }
		},
		4:{
			requirementDescription: "2333 教堂",
			effectDescription: function(){return `根据教堂数/人数（你和教徒）提升教徒里程碑 1 效果<br>
当前: x` + format(player[this.layer].toMult())},
			done() { return player.C.points.gte(2333) }
		},
	},
	tabFormat: [
		[
            "display-text",
			function(){
				let a="你有 " + format(player.C.points) + " 教堂"
				if(player.C.points.gte(1)) a+="，为教徒获取 *" + format(player.C.toAdd()) + "，教徒里程碑 1,4 ^" + format(player.C.toAdd())
				return a
			},
        ],
		"blank",
        "prestige-button",
		"blank",
		"milestones",
    ],
	hotkeys: [
        {
            key: "c",
            description: "c: 重置获得教堂",
            onPress(){if(player[this.layer].unlocked) doReset(this.layer)}
        },
		{
			key: "C",
			description: "shift+c(C): 教堂清零",
			onPress(){player[this.layer].points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
    ]
})
























addLayer('Z',{
	startData() { return {                  
        unlocked: false,                     
        points: new ExpantaNum("0"),
		z: new ExpantaNum("0"),
		z1: new ExpantaNum("0"),
		z2: new ExpantaNum("0"),
		z3: new ExpantaNum("0"),
		z4: new ExpantaNum("0"),
		z5: new ExpantaNum("0"),
		z6: new ExpantaNum("0"),
		z7: new ExpantaNum("0"),
		z8: new ExpantaNum("0"),
		toMult: function(){
			// return ExpantaNum(1)
			let gain = this.z.add(1).log().add(1).pow(this.z.add(1).log().add(1).log().add(1).log().add(1))
			return gain
		},
		toMultz: function(){
			let gain=this.points

			return gain
		}
    }},

    color: "#E74C3C",
    resource: "Z",
    symbol: "Z",
    row: 3,
	branches: ["R"],

    baseResource: "R",
    baseAmount() { return player.R.points }, 
	// type: "none",
	type: "custom",
    requires: new ExpantaNum(5),
	getResetGain(){
		// return new ExpantaNum(1)
		let gain = tmp[this.layer].baseAmount.sub(4)
		gain = gain.floor().sub(player[this.layer].points).max(0)
		return gain
	},
	getNextAt(canMax=false){
		// return new ExpantaNum(1)
		return player[this.layer].points.add(5).max(tmp[this.layer].baseAmount.add(1))
	},
	canReset(){
		// return true
		return tmp[this.layer].baseAmount.gte(player[this.layer].points.add(5))
	},
    prestigeButtonText(){
		let a="重置以获得+" + format(tmp[this.layer].getResetGain) + " Z"
		a+=`<br>
		<br>
		`
		a+=(tmp[this.layer].canBuyMax && tmp[this.layer].getResetGain.gte(1)?"下一个在：":"要求：") + format(tmp[this.layer].baseAmount) + " / " + format(tmp[this.layer].getNextAt) + " " + tmp[this.layer].baseResource
		return a
	},
    
	doReset(resettingLayer){
		if(layers[resettingLayer].row>this.row){
			
			layerDataReset(this.layer, [])
		}
	},
	layerShown() { return hasAchievement('Ach',26) || player.R.points.gte(5)},
// 	// )},
// 	// milestones: {
// 	// 	1: {
// 	// 		requirementDescription: "1 教堂",
// 	// 		effectDescription: "自动获得教徒且不重置任何东西",
// 	// 		done() { return player.C.points.gte(1) }
// 	// 	},
// 	// 	2:{
// 	// 		requirementDescription: "10 教堂",
// 	// 		effectDescription: "教堂不再重置教徒/膜拜次数/升级",
// 	// 		done() { return player.C.points.gte(10) }
// 	// 	}
// 	// },
	tabFormat: [
		// [
        //     "display-text",
		// 	function(){
		// 		let a="你有 " + format(player.C.points) + " "
		// 		if(player.C.points.gte(1)) a+="，为教徒获取 *" + format(player.C.toAdd()) + "，教徒里程碑 1,4 ^" + format(player.C.toAdd())
		// 		return a
		// 	},
        // ],
		[
			"display-text",
			function(){
				return "你有 " + format(player[this.layer].points) + " Z，" + "为下面 z_ 生成器乘数 x" + format(player[this.layer].toMultz())
			}
		],
		"blank",
        "prestige-button",
		"blank",
		[
			"display-text",
			function(){
				return "你有 " + format(player[this.layer].z) + " z，" + "为点数生产 x" + format(player[this.layer].toMult())
			}
		],
		"blank",
		"buyables",
		"blank",
		"milestones",
    ],
	update(diff){
		if(hasMilestone(this.layer,1)){
			setBuyableAmount(this.layer,11,player[this.layer].z.log().div(Math.log(10.0)).add(1).floor().max(getBuyableAmount(this.layer,11)))
			setBuyableAmount(this.layer,31,player[this.layer].z.log().div(Math.log(10.0)).div(1).floor().max(getBuyableAmount(this.layer,31)))
			setBuyableAmount(this.layer,41,player[this.layer].z.log().div(Math.log(10.0)).div(2).floor().max(getBuyableAmount(this.layer,41)))
			setBuyableAmount(this.layer,51,player[this.layer].z.log().div(Math.log(10.0)).div(4).floor().max(getBuyableAmount(this.layer,51)))
			setBuyableAmount(this.layer,61,player[this.layer].z.log().div(Math.log(10.0)).div(8).floor().max(getBuyableAmount(this.layer,61)))
			setBuyableAmount(this.layer,71,player[this.layer].z.log().div(Math.log(10.0)).div(16).floor().max(getBuyableAmount(this.layer,71)))
			setBuyableAmount(this.layer,81,player[this.layer].z.log().div(Math.log(10.0)).div(32).floor().max(getBuyableAmount(this.layer,81)))
			setBuyableAmount(this.layer,91,player[this.layer].z.log().div(Math.log(10.0)).div(64).floor().max(getBuyableAmount(this.layer,91)))
			setBuyableAmount(this.layer,101,player[this.layer].z.log().div(Math.log(10.0)).div(128).floor().max(getBuyableAmount(this.layer,101)))
		}
		player[this.layer].z=player[this.layer].z.add(player[this.layer].z1.mul(buyableEffect(this.layer,31)).add((hasAchievement('Ach',26)?1:0)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z1=player[this.layer].z1.add(player[this.layer].z2.mul(buyableEffect(this.layer,41)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z2=player[this.layer].z2.add(player[this.layer].z3.mul(buyableEffect(this.layer,51)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z3=player[this.layer].z3.add(player[this.layer].z4.mul(buyableEffect(this.layer,61)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z4=player[this.layer].z4.add(player[this.layer].z5.mul(buyableEffect(this.layer,71)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z5=player[this.layer].z5.add(player[this.layer].z6.mul(buyableEffect(this.layer,81)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z6=player[this.layer].z6.add(player[this.layer].z7.mul(buyableEffect(this.layer,91)).mul(buyableEffect(this.layer,11)).mul(diff))
		player[this.layer].z7=player[this.layer].z7.add(player[this.layer].z8.mul(buyableEffect(this.layer,101)).mul(buyableEffect(this.layer,11)).mul(diff))
	},
	buyables: {
		11: {
			title: "时间加速器",
			style: {'height':'60px','width':'180px'},
			cost(x) {return ExpantaNum(10).pow(x)},
			effect(){return ExpantaNum(1.2).pow(getBuyableAmount(this.layer,this.id))},
			display(){return `当前: x` + format(this.effect()) + `
需要: ` + format(this.cost()) + ` z`},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).add(1).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				setBuyableAmount(this.layer,this.id,gain)
			}
		},
		31: {
			title: "z1 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(10).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z1) + ` z1
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z1.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(1).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z1=player[this.layer].z1.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
		},
		41: {
			title: "z2 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(100).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z2) + ` z2
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z2.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z1/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(2).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z2=player[this.layer].z2.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,31).gte(1)},
		},
		51: {
			title: "z3 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(10000).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z3) + ` z3
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z3.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z2/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(4).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z3=player[this.layer].z3.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,41).gte(1)},
		},
		61: {
			title: "z4 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(100000000).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z4) + ` z4
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z4.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z3/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(8).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z4=player[this.layer].z4.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,51).gte(1)},
		},
		71: {
			title: "z5 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(1e16).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z5) + ` z5
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z5.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z4/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(16).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z5=player[this.layer].z5.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,61).gte(1)},
		},
		81: {
			title: "z6 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(1e32).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z6) + ` z6
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z6.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z5/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(32).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z6=player[this.layer].z6.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,71).gte(1)},
		},
		91: {
			title: "z7 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(1e64).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z7) + ` z7
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z7.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z6/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(64).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z7=player[this.layer].z7.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,81).gte(1)},
		},
		101: {
			title: "z8 生成器",
			style: {'height':'80px','width':'480px'},
			cost(x) {return ExpantaNum(1e128).pow(x.add(1))},
			effect(){return ExpantaNum(1.5).pow(getBuyableAmount(this.layer,this.id)).mul(player[this.layer].toMultz())},
			display(){return `你有 ` + format(player[this.layer].z8) + ` z8
当前乘数: x` + format(this.effect()) + `
当前生产: +` + format(player[this.layer].z8.mul(this.effect()).mul(buyableEffect(this.layer,11))) + ` z7/s
需要: ` + format(this.cost()) + ' z'},
			canAfford() { return player[this.layer].z.gte(this.cost()) },
			buy(){this.buyMax()},
			buyMax(){
				if(!this.canAfford()) return;
				let gain=player[this.layer].z.log().div(Math.log(10.0)).div(128).floor()
				player[this.layer].z=player[this.layer].z.sub(this.cost(gain.sub(1)))
				player[this.layer].z8=player[this.layer].z8.add(gain.sub(getBuyableAmount(this.layer,this.id)))
				setBuyableAmount(this.layer,this.id,gain)
			},
			unlocked(){return getBuyableAmount(this.layer,91).gte(1)},
		},
	},
	milestones: {
		1: {
			requirementDescription: "1.79e308 z",
			effectDescription: "自动购买 z1-8 生成器且不消耗 z",
			done() { return player.Z.z.gte("1.79e308") },
			unlocked(){return hasAchievement('Ach',45)},
		},
	},
	hotkeys: [
        {
            key: "z",
            description: "z: 重置获得 Z",
            onPress(){if(player[this.layer].unlocked) doReset(this.layer)}
        },
		{
			key: "Z",
			description: "shift+z(Z): Z 清零",
			onPress(){player[this.layer].points=ExpantaNum(0)},
			unlocked(){return _FJqwq()}
		},
    ]
})















































// addLayer('9',{
// 	startData() { return {                  
//         unlocked: true,                     
//         points: new ExpantaNum("0"),
//     }},

//     color: "#CDCA49",
//     resource: "9",
//     symbol: "9",
//     row: 0,
// 	type: "none",
// 	prestigeNotify(){return true},
// })

/*
addLayer("T", { //次于Q节点 1层
    name: "TAT", 
    symbol: "T", 
    position: 3, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#d3a4ff",
    requires: new ExpantaNum(1000),//1000 
    resource: "T点", 
    baseResource: "Q点", 
    baseAmount() {return player.Q.points}, 
    type: "normal", 
    exponent: 0.5, 
	branches: ["Q"],
	effectDescription(){return `(TAT)`},
    gainMult() {
        //mult = new ExpantaNum(1)
			var eff = player[this.layer].points.add(1).pow(0) 
				var b = player.Q.points
				var a = player.T.points
				var d = player.Tb.points
					if(!inChallenge('ab',21)){
						if (!inChallenge('ab',11)){
							if(!inChallenge('Tb',11)){
					if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1);
					if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
					if (!inChallenge('ab',12)){
					if (hasUpgrade('Tb',12)) eff = eff.mul((d**0.25)+1)};
					if (hasChallenge('a',12)) eff = eff.add(1).pow(1.2)}}};
					
			return eff
        //return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	hotkeys: [
        {key: "t", description: "t: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("Q",23))},
	

   ////////////////////////////////////////////////////////////
   	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var b = new ExpantaNum(0)
			  if(!inChallenge('ab',21)){
        if(hasUpgrade("W",15)) var b = new ExpantaNum(0.01)//return 0.01
		if(hasUpgrade("W",22)) var b = new ExpantaNum(0.05)//return 0.05
		if (!inChallenge('ab',12)){
		if(hasUpgrade("Tb",13)) var b = new ExpantaNum(0.1)//return 0.1
		if(hasUpgrade("Tb",22)) var b = new ExpantaNum(0.2)//return 0.2
		if(hasUpgrade("Wb",13)) var b = new ExpantaNum(0.4)//return 0.4
			  if(hasUpgrade("Wb",22)) var b = new ExpantaNum(0.6)}}//return 0.6
		//if(hasMilestone("T",5)) return 0.05
       
        return b
    },
   //////////////////////////////////////////////
	doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					  var t = hasMilestone('T',6)
					  var r = hasMilestone('Tb',1)
					  var k = hasUpgrade('Tb',31)
					//  var d = hasMilestone('W',4)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
		if(t) player.T.milestones = [0,1,6];
		if(r) player.T.milestones = [0,1,2,3,4,5,6];
		if(k) player.T.upgrades = [11,12,13,14,15]};		
		
		},
		
	//////////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"加成？",
				description:"T点倍增<br>QwQ获取",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
						var a = player.T.points
						if(!inChallenge('ab',21)){
						if (!inChallenge('ab',11)){
						  if(!inChallenge('Tb',11)){
							if (hasUpgrade('T',11)) eff = eff.mul((a**0.3)+1)
							if (hasUpgrade('T',12)) eff = eff.mul((a**0.075)+1)
							if (hasUpgrade('T',13)) eff = eff.mul((a**0.185)+1)
							if (hasUpgrade('T',15)) eff = eff.mul((a**0.215)+1)
						}}}
							
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				12:{
				title:"真的？",
				description:"改善T11的加成",
				cost:new ExpantaNum(3),
				unlocked(){return hasUpgrade("T",11)},
			       },
				13:{
				title:"好东西？",
				description:"再次改善<br>T11的加成",
				unlocked(){return hasUpgrade("T",12)},
				cost:new ExpantaNum(9),
			       },
				14:{
				title:"这有用吗？",
				description:"根据T点<br>倍增T点获得",
				cost:new ExpantaNum(27),
				unlocked(){return hasUpgrade("T",13)},
				effect(){
						var eff = player.T.points.pow(0)
							var b = player.Q.points
							var a = player.T.points
							if(!inChallenge('ab',21)){
							if(!inChallenge('Tb',11)){
							if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1);
							if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
							}}
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				15:{
				title:"这是什么？",
				description:"改善T11的加成",
				cost:new ExpantaNum(81),
				unlocked(){return hasUpgrade("T",14)},
			       },
				21:{
				title:"这个好！",
				description:"每秒获得0.5%<br>的可以重置的Q点",
				cost:new ExpantaNum(243),
				unlocked(){return hasUpgrade("T",15)},
			       },
				22:{
				title:"这个也好！",
				description:"每秒获得1.5%<br>的可以重置的Q点",
				cost:new ExpantaNum(486),
				unlocked(){return hasUpgrade("T",21)},
					},
				23:{
				title:"这个还好！",
				description:"改善T14的效果",
				cost:new ExpantaNum(972),
				unlocked(){return hasUpgrade("T",22)},
			       },
				31:{
				title:"这个更好！",
				description:"每秒.....<br>别想了,这是开W节点的",
				cost:new ExpantaNum(2916),
				unlocked(){return hasUpgrade("T",23)},
			       },
			},

////////////////////////////////////////////////////////
	milestones: {
		0: {
			requirementDescription: "1 T点",
			effectDescription: "您获得了第一个T点",
		done() {
			return player.T.points.gte(1)},
			
			
			},
		1: {
			requirementDescription: "2 T点",
			effectDescription: "保留Q11~Q13升级",
		done() {
			return player.T.points.gte(2)},
			
			
			},
		2: {
			requirementDescription: "6 T点",
			effectDescription: "保留Q节点第一排升级",
		done() {
			return player.T.points.gte(6)},
				},
		3: {
			requirementDescription: "25 T点",
			effectDescription: "保留Q节点全部升级",
		done() {
			return player.T.points.gte(25)},
				},
		4: {
			requirementDescription: "50 T点",
			effectDescription: "重置时以10Q点开始",
		done() {
			return player.T.points.gte(50)},
				},
		5: {
			requirementDescription: "1000 T点",
			effectDescription: "每秒获得5%的Q点",
			unlocked(){return hasUpgrade("T",22)},
		done() {
			return player.T.points.gte(1000)},
				},
		6: {
			requirementDescription: "8000 T点",
			effectDescription: "重置时保留T里程碑 1 2<br>也保留本里程碑",
		done() {
			return player.T.points.gte(8000)},
				},

	},

})
addLayer("W", { //次于T节点 1层
    name: "WwW", 
    symbol: "W", 
    position: 1, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#97CBFF",
    requires: new ExpantaNum(10000),
    resource: "W点", 
    baseResource: "Q点", 
    baseAmount() {return player.Q.points}, 
    type: "normal", 
    exponent: 0.4, 
	branches: ["Q"],
	effectDescription(){return `(WwW)`},
    gainMult() {
        //mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
				var b = player.Q.points
				var a = player.T.points
				var c = player.W.points
				var y = player.Wb.points
				if(!inChallenge('ab',21)){
					if (!inChallenge('ab',11)){
						if (!inChallenge('Wb',11)){
					if (hasUpgrade('W',14)) eff = eff.mul((c**0.15)+1);
					if (!inChallenge('ab',12)){
					if (hasUpgrade('Wb',12)) eff = eff.mul((y**0.35)+1)};
					if (hasChallenge('a',21)) eff = eff.add(1).pow(1.2);
				}}}
					
			return eff
        //return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	hotkeys: [
        {key: "w", description: "w: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("T",31))},
//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
	   doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var a = hasMilestone('W',1)
					var b = hasMilestone('W',2)
					var c = hasMilestone('W',3)
					var d = hasMilestone('W',4)
					var e = hasMilestone('W',5)
					var u = hasMilestone('Tb',3)
					var o = hasMilestone('Wb',1)
					var oo = hasMilestone('Wb',3)
				    var k = hasUpgrade('Tb',31)
					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
					var c = hasMilestone('W',3)
					var d = hasMilestone('W',4)
					var e = hasMilestone('W',5)
			if(e) player.W.milestones = [0,1,5];
			if(e) player.T.milestones = [0,1,2,6];
			if(u) player.W.milestones = [0,1,2,6];
			if(oo)player.W.milestones = [0,1,2,3,4,5];
			if(o) player.W.upgrades = [11,12,13,14,15];
			if(k) player.T.upgrades = [11,12,13,14,15];
		if(a) player.T.upgrades = [11];
		if(b) player.T.upgrades = [11,12,13];
		if(c) player.T.upgrades = [11,12,13,14,15];
		if(d) player.T.upgrades = [11,12,13,14,15,21,22,23];
		//if(b) player.Q.upgrades = [11,12,13,14,15];

																};
		},
		
		  ////////////////////////////////////////////////////////////
   	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var c = new ExpantaNum(0)
			  if(!inChallenge('ab',21)){
        if(hasUpgrade("W",23)) var c = new ExpantaNum(0.01)//return 0.01
		if (!inChallenge('ab',12)){
		if(hasUpgrade("Tb",23)) var c = new ExpantaNum(0.05)//return 0.05
			  if(hasUpgrade("Wb",23)) var c = new ExpantaNum(0.2)}}//return 0.20

       
        return c
    },
   //////////////////////////////////////////////
		///////////////////////////////////////////////////////////////
		upgrades:{
				11:{
				title:"什么？",
				description:"W点倍增<br>QwQ获取",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
						var c = player.W.points
						if(!inChallenge('ab',21)){
						if (!inChallenge('ab',11)){
							if (!inChallenge('Wb',11)){
							if (hasUpgrade('W',11)) eff = eff.mul((c**0.5)+1)
							if (hasUpgrade('W',12)) eff = eff.mul((c**0.275)+1)
							if (hasUpgrade('W',13)) eff = eff.mul((c**0.385)+1)
						}}}
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"重复？",
				description:"改善W11<br>对QwQ的加成",
				cost:new ExpantaNum(5),
				unlocked(){return hasUpgrade("W",11)},
					},
				13:{
				title:"卧槽？",
				description:"再次改善W11<br>对QwQ的加成",
				cost:new ExpantaNum(64),
				unlocked(){return hasUpgrade("W",12)},
					},
				14:{
				title:"卧槽！",
				description:"根据W点<br>倍增W点获取",
				cost:new ExpantaNum(144),
				unlocked(){return hasUpgrade("W",13)},
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
							var c = player.W.points
							if(!inChallenge('ab',21)){
								if (hasUpgrade('W',14)) eff = eff.mul((c**0.15)+1)
							}
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
					},
				15:{
				title:"重复！",
				description:"每秒获得1%的<br>可以重置的T点",
				cost:new ExpantaNum(800),
				unlocked(){return hasUpgrade("W",14)},
					},
				21:{
				title:"还真是！",
				description:"每秒获得10%<br>可重置的Q点",
				cost:new ExpantaNum(2500),
				unlocked(){return hasUpgrade("W",15)},
					},
				22:{
				title:"就这？",
				description:"每秒获得5%的<br>可以重置的T点",
				cost:new ExpantaNum(6000),
				unlocked(){return hasUpgrade("W",21)},
					},
				23:{
				title:"没错！",
				description:"每秒获得1%的<br>可以重置的W点",
				cost:new ExpantaNum(10000),
				unlocked(){return hasUpgrade("W",22)},
					},
				31:{
				title:"就这！",
				description:"大幅提升Q11加成<br>是不是快把Q11忘记了",
				cost:new ExpantaNum(25000),
				unlocked(){return hasUpgrade("W",23)},
					},
				
	},
	///////////////////////////////////////////////////////////////
		milestones: {
		0: {
			requirementDescription: "1 W点",
			effectDescription: "您获得了第一个Q点",
			done() {
			return player.W.points.gte(1)},
				},
		1: {
			requirementDescription: "100 W点",
			effectDescription: "重置时保留T11升级",
			done() {
			return player.W.points.gte(100)},
				},
		2: {
			requirementDescription: "10,000 W点",
			effectDescription: "重置时保留T12 T13升级",
			done() {
			return player.W.points.gte(10000)},
				},
		3: {
			requirementDescription: "10,000,000 W点",
			effectDescription: "重置时保留T节点第一排升级",
			done() {
			return player.W.points.gte(10000000)},
				},
		4: {
			requirementDescription: "1e9 W点",
			effectDescription: "重置时保留T节点第二排升级",
			done() {
			return player.W.points.gte(1e9)},
				},
		5: {
			requirementDescription: "1e12 W点",
			effectDescription: "重置时保留W里程碑1 2 和T里程碑3<br>并且保留此里程碑",
			done() {
			return player.W.points.gte(1e12)},
				},
			
			
					},
		
})
addLayer("a", { //次于T\W节点 2层 (挑战层)
    name: "awa", 
    symbol: "a", 
    position: 1, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#93FF93",
	requires: new ExpantaNum(0),
    resource: "a点", 
	baseResource: "a点", 
	baseAmount() {return player.a.points}, 
    type: "normal", 
	exponent: NaN, 
	branches: ["W","T"],
	effectDescription(){return `(awa)<br>注：为了不触发bug 请不要获取a点(无任何用处)<br>需要做挑战
	时点获得a点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("T",31)&&(hasUpgrade("W",31)))},
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
		challenges: {
		11: {
			name: "珍惜你的QwQ点数！<h1>1.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其42%<br>注：重置所有 里程碑/升级保留除外",
			//unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.T.points.gte(1e6) && player.W.points.gte(5e4)},
			goalDescription:"1e6(1,000,000) T点<br>5e4(50,000) W点",
			rewardDescription: "无<h6>用来开启ac12<h6>QwQ获取^2",
			},
		12: {
			name: "珍惜你的QwQ点数！<h1>2.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其38%<br>注：重置所有 里程碑/升级保留除外",
			unlocked() {return hasChallenge("a",11)&&hasChallenge("Tb",11)&&hasChallenge("Wb",11)},
			canComplete: function() {return player.T.points.gte(1e28) && player.W.points.gte(1e19)},
			goalDescription:"1e28 T点1e19 W点",
			rewardDescription: "无<h6>用来开启ac22<h6>T点获取^1.2",
			},
		21: {
			name: "珍惜你的QwQ点数！<h1>3.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其32%<br>注：重置所有 里程碑/升级保留除外",
			unlocked() {return hasChallenge("a",12)},
			canComplete: function() {return player.T.points.gte(1e31) && player.W.points.gte(5e19)},
			goalDescription:"1e31 T点 5e19 W点",
			rewardDescription: "无<h6>用来开启ab节点<h6>W获取1.2",
			},
		22: {
			name: "珍惜你的QwQ点数！<h1>4.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其25%<br>注：重置所有 里程碑/升级保留除外",
			unlocked() {return hasChallenge("a",21)},
			canComplete: function() {return player.T.points.gte(2e38) && player.W.points.gte(5e24)},
			goalDescription:"2e38 T点 5e24 W点",
			rewardDescription: "无<h6>QwQ获取^2",
			},
					},
		
		
})
addLayer("ab", { //a节点的额外挑战节点 1层
    name: "awab", 
    symbol: "ab", 
    position: 2, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#79FF79",
	requires: new ExpantaNum(0),
    resource: "ab点", 
	baseResource: "a点", 
	baseAmount() {return player.ab.points}, 
    type: "normal", 
	exponent: 0.5, 
	branches: ["a"],
	effectDescription(){return `(WwWb)<br>awa的额外挑战节点<br>注：为了不触发bug 请不要获取ab点(无任何用处)<br>需要做挑战
	时点获得ab点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge('a',22))},
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
				challenges: {
		11: {
			name: "珍惜你的升级！<h1>1.0",
			challengeDescription: "T和W节点升级无效<br>虽然显示xxx×但并无效果",
			//unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.Q.points.gte(1e40)},
			goalDescription:"1e40 Q点",
			rewardDescription: "无<h6>用来开启abc12<h6>QwQ获取^2",
			},
		12: {
			name: "珍惜你的升级！<h1>2.0",
			challengeDescription: "Tb和Wb节点升级无效<br>虽然显示xxx×但并无效果",
			unlocked() {return hasChallenge("ab",11)},
			canComplete: function() {return player.Q.points.gte(1e37)},
			goalDescription:"1e37 Q点",
			rewardDescription: "无<h6>用来开启ac21<h6>QwQ获取^2",
			},
		21: {
			name: "珍惜你的升级！<h1>3.0",
			challengeDescription: "W和T和Wb和Tb节点升级无效<br>虽然显示xxx×但并无效果",
			unlocked() {return hasChallenge("ab",12)},
			canComplete: function() {return player.Q.points.gte(1e31)},
			goalDescription:"1e31 Q点",
			rewardDescription: "无<h6>用来开启Qb节点<h6>QwQ获取^1.5",
			},
					},
		
		
		
})
addLayer("Tb", { //T节点的额外升级节点 2层
    name: "TATb", 
    symbol: "Tb", 
    position: 2, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#BE77FF",
	requires: new ExpantaNum(1000000000),
    resource: "Tb点", 
	baseResource: "T点", 
	baseAmount() {return player.T.points}, 
    type: "normal", 
	exponent: 0.5, 
	branches: ["T"],
	effectDescription(){return `(TATb)<br>注：TAT的升级节点(额外) `},
    gainMult() {
       // mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
			//eff = softcap(eff,new ExpantaNum(1e40),0.1)
			var d = player.Tb.points
			if(!inChallenge('ab',21)){
			if (!inChallenge('ab',12)){
			if (hasUpgrade('Tb',11)) eff = eff.mul((d**0.35)+1)}};
			if (!hasUpgrade('Qb',21)) {if (player.Tb.points > new ExpantaNum(1e40)) eff = eff.pow(0.5)};
			if (hasUpgrade('Qb',21)) {if (player.Tb.points > new ExpantaNum(1e50)) eff = eff.pow(0.5)};
				
		return eff
       //return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge('a',11))},
//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
milestones: {
		0: {
			requirementDescription: "1 Tb点",
			effectDescription: "您获得了第一个Tb点",
			done() {
			return player.Tb.points.gte(1)},
				},
		1: {
			requirementDescription: "10 Tb点",
			effectDescription: "重置保留T节点所有里程碑",
			done() {
			return player.Tb.points.gte(10)},
				},
		2: {
			requirementDescription: "100 Tb点",
			effectDescription: "开启Tb节点的第一排升级",
			done() {
			return player.Tb.points.gte(100)},
				},
		3: {
			requirementDescription: "1000 Tb点",
			effectDescription: "保留W节点里程碑1 2 3",
			done() {
			return player.Tb.points.gte(1000)},
				},
		4: {
			requirementDescription: "100,000 Tb点",
			effectDescription: "开启Tb节点的第二排升级",
			done() {
			return player.Tb.points.gte(100000)},
				},
			},
			////////////////////////////////////////////
			upgrades:{
				11:{
				title:"还是加成？",
				description:"根据Tb加成Tb获取",
				cost:new ExpantaNum(50),
				unlocked(){return hasMilestone("Tb",2)},
				effect(){
						let eff = player.Tb.points.add(1).pow(0) 
							var d = player.Tb.points
							if(!inChallenge('ab',21)){
							if (!inChallenge('ab',12)){
							if (hasUpgrade('Tb',11)) eff = eff.mul((d**0.35)+1)}};
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"还是加成!",
				description:"根据Tb加成T获取",
				cost:new ExpantaNum(500),
				unlocked(){return hasUpgrade("Tb",11)},
				},
				13:{
				title:"又是加成？",
				description:"每秒获得10%<br>可以重置的T点",
				cost:new ExpantaNum(2500),
				unlocked(){return hasUpgrade("Tb",12)},
				},
				14:{
				title:"又是加成!",
				description:"根据Tb加成Q获取",
				cost:new ExpantaNum(12500),
				unlocked(){return hasUpgrade("Tb",13)},
				},
				15:{
				title:"这是·····？",
				description:"获取一个挑战",
				cost:new ExpantaNum(30000),
				unlocked(){return hasUpgrade("Tb",14)},
				},
				21:{
				title:"什么玩意？",
				description:"每秒获得<br>可重置Q点的50%",
				cost:new ExpantaNum(50000),
				unlocked(){return hasMilestone("Tb",4)&& hasChallenge('Tb',11)},
				},
				22:{
				title:"什么东西？",
				description:"每秒获得<br>可重置T点的20%",
				cost:new ExpantaNum(80000),
				unlocked(){return hasUpgrade("Tb",21)},
				},
				23:{
				title:"什么鬼？",
				description:"每秒获得<br>可重置W点的5%",
				cost:new ExpantaNum(100000),
				unlocked(){return hasUpgrade("Tb",22)},
				},
				31:{
				title:"懂了！",
				description:"重置保留T<br>第一排升级",
				cost:new ExpantaNum(5e7),
				unlocked(){return hasChallenge("Tb",11)},
				},
			},
	/////////////////////////////////////////////////////////////////////
			challenges: {
		11: {
			name: "珍惜你的T层升级！",
			challengeDescription: "重置你的QTW层所有东西<br>(里程碑/挑战保留除外)<br>T层级升级无效",
			unlocked() {return hasUpgrade("Tb",15)},
			canComplete: function() {return player.T.points.gte(1e6) && player.W.points.gte(1e4)},
			goalDescription:"1e6(1,000,000)T点 1e4(10,000)W点",
			rewardDescription: "无<h6>用来开启Tb第二排升级<br>解锁第二排升级<h6>QwQ获取^1.5",
			},
					},
				
		
})
addLayer("Wb", { //W节点的额外升级节点 2层
    name: "WwWb", 
    symbol: "Wb", 
    position: 0, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#66B3FF",
	requires: new ExpantaNum(1000000),
    resource: "Wb点", 
	baseResource: "W点", 
	baseAmount() {return player.W.points}, 
    type: "normal", 
	exponent: 0.5, 
	branches: ["W"],
	effectDescription(){return `(WwWb)<br>注：WwW的升级节点(额外) `},
    gainMult() {
       // mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
			var y = player.Wb.points
			if(!inChallenge('ab',21)){
			if (!inChallenge('ab',12)){
			if (hasUpgrade('Wb',11)) eff = eff.mul((y**0.45)+1)}};
			if (!hasUpgrade('Qb',22)) {if (player.Tb.points > new ExpantaNum(1e30)) eff = eff.pow(0.5)};
			if (hasUpgrade('Qb',22)) {if (player.Tb.points > new ExpantaNum(1e40)) eff = eff.pow(0.5)};
				
		return eff
       // return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge('a',11))},
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
milestones: {
		0: {
			requirementDescription: "1 Wb点",
			effectDescription: "您获得了第一个Wb点",
			done() {
			return player.Wb.points.gte(1)},
				},
		1: {
			requirementDescription: "5 Wb点",
			effectDescription: "重置保留w节点第一排升级",
			done() {
			return player.Wb.points.gte(5)},
				},
		2: {
			requirementDescription: "50 Wb点",
			effectDescription: "开启Tb节点的第一排升级",
			done() {
			return player.Wb.points.gte(50)},
				},
		3: {
			requirementDescription: "5000 Wb点",
			effectDescription: "重置保留w节点所有里程碑",
			done() {
			return player.Wb.points.gte(5000)},
				},
		4: {
			requirementDescription: "500,000 Wb点",
			effectDescription: "开启Wb节点的第二排升级",
			done() {
			return player.Wb.points.gte(500000)},
				},
			},
/////////////////////////////////////////////////////////////////////////////////////////////
		upgrades:{
				11:{
				title:"还是加成？",
				description:"根据Wb加成Wb获取",
				cost:new ExpantaNum(3),
				unlocked(){return hasMilestone("Wb",2)},
				effect(){
						let eff = player.Wb.points.add(1).pow(0) 
						var y = player.Wb.points
						if(!inChallenge('ab',21)){
						if (!inChallenge('ab',12)){
						if (hasUpgrade('Wb',11)) eff = eff.mul((y**0.45)+1)}};
							
							
							//if (hasUpgrade('T',15)) eff = eff.mul((a**0.215)+1)
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"还是加成!",
				description:"根据Wb加成W获取",
				cost:new ExpantaNum(30),
				unlocked(){return hasUpgrade("Wb",11)},
				},
				13:{
				title:"又是加成？",
				description:"每秒获得40%<br>可以重置的T点",
				cost:new ExpantaNum(800),
				unlocked(){return hasUpgrade("Wb",12)},
				},
				14:{
				title:"又是加成!",
				description:"根据Wb加成Q获取",
				cost:new ExpantaNum(3000),
				unlocked(){return hasUpgrade("Wb",13)},
				},
				15:{
				title:"这是·····？",
				description:"获取一个挑战",
				cost:new ExpantaNum(8000),
				unlocked(){return hasUpgrade("Wb",14)},
				},
				21:{
				title:"什么玩意？",
				description:"每秒获得<br>可重置Q点的100%",
				cost:new ExpantaNum(12000),
				unlocked(){return hasMilestone("Wb",4)&& hasChallenge('Wb',11)},
				},
				22:{
				title:"什么东西？",
				description:"每秒获得<br>可重置T点的60%",
				cost:new ExpantaNum(25000),
				unlocked(){return hasUpgrade("Wb",21)},
				},
				23:{
				title:"什么鬼？",
				description:"每秒获得<br>可重置W点的20%",
				cost:new ExpantaNum(50000),
				unlocked(){return hasUpgrade("Wb",22)},
				},
				31:{
				title:"懂了！",
				description:"重置保留W所有升级",
				cost:new ExpantaNum(5e7),
				unlocked(){return hasChallenge("Wb",11)},
				},
			},
	/////////////////////////////////////////////////////////////////////
			challenges: {
		11: {
			name: "珍惜你的W层升级！",
			challengeDescription: "重置你的QTW层所有东西<br>(里程碑/挑战保留除外)<br>W层级升级无效",
			unlocked() {return hasUpgrade("Wb",15)},
			canComplete: function() {return player.T.points.gte(1e20) && player.W.points.gte(1e8)},
			goalDescription:"1e20 T点 1e8(100,000,000)W点",
			rewardDescription: "无<h6>用来开启Wb第二排升级<br>解锁第二排升级<h6>QwQ获取^1.5<h6>保留T所有升级",
			},
					},
				
})
var z = new ExpantaNum(1)
var zz = new ExpantaNum(1)
var zzz = new ExpantaNum(1)
addLayer("Qb", { //次于Tb/Wb/Q节点 2层 
    name: "QwQb", 
    symbol: "Qb", 
    position: 3, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#A6FFFF",
	requires: new ExpantaNum(1e72),
    resource: "Qb点", 
	baseResource: "Q点", 
	baseAmount() {return player.Q.points}, 
    type: "normal", 
	exponent: 0.3, 
	branches: ["Q"],
	//effectDescription(){return `(awa)<br>注：为了不触发bug 请不要获取a点(无任何用处)<br>需要做挑战
	//时点获得a点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
   gainMult() {
       // mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
			var QBD = player.Wb.points
			if (QBD > new ExpantaNum(1000)) eff = eff.pow(0.5);
				
		return eff
       // return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge("ab",21))},
//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
	upgrades:{
		//var z = new ExpantaNum(1000)
				11:{
				title:"提升！",
				description:"QwQ获取提高^1.7<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				//canAfford(){return hasupgrade('Qb',12)}
				onPurchase(){z = z.mul(5)},
				},
				12:{
				title:"提升！",
				description:"QwQ获取提高^1.5<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",11)},
				onPurchase(){z = z.mul(5)},
				},
				13:{
				title:"提升！",
				description:"QwQ获取提高^1.9<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",12)},
				onPurchase(){z = z.mul(5)},
				},
				14:{
				title:"提升！",
				description:"QwQ获取提高^2<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",13)},
				onPurchase(){z = z.mul(5)},
				},
				15:{
				title:"开启Qb第二排",
				description:"<br><br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",11)&&hasUpgrade("Qb",12)&&hasUpgrade("Qb",13)&&hasUpgrade("Qb",14)},
				onPurchase(){z = z.mul(5)},
				},
				21:{
				title:"移除！",
				description:"将Tbe40软上限<br>延迟到e50<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",15)},
				onPurchase(){z = z.mul(5)},
				},
				22:{
				title:"移除！",
				description:"将Wbe30软上限<br>延迟到e40<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",15)},
				onPurchase(){z = z.mul(5)},
				},
				23:{
				title:"移除！",
				description:"将QwQ点数e105软上限延迟到e124<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",15)},
				onPurchase(){z = z.mul(5)},
				},
				24:{
				title:"移除！",
				description:"将QwQ点数e124软上限延迟到e140<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",15)&&hasUpgrade("Qb",23)},
				onPurchase(){z = z.mul(5)},
				},
				25:{
				title:"开启Qb第三排",
				description:"<br><br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",21)&&hasUpgrade("Qb",22)&&hasUpgrade("Qb",23)&&hasUpgrade("Qb",24)},
				onPurchase(){z = z.mul(5)},
				},
				31:{
				title:"保留Wb全部升级",
				description:"不能与Qb32<br>同时拥有<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z*zz)},
				unlocked(){return hasUpgrade("Qb",25)},
				onPurchase(){z = z.mul(5) , zz = zz.mul(1e305)},
				},
				32:{
				title:"保留Tb全部升级",
				description:"不能与Qb31<br>同时拥有<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z*zz)},
				unlocked(){return hasUpgrade("Qb",25)},
				onPurchase(){z = z.mul(5) , zz = zz.mul(1e305)},
				},
				33:{
				title:"保留Wb里程碑",
				description:"不能与Qb34<br>同时拥有<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z*zzz)},
				unlocked(){return hasUpgrade("Qb",25)&&hasUpgrade("Qb",31)||hasUpgrade("Qb",32)},
				onPurchase(){z = z.mul(5) , zzz = zzz.mul(1e305)},
				},
				34:{
				title:"保留Tb里程碑",
				description:"不能与Qb33<br>同时拥有<br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z*zzz)},
				unlocked(){return hasUpgrade("Qb",25)&&hasUpgrade("Qb",31)||hasUpgrade("Qb",32)},
				onPurchase(){z = z.mul(5) , zzz = zzz.mul(1e308)},
				},
				35:{
				title:"开启Qb41",
				description:"暂未设定<br><br><br>价格增长：5×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",33)||hasUpgrade("Qb",34)},
				onPurchase(){z = z.mul(5)},
				},
	},


		///////////////////////////////////////////////////////////////

})
addLayer("Q", { //主节点    0层
    name: "QwQ", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized节点名字
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#BBFFFF",
	requires: new ExpantaNum(10),
    resource: "Q点", // Name of prestige currency
	baseResource: "QwQ",
	baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.55,
	effectDescription(){return `(QwQ)`},

	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var a = new ExpantaNum(0)
			  if(!inChallenge('ab',21)){
        if(hasUpgrade("T",21)) var a = new ExpantaNum(0.005)//return 0.005
		if(hasUpgrade("T",22)) var a = new ExpantaNum(0.015)//return 0.015
		if(hasMilestone("T",5)) var a = new ExpantaNum(0.05)//return 0.05
		if(hasUpgrade("W",21)) var a = new ExpantaNum(0.1)//return 0.1
		if(hasUpgrade("Q",31)) var a = new ExpantaNum(0.2)
		if (!inChallenge('ab',12)){
		if(hasUpgrade("Tb",21)) var a = new ExpantaNum(0.5)//return 0.5
		if(hasUpgrade("Wb",21)) var a = new ExpantaNum(1)}}
		//return 1
		return a
       
        
    },
	/////////////////////////////////////////////////
	//softcap:new ExpantaNum(1), 
    //softcapPower:new ExpantaNum(0.5), 
	////////////////////////////////////////////////////////////////////////////
    gainMult() { // Calculate the multiplier for main currency from bonuses
        //mult = new ExpantaNum(1)
			var eff = player[this.layer].points.add(1).pow(0) 
			var b = player.Q.points
			var a = player.T.points
			var d = player.Tb.points
			var y = player.Wb.points
				if (hasUpgrade('Q',14)) eff = eff.mul((b**0.135)+1);
				if(!inChallenge('ab',21)){
				if (!inChallenge('ab',12)){
				if (hasUpgrade('Tb',14)) eff = eff.mul((d**0.2)+1);
				if (hasUpgrade('Wb',14)) eff = eff.mul((y**0.3)+1)}};
				//if (hasUpgrade('T',11)) eff = eff = eff.mul(b^0.025)
				//if (hasUpgrade('T',12)) eff = eff = eff.mul(b^0.035)
				
				
				
			return eff
        //return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var aa = hasMilestone('Q',0)
					var a = hasMilestone('T',1)
					var b = hasMilestone('T',2)
					var c = hasMilestone('T',3)
					var d = hasMilestone('T',4)
					var e = hasUpgrade('Q',22)
					var f = hasChallenge('Q',11)
					var k = hasUpgrade('Tb',31)
					var h = hasChallenge('Wb',11)
					var g = hasUpgrade('Wb',31)
					var w = hasUpgrade('Qb',11)
					var ww = hasUpgrade('Qb',12)

					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
		if(aa) player.Q.milestones = [0];
		if(a) player.Q.upgrades = [11,12,13];
		if(b) player.Q.upgrades = [11,12,13,14,15];
		if(c) player.Q.upgrades = [11,12,13,14,15,21,23];
		if(f) player.Q.upgrades = [11,12,13,14,15,21,22,23];
		if(f) player.Q.challenges = [11];
		if(w)player.Wb.upgrades = [11,12,13,14,15,21,22,23,31];
		if(ww)player.Tb.upgrades = [11,12,13,14,15,21,22,23,31];
		if(d) player.Q.points = new ExpantaNum(10);
		if(k) player.T.upgrades = [11,12,13,14,15];
		if(h) player.T.upgrades = [11,12,13,14,15,21,22,23,31];
		if(g) player.W.upgrades = [11,12,13,14,15,21,22,23,31];
		if(e) player.Q.upgrades = [11,12,13,14,15,21,22,23]};
		//////////////////////////////////////////////////
            //layerDataReset(this.layer, keep)
		//if(aa) player.Q.milestones = [0];
													
		
		
		},  
///////////////////////////////////////////////////////////////////////
	upgrades:{
				11:{
				title:"加成？",
				description:"根据Q点<br>加成QwQ获取",
				cost:new ExpantaNum(3),
				
					effect(){
						let eff = player[this.layer].points.add(1).pow(0) 
							var b = player.Q.points	
							if (hasUpgrade('Q',11)) eff = eff.mul((b**0.3)+1)
							if (hasUpgrade('Q',12)) eff = eff.mul((b**0.085)+1)
							if (hasUpgrade('Q',13)) eff = eff.mul((b**0.09)+1)
							if (hasUpgrade('Q',15)) eff = eff.mul((b**0.095)+1)
							if (hasUpgrade('Q',21)) eff = eff.mul((b**0.1)+1)
							if (hasUpgrade('W',31)) eff = eff.mul((b**0.5)+1)
	
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"加成！",
				description:"改善Q11的加成<br>注：这是有加成的<br>直接在Q11上显示",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("Q",11)},
				},
				13:{
				title:"起飞了？",
				description:"再改善Q11的加成<br>注：同Q12",
				cost:new ExpantaNum(36),
				unlocked(){return hasUpgrade("Q",12)},
			       },
				14:{
				title:"起飞了！",
				description:"根据Q点倍增<br>获取Q点的数量<br>(效果可以看成÷)",
				cost:new ExpantaNum(72),//96
				unlocked(){return hasUpgrade("Q",13)},
					effect(){
						var eff = player.points.pow(0)
							var b = player.Q.points
							if (hasUpgrade('Q',14)) eff = eff.mul((b**0.135)+1);
						return eff
							},
						effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				15:{
				title:"芜湖~",
				description:"没什么用<br>用来开启Q21",
				cost:new ExpantaNum(100),
				unlocked(){return hasUpgrade("Q",14)},
			       },
				21:{
				title:"芜湖~~",
				description:"再次提升！<br>Q11的效果",
				cost:new ExpantaNum(200),
				unlocked(){return hasUpgrade("Q",15)},
			       },
				22:{
				title:"挑战？",
				description:"解锁一个挑战",
				cost:new ExpantaNum(1e10),
				unlocked(){return hasChallenge('a',11)},
			       },
				23:{
				title:"开始！",
				description:"解锁一个<br>新的节点",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",21)},
			       },
				31:{
				title:"太强了！",
				description:"每秒获得20%<br>可重置的Q点",
				cost:new ExpantaNum(1e13),
				unlocked(){return hasUpgrade("Q",23)&&(hasChallenge('a',11))&&(hasChallenge('Q',11))},
			       },
	},
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
			//可重复购买项
	clickables:{
		11: {
			display() {return "<h3>购买</h3><br>极小的加成<br>QwQ的获取"},
			unlocked(){return hasUpgrade("Q",00)},
			
			},
				},
/////////////////////////////////////////////////////////////////////////////////////
			//挑战

	challenges: {
		11: {
			name: "挂机游戏",
			challengeDescription: '因为该挑战出了错误,所以只要您获得重置点或者购买升级就会退出挑战！<br>只重置QwQ点',
			unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.points.gte(1500)},//150
			goalDescription:"1500 QwQ点",
			rewardDescription: "解锁另外两个节点",
			},
					},

//////////////////////////////////////////////////////////////////////////////////////
			//里程碑
	milestones: {
		0: {
			requirementDescription: "1 Q点",
			effectDescription: "您获得了第一个Q点",
			effect(){
						var eff = player.points.pow(0)
							var b = player.Q.points
							if (hasMilestone('Q',0)) eff = eff.mul((b**0.001)+0.001)
			return eff},
		done() {
			return player.Q.points.gte(1)},
			
			
			},
	},
	 hotkeys: [
        {key: "q", description: "q: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
		////
})
/*





























*/
