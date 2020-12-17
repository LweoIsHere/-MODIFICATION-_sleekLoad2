//       _           _    _                     _ 

//      | |         | |  | |                   | |

//   ___| | ___  ___| | _| |     ___   __ _  __| |

//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |

//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |

//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|

//     version 2.16



// URL for the server logo

// Leave it blank to use text instead

// (Put the files in the images folder)

// (You can also use external URL)

var l_serverImage = "logo.png";



// Center logo?

// 'true' or 'false'

var l_centerLogo = false;



// Display current map and gamemode?

// 'true' or 'false'

var l_displayMapGamemode = false;



// Custom server name configuration

// Leave it blank for automatic server name

var l_serverName = "CouCou's Server";



// Use a video for the background?

// Otherwise it will use images

// 'true' or 'false'

var l_bgVideo = false;



// Default available videos:

// "aurora.webm"

// "bluefall.webm"

// "bluetilefloor.webm"

// "bluewhitecircles.webm"

// "bokehlens.webm"

// "cleanbokeh.webm"

// "coldnight.webm"

// "colorfulburst.webm"

// "dancingstars.webm"

// "dropsflares.webm"

// "focusorangebokeh.webm"

// "glimmering.webm"

// "glowingrings.webm"

// "greencircles.webm"

// "hues.webm"

// "inthedeep.webm"

// "modernflourish.webm"

// "orangeaura.webm"

// "warminside.webm"

// "yellowgreen.webm"

//

// You can add your own video backgrounds

// Just make sure they are using webm VP8 format 

// (Place the videos in the backgrounds/videos folder)

// (You can also use external URL)

var l_background = "orangeaura.webm";



// (Image-background only)

// Enable map-based background image?

// If enabled, the background will be an image based on the server current map

// You need to have a background image with the same name as the map

// Also, the image needs to be in .jpg format

// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg

// 'true' or 'false'

var l_bgImageMapBased = false;



// (Image-background only)

// Place one or more images

// Multiple images will automatically shuffle between them

// (Place the files in the backgrounds/images folder)

// (You can also use external URL)

var l_bgImages = [

"touhou01.jpg",

"touhou02.jpg",

"touhou03.jpg",
	
"touhou04.png",
	
"touhou05.png",
	
"touhou06.jpg",
	
"touhou07.jpg",
	
"touhou08.jpg"

];



// (Image-background only)

// Random background images order?

// 'true' or 'false'

var l_bgImagesRandom = true;



// (Image-background only)

// Delay between background images changes

// in milliseconds

var l_bgImageDuration = 5000;



// (Image-background only)

// Image background fade velocity

// in milliseconds

var l_bgImageFadeVelocity = 2500;



// Enable background overlay?

// 'true' or 'false'

var l_bgOverlay = true;



// Background darkening amount

// 0 for none (0%), 100 for pitch black (100%)

var l_bgDarkening = 50;



// Play music during the loading screen?

// 'true' or 'false'

var l_music = false;



// Display current music name?

// 'true' or 'false'

var l_musicDisplay = true;



// Music playlist

// Add as many youtube ids/urls or ogg files you want

// (Place the ogg files in the music folder)

// (You can also use external URL for the ogg files)
// HAD TO REMOVE MUSIC BECAUSE KWELS HATED THE MUSIC, CRIED!
var l_musicPlaylist = [

//	{ogg: "lullaby.ogg", name: "Lullaby of Deserted Hell"},

//	{ogg: "falls_in_fall.ogg", name: "秋に舞う椛と滝飛沫"},
	
	{youtube: "https://youtu.be/WS6Ien9YUiI", name: "【東方ボーカル】 「ニヒル神楽」 【幽閉サテライト】【Subbed】"},
	
	{youtube: "https://youtu.be/ukB5iSm_Zh4", name: "【東方ボーカル】 「夜ノ花～凪～」 【幽閉サテライト】【Subbed】"},
	
	{youtube: "https://www.youtube.com/watch?v=OUN0squmKD8", name: "【東方ボーカル】 「月の歌」 【凋叶棕】"},
	
	{youtube: "https://www.youtube.com/watch?v=qiK1vfmDIS8", name: "【東方Vocal】Season 4 you【森羅万象】"},

	{youtube: "https://www.youtube.com/watch?v=d-aevL49-po", name: "ᴴᴰ⁶⁰【東方Vocal】紺碧Studio｜Doubt & Trust【中日English附詞】【PV】"},
	
	{youtube: "https://www.youtube.com/watch?v=9VcJopvvOhs", name: "ᴴᴰ⁶⁰【東方Vocal】Yonder Voice｜星月トラジコメディー【中日English附詞】【PV】"},
	
	{youtube: "https://youtu.be/uK7i0gE7sd4", name: "To see the future - LLENN (Tomori Kusunoki) Full version"},
	
	{youtube: "https://youtu.be/c23W5sNxNO4", name: "Nekopara 2020 OP Full -「Shiny Happy Days」"},
	
	{youtube: "https://youtu.be/WetLWga9BEs", name: "Nekopara 2020 ED Full -「Hidamari no Kaori」by Chocola & Vanilla"},
	
	{youtube: "https://youtu.be/zX4yy7wdrTQ", name: "Sword Art Online Alternative Gun Gale Online Opening Ryuusei Eir Aoi Full"},
	
	{youtube: "https://youtu.be/aEItbMDB3jQ", name: "SWEET×SWEET (From Nekopara)"},
];



// Random music order?

// 'true' or 'false'

var l_musicRandom = true;



// Music volume

// Choose a value between 0 (quietest) and 100 (loudest)

var l_musicVolume = 15;



// Enable custom messages?

// 'true' or 'false'

var l_messagesEnabled = true;



// Enter your custom messages below

var l_messages = [

	"FUMO!!",

	"why are you not in the fwumo fan club, not real fan..",

	"rawr",

	"reimu best touhou character",

	"CIRNO",
	
	"lweo was here i think ><",
	
	"fwumo actually had a family, but then someone did something to them and fwumo got depressed.. ",
	
	"YOU SHOULD PAT LWEO",
	
	"some people hated headpats when they're just the best..",
	
	"TOO LEWD ><",

];



// Random message order?

// 'true' or 'false'

var l_messagesRandom = true;



// Delay between message changes

// in milliseconds

var l_messagesDelay = 5000;



// Messages fade time

// in milliseconds

var l_messagesFade = 1750;



// Show errors inside Garry's Mod?

// Can be useful for finding errors

// 'true' or 'false'

var l_showErrorsIngame = true;



//==============================================================

//========================== WARNING ===========================

//==============================================================

//============ Do not edit anything below this line ============

//==============================================================

var checkConfigFile = function() {

	return true;

};
