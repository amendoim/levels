"use strict";

function levelRegistry(o, yp){
var help = levelGetHelp();

/* must be synced with: yp.CONST.
  PARTS: 7,
  PART_LEVELS: 8,

Official back palette:
  0xf93c33, // red
  0xf25d0c, // orange
  0xf5e516, // yellow
  0x0ecb0e, // green
  0x35d1eb, // blue,
  0x415bf5, // indigo
  0xf746f9, // violet
*/

o.levelRegistry = [
{ // violet area
  name: "Violet",
  baseColor: 0xf746f9, 
  curtainColor: 0x5b1055,
  colorIndex: 6,  
  subColor: [
  0xf93c33, // red
  0x415bf5, // indigo
  0xf25d0c, // orange
  0x35d1eb, // blue,
  ],
  levelFiles: [
  "1/stars",
  "1/dots",
  "1/barrier-1",
  "1/no-top",
  "1/bombs",
  "1/balleater-1",
  "1/movers",
  "1/--generator",
  ],
  help: [
    help["shooting"],
    null,
    null,
    help["no-top"]
  ],
},

{ // indigo area
  name: "Indigo",
  baseColor: 0x415bf5, 
  curtainColor: 0x0f0963,
  colorIndex: 5,
  subColor: [
  0x35d1eb, // blue,
  0x0ecb0e, // green  
  0xf746f9, // violet
  0xf5e516, // yellow
  ],
  levelFiles: [
  "1/attractor",
  "1/balleater-2",
  "1/--outro",
  "1/mirror-grid",
  "1/descender-attack",
  "1/block13-1",
  "1/stairs",
  "bench/1block", // --queen
  ],
},

{ // blue area
  name: "Blue",
  baseColor: 0x35d1eb, 
  curtainColor: 0x08738a,
  colorIndex: 4,
  subColor: [
  0xf746f9, // violet
  0x0ecb0e, // green
  0xf5e516, // yellow
  0x415bf5, // indigo
  ],
  levelFiles: [ 
  "2/tea-break",
  "2/rocket-1",
  "2/rocket-2",
  "2/spring-uterus",
  "2/descender-head",
  "2/block13-0",
  "2/king-1",
  "2/queen-1",
  ],
},

{ // green area
  name: "Green",
  baseColor: 0x0ecb0e, //0x14a814,
  curtainColor: 0x0c6112,
  colorIndex: 3,
  subColor: [
  0x35d1eb, // blue,
  0xf5e516, // yellow
  0x415bf5, // indigo
  0xf93c33, // red
  ],
  levelFiles: [
  "pedro/p0",
  "pedro/p1",
  "pedro/p2",
  "pedro/single_line_bomb",
  "pedro/single_cannon",
  "pedro/quick_fall",
  "pedro/double_box_with_lock",
  "pedro/raimbow_fall",
  ],
},

{ // yellow area
  name: "Yellow",
  baseColor: 0xf5e516, 
  curtainColor: 0xbfac02,
  colorIndex: 2,
  subColor: [
  0xf93c33, // red
  0x35d1eb, // blue,
  0xf25d0c, // orange
  0x0ecb0e, // green  
  ],
  levelFiles: [
  "pedro/edges_gen_desc",
  "pedro/bomb_chess",
  "pedro/six_columns",
  "pedro/fatal_reflection",
  "pedro/shaken_shack",
  "pedro/s_hard_final",
  "pedro/p14",
  "pedro/p15",
  ],
},

{ // orange area
  name: "Orange",
  baseColor: 0xf25d0c, // 0xdd550a
  curtainColor: 0xc15005,
  colorIndex: 1,
  subColor: [
  0xf5e516, // yellow
  0x0ecb0e, // green
  0x35d1eb, // blue,
  0x415bf5, // indigo
  ],
  levelFiles: [
  "pedro/p16",
  "pedro/p17",
  "pedro/p18",
  "pedro/p19",
  "pedro/p20",
  "pedro/p21",
  "pedro/p22",
  "pedro/p23",
  ],
},

{ // red area
  name: "Red",
  baseColor: 0xf93c33, 
  curtainColor: 0xb91616,
  colorIndex: 0,
  subColor: [
  0xf746f9, // violet
  0xf25d0c, // orange
  0x415bf5, // indigo
  0xf93c33, // red
  ],
  levelFiles: [
  "pedro/p24",
  "pedro/p25",
  "pedro/p26",
  "pedro/p27",
  "pedro/p28",
  "pedro/p29",
  "pedro/p30",
  "pedro/p31",
  ],
},

];


}


//           _____                    _____                    _____            _____          
//          /\    \                  /\    \                  /\    \          /\    \         
//         /::\____\                /::\    \                /::\____\        /::\    \        
//        /:::/    /               /::::\    \              /:::/    /       /::::\    \       
//       /:::/    /               /::::::\    \            /:::/    /       /::::::\    \      
//      /:::/    /               /:::/\:::\    \          /:::/    /       /:::/\:::\    \     
//     /:::/____/               /:::/__\:::\    \        /:::/    /       /:::/__\:::\    \    
//    /::::\    \              /::::\   \:::\    \      /:::/    /       /::::\   \:::\    \   
//   /::::::\    \   _____    /::::::\   \:::\    \    /:::/    /       /::::::\   \:::\    \  
//  /:::/\:::\    \ /\    \  /:::/\:::\   \:::\    \  /:::/    /       /:::/\:::\   \:::\____\ 
// /:::/  \:::\    /::\____\/:::/__\:::\   \:::\____\/:::/____/       /:::/  \:::\   \:::|    |
// \::/    \:::\  /:::/    /\:::\   \:::\   \::/    /\:::\    \       \::/    \:::\  /:::|____|
//  \/____/ \:::\/:::/    /  \:::\   \:::\   \/____/  \:::\    \       \/_____/\:::\/:::/    / 
//           \::::::/    /    \:::\   \:::\    \       \:::\    \               \::::::/    /  
//            \::::/    /      \:::\   \:::\____\       \:::\    \               \::::/    /   
//            /:::/    /        \:::\   \::/    /        \:::\    \               \::/____/    
//           /:::/    /          \:::\   \/____/          \:::\    \               ~~          
//          /:::/    /            \:::\    \               \:::\    \                          
//         /:::/    /              \:::\____\               \:::\____\                         
//         \::/    /                \::/    /                \::/    /                         
//          \/____/                  \/____/                  \/____/                          


function levelGetHelp(){


// help
/*
levelNum: [
{ 
  t: 1,
  duration: 3,
  op:
    ... op data ...
}
]

- runs on playTime
- t can be undefined for last entry end or < 0 for that abs period past last entry's end

common:
  beginS: s - defaults to current scale
  endS: s - defaults to current scale

  beginTb: [cx,cy] - coordinates in a 15x21 top-centered safe level space
  endTb: [cx,cy] - coordinates in a 15x21 top-centered safe level space 

  beginTu: [x,y] in us inside outRect
  endTu: [x,y] in us

  beginTg: [x,y] in us inside global width x height
  endTg: [x,y] in us


ops: 
0 = fingerOp
  touchMask: 1: issue a touchDown at beginning
             2: issue touchMoves during tween
             4: issue a touchUp at beginning
origin is the tip of the finger

1: panel op
  text: string - will be center aligned
  lineWidth: in us

  pointerTo: [x,y] - coordinates in a 15x21 top-centered safe level space
  pointerAngle: angle around the pointer top
  pointer:
    undefined to hide,
    0:     \.
    1: ./
    2:     /'
    3: '\
*/

var TOUCH_DOWN_SCALE = 0.85;

return {

// level 0: how to shoot 
"shooting": [
//=== scene 1: shot first ball lower
// panel appears
  { 
    t: 0,
    duration: 0.5,
    op: 1,

    beginTu: [50, -20],
    endTu: [50, 18],

    text: "Full Shoot marbles to clear color blocks!\n\n(touch to skip)",
    lineWidth: 60,
  },


// finger appears
  { 
    t: 0,
    duration: 1.5,
    op: 0,

    beginTg: [65, 110],
    beginS: 2,

    endTb: [9, 15],
    endS: 1,

  },

// finger going down  
  { 
    t: -0.5,
    duration: 0.25,
    op: 0,
    endS: TOUCH_DOWN_SCALE,
  },

// finger drags  
  { 
    duration: 2,
    op: 0,

    endTb: [10, 19],

    touchMask: 1 | 2,
  },

// finger going up
  { 
    t: -0.75,
    duration: 0.25,
    op: 0,

    endTb: [10, 20],
    endS: 1,

    touchMask: 4,
  },

// finger stays
// ...
// panel out
  { 
    t: - 1.75,
    duration: 0.5,
    op: 1,

    endTu: [50, -20],
  },



//=== scene 2: shoot several balls

// move left
  { 
//    t: -1.75,
    duration: 2,
    op: 0,

    endTb: [3, 9],
    endS: 1,

    touchMask: 4,
  },


  { 
    duration: 0.5,
    op: 1,

    beginTu: [130, 60],
    endTu: [75, 60],

    text: "Tap several times to shoot from the last position",
    lineWidth: 40,
  },



// finger going down  
  { 
    duration: 0.25,
    op: 0,
    endS: TOUCH_DOWN_SCALE,
  },

// finger drags  
  { 
    duration: 2.5,
    op: 0,

    endTb: [2, 15.7],
    touchMask: 1 | 2,
  },

// finger going up
  { 
    t: -0.25,
    duration: 0.25,
    op: 0,

    endTb: [2, 16.7],
    endS: 1,
    touchMask: 4,
  },

// shoot 2: finger going down  
  { 
    t: -0.5,
    duration: 0.25,
    op: 0,

    endTb: [2, 15.7],
    endS: TOUCH_DOWN_SCALE,
  },

// shoot
  { 
    t: -0.1,
    duration: 0.1,
    op: 0,
    touchMask: 1,
  },

// finger going up
  { 
    duration: 0.25,
    op: 0,

    endTb: [2, 16.7],
    endS: 1,
    touchMask: 4,
  },


// shoot 3: finger going down  
  { 
    t: -0.5,
    duration: 0.25,
    op: 0,

    endTb: [2, 15.7],
    endS: TOUCH_DOWN_SCALE,
  },

// shoot
  { 
    t: -0.1,
    duration: 0.1,
    op: 0,
    touchMask: 1,
  },

// finger going up
  { 
    duration: 0.25,
    op: 0,

    endTb: [2, 16.5],
    endS: 1,
    touchMask: 4,
  },


// panel out
  { 
    t: -1,
    duration: 0.5,
    op: 1,

    endTu: [130, 60],
  },


  { 
    t: -1.5,
    duration: 0.5,
    op: 1,

    beginTu: [50, -20],
    endTu: [50, 18],

    text: "Clear all color blocks to complete the level!",
    lineWidth: 50,
  },



// end: move down
  { 
//    t: -1,
    duration: 2.5,
    op: 0,

    endTg: [65, 110],
    endS: 2,
  },


// off the panel
  { 
    t: -0.5,
    duration: 0.5,
    op: 1,

    endTu: [50, -20],
  },

],




"3hits": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTu: [50, -25],
    endTb: [7.5, 3],

    pointer: 1,
    pointerTo: [10.25, 6.5],

    text: "These blocks need up to 3 hits to be destroyed",
    lineWidth: 80,
  },

// panel out
  { 
    t: -5,
    duration: 0.5,
    op: 1,

    endTu: [50, -25],

    pointer: -1,
  },
],




"no-top": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTu: [50, -25],
    endTb: [7.5, 3],

    pointer: 3,
    pointerAngle: 90,
    pointerTo: [13, -0.25],

    text: "This level has no top wall",
    lineWidth: 80,
  },

// panel out
  { 
    t: -5,
    duration: 100.7,
    op: 1,

    endTu: [50, -25],

    pointer: -1,
  },
],








};

}






