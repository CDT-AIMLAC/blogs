const LUNR_DATA = {"version":"2.3.9","fields":["t","d","k","b"],"fieldVectors":[["t/0",[0,1.61]],["d/0",[]],["k/0",[]],["b/0",[0,1.884,1,0.101,2,0.347,3,0.289,4,0.075,5,0.075,6,0.075,7,1.884,8,0.574,9,1.884,10,1.884,11,2.635,12,2.635,13,2.635,14,1.884,15,0.479,16,0.479,17,0.479,18,0.479,19,0.479,20,0.479,21,0.479,22,0.084,23,0.479,24,0.479,25,0.479,26,0.479,27,0.479,28,0.479]],["t/1",[4,0.064]],["d/1",[]],["k/1",[]],["b/1",[1,0.101,2,0.357,3,0.347,4,0.045,5,0.045,6,0.045,8,0.287,14,1.614,15,0.287,16,0.287,17,0.287,18,0.287,19,0.287,20,0.287,21,0.287,22,0.072,23,0.287,24,0.41,25,0.287,26,0.287,27,0.287,28,0.287,29,0.072,30,0.62,31,0.62,32,1.13,33,1.13,34,1.614,35,1.581,36,1.13,37,1.882,38,2.257,39,2.257,40,1.614,41,1.614,42,1.614,43,2.17,44,1.13,45,1.13,46,1.13,47,1.581,48,1.581,49,0.292,50,0.873,51,0.435,52,0.435,53,0.62,54,0.612,55,0.612,56,0.612,57,0.435,58,0.789,59,0.435,60,0.435,61,0.612,62,0.435,63,0.287,64,0.612,65,0.435,66,0.612,67,0.612,68,0.612,69,0.435,70,0.612,71,0.612,72,0.435,73,0.789,74,0.287,75,0.873,76,0.612,77,0.435,78,0.435,79,0.435,80,0.287,81,0.287,82,1.614,83,1.13,84,1.581,85,1.13,86,1.13,87,1.13,88,1.581,89,1.581,90,1.581,91,1.581,92,1.581,93,1.581,94,1.581,95,1.581,96,1.614,97,1.13,98,2.257,99,2.257,100,2.257,101,1.614,102,1.581,103,1.581,104,1.581,105,1.581,106,1.581,107,1.581,108,2.257,109,1.13,110,1.581,111,1.581,112,1.581,113,1.581,114,1.581,115,1.13,116,1.13,117,1.581,118,1.581,119,1.581,120,1.581,121,1.581,122,1.581,123,1.13,124,1.614,125,1.581,126,1.581,127,1.13,128,1.581,129,1.581,130,1.13,131,1.581,132,1.581,133,1.581,134,1.581,135,1.581,136,1.581,137,1.581,138,1.581,139,1.13,140,1.581,141,1.581,142,1.581,143,1.13,144,1.581,145,1.13,146,1.581,147,1.581]],["t/2",[2,0.163,3,0.163,29,0.047]],["d/2",[]],["k/2",[]],["b/2",[1,0.071,2,0.262,3,0.37,4,0.02,5,0.02,6,0.053,7,1.115,8,0.334,15,0.128,16,0.128,17,0.128,18,0.128,19,0.128,20,0.128,21,0.128,22,0.038,23,0.283,24,0.218,25,0.374,26,0.374,27,0.218,28,0.218,29,0.05,30,0.505,31,0.194,32,0.856,33,1.115,34,0.505,36,0.505,37,0.505,40,0.505,41,0.856,42,0.505,43,0.505,44,2.123,45,0.856,46,1.47,49,0.36,51,0.194,52,0.329,53,0.194,57,0.194,58,0.429,59,0.194,60,0.329,62,0.329,65,0.329,69,0.565,72,0.194,73,0.864,74,0.218,77,0.655,78,0.194,79,0.194,80,0.283,81,0.218,82,0.505,83,0.505,85,0.505,86,0.856,87,0.505,96,0.505,97,0.505,101,1.115,109,1.115,115,1.115,116,0.505,123,0.856,124,0.856,127,0.505,130,0.505,139,1.313,143,1.115,145,0.505,148,0.706,149,0.706,150,0.706,151,0.706,152,0.706,153,0.706,154,0.706,155,0.706,156,1.837,157,0.706,158,0.706,159,0.706,160,0.706,161,0.706,162,0.706,163,1.198,164,1.198,165,0.706,166,0.706,167,0.706,168,0.706,169,1.56,170,0.706,171,0.706,172,0.706,173,0.706,174,1.837,175,0.706,176,0.706,177,0.706,178,0.706,179,0.706,180,0.706,181,0.706,182,0.706,183,0.706,184,2.057,185,0.706,186,0.706,187,0.706,188,0.706,189,1.198,190,0.706,191,1.198,192,0.706,193,1.198,194,1.837,195,0.706,196,1.198,197,0.706,198,1.56,199,1.198,200,2.057,201,2.612,202,2.783,203,1.198,204,1.56,205,0.706,206,1.56,207,0.706,208,1.198,209,0.706,210,1.198,211,1.198,212,1.198,213,0.706,214,1.837,215,0.706,216,1.198,217,1.198,218,0.706,219,0.706,220,1.56,221,0.706,222,0.706,223,1.56,224,1.56,225,0.706,226,0.706,227,1.313,228,0.706,229,0.706,230,1.198,231,0.706,232,0.706,233,1.198,234,0.706,235,0.706,236,0.706,237,0.706,238,0.706,239,0.706,240,0.706,241,1.198,242,0.706,243,1.56,244,1.198,245,0.706,246,1.198,247,0.706,248,0.706,249,1.198,250,1.56,251,1.198,252,1.198,253,0.706,254,0.706,255,0.706,256,0.706,257,1.56,258,0.706,259,0.706,260,0.706,261,0.706,262,0.706,263,0.706,264,0.706,265,0.706,266,0.706,267,0.706,268,1.198,269,1.198,270,0.706,271,1.198,272,0.706,273,0.706,274,2.97,275,1.198,276,2.057,277,1.56,278,1.198,279,1.198,280,1.837,281,0.706,282,1.198,283,0.706,284,0.706,285,0.706,286,0.706,287,0.706,288,0.706,289,0.706,290,0.706,291,0.706,292,1.198,293,1.56,294,1.198,295,0.706,296,1.837,297,1.198,298,0.706,299,0.706,300,0.706,301,0.706,302,0.706,303,1.56,304,1.198,305,1.198,306,1.198,307,1.198,308,1.198,309,1.198,310,1.198,311,1.198,312,1.198,313,1.198,314,1.198,315,1.198,316,1.198,317,0.706,318,0.706,319,0.706,320,1.198,321,1.198,322,0.706,323,0.706,324,0.706,325,0.706,326,0.706,327,0.706,328,0.706,329,0.706,330,0.706,331,1.198,332,0.706,333,0.706,334,0.706,335,0.706,336,0.706,337,0.706,338,0.706,339,0.706,340,0.706,341,1.56,342,0.706,343,0.706,344,1.198,345,0.706,346,0.706,347,0.706,348,0.706,349,0.706,350,0.706,351,0.706,352,0.706,353,0.706,354,1.198,355,2.057,356,0.706,357,0.706,358,1.198,359,2.057,360,0.706,361,0.706,362,1.837,363,0.706,364,0.706,365,0.706,366,1.198,367,1.198,368,1.837,369,0.706,370,1.198,371,2.057,372,1.198,373,0.856,374,0.706,375,0.706,376,0.706,377,1.198,378,1.198,379,1.198,380,0.706,381,1.198,382,0.706,383,0.706,384,0.706,385,0.706,386,0.706,387,0.706,388,0.706,389,0.706,390,0.706,391,0.706,392,0.706,393,0.706,394,0.706,395,0.706,396,0.706,397,0.706,398,0.706,399,0.706,400,0.706,401,0.706,402,0.706,403,0.706,404,0.706,405,0.706,406,0.706,407,1.198,408,0.706,409,0.706,410,0.706,411,0.706,412,0.706,413,0.706,414,0.706,415,0.706,416,1.56,417,0.706,418,0.706,419,0.706,420,0.706,421,0.706,422,0.706,423,0.706,424,0.372]],["t/3",[5,0.051,49,0.182]],["d/3",[]],["k/3",[]],["b/3",[1,0.092,2,0.366,3,0.366,4,0.065,5,0.083,6,0.065,8,0.413,15,0.413,16,0.413,17,0.413,18,0.413,19,0.413,20,0.413,21,0.413,22,0.092,23,0.413,24,0.413,25,0.413,26,0.413,27,0.413,28,0.413,29,0.073,30,0.625,31,0.625,49,0.339,50,1.115,51,0.625,52,0.625,53,0.625,54,0.879,55,0.879,56,0.879,57,0.625,58,0.625,59,0.625,60,0.625,61,0.879,62,0.625,63,0.413,64,0.879,65,0.625,66,0.879,67,0.879,68,0.879,69,0.625,70,0.879,71,0.879,72,0.625,73,0.792,74,0.413,75,0.879,76,0.879,77,0.625,78,0.625,79,0.625,80,0.413,81,0.413]],["t/4",[6,0.064]],["d/4",[]],["k/4",[]],["b/4",[1,0.1,2,0.343,3,0.285,4,0.074,5,0.074,6,0.1,8,0.471,10,1.854,15,0.471,16,0.471,17,0.471,18,0.471,19,0.471,20,0.471,21,0.471,22,0.083,23,0.471,24,0.471,25,0.471,26,0.471,27,0.471,28,0.471,49,0.342,74,0.471,80,0.471,81,0.471,227,1.854,425,3.128]],["t/5",[63,0.325,426,1.281]],["d/5",[]],["k/5",[]],["b/5",[1,0.102,2,0.351,3,0.295,4,0.077,5,0.077,6,0.077,8,0.489,9,1.923,15,0.489,16,0.489,17,0.489,18,0.489,19,0.489,20,0.489,21,0.489,22,0.086,23,0.489,24,0.489,25,0.489,26,0.489,27,0.489,28,0.489,63,0.489,373,1.923,426,1.923]],["t/6",[2,0.163,3,0.163,29,0.047]],["d/6",[]],["k/6",[]],["b/6",[1,0.076,2,0.355,3,0.372,4,0.068,5,0.068,6,0.085,22,0.076,29,0.076,30,0.655,31,0.655,49,0.345,50,1.149,51,0.655,52,0.655,53,0.655,54,0.922,55,0.922,56,0.922,57,0.655,58,0.655,59,0.655,60,0.655,61,0.922,62,0.655,63,0.433,64,0.922,65,0.655,66,0.922,67,0.922,68,0.922,69,0.655,70,0.922,71,0.922,72,0.655,73,0.931,74,0.433,75,0.922,76,0.922,77,0.655,78,0.655,79,0.655,80,0.433,81,0.539,424,1.256]],["t/7",[2,0.163,3,0.163,29,0.047]],["d/7",[]],["k/7",[]],["b/7",[1,0.076,2,0.355,3,0.372,4,0.068,5,0.068,6,0.085,22,0.076,29,0.076,30,0.655,31,0.655,49,0.345,50,1.149,51,0.655,52,0.655,53,0.655,54,0.922,55,0.922,56,0.922,57,0.655,58,0.655,59,0.655,60,0.655,61,0.922,62,0.655,63,0.433,64,0.922,65,0.655,66,0.922,67,0.922,68,0.922,69,0.655,70,0.922,71,0.922,72,0.655,73,0.931,74,0.433,75,0.922,76,0.922,77,0.655,78,0.655,79,0.655,80,0.539,81,0.433,424,1.256]]],"invertedIndex":[["",{"_index":73,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["04",{"_index":150,"t":{},"d":{},"k":{},"b":{"2":{}}}],["07",{"_index":21,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["09",{"_index":149,"t":{},"d":{},"k":{},"b":{"2":{}}}],["1",{"_index":425,"t":{},"d":{},"k":{},"b":{"4":{}}}],["2",{"_index":318,"t":{},"d":{},"k":{},"b":{"2":{}}}],["2022",{"_index":22,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["2nd",{"_index":148,"t":{},"d":{},"k":{},"b":{"2":{}}}],["4",{"_index":75,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["4.0",{"_index":17,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["404",{"_index":0,"t":{"0":{}},"d":{},"k":{},"b":{"0":{}}}],["_css",{"_index":332,"t":{},"d":{},"k":{},"b":{"2":{}}}],["_layout",{"_index":335,"t":{},"d":{},"k":{},"b":{"2":{}}}],["_lib",{"_index":339,"t":{},"d":{},"k":{},"b":{"2":{}}}],["aberystwyth",{"_index":125,"t":{},"d":{},"k":{},"b":{"1":{}}}],["academi",{"_index":133,"t":{},"d":{},"k":{},"b":{"1":{}}}],["access",{"_index":139,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["account",{"_index":422,"t":{},"d":{},"k":{},"b":{"2":{}}}],["activ",{"_index":71,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["ad",{"_index":244,"t":{},"d":{},"k":{},"b":{"2":{}}}],["addit",{"_index":130,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["advanc",{"_index":42,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["advantag",{"_index":253,"t":{},"d":{},"k":{},"b":{"2":{}}}],["affili",{"_index":403,"t":{},"d":{},"k":{},"b":{"2":{}}}],["ai",{"_index":97,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["aid",{"_index":230,"t":{},"d":{},"k":{},"b":{"2":{}}}],["aim",{"_index":67,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["aimlac",{"_index":2,"t":{"2":{},"6":{},"7":{}},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["aimlac/blog",{"_index":280,"t":{},"d":{},"k":{},"b":{"2":{}}}],["alik",{"_index":56,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["analyt",{"_index":102,"t":{},"d":{},"k":{},"b":{"1":{}}}],["anatomi",{"_index":275,"t":{},"d":{},"k":{},"b":{"2":{}}}],["anyth",{"_index":322,"t":{},"d":{},"k":{},"b":{"2":{}}}],["arbitrari",{"_index":209,"t":{},"d":{},"k":{},"b":{"2":{}}}],["area",{"_index":89,"t":{},"d":{},"k":{},"b":{"1":{}}}],["artifici",{"_index":38,"t":{},"d":{},"k":{},"b":{"1":{}}}],["ask",{"_index":187,"t":{},"d":{},"k":{},"b":{"2":{}}}],["assembl",{"_index":410,"t":{},"d":{},"k":{},"b":{"2":{}}}],["associ",{"_index":227,"t":{},"d":{},"k":{},"b":{"2":{},"4":{}}}],["astronomi",{"_index":92,"t":{},"d":{},"k":{},"b":{"1":{}}}],["audienc",{"_index":166,"t":{},"d":{},"k":{},"b":{"2":{}}}],["audio",{"_index":376,"t":{},"d":{},"k":{},"b":{"2":{}}}],["authent",{"_index":237,"t":{},"d":{},"k":{},"b":{"2":{}}}],["author",{"_index":77,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["author'",{"_index":423,"t":{},"d":{},"k":{},"b":{"2":{}}}],["auxillari",{"_index":374,"t":{},"d":{},"k":{},"b":{"2":{}}}],["avoid",{"_index":348,"t":{},"d":{},"k":{},"b":{"2":{}}}],["back",{"_index":13,"t":{},"d":{},"k":{},"b":{"0":{}}}],["baker",{"_index":79,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["bangor",{"_index":126,"t":{},"d":{},"k":{},"b":{"1":{}}}],["base",{"_index":114,"t":{},"d":{},"k":{},"b":{"1":{}}}],["below",{"_index":197,"t":{},"d":{},"k":{},"b":{"2":{}}}],["bespok",{"_index":134,"t":{},"d":{},"k":{},"b":{"1":{}}}],["between",{"_index":123,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["beyond",{"_index":261,"t":{},"d":{},"k":{},"b":{"2":{}}}],["biolog",{"_index":93,"t":{},"d":{},"k":{},"b":{"1":{}}}],["blog",{"_index":3,"t":{"2":{},"6":{},"7":{}},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["brand",{"_index":386,"t":{},"d":{},"k":{},"b":{"2":{}}}],["bristol",{"_index":127,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["broad",{"_index":88,"t":{},"d":{},"k":{},"b":{"1":{}}}],["brought",{"_index":173,"t":{},"d":{},"k":{},"b":{"2":{}}}],["brows",{"_index":226,"t":{},"d":{},"k":{},"b":{"2":{}}}],["build",{"_index":269,"t":{},"d":{},"k":{},"b":{"2":{}}}],["built",{"_index":24,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["card",{"_index":412,"t":{},"d":{},"k":{},"b":{"2":{}}}],["cardiff",{"_index":128,"t":{},"d":{},"k":{},"b":{"1":{}}}],["case",{"_index":366,"t":{},"d":{},"k":{},"b":{"2":{}}}],["cc",{"_index":15,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["cd",{"_index":307,"t":{},"d":{},"k":{},"b":{"2":{}}}],["cdt",{"_index":1,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["center",{"_index":159,"t":{},"d":{},"k":{},"b":{"2":{}}}],["centr",{"_index":35,"t":{},"d":{},"k":{},"b":{"1":{}}}],["check",{"_index":190,"t":{},"d":{},"k":{},"b":{"2":{}}}],["choos",{"_index":392,"t":{},"d":{},"k":{},"b":{"2":{}}}],["chosen",{"_index":384,"t":{},"d":{},"k":{},"b":{"2":{}}}],["chronolog",{"_index":225,"t":{},"d":{},"k":{},"b":{"2":{}}}],["click",{"_index":10,"t":{},"d":{},"k":{},"b":{"0":{},"4":{}}}],["clone",{"_index":305,"t":{},"d":{},"k":{},"b":{"2":{}}}],["close",{"_index":144,"t":{},"d":{},"k":{},"b":{"1":{}}}],["co",{"_index":356,"t":{},"d":{},"k":{},"b":{"2":{}}}],["code",{"_index":210,"t":{},"d":{},"k":{},"b":{"2":{}}}],["collabor",{"_index":122,"t":{},"d":{},"k":{},"b":{"1":{}}}],["color",{"_index":229,"t":{},"d":{},"k":{},"b":{"2":{}}}],["comment",{"_index":193,"t":{},"d":{},"k":{},"b":{"2":{}}}],["commit",{"_index":282,"t":{},"d":{},"k":{},"b":{"2":{}}}],["compani",{"_index":112,"t":{},"d":{},"k":{},"b":{"1":{}}}],["compil",{"_index":211,"t":{},"d":{},"k":{},"b":{"2":{}}}],["comput",{"_index":43,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["concern",{"_index":329,"t":{},"d":{},"k":{},"b":{"2":{}}}],["connect",{"_index":182,"t":{},"d":{},"k":{},"b":{"2":{}}}],["contain",{"_index":271,"t":{},"d":{},"k":{},"b":{"2":{}}}],["content",{"_index":355,"t":{},"d":{},"k":{},"b":{"2":{}}}],["contribut",{"_index":69,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["convent",{"_index":360,"t":{},"d":{},"k":{},"b":{"2":{}}}],["convention",{"_index":363,"t":{},"d":{},"k":{},"b":{"2":{}}}],["convers",{"_index":240,"t":{},"d":{},"k":{},"b":{"2":{}}}],["coordin",{"_index":141,"t":{},"d":{},"k":{},"b":{"1":{}}}],["correct",{"_index":413,"t":{},"d":{},"k":{},"b":{"2":{}}}],["correspond",{"_index":411,"t":{},"d":{},"k":{},"b":{"2":{}}}],["council",{"_index":119,"t":{},"d":{},"k":{},"b":{"1":{}}}],["creation",{"_index":221,"t":{},"d":{},"k":{},"b":{"2":{}}}],["csv",{"_index":383,"t":{},"d":{},"k":{},"b":{"2":{}}}],["current",{"_index":186,"t":{},"d":{},"k":{},"b":{"2":{}}}],["curve.gif",{"_index":388,"t":{},"d":{},"k":{},"b":{"2":{}}}],["data",{"_index":101,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["data.csv",{"_index":387,"t":{},"d":{},"k":{},"b":{"2":{}}}],["dataset",{"_index":207,"t":{},"d":{},"k":{},"b":{"2":{}}}],["date",{"_index":223,"t":{},"d":{},"k":{},"b":{"2":{}}}],["date(2022",{"_index":404,"t":{},"d":{},"k":{},"b":{"2":{}}}],["dd",{"_index":406,"t":{},"d":{},"k":{},"b":{"2":{}}}],["demonstr",{"_index":68,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["depend",{"_index":255,"t":{},"d":{},"k":{},"b":{"2":{}}}],["desir",{"_index":292,"t":{},"d":{},"k":{},"b":{"2":{}}}],["detail",{"_index":198,"t":{},"d":{},"k":{},"b":{"2":{}}}],["develop",{"_index":174,"t":{},"d":{},"k":{},"b":{"2":{}}}],["dictat",{"_index":337,"t":{},"d":{},"k":{},"b":{"2":{}}}],["differ",{"_index":224,"t":{},"d":{},"k":{},"b":{"2":{}}}],["directori",{"_index":274,"t":{},"d":{},"k":{},"b":{"2":{}}}],["disciplin",{"_index":172,"t":{},"d":{},"k":{},"b":{"2":{}}}],["discours",{"_index":66,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["discov",{"_index":181,"t":{},"d":{},"k":{},"b":{"2":{}}}],["discuss",{"_index":195,"t":{},"d":{},"k":{},"b":{"2":{}}}],["doctor",{"_index":36,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["document",{"_index":243,"t":{},"d":{},"k":{},"b":{"2":{}}}],["drawback",{"_index":254,"t":{},"d":{},"k":{},"b":{"2":{}}}],["duplic",{"_index":267,"t":{},"d":{},"k":{},"b":{"2":{}}}],["e",{"_index":309,"t":{},"d":{},"k":{},"b":{"2":{}}}],["e.g",{"_index":395,"t":{},"d":{},"k":{},"b":{"2":{}}}],["each",{"_index":220,"t":{},"d":{},"k":{},"b":{"2":{}}}],["edit",{"_index":330,"t":{},"d":{},"k":{},"b":{"2":{}}}],["effort",{"_index":167,"t":{},"d":{},"k":{},"b":{"2":{}}}],["element",{"_index":380,"t":{},"d":{},"k":{},"b":{"2":{}}}],["emb",{"_index":205,"t":{},"d":{},"k":{},"b":{"2":{}}}],["enabl",{"_index":55,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["end",{"_index":242,"t":{},"d":{},"k":{},"b":{"2":{}}}],["engag",{"_index":53,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["engin",{"_index":138,"t":{},"d":{},"k":{},"b":{"1":{}}}],["ensur",{"_index":268,"t":{},"d":{},"k":{},"b":{"2":{}}}],["essenti",{"_index":105,"t":{},"d":{},"k":{},"b":{"1":{}}}],["everyth",{"_index":290,"t":{},"d":{},"k":{},"b":{"2":{}}}],["exampl",{"_index":377,"t":{},"d":{},"k":{},"b":{"2":{}}}],["execut",{"_index":208,"t":{},"d":{},"k":{},"b":{"2":{}}}],["experienc",{"_index":170,"t":{},"d":{},"k":{},"b":{"2":{}}}],["expertis",{"_index":175,"t":{},"d":{},"k":{},"b":{"2":{}}}],["explain",{"_index":61,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["extend",{"_index":419,"t":{},"d":{},"k":{},"b":{"2":{}}}],["extern",{"_index":107,"t":{},"d":{},"k":{},"b":{"1":{}}}],["facil",{"_index":140,"t":{},"d":{},"k":{},"b":{"1":{}}}],["familiaris",{"_index":273,"t":{},"d":{},"k":{},"b":{"2":{}}}],["fashion",{"_index":142,"t":{},"d":{},"k":{},"b":{"1":{}}}],["featur",{"_index":204,"t":{},"d":{},"k":{},"b":{"2":{}}}],["fergu",{"_index":78,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["fetch",{"_index":343,"t":{},"d":{},"k":{},"b":{"2":{}}}],["field",{"_index":183,"t":{},"d":{},"k":{},"b":{"2":{}}}],["figur",{"_index":206,"t":{},"d":{},"k":{},"b":{"2":{}}}],["file",{"_index":371,"t":{},"d":{},"k":{},"b":{"2":{}}}],["find",{"_index":169,"t":{},"d":{},"k":{},"b":{"2":{}}}],["flavour",{"_index":370,"t":{},"d":{},"k":{},"b":{"2":{}}}],["follow",{"_index":358,"t":{},"d":{},"k":{},"b":{"2":{}}}],["fork",{"_index":281,"t":{},"d":{},"k":{},"b":{"2":{}}}],["format",{"_index":294,"t":{},"d":{},"k":{},"b":{"2":{}}}],["found",{"_index":9,"t":{},"d":{},"k":{},"b":{"0":{},"5":{}}}],["franklin",{"_index":312,"t":{},"d":{},"k":{},"b":{"2":{}}}],["franklin.jl",{"_index":25,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["fulli",{"_index":84,"t":{},"d":{},"k":{},"b":{"1":{}}}],["fund",{"_index":85,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["gain",{"_index":179,"t":{},"d":{},"k":{},"b":{"2":{}}}],["gener",{"_index":250,"t":{},"d":{},"k":{},"b":{"2":{}}}],["git",{"_index":304,"t":{},"d":{},"k":{},"b":{"2":{}}}],["github",{"_index":46,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["give",{"_index":298,"t":{},"d":{},"k":{},"b":{"2":{}}}],["given",{"_index":414,"t":{},"d":{},"k":{},"b":{"2":{}}}],["go",{"_index":12,"t":{},"d":{},"k":{},"b":{"0":{}}}],["good",{"_index":299,"t":{},"d":{},"k":{},"b":{"2":{}}}],["govern",{"_index":118,"t":{},"d":{},"k":{},"b":{"1":{}}}],["graphic",{"_index":218,"t":{},"d":{},"k":{},"b":{"2":{}}}],["guid",{"_index":81,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"4":{},"6":{},"7":{}}}],["health",{"_index":94,"t":{},"d":{},"k":{},"b":{"1":{}}}],["heat",{"_index":379,"t":{},"d":{},"k":{},"b":{"2":{}}}],["help",{"_index":194,"t":{},"d":{},"k":{},"b":{"2":{}}}],["here",{"_index":11,"t":{},"d":{},"k":{},"b":{"0":{}}}],["high",{"_index":98,"t":{},"d":{},"k":{},"b":{"1":{}}}],["highlight",{"_index":70,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["hljs.highlightall();hljs.configure({tabreplac",{"_index":424,"t":{},"d":{},"k":{},"b":{"2":{},"6":{},"7":{}}}],["home",{"_index":4,"t":{"1":{}},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["homepag",{"_index":14,"t":{},"d":{},"k":{},"b":{"0":{},"1":{}}}],["host",{"_index":252,"t":{},"d":{},"k":{},"b":{"2":{}}}],["hpc",{"_index":100,"t":{},"d":{},"k":{},"b":{"1":{}}}],["hpda",{"_index":103,"t":{},"d":{},"k":{},"b":{"1":{}}}],["html",{"_index":336,"t":{},"d":{},"k":{},"b":{"2":{}}}],["https://github.com/cdt",{"_index":306,"t":{},"d":{},"k":{},"b":{"2":{}}}],["identifi",{"_index":232,"t":{},"d":{},"k":{},"b":{"2":{}}}],["imag",{"_index":375,"t":{},"d":{},"k":{},"b":{"2":{}}}],["improv",{"_index":160,"t":{},"d":{},"k":{},"b":{"2":{}}}],["includ",{"_index":109,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["index",{"_index":5,"t":{"3":{}},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["indic",{"_index":300,"t":{},"d":{},"k":{},"b":{"2":{}}}],["inform",{"_index":247,"t":{},"d":{},"k":{},"b":{"2":{}}}],["initi",{"_index":54,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["insight",{"_index":57,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["instal",{"_index":316,"t":{},"d":{},"k":{},"b":{"2":{}}}],["intellig",{"_index":39,"t":{},"d":{},"k":{},"b":{"1":{}}}],["intens",{"_index":147,"t":{},"d":{},"k":{},"b":{"1":{}}}],["interact",{"_index":217,"t":{},"d":{},"k":{},"b":{"2":{}}}],["interest",{"_index":62,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["intern",{"_index":111,"t":{},"d":{},"k":{},"b":{"1":{}}}],["introduct",{"_index":151,"t":{},"d":{},"k":{},"b":{"2":{}}}],["introductionwhat",{"_index":152,"t":{},"d":{},"k":{},"b":{"2":{}}}],["involv",{"_index":72,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["issu",{"_index":238,"t":{},"d":{},"k":{},"b":{"2":{}}}],["itself",{"_index":251,"t":{},"d":{},"k":{},"b":{"2":{}}}],["javascript",{"_index":341,"t":{},"d":{},"k":{},"b":{"2":{}}}],["julia",{"_index":26,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["kebab",{"_index":365,"t":{},"d":{},"k":{},"b":{"2":{}}}],["keep",{"_index":246,"t":{},"d":{},"k":{},"b":{"2":{}}}],["kept",{"_index":203,"t":{},"d":{},"k":{},"b":{"2":{}}}],["kettl",{"_index":177,"t":{},"d":{},"k":{},"b":{"2":{}}}],["languag",{"_index":28,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["larg",{"_index":110,"t":{},"d":{},"k":{},"b":{"1":{}}}],["last",{"_index":18,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["latest",{"_index":48,"t":{},"d":{},"k":{},"b":{"1":{}}}],["layout",{"_index":338,"t":{},"d":{},"k":{},"b":{"2":{}}}],["learn",{"_index":41,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["leav",{"_index":192,"t":{},"d":{},"k":{},"b":{"2":{}}}],["left",{"_index":398,"t":{},"d":{},"k":{},"b":{"2":{}}}],["level",{"_index":391,"t":{},"d":{},"k":{},"b":{"2":{}}}],["librari",{"_index":342,"t":{},"d":{},"k":{},"b":{"2":{}}}],["licens",{"_index":416,"t":{},"d":{},"k":{},"b":{"2":{}}}],["light",{"_index":351,"t":{},"d":{},"k":{},"b":{"2":{}}}],["limit",{"_index":262,"t":{},"d":{},"k":{},"b":{"2":{}}}],["link",{"_index":45,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["listen",{"_index":258,"t":{},"d":{},"k":{},"b":{"2":{}}}],["littl",{"_index":231,"t":{},"d":{},"k":{},"b":{"2":{}}}],["live",{"_index":215,"t":{},"d":{},"k":{},"b":{"2":{}}}],["local",{"_index":113,"t":{},"d":{},"k":{},"b":{"1":{}}}],["locat",{"_index":357,"t":{},"d":{},"k":{},"b":{"2":{}}}],["longstand",{"_index":121,"t":{},"d":{},"k":{},"b":{"1":{}}}],["look",{"_index":301,"t":{},"d":{},"k":{},"b":{"2":{}}}],["machin",{"_index":40,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["made",{"_index":347,"t":{},"d":{},"k":{},"b":{"2":{}}}],["main.md",{"_index":276,"t":{},"d":{},"k":{},"b":{"2":{}}}],["main.mdlicens",{"_index":158,"t":{},"d":{},"k":{},"b":{"2":{}}}],["make",{"_index":325,"t":{},"d":{},"k":{},"b":{"2":{}}}],["maketitl",{"_index":415,"t":{},"d":{},"k":{},"b":{"2":{}}}],["manag",{"_index":239,"t":{},"d":{},"k":{},"b":{"2":{}}}],["markdown",{"_index":296,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mathemat",{"_index":95,"t":{},"d":{},"k":{},"b":{"1":{}}}],["matur",{"_index":245,"t":{},"d":{},"k":{},"b":{"2":{}}}],["meet",{"_index":286,"t":{},"d":{},"k":{},"b":{"2":{}}}],["member",{"_index":33,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["merg",{"_index":288,"t":{},"d":{},"k":{},"b":{"2":{}}}],["meta",{"_index":401,"t":{},"d":{},"k":{},"b":{"2":{}}}],["metadata",{"_index":265,"t":{},"d":{},"k":{},"b":{"2":{}}}],["minim",{"_index":369,"t":{},"d":{},"k":{},"b":{"2":{}}}],["minut",{"_index":319,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mit",{"_index":418,"t":{},"d":{},"k":{},"b":{"2":{}}}],["mm",{"_index":405,"t":{},"d":{},"k":{},"b":{"2":{}}}],["modif",{"_index":222,"t":{},"d":{},"k":{},"b":{"2":{}}}],["modifi",{"_index":19,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["more",{"_index":184,"t":{},"d":{},"k":{},"b":{"2":{}}}],["much",{"_index":219,"t":{},"d":{},"k":{},"b":{"2":{}}}],["multitud",{"_index":171,"t":{},"d":{},"k":{},"b":{"2":{}}}],["name",{"_index":359,"t":{},"d":{},"k":{},"b":{"2":{}}}],["navig",{"_index":248,"t":{},"d":{},"k":{},"b":{"2":{}}}],["need",{"_index":303,"t":{},"d":{},"k":{},"b":{"2":{}}}],["nest",{"_index":393,"t":{},"d":{},"k":{},"b":{"2":{}}}],["new",{"_index":80,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"4":{},"6":{},"7":{}}}],["nodej",{"_index":345,"t":{},"d":{},"k":{},"b":{"2":{}}}],["note",{"_index":314,"t":{},"d":{},"k":{},"b":{"2":{}}}],["now",{"_index":50,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["number",{"_index":373,"t":{},"d":{},"k":{},"b":{"2":{},"5":{}}}],["occasion",{"_index":266,"t":{},"d":{},"k":{},"b":{"2":{}}}],["okay",{"_index":291,"t":{},"d":{},"k":{},"b":{"2":{}}}],["onc",{"_index":289,"t":{},"d":{},"k":{},"b":{"2":{}}}],["open",{"_index":277,"t":{},"d":{},"k":{},"b":{"2":{}}}],["opportun",{"_index":87,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["order",{"_index":396,"t":{},"d":{},"k":{},"b":{"2":{}}}],["organ",{"_index":200,"t":{},"d":{},"k":{},"b":{"2":{}}}],["organis",{"_index":47,"t":{},"d":{},"k":{},"b":{"1":{}}}],["out",{"_index":191,"t":{},"d":{},"k":{},"b":{"2":{}}}],["overview",{"_index":353,"t":{},"d":{},"k":{},"b":{"2":{}}}],["packag",{"_index":346,"t":{},"d":{},"k":{},"b":{"2":{}}}],["page",{"_index":8,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["pars",{"_index":344,"t":{},"d":{},"k":{},"b":{"2":{}}}],["part",{"_index":51,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["particl",{"_index":90,"t":{},"d":{},"k":{},"b":{"1":{}}}],["particular",{"_index":321,"t":{},"d":{},"k":{},"b":{"2":{}}}],["partner",{"_index":108,"t":{},"d":{},"k":{},"b":{"1":{}}}],["past",{"_index":185,"t":{},"d":{},"k":{},"b":{"2":{}}}],["perform",{"_index":99,"t":{},"d":{},"k":{},"b":{"1":{}}}],["perus",{"_index":178,"t":{},"d":{},"k":{},"b":{"2":{}}}],["phd",{"_index":86,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["physic",{"_index":91,"t":{},"d":{},"k":{},"b":{"1":{}}}],["pkg",{"_index":310,"t":{},"d":{},"k":{},"b":{"2":{}}}],["pkg.instanti",{"_index":311,"t":{},"d":{},"k":{},"b":{"2":{}}}],["place",{"_index":168,"t":{},"d":{},"k":{},"b":{"2":{}}}],["play",{"_index":104,"t":{},"d":{},"k":{},"b":{"1":{}}}],["pleas",{"_index":327,"t":{},"d":{},"k":{},"b":{"2":{}}}],["plug",{"_index":287,"t":{},"d":{},"k":{},"b":{"2":{}}}],["portabl",{"_index":326,"t":{},"d":{},"k":{},"b":{"2":{}}}],["possibl",{"_index":350,"t":{},"d":{},"k":{},"b":{"2":{}}}],["post",{"_index":49,"t":{"3":{}},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"4":{},"6":{},"7":{}}}],["postanatomi",{"_index":157,"t":{},"d":{},"k":{},"b":{"2":{}}}],["postssiteoverview",{"_index":154,"t":{},"d":{},"k":{},"b":{"2":{}}}],["pr",{"_index":279,"t":{},"d":{},"k":{},"b":{"2":{}}}],["practic",{"_index":162,"t":{},"d":{},"k":{},"b":{"2":{}}}],["preambl",{"_index":400,"t":{},"d":{},"k":{},"b":{"2":{}}}],["precis",{"_index":397,"t":{},"d":{},"k":{},"b":{"2":{}}}],["prefer",{"_index":399,"t":{},"d":{},"k":{},"b":{"2":{}}}],["preview",{"_index":297,"t":{},"d":{},"k":{},"b":{"2":{}}}],["prior",{"_index":295,"t":{},"d":{},"k":{},"b":{"2":{}}}],["pristin",{"_index":302,"t":{},"d":{},"k":{},"b":{"2":{}}}],["process",{"_index":59,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["program",{"_index":27,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["project",{"_index":308,"t":{},"d":{},"k":{},"b":{"2":{}}}],["promot",{"_index":64,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["provid",{"_index":82,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["public",{"_index":52,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["pull",{"_index":278,"t":{},"d":{},"k":{},"b":{"2":{}}}],["put",{"_index":176,"t":{},"d":{},"k":{},"b":{"2":{}}}],["question",{"_index":188,"t":{},"d":{},"k":{},"b":{"2":{}}}],["random",{"_index":228,"t":{},"d":{},"k":{},"b":{"2":{}}}],["readabl",{"_index":323,"t":{},"d":{},"k":{},"b":{"2":{}}}],["refer",{"_index":328,"t":{},"d":{},"k":{},"b":{"2":{}}}],["rel",{"_index":263,"t":{},"d":{},"k":{},"b":{"2":{}}}],["relat",{"_index":199,"t":{},"d":{},"k":{},"b":{"2":{}}}],["relev",{"_index":331,"t":{},"d":{},"k":{},"b":{"2":{}}}],["repositori",{"_index":201,"t":{},"d":{},"k":{},"b":{"2":{}}}],["repositorydirectori",{"_index":155,"t":{},"d":{},"k":{},"b":{"2":{}}}],["request",{"_index":7,"t":{},"d":{},"k":{},"b":{"0":{},"2":{}}}],["requir",{"_index":315,"t":{},"d":{},"k":{},"b":{"2":{}}}],["research",{"_index":58,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["result",{"_index":63,"t":{"5":{}},"d":{},"k":{},"b":{"1":{},"3":{},"5":{},"6":{},"7":{}}}],["review",{"_index":285,"t":{},"d":{},"k":{},"b":{"2":{}}}],["rich",{"_index":216,"t":{},"d":{},"k":{},"b":{"2":{}}}],["role",{"_index":106,"t":{},"d":{},"k":{},"b":{"1":{}}}],["run",{"_index":349,"t":{},"d":{},"k":{},"b":{"2":{}}}],["sa",{"_index":16,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["sandbox",{"_index":213,"t":{},"d":{},"k":{},"b":{"2":{}}}],["schematic.png",{"_index":389,"t":{},"d":{},"k":{},"b":{"2":{}}}],["scienc",{"_index":96,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["scientif",{"_index":65,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["script",{"_index":214,"t":{},"d":{},"k":{},"b":{"2":{}}}],["search",{"_index":426,"t":{"5":{}},"d":{},"k":{},"b":{"5":{}}}],["see",{"_index":293,"t":{},"d":{},"k":{},"b":{"2":{}}}],["self",{"_index":270,"t":{},"d":{},"k":{},"b":{"2":{}}}],["sep",{"_index":76,"t":{},"d":{},"k":{},"b":{"1":{},"3":{},"6":{},"7":{}}}],["septemb",{"_index":20,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["serv",{"_index":313,"t":{},"d":{},"k":{},"b":{"2":{}}}],["server",{"_index":257,"t":{},"d":{},"k":{},"b":{"2":{}}}],["sever",{"_index":394,"t":{},"d":{},"k":{},"b":{"2":{}}}],["share",{"_index":60,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["sheet",{"_index":334,"t":{},"d":{},"k":{},"b":{"2":{}}}],["short",{"_index":367,"t":{},"d":{},"k":{},"b":{"2":{}}}],["site",{"_index":202,"t":{},"d":{},"k":{},"b":{"2":{}}}],["small",{"_index":382,"t":{},"d":{},"k":{},"b":{"2":{}}}],["sme",{"_index":117,"t":{},"d":{},"k":{},"b":{"1":{}}}],["softwar",{"_index":137,"t":{},"d":{},"k":{},"b":{"1":{}}}],["someon",{"_index":284,"t":{},"d":{},"k":{},"b":{"2":{}}}],["sourc",{"_index":417,"t":{},"d":{},"k":{},"b":{"2":{}}}],["specifi",{"_index":421,"t":{},"d":{},"k":{},"b":{"2":{}}}],["staff",{"_index":31,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["start",{"_index":115,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["state",{"_index":259,"t":{},"d":{},"k":{},"b":{"2":{}}}],["stateless",{"_index":264,"t":{},"d":{},"k":{},"b":{"2":{}}}],["static",{"_index":249,"t":{},"d":{},"k":{},"b":{"2":{}}}],["stfc",{"_index":146,"t":{},"d":{},"k":{},"b":{"1":{}}}],["store",{"_index":340,"t":{},"d":{},"k":{},"b":{"2":{}}}],["structur",{"_index":156,"t":{},"d":{},"k":{},"b":{"2":{}}}],["student",{"_index":30,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["style",{"_index":333,"t":{},"d":{},"k":{},"b":{"2":{}}}],["such",{"_index":354,"t":{},"d":{},"k":{},"b":{"2":{}}}],["summari",{"_index":407,"t":{},"d":{},"k":{},"b":{"2":{}}}],["supercomput",{"_index":131,"t":{},"d":{},"k":{},"b":{"1":{}}}],["support",{"_index":135,"t":{},"d":{},"k":{},"b":{"1":{}}}],["sure",{"_index":272,"t":{},"d":{},"k":{},"b":{"2":{}}}],["surnam",{"_index":402,"t":{},"d":{},"k":{},"b":{"2":{}}}],["swansea",{"_index":129,"t":{},"d":{},"k":{},"b":{"1":{}}}],["system",{"_index":233,"t":{},"d":{},"k":{},"b":{"2":{}}}],["tag",{"_index":6,"t":{"4":{}},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}}],["tag1",{"_index":408,"t":{},"d":{},"k":{},"b":{"2":{}}}],["tag2",{"_index":409,"t":{},"d":{},"k":{},"b":{"2":{}}}],["take",{"_index":317,"t":{},"d":{},"k":{},"b":{"2":{}}}],["technic",{"_index":163,"t":{},"d":{},"k":{},"b":{"2":{}}}],["test",{"_index":378,"t":{},"d":{},"k":{},"b":{"2":{}}}],["text",{"_index":372,"t":{},"d":{},"k":{},"b":{"2":{}}}],["themselv",{"_index":320,"t":{},"d":{},"k":{},"b":{"2":{}}}],["through",{"_index":235,"t":{},"d":{},"k":{},"b":{"2":{}}}],["time",{"_index":212,"t":{},"d":{},"k":{},"b":{"2":{}}}],["titl",{"_index":368,"t":{},"d":{},"k":{},"b":{"2":{}}}],["toaster",{"_index":381,"t":{},"d":{},"k":{},"b":{"2":{}}}],["togeth",{"_index":145,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["top",{"_index":390,"t":{},"d":{},"k":{},"b":{"2":{}}}],["train",{"_index":37,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["tri",{"_index":241,"t":{},"d":{},"k":{},"b":{"2":{}}}],["ukri",{"_index":34,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["understand",{"_index":180,"t":{},"d":{},"k":{},"b":{"2":{}}}],["univers",{"_index":124,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["unless",{"_index":420,"t":{},"d":{},"k":{},"b":{"2":{}}}],["up",{"_index":116,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["upon",{"_index":120,"t":{},"d":{},"k":{},"b":{"1":{}}}],["upstream",{"_index":283,"t":{},"d":{},"k":{},"b":{"2":{}}}],["us",{"_index":44,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["user",{"_index":362,"t":{},"d":{},"k":{},"b":{"2":{}}}],["user.post",{"_index":361,"t":{},"d":{},"k":{},"b":{"2":{}}}],["user.toast",{"_index":385,"t":{},"d":{},"k":{},"b":{"2":{}}}],["usernam",{"_index":364,"t":{},"d":{},"k":{},"b":{"2":{}}}],["utter",{"_index":236,"t":{},"d":{},"k":{},"b":{"2":{}}}],["vendor",{"_index":234,"t":{},"d":{},"k":{},"b":{"2":{}}}],["via",{"_index":136,"t":{},"d":{},"k":{},"b":{"1":{}}}],["view",{"_index":74,"t":{},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"4":{},"6":{},"7":{}}}],["visitor",{"_index":260,"t":{},"d":{},"k":{},"b":{"2":{}}}],["wale",{"_index":132,"t":{},"d":{},"k":{},"b":{"1":{}}}],["web",{"_index":256,"t":{},"d":{},"k":{},"b":{"2":{}}}],["websit",{"_index":23,"t":{},"d":{},"k":{},"b":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{}}}],["weight",{"_index":352,"t":{},"d":{},"k":{},"b":{"2":{}}}],["welcom",{"_index":29,"t":{"2":{},"6":{},"7":{}},"d":{},"k":{},"b":{"1":{},"2":{},"3":{},"6":{},"7":{}}}],["well",{"_index":324,"t":{},"d":{},"k":{},"b":{"2":{}}}],["whilst",{"_index":161,"t":{},"d":{},"k":{},"b":{"2":{}}}],["why?featurescontributingblog",{"_index":153,"t":{},"d":{},"k":{},"b":{"2":{}}}],["wider",{"_index":165,"t":{},"d":{},"k":{},"b":{"2":{}}}],["wish",{"_index":189,"t":{},"d":{},"k":{},"b":{"2":{}}}],["work",{"_index":143,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["write",{"_index":164,"t":{},"d":{},"k":{},"b":{"2":{}}}],["written",{"_index":32,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["year",{"_index":83,"t":{},"d":{},"k":{},"b":{"1":{},"2":{}}}],["yourself",{"_index":196,"t":{},"d":{},"k":{},"b":{"2":{}}}]],"pipeline":["stemmer"]};
const PREVIEW_LOOKUP = {"0":{"t":"404","p":"  CDT AIMLAC Blogs        Home Index Tags                 404    The requested page was not found      Click here to go back to the homepage.    CC BY-SA 4.0 CDT-AIMLAC. Page last modified: September 07, 2022. Website built with Franklin.jl and the Julia programming language ...","l":"../404.html"},"1":{"t":"Home","p":"  CDT AIMLAC Blogs        Home Index Tags                       Welcome to the AIMLAC Blogs!  These are the student and staff blogs written by members of the UKRI Centre for Doctoral Training (CDT) in Artificial Intelligence, Machine Learning, and Advanced Computing. Useful  ...","l":"../index.html"},"2":{"t":"AIMLAC Blogs Welcome","p":"  CDT AIMLAC Blogs        Home Index Tags                AIMLAC Blogs Welcome     news ,  guide        Author: Fergus Baker (2nd Year PhD student, University of Bristol)      2022-09-04      Introduction IntroductionWhat and why?FeaturesContributingBlog postsSiteOverview of  ...","l":"../posts/fjebaker.welcome/main/index.html"},"3":{"t":"Post index","p":"  CDT AIMLAC Blogs        Home Index Tags              Post index    AIMLAC Blogs Welcome  AIMLAC now has blogs! As part of our public engagement initiatives, we are now enabling students and staff alike to post insights into their research process, share and explain interes ...","l":"../posts/index.html"},"4":{"t":"All tags","p":"  CDT AIMLAC Blogs        Home Index Tags              All tags Click on a tag to view all posts associated with that tag:   news  (1 post)   guide  (1 post)   CC BY-SA 4.0 CDT-AIMLAC. Page last modified: September 07, 2022. Website built with Franklin.jl and the Julia progr ...","l":"../posts/tags/index.html"},"5":{"t":"Search Results","p":"  CDT AIMLAC Blogs        Home Index Tags             Search Number of results found:    CC BY-SA 4.0 CDT-AIMLAC. Page last modified: September 07, 2022. Website built with Franklin.jl and the Julia programming language.  ","l":"../search/index.html"},"6":{"t":"AIMLAC Blogs Welcome","p":"  CDT AIMLAC Blogs        Home Index Tags              Posts tagged with  guide     AIMLAC Blogs Welcome  AIMLAC now has blogs! As part of our public engagement initiatives, we are now enabling students and staff alike to post insights into their research process, share and  ...","l":"../tag/guide/index.html"},"7":{"t":"AIMLAC Blogs Welcome","p":"  CDT AIMLAC Blogs        Home Index Tags              Posts tagged with  news     AIMLAC Blogs Welcome  AIMLAC now has blogs! As part of our public engagement initiatives, we are now enabling students and staff alike to post insights into their research process, share and e ...","l":"../tag/news/index.html"}};