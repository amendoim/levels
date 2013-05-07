"use strict";

function levelRegistry(o, yp){
var help = levelGetHelp();

/* must be synced with: yp.CONST.
  PARTS: 7,
  PART_LEVELS: 10,

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
  "1/attractor",
  "--",
  "bench/test",
  ],
  help: [
    help["shooting"],
    null,
    help["mover"],
    help["no-top"],
    help["bomb"],
    help["ball-eater"],
    null,
    help["attractor"],
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
  "1/tea-break",
  "1/mirror-grid",
  "1/descender-attack",
  "1/block13-1",
  "1/t-struct",
  "1/stairs",
  "1/mt-gox",
  "1/rhythm",
  "--",
  "--",
  ],
  help: [
    null,
    help["mirror"],
    help["descender"],
    help["block13"],
    help["glue"],
    help["generator"],
  ]
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
  "2/block13-2",
  "2/rocket-1",
  "2/spring-uterus",
  "2/descender-head",
  "2/inside-job",
  "2/",
  "2/rocket-2",
  "2/queen-1",
  "--",
  "--",
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
  "pedro/hit_star",
  "pedro/central_fixed_with_eater",
  "pedro/single_line_bomb",
  "pedro/single_cannon",
  "pedro/quick_fall",
  "pedro/double_box_with_lock",
  "pedro/rainbow_fall",
  "--",
  "--",
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
  "pedro/fibonacci_bombs",
  "pedro/no_bombs_please",
  "--",
  "--",
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
  "pedro/failing_rainbow",
  "pedro/erratic_blocks",
  "pedro/in_a_black_hole",
  "pedro/down_up",
  "pedro/king_pyramid",
  "pedro/make_big_mover",
  "pedro/hard_escalator",
  "pedro/enigma",
  "--",
  "--",
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
  "pedro/super_gen_from_above",
  "pedro/gen_square_on_top",
  "pedro/narrow_horizontal_launcher",
  "pedro/mirror_snake",
  "pedro/at_with_spring",
  "pedro/three_alone",
  "pedro/no_aim",
  "bench/test",
  "--",
  "--",
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

    text: "Shoot balls to clear color blocks!\n\n(touch to skip)",
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

    beginTu: [130, 60],
    endTu: [50, 60],

    text: "Hit all color blocks to complete the level!",
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

    endTu: [130, 60],
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





"mover": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [-8, 14],
    endTb: [7.5, 14],

    pointer: 3,
    pointerAngle: 65,
    pointerTo: [7.5, 10],

    text: "Hit these blocks to move them",
    lineWidth: 45,
  },

// panel out
  { 
    t: -6.5,
    duration: 0.7,
    op: 1,

    endTb: [23, 14],

    pointer: -1,
  },
],



"no-top": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTu: [65, -25],
    endTb: [10, 4],

    pointer: 3,
    pointerAngle: 90,
    pointerTo: [12, -0.25],

    text: "Some levels have no top wall",
    lineWidth: 40,
  },

// panel out
  { 
    t: -5,
    duration: 0.7,
    op: 1,

    endTu: [65, -25],

    pointer: -1,
  },
],




"bomb": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [-8, 9.5],
    endTb: [7.5, 9.5],

    pointer: 3,
    pointerAngle: 60,
    pointerTo: [7.8, 6],

    text: "This is a bomb block!",
    lineWidth: 40,
  },

// panel out
  { 
    t: -5,
    duration: 0.7,
    op: 1,

    endTb: [23, 9.5],

    pointer: -1,
  },
],


"ball-eater": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [-8, 14],
    endTb: [7.5, 14],

    pointer: 3,
    pointerAngle: 45,
    pointerTo: [7.8, 10],

    text: "This block destroys balls",
    lineWidth: 45,
  },

// panel out
  { 
    t: -5,
    duration: 0.7,
    op: 1,

    endTb: [23, 14],

    pointer: -1,
  },
],



"attractor": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [23, 10],
    endTb: [9, 10],

    pointer: 3,
    pointerAngle: 90,
    pointerTo: [11.4, 7],

    text: "This block attracts balls",
    lineWidth: 65,
  },

// panel out
  { 
    t: -5,
    duration: 0.7,
    op: 1,

    endTb: [-8, 10],

    pointer: -1,
  },
],


"mirror": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [23, 15],
    endTb: [9, 15],

    pointer: 3,
    pointerAngle: 85,
    pointerTo: [9.4, 12],

    text: "This is a mirror block",
    lineWidth: 65,
  },

// panel out
  { 
    t: -5,
    duration: 0.7,
    op: 1,

    endTb: [-8, 15],

    pointer: -1,
  },
],



"descender": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [23, 15],
    endTb: [8, 9],

    pointer: 3,
    pointerAngle: 45,
    pointerTo: [8, 5.1],

    text: "This block attacks down!\nIf it crosses the bottom line it's game over",
    lineWidth: 65,
  },

// panel out
  { 
    t: -5,
    duration: 0.7,
    op: 1,

    endTb: [23, 15],

    pointer: -1,
  },
],



"block13": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [23, 15],
    endTb: [8, 10],

    pointer: 3,
    pointerAngle: 45,
    pointerTo: [8, 6.1],

    text: "This dark block mysteriously affects aiming...",
    lineWidth: 45,
  },

// panel out
  { 
    t: -6.5,
    duration: 0.7,
    op: 1,

    endTb: [23, 15],

    pointer: -1,
  },
],



"glue": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [-8, 15],
    endTb: [8, 6.5],

    pointer: 3,
    pointerAngle: 85,
    pointerTo: [11.4, 3.1],

    text: "Glue blocks stick together",
    lineWidth: 45,
  },

// panel out
  { 
    t: -6.5,
    duration: 0.7,
    op: 1,

    endTb: [23, 15],

    pointer: -1,
  },
],



"generator": [
// panel appears
  { 
    t: 0,
    duration: 0.7,
    op: 1,

    beginTb: [23, 15],
    endTb: [11, 6.5],

    pointer: 3,
    pointerAngle: 45,
    pointerTo: [12.1, 1],

    text: "This block generates new color blocks.\nIf they reach the bottom it's game over",
    lineWidth: 43,
  },

// panel out
  { 
    t: -6.5,
    duration: 0.7,
    op: 1,

    endTb: [23, 15],

    pointer: -1,
  },
],








};

}






