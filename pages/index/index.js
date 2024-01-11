import audioList from './data.js';
var index = 0;
var util = require("../../utils/util.js");
const app = getApp();
var imgurl = '';
var topwenzi = '';
var textare = "";
var index = 0;
var time3 = '';
var video = "";
var random = Math.floor(Math.random() * 31);
var autor = '网易云·热评';
var autors = '';
var textare1 = "若要优美的嘴唇， 要讲亲切的话； 若要可爱的眼睛， 要看到别人的好处； 若要苗条的身材，把你的食物分给饥饿的人； 若要美丽的头发， 让小孩子一天抚摸一次你的头发； 若要优雅的姿势， 走路时要记住行人不止你一个。";
var autor1 = "赫本";
var textare2 = "一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。";
var autor2 = "三毛";
var textare3 = "故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。";
var autor3 = "张嘉佳《从你的全世界路过》";
var textare4 = "你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。";
var autor4 = "顾城《避免》";
var textare5 = "当时的他是最好的他，后来的我是最好的我。 可是最好的我们之间，隔了一整个青春。 怎么奔跑也跨不过的青春，只好伸出手道别。";
var autor5 = "八月长安《最好的我们》";
var textare6 = "我需要，最狂的风，和最静的海。可当醒我来时，世界都远了。";
var autor6 = "顾城《世界和我·第八个早晨》";
var textare7 = "星星发亮是为了让每一个人有一天都能找到属于自己的星星！";
var autor7 = "安东尼·德·圣-埃克苏佩里《小王子》";
var textare8 = "当青春变成旧照片，当旧照片变成回忆，当我们终于站在分叉的路口，孤独，失望，彷徨，残忍，上帝打开了那扇窗，叫做成长的大门。";
var autor8 = "郭敬明《小时代》";
var textare9 = "每一次告别，最好用力一点。多说一句，可能是最后一句。多看一眼，可能是最后一眼。";
var autor9 = "韩寒《后会无期》";
var textare10 = "我只能送你到这里了，剩下的路你要自己走，不要回头。";
var autor10 = "宫崎骏《千与千寻》";
var textare11 = "不是无情，亦非薄幸，只是我们一生中会遇上很多人，真正能停留驻足的又有几个？生命是终将荒芜的渡口，连我们自己都是过客。";
var autor11 = "安意如《人生若只如初见》";
var textare12 = "如果你爱上了某个星球的一朵花。那么，只要在夜晚仰望星空，就会觉得漫天的繁星就像一朵朵盛开的花。";
var autor12 = "安东尼·德·圣-埃克苏佩里《小王子》";
var textare13 = "And those who were seen dancing were thought to be insane by those who could not hear the music(那些听不见音乐的人认为那些跳舞的人疯了)。";
var autor13 = "尼采";
var textare14 = "Is life always this hard,or is it just when you are a kid? (人生总是那么痛苦吗？还是只有小时候是这样？) Always like this. (总是如此)";
var autor14 = "《这个杀手不太冷》";
var textare15 = "从现在起，我开始谨慎地选择我的生活，我不再轻易让自己迷失在各种诱惑里。我心中已经听到来自远方的呼唤，再不需要回过头去关心身后的种种是非与议论。我已无暇顾及过去，我要向前走。";
var autor15 = "米兰·昆德拉《生命中不能承受之轻》";
var textare16 = "痛苦来临时不要总问：“为什么偏偏是我？”因为快乐降临时你可没有问过这个问题。";
var autor16 = "圣劳伦斯教堂《«读者»2005年第17期》";
var textare17 = "愿你比别人更不怕一个人独处，愿日后想起时你会被自己感动。";
var autor17 = "刘同《你的孤独，虽败犹荣》";
var textare18 = "有时候人只需要一只温暖的手的触摸,就像是拥有了整个世界。我一直在等，等到绝望。";
var autor18 = "江南《龙族》";
var textare19 = "走得突然，我们来不及告别。这样也好，因为我们永远不告别。";
var autor19 = "三毛《我的宝贝》";
var textare20 = "已经走到尽头的东西，重生也不过是再一次的消亡。就像所有的开始，其实都只是一个写好了的结局。";
var autor20 = "宫崎骏《千与千寻》";
var textare21 = "假如你避免不了，就得去忍受。不能忍受生命中注定要忍受的事情，就是软弱和愚蠢的表现。";
var autor21 = "勃朗特《简爱》";
var textare22 = "人的心只容得下一定程度的绝望，海绵已经吸够了水，即使大海从它上面流过，也不能再给它增添一滴水了。";
var autor22 = "维克多·雨果《巴黎圣母院》";
var textare23 = "垂下的头颅只是为了让思想扬起，你若有一个不屈的灵魂，脚下就会有一片坚实的土地。";
var autor23 = "汪国真《旅程》";
var textare24 = "命运这种东西，生来就是要被踏于足下的，如果你还未有力量反抗它，只需怀着勇气等待。";
var autor24 = "江南《龙族》";
var textare25 = "What matters in life is not what happens to you but what you remember and how you remember it(生命中真正重要的不是你遭遇了什么，而是你记住了哪些事，又是如何铭记的) ";
var autor25 = "马尔克斯《百年孤独》";
var textare26 = "烟花不会让人懂得，它化作的尘埃是怎样的温暖，他宁肯留下一地冰冷的幻象，一地破碎。如果你哀伤，你可以为他悼念，却无法改变它的坚持。";
var autor26 = "安意如《人生若只如初见》";
var textare27 = "有的人浅薄，有的人金玉其表败絮其中。有一天 你会遇到一个彩虹般绚烂的人，当你遇到这个人后，会觉得其他人都只是浮云而已。";
var autor27 = "《怦然心动》";
var textare28 = "The greatest enemy of a good plan is the dream of a perfect plan(追求完美的想法，是一个好计划的最大敌人。)";
var autor28 = "卡尔·冯·克劳塞维茨";
var textare29 = "过去都是假的，回忆是一条没有归途的路，以往的一切春天都无法复原，即使最狂热最坚贞的爱情，归根结底也不过是一种瞬息即逝的现实，唯有孤独永恒。";
var autor29 = "加西亚·马尔克斯《百年孤独》";
var textare30 = "派大星：“嗨，海绵宝宝，我们去抓水母吧。”海绵宝宝：“对不起，今天不行，我要上学。”派大星：“如果你去上学的话，我今天该干点什么？”海绵宝宝：“我不知道，一般我不在家的时候，你都干些什么啊？”派大星：“等你回来。”";
var autor30 = "《海绵宝宝》";
var textare31 = "我必须承认生命中大部分时光是属于孤独的，努力成长是在孤独里可以进行的最好的游戏。";
var autor31 = "绿川幸《夏目友人帐》";
var video1 = "http://cdn.jay1983.cn/video/day01.mp4";
var video2 = "http://cdn.jay1983.cn/video/day02.mp4";
var video3 = "http://cdn.jay1983.cn/video/day03.mp4";
var video4 = "http://cdn.jay1983.cn/video/day04.mp4";
var video5 = "http://cdn.jay1983.cn/video/day05.mp4";
var video6 = "http://cdn.jay1983.cn/video/day06.mp4";
var video7 = "http://cdn.jay1983.cn/video/day07.mp4";
var video8 = "http://cdn.jay1983.cn/video/day08.mp4";
var video9 = "http://cdn.jay1983.cn/video/day09.mp4";
var video10 = "http://cdn.jay1983.cn/video/day10.mp4";
var video11 = "http://cdn.jay1983.cn/video/day11.mp4";
var video12 = "http://cdn.jay1983.cn/video/day12.mp4";
var video13 = "http://cdn.jay1983.cn/video/day13.mp4";
var video14 = "http://cdn.jay1983.cn/video/day14.mp4";
var video15 = "http://cdn.jay1983.cn/video/day15.mp4";
var video16 = "http://cdn.jay1983.cn/video/day16.mp4";
var video17 = "http://cdn.jay1983.cn/video/day17.mp4";
var video18 = "http://cdn.jay1983.cn/video/day18.mp4";
var video19 = "http://cdn.jay1983.cn/video/day19.mp4";
var video20 = "http://cdn.jay1983.cn/video/day20.mp4";
var video21 = "http://cdn.jay1983.cn/video/day21.mp4";
var video22 = "http://cdn.jay1983.cn/video/day22.mp4";
var video23 = "http://cdn.jay1983.cn/video/day23.mp4";
var video24 = "http://cdn.jay1983.cn/video/day24.mp4";
var video25 = "http://cdn.jay1983.cn/video/day25.mp4";
var video26 = "http://cdn.jay1983.cn/video/day26.mp4";
var video27 = "http://cdn.jay1983.cn/video/day27.mp4";
var video28 = "http://cdn.jay1983.cn/video/day28.mp4";
var video29 = "http://cdn.jay1983.cn/video/day29.mp4";
var video30 = "http://cdn.jay1983.cn/video/day30.mp4";
var video31 = "http://cdn.jay1983.cn/video/day31.mp4";
var imgurl1 = 'http://cdn.jay1983.cn/image/day01.jpg';
var imgurl2 = 'http://cdn.jay1983.cn/image/day02.jpg';
var imgurl3 = 'http://cdn.jay1983.cn/image/day03.jpg';
var imgurl4 = 'http://cdn.jay1983.cn/image/day04.jpg';
var imgurl5 = 'http://cdn.jay1983.cn/image/day05.jpg';
var imgurl6 = 'http://cdn.jay1983.cn/image/day06.jpg';
var imgurl7 = 'http://cdn.jay1983.cn/image/day07.jpg';
var imgurl8 = 'http://cdn.jay1983.cn/image/day08.jpg';
var imgurl9 = "http://cdn.jay1983.cn/image/day09.jpg";
var imgurl10 = "http://cdn.jay1983.cn/image/day10.jpg";
var imgurl11 = "http://cdn.jay1983.cn/image/day11.jpg";
var imgurl12 = "http://cdn.jay1983.cn/image/day12.jpg";
var imgurl13 = "http://cdn.jay1983.cn/image/day13.jpg";
var imgurl14 = "http://cdn.jay1983.cn/image/day14.jpg";
var imgurl15 = "http://cdn.jay1983.cn/image/day15.jpg";
var imgurl16 = "http://cdn.jay1983.cn/image/day16.jpg";
var imgurl17 = "http://cdn.jay1983.cn/image/day17.jpg";
var imgurl18 = "http://cdn.jay1983.cn/image/day18.jpg";
var imgurl19 = "http://cdn.jay1983.cn/image/day1902.jpg";
var imgurl20 = "http://cdn.jay1983.cn/image/day20.jpg";
var imgurl21 = "http://cdn.jay1983.cn/image/day21.jpg";
var imgurl22 = "http://cdn.jay1983.cn/image/day22.jpg";
var imgurl23 = "http://cdn.jay1983.cn/image/day23.jpg";
var imgurl24 = "http://cdn.jay1983.cn/image/day24.jpg";
var imgurl25 = "http://cdn.jay1983.cn/image/day25.jpg";
var imgurl26 = "http://cdn.jay1983.cn/image/day26.jpg";
var imgurl27 = "http://cdn.jay1983.cn/image/day27.jpg";
var imgurl28 = "http://cdn.jay1983.cn/image/day28.jpg";
var imgurl29 = "http://cdn.jay1983.cn/image/day29.jpg";
var imgurl30 = "http://cdn.jay1983.cn/image/img1130.jpg";
var imgurl31 = "http://cdn.jay1983.cn/image/day31.jpg";
var bottomwenzi = '';
var sheying = 'Ammsr';
var wenzi1 = '你如果认识从前的我，';
var wenzi2 = '也许你会原谅现在的我。';
var wenzi3 = '自己只会选择放弃的家伙们...';
var wenzi4 = '却在嘲笑别人的战斗。';
var wenzi5 = '我们听过无数的道理，';
var wenzi6 = '却仍旧过不好这一生。';
var wenzi7 = '愿你成为自己的太阳';
var wenzi8 = '无需借助谁的光';
var wenzi9 = '不相信自己的人，';
var wenzi10 = '连努力的价值都没有。';
var wenzi11 = '如果你知我苦衷';
var wenzi12 = '何以没一点感动';
var wenzi13 = "尚未佩妥剑，转眼便江湖。";
var wenzi14 = "愿历尽千帆，归来仍少年。";
var wenzi15 = "有些时候伤心是可以荡气回肠的，";
var wenzi16 = "但是日子还是要过下去！";
var wenzi17 = "心之所向 素履以往";
var wenzi18 = "生如逆旅 一苇以航";
var wenzi19 = "写词的人假正经,";
var wenzi20 = "听歌的人最无情。";
var wenzi21 = "海不会不蓝，";
var wenzi22 = "我不会不在。";
var wenzi23 = "青春是一本太仓促的书，";
var wenzi24 = "我们含着泪，一读再读。";
var wenzi25 = "你并没有比别人多吃了多少苦，";
var wenzi26 = "你只是比别人矫情了许多。";
var wenzi27 = "曾经发生过的事情不可能忘记，";
var wenzi28 = "只不过是想不起而已。";
var wenzi29 = "平和是生活的姿态，";
var wenzi30 = "从容是永恒的情怀。";
var wenzi31 = "海阔天空自可鱼跃化龙，";
var wenzi32 = "天高任我翱翔恣意纵横九天之上！";
var wenzi33 = "我不相信手掌的纹路，";
var wenzi34 = "但我相信手掌加上手指的力量。";
var wenzi35 = "如果结果不如你所愿";
var wenzi36 = "就在尘埃落定前奋力一搏。";
var wenzi37 = "仿佛快要消陨一般地孱弱，";
var wenzi38 = "却又拼命发着光。";
var wenzi39 = "我只能送你到这里了，";
var wenzi40 = "剩下的路你要自己走，不要回头。";
var wenzi41 = "有些人一分开就是一辈子 最可惜的是";
var wenzi42 = "人们也常常不知道哪一次是最后一次。";
var wenzi43 = "梦想是一个天真的词，";
var wenzi44 = "实现梦想是一个残酷的词。";
var wenzi45 = "不知不觉，";
var wenzi46 = "我们都已习惯生活在谎言之中了。";
var wenzi47 = "早知如此绊人心，";
var wenzi48 = "何如当初莫相识。";
var wenzi49 = "我们仰望同一星空， ";
var wenzi50 = "却看着不同的地方。";
var wenzi51 = "你什么也不要说，";
var wenzi52 = "话语是误会的根源。";
var wenzi53 = "身不由己，苦海无尽， 历经折磨蜕变， ";
var wenzi54 = "却活成了 别人想要的样子。";
var wenzi55 = "每一个不曾起舞的日子，";
var wenzi56 = "都是对生命的辜负。";
var wenzi57 = "春天来得很慢，";
var wenzi58 = "春天才有浪漫。";
var wenzi59 = "你是否";
var wenzi60 = "也活成了别人想要的样子";
var wenzi61 = "太阳西斜，";
var wenzi62 = "华灯初上。";
var sheying1 = 'Rye Jessen';
var sheying2 = 'Erik Witsoe';
var sheying3 = '狐狸狐狸鱼';
var sheying4 = '徐毅';
var sheying5 = 'wings';
var sheying1 = 'Rye Jessen';
var sheying2 = 'Bill Fairs';
var sheying3 = '狐狸狐狸鱼';
var sheying4 = '徐毅';
var sheying6 = 'wings';
var sheying7 = 'Rachael Talibart';
var sheying8 = 'Eduardo Lopez Moreno';
var sheying9 = 'Aqua Lin';
var sheying10 = 'Patrick Dumont';
var sheying11 = 'Mika Suutari';
var sheying12 = 'Michael Salisbury';
var sheying13 = 'Szymon Barylski';
var sheying14 = 'Richard Pilnick';
var sheying15 = 'Nicola Davison Reed';
var sheying16 = 'Joseph Chung';
var sheying17 = 'Mark Bickerdike';
var sheying18 = 'Andre du Plessis';
var sheying19 = '王文澜';
var sheying20 = '尹超';
var sheying21 = '殷孟珍';
var sheying22 = '陈小平';
var sheying23 = '周怡峰';
var sheying24 = '岑永生';
var sheying25 = 'John';
var sheying26 = 'NANA-C';
var sheying27 = '卢现艺';
var sheying28 = '张旭龙';
var sheying29 = '林添福';
var sheying30 = '徐 伟';
var sheying31 = '谢 墨';
var amapFile = require('../img/amap-wx.js');
Page({
  data: {
    temp_text: "如果你看到这句话就代表程序出了某些我也不知道的问题，请尝试重新进入小程序",
    temp_textfrom: "开发者",
    text: "你看他的眼神，多叫人喜欢，那么卑贱、那么悲伤，却又藏着狮子。",
    textfrom: "江南《龙族3·黑月之潮》",
    viewheight: "600",
    animationData: {},
    tranY: 20,
    bgred: 200,
    bggreen: 0,
    bgblue: 0,
    audioCtx: null,
    url: "",
    pic: "",
    body: [],
    title: "",
    author: "",
    musicpicAnimation: {},
    musicpicRotate: "",
    musicview_s: !1,
    musicAnimation: {},
    musicUrlText_s: !0,
    musicListInputAnimation: [],
    picRotate: 0,
    HistoryList: [],
    scroll_loc: 200,
    HistoryAnimation: {},
    HistoryStatus: !1,
    HistoryBtn_type: "waiting",
    HistoryBtnAnimation: {},
    bofang: true,
    xianshi: true,
    audioList: audioList,
    audioIndex: 0,
    pauseStatus: true,
    listShow: false,
    timer: '',
    currentPosition: 0,
    duration: 0,
    video: video
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: topwenzi,
      path: 'pages/index/index',
      imageUrl: imgurl
    }
  },
  onShow: function () {
    console.log("首页onShow")
    this.onLoad();
  },
  onLoad: function () {
    console.log("首页onLoad")
    //  获取本地存储存储audioIndex
    var audioIndexStorage = wx.getStorageSync('audioIndex');
    if (audioIndexStorage) {
      this.setData({
        audioIndex: audioIndexStorage
      })
    };
    var that = this;
    var time = (util.formatTime(new Date()));
    let time5 = util.formatDate4(new Date());
    var Week = util.getDates(0, time5);
    if (Week.week == "周四" || Week.week == "周五" || Week.week == "周六" || Week.week == "周日") {
      this.setData({
        //bofang: false
      })
    }
    wx.request({
      url: 'https://www.jay1983.cn/isAudioFlag',
      method: 'POST',
      success: function (req) {
        var uuidData = req.data.flag;
        var bofang = true;
        if ('1' == uuidData) {
          bofang = false;
        }
        that.setData({
          bofang: bofang
        });
      }
    });


    var time2 = util.formatTime2(new Date());
    time3 = util.formatTime3(new Date());
    var myAmapFun = new amapFile.AMapWX({
      key: '4aa02424e3f218b133fbf4f427714881'
    });
    bottomwenzi = '';
    sheying = 'Ammsr';
    var that = this;
    myAmapFun.getWeather({
      success: function (data) {
        console.log("位置调用成功");
        var weather = data.weather;
        var city = data.city;
        var temperature = data.temperature;
        if (weather == null || city == "" || temperature == null) {
          city = "";
          weather = "";
          temperature = "";
        } else {
          city = city.data + ' ·  ',
            weather = weather.data + ' ',
            temperature = temperature.data + '°C'
        }
        that.setData({
          weathers: weather,
          citys: city,
          temperatures: temperature
        })
      },
      fail: function (info) {
        //失败回调
        console.log("天气调用失败")
      }
    });
    if (time2 == '01') {
      time2 = 'Jan'
    };
    if (time2 == '02') {
      time2 = 'Feb'
    };
    if (time2 == '03') {
      time2 = 'Mar'
    };
    if (time2 == '04') {
      time2 = 'Apr'
    };
    if (time2 == '05') {
      time2 = 'May'
    };
    if (time2 == '06') {
      time2 = 'Jun'
    };
    if (time2 == '07') {
      time2 = 'Jul'
    };
    if (time2 == '08') {
      time2 = 'Aug'
    };
    if (time2 == '09') {
      time2 = 'Sept'
    };
    if (time2 == '10') {
      time2 = 'Oct'
    };
    if (time2 == '11') {
      time2 = 'Nov'
    };
    if (time2 == '12') {
      time2 = 'Dec'
    };
    if (random == '0') {
      textare = "你呢，是这辈子没故事，想拥有一段故事; 我呢，是故事太多，想给故事一个结局。";
      autor = "韩寒《飞驰人生》";
    };

    if (time3 == '01') {
      topwenzi = wenzi1;
      bottomwenzi = wenzi2;
      imgurl = imgurl1;
      sheying = sheying1;
      autor = "张爱玲《倾城之恋》";
      textare = textare1;
      autor = autor1;
      video = video1;
      textare = textare1;
      autors = autor1;
      video = video1;
      index = 1;
    };
    if (time3 == '02') {
      topwenzi = wenzi3;
      bottomwenzi = wenzi4;
      imgurl = imgurl2;
      sheying = sheying2;
      index = 2;
      autor = "史黛菈·法米利昂《落第骑士英雄谭》";
      textare = textare2;
      autor = autor2;
      video = video2;
      textare = textare2;
      autors = autor2;
      video = video2;
    };
    if (time3 == '03') {
      topwenzi = wenzi5;
      bottomwenzi = wenzi6;
      imgurl = imgurl3;
      sheying = sheying3;
      index = 3;
      autor = "韩寒《后会无期》";
      textare = textare3;
      autors = autor3;
      video = video3;
    };
    if (time3 == '04') {
      topwenzi = wenzi7;
      bottomwenzi = wenzi8;
      imgurl = imgurl4;
      sheying = sheying4;
      index = 4;
      autor = '七堇年《尘曲》';
      textare = textare4;
      autors = autor4;
      video = video4;
    }
    if (time3 == '05') {
      topwenzi = wenzi9;
      bottomwenzi = wenzi10;
      imgurl = imgurl5;
      sheying = sheying5;
      autor = "凯《火影忍者》";
      index = 5;
      textare = textare5;
      autors = autor5;
      video = video5;
    }
    if (time3 == '06') {
      topwenzi = wenzi11;
      bottomwenzi = wenzi12;
      imgurl = imgurl6;
      sheying = sheying6;
      autor = "林夕《如果你知我苦衷》";
      index = 6;
      textare = textare6;
      autors = autor6;
      video = video6;
    }
    if (time3 == '07') {
      topwenzi = wenzi13;
      bottomwenzi = wenzi14;
      imgurl = imgurl7;
      sheying = sheying7;
      autor = "《冯唐诗百首》";
      index = 7;
      textare = textare7;
      autors = autor7;
      video = video7;
    };
    if (time3 == '08') {
      topwenzi = wenzi15;
      bottomwenzi = wenzi16;
      imgurl = imgurl8;
      sheying = sheying8;
      autor = "《步步惊情》";
      index = 8;
      textare = textare8;
      autors = autor8;
      video = video8;
    };
    if (time3 == '09') {
      topwenzi = wenzi17;
      bottomwenzi = wenzi18;
      imgurl = imgurl9;
      sheying = sheying9;
      autor = "七堇年 《尘曲》";
      index = 9;
      textare = textare9;
      autors = autor9;
      video = video9;
    };
    if (time3 == '10') {
      topwenzi = wenzi19;
      bottomwenzi = wenzi20;
      imgurl = imgurl10;
      sheying = sheying10;
      autor = '澄澈';
      index = 10;
      textare = textare10;
      autors = autor10;
      video = video10;
    }
    if (time3 == '11') {
      topwenzi = wenzi21;
      bottomwenzi = wenzi22;
      imgurl = imgurl11;
      sheying = sheying11;
      autor = '原创';
      index = 11;
      textare = textare11;
      autors = autor11;
      video = video11;
    }
    if (time3 == '12') {
      topwenzi = wenzi23;
      bottomwenzi = wenzi24;
      imgurl = imgurl12;
      sheying = sheying12;
      autor = "席慕容";
      index = 12;
      textare = textare12;
      autors = autor12;
      video = video12;
    }
    if (time3 == '13') {
      topwenzi = wenzi25;
      bottomwenzi = wenzi26;
      imgurl = imgurl13;
      sheying = sheying13;
      autor = "原创";
      index = 13;
      textare = textare13;
      autors = autor13;
      video = video13;
    };
    if (time3 == '14') {
      topwenzi = wenzi27;
      bottomwenzi = wenzi28;
      imgurl = imgurl14;
      sheying = sheying14;
      autor = "宫崎骏《千与千寻》";
      index = 14;
      textare = textare14;
      autors = autor14;
      video = video14;
    };
    if (time3 == '15') {
      topwenzi = wenzi29;
      bottomwenzi = wenzi30;
      imgurl = imgurl15;
      sheying = sheying15;
      autor = "白落梅 《岁月静好 现世安稳》";
      index = 15;
      textare = textare15;
      autors = autor15;
      video = video15;
    };
    if (time3 == '16') {
      topwenzi = wenzi31;
      bottomwenzi = wenzi32;
      imgurl = imgurl16;
      sheying = sheying16;
      autor = '耳根《一念永恒》';
      index = 16;
      textare = textare16;
      autors = autor16;
      video = video16;
    }
    if (time3 == '17') {
      topwenzi = wenzi33;
      bottomwenzi = wenzi34;
      imgurl = imgurl17;
      sheying = sheying17;
      autor = "毕淑敏 《握紧你的右手》";
      index = 17;
      textare = textare17;
      autors = autor17;
      video = video17;
    }
    if (time3 == '18') {
      topwenzi = wenzi35;
      bottomwenzi = wenzi36;
      imgurl = imgurl18;
      sheying = sheying18;
      autor = '夏目贵志《夏目友人帐》';
      index = 18;
      textare = textare18;
      autors = autor18;
      video = video18;
    }
    if (time3 == '19') {
      topwenzi = wenzi37;
      bottomwenzi = wenzi38;
      imgurl = imgurl19;
      sheying = sheying19;
      autor = '《四月是你的谎言》';
      index = 19;
      textare = textare19;
      autors = autor19;
      video = video19;
    };
    if (time3 == '20') {
      topwenzi = wenzi39;
      bottomwenzi = wenzi40;
      imgurl = imgurl20;
      sheying = sheying20;
      autor = '原创';
      index = 20;
      textare = textare20;
      autors = autor20;
      video = video20;
    };
    if (time3 == '21') {
      topwenzi = wenzi41;
      bottomwenzi = wenzi42;
      imgurl = imgurl21;
      sheying = sheying21;
      autor = '《我在未来等你》';
      index = 21;
      textare = textare21;
      autors = autor21;
      video = video21;
    };
    if (time3 == '22') {
      topwenzi = wenzi43;
      bottomwenzi = wenzi44;
      imgurl = imgurl22;
      sheying = sheying22;
      autor = '《哆啦A梦》';
      index = 22;
      textare = textare22;
      autors = autor22;
      video = video22;
    }
    if (time3 == '23') {
      topwenzi = wenzi45;
      bottomwenzi = wenzi46;
      imgurl = imgurl23;
      sheying = sheying23;
      autor = '绿川幸《夏目友人帐》';
      index = 23;
      textare = textare23;
      autors = autor23;
      video = video23;
    }
    if (time3 == '24') {
      topwenzi = wenzi47;
      bottomwenzi = wenzi48;
      imgurl = imgurl24;
      sheying = sheying24;
      autor = '李白《秋风词》';
      index = 24;
      textare = textare24;
      autors = autor24;
      video = video24;
    }
    if (time3 == '25') {
      topwenzi = '拼命地，只是一味地向天空伸出双手，';
      bottomwenzi = '注视于存在于无尽远方的某些东西。';
      imgurl = imgurl25;
      sheying = sheying25;
      autor = '新海诚《秒速五厘米》';
      index = 25;
      textare = textare25;
      autors = autor25;
      video = video25;
    }
    if (time3 == '26') {
      topwenzi = wenzi51;
      bottomwenzi = wenzi52;
      imgurl = imgurl26;
      sheying = sheying26;
      autor = '安东尼·德·圣-埃克苏佩里《小王子》';
      index = 26;
      textare = textare26;
      autors = autor26;
      video = video26;
    }
    if (time3 == '27') {
      topwenzi = wenzi53;
      bottomwenzi = wenzi54;
      imgurl = imgurl27;
      sheying = sheying27;
      autor = '《一禅小和尚》';
      index = 27;
      textare = textare27;
      autors = autor27;
      video = video27;
    }
    if (time3 == '28') {
      topwenzi = wenzi55;
      bottomwenzi = wenzi56;
      imgurl = imgurl28;
      sheying = sheying28;
      autor = '尼采';
      index = 28;
      textare = textare28;
      autors = autor28;
      video = video28;
    }
    if (time3 == '29') {
      topwenzi = wenzi57;
      bottomwenzi = wenzi58;
      imgurl = imgurl29;
      sheying = sheying29;
      autor = 'Deca Joins《夜间独白》';
      index = 29;
      textare = textare29;
      autors = autor29;
      video = video29;
    }
    if (time3 == '30') {
      topwenzi = wenzi59;
      bottomwenzi = wenzi60;
      imgurl = imgurl30;
      sheying = sheying30;
      autor = '佚名';
      index = 30;
      textare = textare30;
      autors = autor30;
      video = video30;
    }
    if (time3 == '31') {
      topwenzi = wenzi61;
      bottomwenzi = wenzi62;
      imgurl = imgurl31;
      sheying = sheying31;
      autor = '玄色 《哑舍·零》';
      index = 31;
      textare = textare31;
      autors = autor31;
      video = video31;
    }
    wx.request({
      url: 'https://www.jay1983.cn/queryByOne',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        uuid: index
      },
      success: function (req) {
        imgurl = req.data.home.image;
        video = req.data.home.video;
        that.setData({
          textare: textare,
          autor: autor,
          autors: autors,
          video: video,
          time: time,
          time2: time2,
          time3: time3,
          topwenzi: topwenzi,
          bottomwenzi: bottomwenzi,
          imgurls: imgurl,
          sheyings: sheying,
          autors: autor,
          LOADING: !0,
          SCROLL_TOP: 0
        });
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo');
    var t = this,
      i = 0;
    setInterval(function () {
      (i += .01) >= .5 && i < .51 && t.gethitokoto(), i >= 7.6 && t.repeatAn();
    }, 10), setInterval(function () {
      t.changetext(), t.animationPlay(), i = 0;
    }, 8e3), wx.getSystemInfo({
      success: function (i) {
        t.setData({
          viewheight: i.windowHeight
        });
      }
    }), t.animationPlay();
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  gethitokoto: function () {
    var t, i, a = this;
    wx.request({
      url: "https://v1.hitokoto.cn/",
      data: {},
      header: {
        "content-type": "application/json"
      },
      success: function (n) {
        i = n.data.from, t = n.data.hitokoto, a.setData({
          temp_text: t
        }), a.setData({
          temp_textfrom: i
        });
      }
    });
  },
  changetext: function () {
    var t = this,
      i = t.data.temp_text,
      a = t.data.temp_textfrom,
      n = t.data.scroll_loc;
    n += 50;
    var o = t.data.HistoryList;
    o.push(i + " -《" + a + "》"), t.setData({
      text: i,
      textfrom: a,
      HistoryList: o,
      scroll_loc: n
    });
  },
  picRotate_start: function () {
    var t = this;
    t.musicpicRotate = setInterval(function () {
      t.picRotate();
    }, 100);
  },
  picRotate: function () {
    var t = this,
      i = t.data.picRotate;
    i += 1, t.setData({
      picRotate: i
    });
    var a = wx.createAnimation({
      duration: 300,
      timingFunction: "linear"
    });
    t.data.musicpicAnimation = a, a.rotate(i).step(), t.setData({
      musicpicAnimation: a.export()
    });
  },
  animationPlay: function () {
    var t = this;
    t.setData({
      tranY: 20
    });
    var i = wx.createAnimation({
      duration: 500,
      timingFunction: "linear"
    });
    this.animation = i, i.translateY(t.data.tranY).step(), this.setData({
      animationData: i.export()
    });
  },
  repeatAn: function () {
    var t = this;
    t.setData({
      tranY: 0
    });
    var i = wx.createAnimation({
      duration: 300,
      timingFunction: "linear"
    });
    this.animation = i, i.translateY(t.tranY).step(), this.setData({
      animationData: i.export()
    });
  },

  picOut: function () {
    var t = this,
      i = wx.createAnimation({
        duration: 300,
        timingFunction: "linear"
      });
    t.data.musicpicAnimation = i, i.translateX(-300).step(), t.setData({
      musicpicAnimation: i.export()
    });
  },
  picEnter: function () {
    var t = this,
      i = wx.createAnimation({
        duration: 300,
        timingFunction: "linear"
      });
    t.data.musicpicAnimation = i, i.translateX(0).step(), t.setData({
      musicpicAnimation: i.export()
    });
  },
  picRotate_stop: function () {
    var t = this;
    clearInterval(t.musicpicRotate);
  },
  historybtn: function () {
    var t = this,
      i = t.data.HistoryStatus;
    i ? (t.picEnter(), t.picRotate_start(), t.historyHidden(), t.setData({
      HistoryBtn_type: "waiting"
    })) : (t.picRotate_stop(), t.picOut(), t.historyShow(), t.setData({
      HistoryBtn_type: "cancel"
    })), i = !t.data.HistoryStatus, t.setData({
      HistoryStatus: i
    });
  },
  historyShow: function () {
    var t = this;
    t.historyBtnRotate(90);
    var i = wx.createAnimation({
      duration: 300,
      timingFunction: "linear"
    });
    t.data.HistoryAnimation = i, i.translateX(-305).scale(1, 1).step(), t.setData({
      HistoryAnimation: i.export()
    });
  },
  historyHidden: function () {
    var t = this;
    t.historyBtnRotate(0);
    var i = wx.createAnimation({
      duration: 300,
      timingFunction: "linear"
    });
    t.data.HistoryAnimation = i, i.translateX(0).scale(0, 0).step(), t.setData({
      HistoryAnimation: i.export()
    });
  },
  historyBtnRotate: function (t) {
    var i = this,
      a = wx.createAnimation({
        duration: 200,
        timingFunction: "linear"
      });
    i.data.HistoryBtnAnimation = a, a.rotateZ(t).step(), i.setData({
      HistoryBtnAnimation: a.export()
    });
  },
  historyBtnMove: function (t) {
    var i = this,
      a = wx.createAnimation({
        duration: 200,
        timingFunction: "linear"
      });
    i.data.HistoryBtnAnimation = a, a.translateX(t).step(), i.setData({
      HistoryBtnAnimation: a.export()
    });
  },
  bindPlay: function () {
    this.videoContext.play();
    this.setData({
      iiii: true
    })
  },
  bindPause: function () {
    this.videoContext.pause();
    console.log("手动暂停成功");
    this.setData({
      iiii: false
    })
  },
  endstop: function () {
    this.videoContext.stop();
    console.log("播放结束");
    this.setData({
      iiii: false
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  goto_logsshipin: function () {
    var that=this;
    var random = Math.floor(Math.random() * 31);
    console.log('随机数' + random);
    if(random=='0'){
      random='1';
    }
    wx.request({
      url: 'https://www.jay1983.cn/queryByOne',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        uuid: random
      },
      success: function (req) {
        video = req.data.home.video;
        that.setData({
          video: video,
          iiii: false
        });
      }
    })
  },
  goto_logs: function () {
    var random = Math.floor(Math.random() * 31);
    if (random == '0') {
      topwenzi = '战争就是这样，';
      bottomwenzi = '双方都认为自己是好的一方。';
      imgurl = imgurl1;
      sheying = 'sejkko';
      autor = "《哆啦A梦》";
    };
    if (random == '1') {
      topwenzi = wenzi1;
      bottomwenzi = wenzi2;
      imgurl = imgurl1;
      sheying = sheying1;
      autor = "张爱玲《倾城之恋》";
    };
    if (random == '2') {
      topwenzi = wenzi3;
      bottomwenzi = wenzi4;
      imgurl = imgurl2;
      sheying = sheying2;
      autor = "史黛菈·法米利昂《落第骑士英雄谭》";
    };
    if (random == '3') {
      topwenzi = wenzi5;
      bottomwenzi = wenzi6;
      imgurl = imgurl3;
      sheying = sheying3;
      autor = "韩寒《后会无期》";
    };
    if (random == '4') {
      topwenzi = wenzi7;
      bottomwenzi = wenzi8;
      imgurl = imgurl4;
      sheying = sheying4;
      autor = '七堇年《尘曲》';
    }
    if (random == '5') {
      topwenzi = wenzi9;
      bottomwenzi = wenzi10;
      imgurl = imgurl5;
      sheying = sheying5;
      autor = "凯《火影忍者》";
    }
    if (random == '6') {
      topwenzi = wenzi11;
      bottomwenzi = wenzi12;
      imgurl = imgurl6;
      sheying = sheying6;
      autor = "林夕《如果你知我苦衷》";
    }
    if (random == '7') {
      topwenzi = wenzi13;
      bottomwenzi = wenzi14;
      imgurl = imgurl7;
      sheying = sheying7;
      autor = "《冯唐诗百首》";
    };
    if (random == '8') {
      topwenzi = wenzi15;
      bottomwenzi = wenzi16;
      imgurl = imgurl8;
      sheying = sheying8;
      autor = "《步步惊情》";
    };
    if (random == '9') {
      topwenzi = wenzi17;
      bottomwenzi = wenzi18;
      imgurl = imgurl9;
      sheying = sheying9;
      autor = "七堇年 《尘曲》";
    };
    if (random == '10') {
      topwenzi = wenzi19;
      bottomwenzi = wenzi20;
      imgurl = imgurl10;
      sheying = sheying10;
      autor = '澄澈';
    }
    if (random == '11') {
      topwenzi = wenzi21;
      bottomwenzi = wenzi22;
      imgurl = imgurl11;
      sheying = sheying11;
      autor = '原创';
    }
    if (random == '12') {
      topwenzi = wenzi23;
      bottomwenzi = wenzi24;
      imgurl = imgurl12;
      sheying = sheying12;
      autor = "席慕容";
    }
    if (random == '13') {
      topwenzi = wenzi25;
      bottomwenzi = wenzi26;
      imgurl = imgurl13;
      sheying = sheying13;
      autor = "原创";
    };
    if (random == '14') {
      topwenzi = wenzi27;
      bottomwenzi = wenzi28;
      imgurl = imgurl14;
      sheying = sheying14;
      autor = "宫崎骏《千与千寻》";
    };
    if (random == '15') {
      topwenzi = wenzi29;
      bottomwenzi = wenzi30;
      imgurl = imgurl15;
      sheying = sheying15;
      autor = "白落梅 《岁月静好 现世安稳》";
    };
    if (random == '16') {
      topwenzi = wenzi31;
      bottomwenzi = wenzi32;
      imgurl = imgurl16;
      sheying = sheying16;
      autor = '耳根《一念永恒》';
    }
    if (random == '17') {
      topwenzi = wenzi33;
      bottomwenzi = wenzi34;
      imgurl = imgurl17;
      sheying = sheying17;
      autor = "毕淑敏 《握紧你的右手》";
    }
    if (random == '18') {
      topwenzi = wenzi35;
      bottomwenzi = wenzi36;
      imgurl = imgurl18;
      sheying = sheying18;
      autor = '夏目贵志《夏目友人帐》';
    }
    if (random == '19') {
      topwenzi = wenzi37;
      bottomwenzi = wenzi38;
      imgurl = imgurl19;
      sheying = sheying19;
      autor = '《四月是你的谎言》';
    };
    if (random == '20') {
      topwenzi = wenzi39;
      bottomwenzi = wenzi40;
      imgurl = imgurl20;
      sheying = sheying20;
      autor = '原创';
    };
    if (random == '21') {
      topwenzi = wenzi41;
      bottomwenzi = wenzi42;
      imgurl = imgurl21;
      sheying = sheying21;
      autor = '《我在未来等你》';
    };
    if (random == '22') {
      topwenzi = wenzi43;
      bottomwenzi = wenzi44;
      imgurl = imgurl22;
      sheying = sheying22;
      autor = '《哆啦A梦》';
    }
    if (random == '23') {
      topwenzi = wenzi45;
      bottomwenzi = wenzi46;
      imgurl = imgurl23;
      sheying = sheying23;
      autor = '绿川幸《夏目友人帐》';
    }
    if (random == '24') {
      topwenzi = wenzi47;
      bottomwenzi = wenzi48;
      imgurl = imgurl24;
      sheying = sheying24;
      autor = '李白《秋风词》';
    }
    if (random == '25') {
      topwenzi = wenzi49;
      bottomwenzi = wenzi50;
      imgurl = imgurl25;
      sheying = sheying25;
      autor = '新海诚《秒速五厘米》';
    }
    if (random == '26') {
      topwenzi = wenzi51;
      bottomwenzi = wenzi52;
      imgurl = imgurl26;
      sheying = sheying26;
      autor = '安东尼·德·圣-埃克苏佩里《小王子》';
    }
    if (random == '27') {
      topwenzi = wenzi53;
      bottomwenzi = wenzi54;
      imgurl = imgurl27;
      sheying = sheying27;
      autor = '《一禅小和尚》';
    }
    if (random == '28') {
      topwenzi = wenzi55;
      bottomwenzi = wenzi56;
      imgurl = imgurl28;
      sheying = sheying28;
      autor = '尼采';
    }
    if (random == '29') {
      topwenzi = wenzi57;
      bottomwenzi = wenzi58;
      imgurl = imgurl29;
      sheying = sheying29;
      autor = '佚名';
    }
    if (random == '30') {
      topwenzi = wenzi59;
      bottomwenzi = wenzi60;
      imgurl = imgurl30;
      sheying = sheying30;
      autor = '佚名';
    }
    if (random == '31') {
      topwenzi = wenzi61;
      bottomwenzi = wenzi62;
      imgurl = imgurl31;
      sheying = sheying31;
      autor = '玄色 《哑舍·零》';
    }
    this.setData({
      topwenzi: topwenzi,
      bottomwenzi: bottomwenzi,
      imgurls: imgurl,
      sheyings: sheying,
      autors: autor
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindNext: function () {
    console.log("下一首");
    if (index == 30) {
      index = 1;
    } else {
      index++;
    }
    this.bindback();
    this.setData({
      pauseStatus: false
    })
  },
  bindBefore: function () {
    if (index == 1) {
      index = 30;
    } else {
      index--;
    }
    console.log("上一首");
    this.bindback();
    this.setData({
      pauseStatus: false
    })
  },

  bindTapPlay: function () {
    if (this.data.pauseStatus === true) {
      this.bindback();
      this.setData({
        pauseStatus: false
      })
    } else if (this.data.pauseStatus === false) {
      this.zanting();
      this.setData({
        pauseStatus: true
      })
    }
  },
  bindback: function () {
    var that = this;
    let {
      audioList,
      audioIndex
    } = this.data;
    const back = wx.getBackgroundAudioManager();
    //back.src = audioList[index].src;
    console.log(index);
    wx.request({
      url: 'https://www.jay1983.cn/queryByOne',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        uuid: index
      },
      success: function (req) {
        back.src = req.data.home.audio;
        back.title = "作者是个小伙";
        back.coverImgUrl = 'http://cdn.jay1983.cn/fengmian.jpg';
        back.play();
        back.onPlay(() => {
          console.log("音乐播放开始");
        })
        back.onEnded(() => {
          console.log("音乐播放结束");
          that.setData({
            pauseStatus: true
          });
        })
      }
    })
  },
  zanting() {
    wx.pauseBackgroundAudio({
      success: function () {
        console.log("暂停")
      }
    })
  },
  setDuration(that) {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        let {
          status,
          duration,
          currentPosition
        } = res
        if (status === 1 || status === 0) {
          that.setData({
            currentPosition: that.stotime(currentPosition),
            duration: that.stotime(duration),
            sliderValue: Math.floor(currentPosition * 100 / duration),
          })
        }
      }
    })
  },
  shipin: function () {
    this.setData({
      xianshi: false
    })
  },
  tuwen: function () {
    this.setData({
      xianshi: true
    })
  },
  stotime: function (s) {
    let t = '';
    if (s > -1) {
      let min = Math.floor(s / 60) % 60;
      let sec = s % 60;
      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec;
    }
    return t;
  }
})