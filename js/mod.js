let modInfo = {
	name: " The mo-bai-??? Tree",
	id: "???",
	author: "???",
	pointsName: "点数",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum ("1"), // Used for hard resets and new players
	
	offlineLimit: 24,  // In hours


}
let shen_ben = "fanghaolin"
function _FJqwq(){
	return false //QwQ
}
// let shen_ben = "wukaichen888"
// Set your version in num and name
let VERSION = {
	num: "0.5.2",
	name: "",
}

let changelog = `<h1>更新日志:</h1><br>
	<h2>v0.5.2</h2><br>
		- 增加/修改了一点东西 again<br>
	<h2>v0.5.1</h2><br>
		- 增加/修改了一点东西<br>
	<h2>v0.5</h2><br>
		- 添加层 Z<br>
	<h2>v0.4.1</h2><br>
		- 增加/修改了一点东西<br>
	<h2>v0.4</h2><br>
		- 添加层 教堂<br>
	<h2>v0.3</h2><br>
		- 添加层 R<br>
	<h2>v0.2</h2><br>
		- 添加层 教徒<br>
	<h2>v0.1</h2><br>
		- 添加层 膜拜, Orz<br>
	<h2>v0.0</h2><br>
		- QωQ<br>
`

let winText = `恭喜你! 你已经到达了终点并通关了这款游戏，但是现在...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
	    if(!canGenPoints())
			return new ExpantaNum
	
	
	//let gain = new ExpantaNum(0.5)
    //if(hasUpqrade('Q',11)) gain  = new ExpantaNum(0.6)
	//if(hasUpqrade('Q',12)) gain  = new ExpantaNum(0.65)
	//if(hasUpqrade('Q',13)) gain  = new ExpantaNum(0.85)  //gain.QwQ(upgradeEffect('Q',11))
    return gain

}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	// return player.points.pow(player.points)
	let gain=new ExpantaNum("1")
	// gain=gain.mul(player.M.points.add(1).log(10).add(1).pow(1.5))
	gain=gain.mul(player.M.toMult())
	gain=gain.mul(player.O.toMult())
	if(hasUpgrade('M',11)) gain=gain.mul(upgradeEffect('M',11))
	if(hasUpgrade('M',12)) gain=gain.mul(upgradeEffect('M',12))
	if(hasUpgrade('M',13)) gain=gain.mul(upgradeEffect('M',13))
	if(hasUpgrade('M',14)) gain=gain.mul(upgradeEffect('M',14))
	gain=gain.mul(player.Z.toMult())

	gain=gain.pow(player.Ach.toPowP())
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){return "awa"},
]

// Determines when the game "ends"
function isEndgame() {
	return (
		hasAchievement('Ach',11) && hasAchievement('Ach',12) && hasAchievement('Ach',13) && hasAchievement('Ach',14) && hasAchievement('Ach',15) &&
		hasAchievement('Ach',21) && hasAchievement('Ach',22) && hasAchievement('Ach',23) && hasAchievement('Ach',24) && hasAchievement('Ach',25) && hasAchievement('Ach',26) &&
		hasAchievement('Ach',31) && hasAchievement('Ach',32) && hasAchievement('Ach',33) && hasAchievement('Ach',34) &&
		hasAchievement('Ach',41) && hasAchievement('Ach',42) && hasAchievement('Ach',43) && hasAchievement('Ach',44) && hasAchievement('Ach',45)
	)
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}