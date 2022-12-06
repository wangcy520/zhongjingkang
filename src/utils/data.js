let city = [];
let citys = [{
    "code": "110000",
    "label": "北京市",
    "value": "beijingshi",
    "zip_code": "100000",
    "type": 0,
    "first_letter": "B"
  },
  {
    "code": "110100",
    "label": "北京市",
    "value": "beijingshi",
    "zip_code": "100000",
    "parent_code": "110000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "110101",
    "label": "东城区",
    "value": "dongchengqu",
    "zip_code": "100010",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "110102",
    "label": "西城区",
    "value": "xichengqu",
    "zip_code": "100032",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "110105",
    "label": "朝阳区",
    "value": "chaoyangqu",
    "zip_code": "100020",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "110106",
    "label": "丰台区",
    "value": "fengtaiqu",
    "zip_code": "100071",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "110107",
    "label": "石景山区",
    "value": "shijingshanqu",
    "zip_code": "100043",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "110108",
    "label": "海淀区",
    "value": "haidianqu",
    "zip_code": "100089",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "110109",
    "label": "门头沟区",
    "value": "mentougouqu",
    "zip_code": "102300",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "110111",
    "label": "房山区",
    "value": "fangshanqu",
    "zip_code": "102488",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "110112",
    "label": "通州区",
    "value": "tongzhouqu",
    "zip_code": "101100",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "110113",
    "label": "顺义区",
    "value": "shunyiqu",
    "zip_code": "101300",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "110114",
    "label": "昌平区",
    "value": "changpingqu",
    "zip_code": "102200",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "110115",
    "label": "大兴区",
    "value": "daxingqu",
    "zip_code": "102600",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "110116",
    "label": "怀柔区",
    "value": "huairouqu",
    "zip_code": "101400",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "110117",
    "label": "平谷区",
    "value": "pingguqu",
    "zip_code": "101200",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "110118",
    "label": "密云区",
    "value": "miyunqu",
    "zip_code": "101500",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "110119",
    "label": "延庆区",
    "value": "yanqingqu",
    "zip_code": "102100",
    "parent_code": "110100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "120000",
    "label": "天津市",
    "value": "tianjinshi",
    "zip_code": "300000",
    "type": 0,
    "first_letter": "T"
  },
  {
    "code": "120100",
    "label": "天津市",
    "value": "tianjinshi",
    "zip_code": "300000",
    "parent_code": "120000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "120101",
    "label": "和平区",
    "value": "hepingqu",
    "zip_code": "300041",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "120102",
    "label": "河东区",
    "value": "hedongqu",
    "zip_code": "300171",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "120103",
    "label": "河西区",
    "value": "hexiqu",
    "zip_code": "572000",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "120104",
    "label": "南开区",
    "value": "nankaiqu",
    "zip_code": "300100",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "120105",
    "label": "河北区",
    "value": "hebeiqu",
    "zip_code": "300143",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "120106",
    "label": "红桥区",
    "value": "hongqiaoqu",
    "zip_code": "300131",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "120110",
    "label": "东丽区",
    "value": "dongliqu",
    "zip_code": "300300",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "120111",
    "label": "西青区",
    "value": "xiqingqu",
    "zip_code": "300380",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "120112",
    "label": "津南区",
    "value": "jinnanqu",
    "zip_code": "300350",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "120113",
    "label": "北辰区",
    "value": "beichenqu",
    "zip_code": "300400",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "120114",
    "label": "武清区",
    "value": "wuqingqu",
    "zip_code": "301700",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "120115",
    "label": "宝坻区",
    "value": "baodiqu",
    "zip_code": "301800",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "120116",
    "label": "滨海新区",
    "value": "binhaixinqu",
    "zip_code": "300457",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "120117",
    "label": "宁河区",
    "value": "ninghequ",
    "zip_code": "300000",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "120118",
    "label": "静海区",
    "value": "jinghaiqu",
    "zip_code": "301600",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "120119",
    "label": "蓟州区",
    "value": "jizhouqu",
    "zip_code": "301900",
    "parent_code": "120100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130000",
    "label": "河北省",
    "value": "hebeisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "H"
  },
  {
    "code": "130100",
    "label": "石家庄市",
    "value": "shijiazhuangshi",
    "zip_code": "050000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "130102",
    "label": "长安区",
    "value": "changanqu",
    "zip_code": "050011",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130104",
    "label": "桥西区",
    "value": "qiaoxiqu",
    "zip_code": "050051",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130105",
    "label": "新华区",
    "value": "xinhuaqu",
    "zip_code": "050051",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130107",
    "label": "井陉矿区",
    "value": "jingxingkuangqu",
    "zip_code": "050100",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130108",
    "label": "裕华区",
    "value": "yuhuaqu",
    "zip_code": "050081",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130109",
    "label": "藁城区",
    "value": "gaochengqu",
    "zip_code": "052160",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130110",
    "label": "鹿泉区",
    "value": "luquanqu",
    "zip_code": "050200",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130111",
    "label": "栾城区",
    "value": "luanchengqu",
    "zip_code": "051430",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130121",
    "label": "井陉县",
    "value": "jingxingxian",
    "zip_code": "050000",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130123",
    "label": "正定县",
    "value": "zhengdingxian",
    "zip_code": "050800",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130125",
    "label": "行唐县",
    "value": "xingtangxian",
    "zip_code": "050600",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130126",
    "label": "灵寿县",
    "value": "lingshouxian",
    "zip_code": "050500",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130127",
    "label": "高邑县",
    "value": "gaoyixian",
    "zip_code": "051330",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130128",
    "label": "深泽县",
    "value": "shenzexian",
    "zip_code": "052560",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130129",
    "label": "赞皇县",
    "value": "zanhuangxian",
    "zip_code": "051230",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130130",
    "label": "无极县",
    "value": "wujixian",
    "zip_code": "052400",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130131",
    "label": "平山县",
    "value": "pingshanxian",
    "zip_code": "050400",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "130132",
    "label": "元氏县",
    "value": "yuanshixian",
    "zip_code": "051130",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130133",
    "label": "赵县",
    "value": "zhaoxian",
    "zip_code": "051530",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130181",
    "label": "辛集市",
    "value": "xinjishi",
    "zip_code": "053800",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130183",
    "label": "晋州市",
    "value": "jinzhoushi",
    "zip_code": "052200",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130184",
    "label": "新乐市",
    "value": "xinleshi",
    "zip_code": "050700",
    "parent_code": "130100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130200",
    "label": "唐山市",
    "value": "tangshanshi",
    "zip_code": "063000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "130202",
    "label": "路南区",
    "value": "lunanqu",
    "zip_code": "063017",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130203",
    "label": "路北区",
    "value": "lubeiqu",
    "zip_code": "063015",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130204",
    "label": "古冶区",
    "value": "guyequ",
    "zip_code": "063104",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130205",
    "label": "开平区",
    "value": "kaipingqu",
    "zip_code": "063021",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "130207",
    "label": "丰南区",
    "value": "fengnanqu",
    "zip_code": "063300",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130208",
    "label": "丰润区",
    "value": "fengrunqu",
    "zip_code": "064000",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130209",
    "label": "曹妃甸区",
    "value": "caofeidianqu",
    "zip_code": "064000",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130223",
    "label": "滦县",
    "value": "luanxian",
    "zip_code": "063700",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130224",
    "label": "滦南县",
    "value": "luannanxian",
    "zip_code": "063500",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130225",
    "label": "乐亭县",
    "value": "letingxian",
    "zip_code": "063600",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130227",
    "label": "迁西县",
    "value": "qianxixian",
    "zip_code": "064300",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130229",
    "label": "玉田县",
    "value": "yutianxian",
    "zip_code": "064100",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130281",
    "label": "遵化市",
    "value": "zunhuashi",
    "zip_code": "064200",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130283",
    "label": "迁安市",
    "value": "qiananshi",
    "zip_code": "064400",
    "parent_code": "130200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130300",
    "label": "秦皇岛市",
    "value": "qinhuangdaoshi",
    "zip_code": "066000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "130302",
    "label": "海港区",
    "value": "haigangqu",
    "zip_code": "066000",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "130303",
    "label": "山海关区",
    "value": "shanhaiguanqu",
    "zip_code": "066200",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130304",
    "label": "北戴河区",
    "value": "beidaihequ",
    "zip_code": "066100",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "130306",
    "label": "抚宁区",
    "value": "funingqu",
    "zip_code": "066300",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130321",
    "label": "青龙满族自治县",
    "value": "qinglongmanzuzizhixian",
    "zip_code": "066500",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130322",
    "label": "昌黎县",
    "value": "changlixian",
    "zip_code": "066600",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130324",
    "label": "卢龙县",
    "value": "lulongxian",
    "zip_code": "066400",
    "parent_code": "130300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130400",
    "label": "邯郸市",
    "value": "handanshi",
    "zip_code": "056000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "130402",
    "label": "邯山区",
    "value": "hanshanqu",
    "zip_code": "056001",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "130403",
    "label": "丛台区",
    "value": "congtaiqu",
    "zip_code": "056004",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130404",
    "label": "复兴区",
    "value": "fuxingqu",
    "zip_code": "056003",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130406",
    "label": "峰峰矿区",
    "value": "fengfengkuangqu",
    "zip_code": "056200",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130407",
    "label": "肥乡区",
    "value": "feixiangqu",
    "zip_code": "057550",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130408",
    "label": "永年区",
    "value": "yongnianqu",
    "zip_code": "057151",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130423",
    "label": "临漳县",
    "value": "linzhangxian",
    "zip_code": "056600",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130424",
    "label": "成安县",
    "value": "chenganxian",
    "zip_code": "056700",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130425",
    "label": "大名县",
    "value": "damingxian",
    "zip_code": "056900",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "130426",
    "label": "涉县",
    "value": "shexian",
    "zip_code": "056400",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130427",
    "label": "磁县",
    "value": "cixian",
    "zip_code": "056500",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130430",
    "label": "邱县",
    "value": "qiuxian",
    "zip_code": "057450",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130431",
    "label": "鸡泽县",
    "value": "jizexian",
    "zip_code": "057350",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130432",
    "label": "广平县",
    "value": "guangpingxian",
    "zip_code": "057650",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130433",
    "label": "馆陶县",
    "value": "guantaoxian",
    "zip_code": "057750",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130434",
    "label": "魏县",
    "value": "weixian",
    "zip_code": "056800",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130435",
    "label": "曲周县",
    "value": "quzhouxian",
    "zip_code": "057250",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130481",
    "label": "武安市",
    "value": "wuanshi",
    "zip_code": "056300",
    "parent_code": "130400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130500",
    "label": "邢台市",
    "value": "xingtaishi",
    "zip_code": "054000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "130502",
    "label": "桥东区",
    "value": "qiaodongqu",
    "zip_code": "054001",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130503",
    "label": "桥西区",
    "value": "qiaoxiqu",
    "zip_code": "054000",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130521",
    "label": "邢台县",
    "value": "xingtaixian",
    "zip_code": "054001",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130522",
    "label": "临城县",
    "value": "linchengxian",
    "zip_code": "054300",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130523",
    "label": "内丘县",
    "value": "neiqiuxian",
    "zip_code": "054200",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "130524",
    "label": "柏乡县",
    "value": "baixiangxian",
    "zip_code": "055450",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "130525",
    "label": "隆尧县",
    "value": "longyaoxian",
    "zip_code": "055350",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130526",
    "label": "任县",
    "value": "renxian",
    "zip_code": "055150",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "130527",
    "label": "南和县",
    "value": "nanhexian",
    "zip_code": "054400",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "130528",
    "label": "宁晋县",
    "value": "ningjinxian",
    "zip_code": "055550",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "130529",
    "label": "巨鹿县",
    "value": "juluxian",
    "zip_code": "055250",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130530",
    "label": "新河县",
    "value": "xinhexian",
    "zip_code": "051730",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130531",
    "label": "广宗县",
    "value": "guangzongxian",
    "zip_code": "054600",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130532",
    "label": "平乡县",
    "value": "pingxiangxian",
    "zip_code": "054500",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "130533",
    "label": "威县",
    "value": "weixian",
    "zip_code": "054700",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130534",
    "label": "清河县",
    "value": "qinghexian",
    "zip_code": "054800",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130535",
    "label": "临西县",
    "value": "linxixian",
    "zip_code": "054900",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130581",
    "label": "南宫市",
    "value": "nangongshi",
    "zip_code": "055750",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "130582",
    "label": "沙河市",
    "value": "shaheshi",
    "zip_code": "054100",
    "parent_code": "130500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130600",
    "label": "保定市",
    "value": "baodingshi",
    "zip_code": "071000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "130602",
    "label": "竞秀区",
    "value": "jingxiuqu",
    "zip_code": "071052",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "130606",
    "label": "莲池区",
    "value": "lianchiqu",
    "zip_code": "071000",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130607",
    "label": "满城区",
    "value": "manchengqu",
    "zip_code": "071000",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "130608",
    "label": "清苑区",
    "value": "qingyuanqu",
    "zip_code": "072150",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130609",
    "label": "徐水区",
    "value": "xushuiqu",
    "zip_code": "071100",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130623",
    "label": "涞水县",
    "value": "laishuixian",
    "zip_code": "074100",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130624",
    "label": "阜平县",
    "value": "fupingxian",
    "zip_code": "073200",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130626",
    "label": "定兴县",
    "value": "dingxingxian",
    "zip_code": "072650",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "130627",
    "label": "唐县",
    "value": "tangxian",
    "zip_code": "072350",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "130628",
    "label": "高阳县",
    "value": "gaoyangxian",
    "zip_code": "071500",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130629",
    "label": "容城县",
    "value": "rongchengxian",
    "zip_code": "071700",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "130630",
    "label": "涞源县",
    "value": "laiyuanxian",
    "zip_code": "074300",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130631",
    "label": "望都县",
    "value": "wangduxian",
    "zip_code": "072450",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130632",
    "label": "安新县",
    "value": "anxinxian",
    "zip_code": "071600",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "130633",
    "label": "易县",
    "value": "yixian",
    "zip_code": "074200",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130634",
    "label": "曲阳县",
    "value": "quyangxian",
    "zip_code": "073100",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130635",
    "label": "蠡县",
    "value": "lixian",
    "zip_code": "071400",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130636",
    "label": "顺平县",
    "value": "shunpingxian",
    "zip_code": "072250",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130637",
    "label": "博野县",
    "value": "boyexian",
    "zip_code": "071300",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "130638",
    "label": "雄县",
    "value": "xiongxian",
    "zip_code": "071800",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130681",
    "label": "涿州市",
    "value": "zhuozhoushi",
    "zip_code": "072750",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130682",
    "label": "定州市",
    "value": "dingzhoushi",
    "zip_code": "053800",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "130683",
    "label": "安国市",
    "value": "anguoshi",
    "zip_code": "071200",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "130684",
    "label": "高碑店市",
    "value": "gaobeidianshi",
    "zip_code": "074000",
    "parent_code": "130600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130700",
    "label": "张家口市",
    "value": "zhangjiakoushi",
    "zip_code": "075000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "130702",
    "label": "桥东区",
    "value": "qiaodongqu",
    "zip_code": "075000",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130703",
    "label": "桥西区",
    "value": "qiaoxiqu",
    "zip_code": "075061",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130705",
    "label": "宣化区",
    "value": "xuanhuaqu",
    "zip_code": "075100",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130706",
    "label": "下花园区",
    "value": "xiahuayuanqu",
    "zip_code": "075300",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130708",
    "label": "万全区",
    "value": "wanquanqu",
    "zip_code": "075100",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130709",
    "label": "崇礼区",
    "value": "chongliqu",
    "zip_code": "075100",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130722",
    "label": "张北县",
    "value": "zhangbeixian",
    "zip_code": "076450",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130723",
    "label": "康保县",
    "value": "kangbaoxian",
    "zip_code": "076650",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "130724",
    "label": "沽源县",
    "value": "guyuanxian",
    "zip_code": "076550",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "130725",
    "label": "尚义县",
    "value": "shangyixian",
    "zip_code": "076750",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130726",
    "label": "蔚县",
    "value": "weixian",
    "zip_code": "075700",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130727",
    "label": "阳原县",
    "value": "yangyuanxian",
    "zip_code": "075800",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130728",
    "label": "怀安县",
    "value": "huaianxian",
    "zip_code": "076150",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "130730",
    "label": "怀来县",
    "value": "huailaixian",
    "zip_code": "075400",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "130731",
    "label": "涿鹿县",
    "value": "zhuoluxian",
    "zip_code": "075600",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "130732",
    "label": "赤城县",
    "value": "chichengxian",
    "zip_code": "075500",
    "parent_code": "130700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130800",
    "label": "承德市",
    "value": "chengdeshi",
    "zip_code": "067000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "130802",
    "label": "双桥区",
    "value": "shuangqiaoqu",
    "zip_code": "400900",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130803",
    "label": "双滦区",
    "value": "shuangluanqu",
    "zip_code": "067000",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130804",
    "label": "鹰手营子矿区",
    "value": "yingshouyingzikuangqu",
    "zip_code": "067200",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130821",
    "label": "承德县",
    "value": "chengdexian",
    "zip_code": "067400",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130822",
    "label": "兴隆县",
    "value": "xinglongxian",
    "zip_code": "067300",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130824",
    "label": "滦平县",
    "value": "luanpingxian",
    "zip_code": "068250",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130825",
    "label": "隆化县",
    "value": "longhuaxian",
    "zip_code": "068150",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "130826",
    "label": "丰宁满族自治县",
    "value": "fengningmanzuzizhixian",
    "zip_code": "068350",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "130827",
    "label": "宽城满族自治县",
    "value": "kuanchengmanzuzizhixian",
    "zip_code": "067600",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "130828",
    "label": "围场满族蒙古族自治县",
    "value": "weichangmanzumengguzuzizhixian",
    "zip_code": "068450",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130881",
    "label": "平泉市",
    "value": "pingquanshi",
    "zip_code": "067500",
    "parent_code": "130800",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "130900",
    "label": "沧州市",
    "value": "cangzhoushi",
    "zip_code": "061000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "130902",
    "label": "新华区",
    "value": "xinhuaqu",
    "zip_code": "061000",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130903",
    "label": "运河区",
    "value": "yunhequ",
    "zip_code": "061000",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130921",
    "label": "沧县",
    "value": "cangxian",
    "zip_code": "061000",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "130922",
    "label": "青县",
    "value": "qingxian",
    "zip_code": "062650",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "130923",
    "label": "东光县",
    "value": "dongguangxian",
    "zip_code": "061600",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "130924",
    "label": "海兴县",
    "value": "haixingxian",
    "zip_code": "061200",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "130925",
    "label": "盐山县",
    "value": "yanshanxian",
    "zip_code": "061300",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "130926",
    "label": "肃宁县",
    "value": "suningxian",
    "zip_code": "062350",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "130927",
    "label": "南皮县",
    "value": "nanpixian",
    "zip_code": "061500",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "130928",
    "label": "吴桥县",
    "value": "wuqiaoxian",
    "zip_code": "061800",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "130929",
    "label": "献县",
    "value": "xianxian",
    "zip_code": "062250",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "130930",
    "label": "孟村回族自治县",
    "value": "mengcunhuizuzizhixian",
    "zip_code": "061400",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "130981",
    "label": "泊头市",
    "value": "botoushi",
    "zip_code": "062150",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "130982",
    "label": "任丘市",
    "value": "renqiushi",
    "zip_code": "062550",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "130983",
    "label": "黄骅市",
    "value": "huanghuashi",
    "zip_code": "061100",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "130984",
    "label": "河间市",
    "value": "hejianshi",
    "zip_code": "062450",
    "parent_code": "130900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "131000",
    "label": "廊坊市",
    "value": "langfangshi",
    "zip_code": "065000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "131002",
    "label": "安次区",
    "value": "anciqu",
    "zip_code": "065000",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "131003",
    "label": "广阳区",
    "value": "guangyangqu",
    "zip_code": "065000",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "131022",
    "label": "固安县",
    "value": "guanxian",
    "zip_code": "065500",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "131023",
    "label": "永清县",
    "value": "yongqingxian",
    "zip_code": "065600",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "131024",
    "label": "香河县",
    "value": "xianghexian",
    "zip_code": "065400",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "131025",
    "label": "大城县",
    "value": "dachengxian",
    "zip_code": "065900",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "131026",
    "label": "文安县",
    "value": "wenanxian",
    "zip_code": "065800",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "131028",
    "label": "大厂回族自治县",
    "value": "dachanghuizuzizhixian",
    "zip_code": "065300",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "131081",
    "label": "霸州市",
    "value": "bazhoushi",
    "zip_code": "065700",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "131082",
    "label": "三河市",
    "value": "sanheshi",
    "zip_code": "065200",
    "parent_code": "131000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "131100",
    "label": "衡水市",
    "value": "hengshuishi",
    "zip_code": "053000",
    "parent_code": "130000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "131102",
    "label": "桃城区",
    "value": "taochengqu",
    "zip_code": "053000",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "131103",
    "label": "冀州区",
    "value": "jizhouqu",
    "zip_code": "053000",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "131121",
    "label": "枣强县",
    "value": "zaoqiangxian",
    "zip_code": "053100",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "131122",
    "label": "武邑县",
    "value": "wuyixian",
    "zip_code": "053400",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "131123",
    "label": "武强县",
    "value": "wuqiangxian",
    "zip_code": "053300",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "131124",
    "label": "饶阳县",
    "value": "raoyangxian",
    "zip_code": "053900",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "131125",
    "label": "安平县",
    "value": "anpingxian",
    "zip_code": "053600",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "131126",
    "label": "故城县",
    "value": "guchengxian",
    "zip_code": "253800",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "131127",
    "label": "景县",
    "value": "jingxian",
    "zip_code": "053500",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "131128",
    "label": "阜城县",
    "value": "fuchengxian",
    "zip_code": "053700",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "131182",
    "label": "深州市",
    "value": "shenzhoushi",
    "zip_code": "053800",
    "parent_code": "131100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "140000",
    "label": "山西省",
    "value": "shanxisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "S"
  },
  {
    "code": "140100",
    "label": "太原市",
    "value": "taiyuanshi",
    "zip_code": "030000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "140105",
    "label": "小店区",
    "value": "xiaodianqu",
    "zip_code": "030032",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140106",
    "label": "迎泽区",
    "value": "yingzequ",
    "zip_code": "030024",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140107",
    "label": "杏花岭区",
    "value": "xinghualingqu",
    "zip_code": "030001",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140108",
    "label": "尖草坪区",
    "value": "jiancaopingqu",
    "zip_code": "030003",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140109",
    "label": "万柏林区",
    "value": "wanbailinqu",
    "zip_code": "030027",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "140110",
    "label": "晋源区",
    "value": "jinyuanqu",
    "zip_code": "030025",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140121",
    "label": "清徐县",
    "value": "qingxuxian",
    "zip_code": "030400",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "140122",
    "label": "阳曲县",
    "value": "yangquxian",
    "zip_code": "030100",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140123",
    "label": "娄烦县",
    "value": "loufanxian",
    "zip_code": "030300",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140181",
    "label": "古交市",
    "value": "gujiaoshi",
    "zip_code": "030200",
    "parent_code": "140100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "140200",
    "label": "大同市",
    "value": "datongshi",
    "zip_code": "037000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "140202",
    "label": "城区",
    "value": "chengqu",
    "zip_code": "037008",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "140203",
    "label": "矿区",
    "value": "kuangqu",
    "zip_code": "037001",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "140211",
    "label": "南郊区",
    "value": "nanjiaoqu",
    "zip_code": "037001",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "140212",
    "label": "新荣区",
    "value": "xinrongqu",
    "zip_code": "037002",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140221",
    "label": "阳高县",
    "value": "yanggaoxian",
    "zip_code": "038100",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140222",
    "label": "天镇县",
    "value": "tianzhenxian",
    "zip_code": "038200",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "140223",
    "label": "广灵县",
    "value": "guanglingxian",
    "zip_code": "037500",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "140224",
    "label": "灵丘县",
    "value": "lingqiuxian",
    "zip_code": "034400",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140225",
    "label": "浑源县",
    "value": "hunyuanxian",
    "zip_code": "037400",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "140226",
    "label": "左云县",
    "value": "zuoyunxian",
    "zip_code": "037100",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "140227",
    "label": "大同县",
    "value": "datongxian",
    "zip_code": "037300",
    "parent_code": "140200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "140300",
    "label": "阳泉市",
    "value": "yangquanshi",
    "zip_code": "045000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "140302",
    "label": "城区",
    "value": "chengqu",
    "zip_code": "045000",
    "parent_code": "140300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "140303",
    "label": "矿区",
    "value": "kuangqu",
    "zip_code": "045000",
    "parent_code": "140300",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "140311",
    "label": "郊区",
    "value": "jiaoqu",
    "zip_code": "045011",
    "parent_code": "140300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140321",
    "label": "平定县",
    "value": "pingdingxian",
    "zip_code": "045200",
    "parent_code": "140300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "140322",
    "label": "盂县",
    "value": "yuxian",
    "zip_code": "045100",
    "parent_code": "140300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140400",
    "label": "长治市",
    "value": "changzhishi",
    "zip_code": "046000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "140402",
    "label": "城区",
    "value": "chengqu",
    "zip_code": "046011",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "140411",
    "label": "郊区",
    "value": "jiaoqu",
    "zip_code": "046011",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140421",
    "label": "长治县",
    "value": "changzhixian",
    "zip_code": "047100",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "140423",
    "label": "襄垣县",
    "value": "xiangyuanxian",
    "zip_code": "046200",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140424",
    "label": "屯留县",
    "value": "tunliuxian",
    "zip_code": "046100",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "140425",
    "label": "平顺县",
    "value": "pingshunxian",
    "zip_code": "047400",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "140426",
    "label": "黎城县",
    "value": "lichengxian",
    "zip_code": "047600",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140427",
    "label": "壶关县",
    "value": "huguanxian",
    "zip_code": "047300",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "140428",
    "label": "长子县",
    "value": "changzixian",
    "zip_code": "046600",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "140429",
    "label": "武乡县",
    "value": "wuxiangxian",
    "zip_code": "046300",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "140430",
    "label": "沁县",
    "value": "qinxian",
    "zip_code": "046400",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "140431",
    "label": "沁源县",
    "value": "qinyuanxian",
    "zip_code": "046500",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "140481",
    "label": "潞城市",
    "value": "luchengshi",
    "zip_code": "047500",
    "parent_code": "140400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140500",
    "label": "晋城市",
    "value": "jinchengshi",
    "zip_code": "048000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "140502",
    "label": "城区",
    "value": "chengqu",
    "zip_code": "048000",
    "parent_code": "140500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "140521",
    "label": "沁水县",
    "value": "qinshuixian",
    "zip_code": "048200",
    "parent_code": "140500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "140522",
    "label": "阳城县",
    "value": "yangchengxian",
    "zip_code": "048100",
    "parent_code": "140500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140524",
    "label": "陵川县",
    "value": "lingchuanxian",
    "zip_code": "048300",
    "parent_code": "140500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140525",
    "label": "泽州县",
    "value": "zezhouxian",
    "zip_code": "048012",
    "parent_code": "140500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "140581",
    "label": "高平市",
    "value": "gaopingshi",
    "zip_code": "048400",
    "parent_code": "140500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "140600",
    "label": "朔州市",
    "value": "shuozhoushi",
    "zip_code": "038500",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "140602",
    "label": "朔城区",
    "value": "shuochengqu",
    "zip_code": "038500",
    "parent_code": "140600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "140603",
    "label": "平鲁区",
    "value": "pingluqu",
    "zip_code": "038600",
    "parent_code": "140600",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "140621",
    "label": "山阴县",
    "value": "shanyinxian",
    "zip_code": "036900",
    "parent_code": "140600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "140622",
    "label": "应县",
    "value": "yingxian",
    "zip_code": "037600",
    "parent_code": "140600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140623",
    "label": "右玉县",
    "value": "youyuxian",
    "zip_code": "037200",
    "parent_code": "140600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140624",
    "label": "怀仁县",
    "value": "huairenxian",
    "zip_code": "038300",
    "parent_code": "140600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "140700",
    "label": "晋中市",
    "value": "jinzhongshi",
    "zip_code": "038300",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "140702",
    "label": "榆次区",
    "value": "yuciqu",
    "zip_code": "030600",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140721",
    "label": "榆社县",
    "value": "yushexian",
    "zip_code": "031800",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140722",
    "label": "左权县",
    "value": "zuoquanxian",
    "zip_code": "032600",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "140723",
    "label": "和顺县",
    "value": "heshunxian",
    "zip_code": "032700",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "140724",
    "label": "昔阳县",
    "value": "xiyangxian",
    "zip_code": "045300",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140725",
    "label": "寿阳县",
    "value": "shouyangxian",
    "zip_code": "045400",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "140726",
    "label": "太谷县",
    "value": "taiguxian",
    "zip_code": "030800",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "140727",
    "label": "祁县",
    "value": "qixian",
    "zip_code": "030900",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "140728",
    "label": "平遥县",
    "value": "pingyaoxian",
    "zip_code": "031100",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "140729",
    "label": "灵石县",
    "value": "lingshixian",
    "zip_code": "031300",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140781",
    "label": "介休市",
    "value": "jiexiushi",
    "zip_code": "031200",
    "parent_code": "140700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140800",
    "label": "运城市",
    "value": "yunchengshi",
    "zip_code": "044000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "140802",
    "label": "盐湖区",
    "value": "yanhuqu",
    "zip_code": "044000",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140821",
    "label": "临猗县",
    "value": "linyixian",
    "zip_code": "044100",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "140822",
    "label": "万荣县",
    "value": "wanrongxian",
    "zip_code": "044200",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "140823",
    "label": "闻喜县",
    "value": "wenxixian",
    "zip_code": "043800",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "140824",
    "label": "稷山县",
    "value": "jishanxian",
    "zip_code": "043200",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140825",
    "label": "新绛县",
    "value": "xinjiangxian",
    "zip_code": "043100",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140826",
    "label": "绛县",
    "value": "jiangxian",
    "zip_code": "043600",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140827",
    "label": "垣曲县",
    "value": "yuanquxian",
    "zip_code": "043700",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140828",
    "label": "夏县",
    "value": "xiaxian",
    "zip_code": "044400",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140829",
    "label": "平陆县",
    "value": "pingluxian",
    "zip_code": "044300",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "140830",
    "label": "芮城县",
    "value": "ruichengxian",
    "zip_code": "044600",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "140881",
    "label": "永济市",
    "value": "yongjishi",
    "zip_code": "044500",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "140882",
    "label": "河津市",
    "value": "hejinshi",
    "zip_code": "043300",
    "parent_code": "140800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "140900",
    "label": "忻州市",
    "value": "xinzhoushi",
    "zip_code": "034000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "140902",
    "label": "忻府区",
    "value": "xinfuqu",
    "zip_code": "034000",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "140921",
    "label": "定襄县",
    "value": "dingxiangxian",
    "zip_code": "035400",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "140922",
    "label": "五台县",
    "value": "wutaixian",
    "zip_code": "035500",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "140923",
    "label": "代县",
    "value": "daixian",
    "zip_code": "034200",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "140924",
    "label": "繁峙县",
    "value": "fanshixian",
    "zip_code": "034300",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "140925",
    "label": "宁武县",
    "value": "ningwuxian",
    "zip_code": "036700",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "140926",
    "label": "静乐县",
    "value": "jinglexian",
    "zip_code": "035100",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "140927",
    "label": "神池县",
    "value": "shenchixian",
    "zip_code": "036100",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "140928",
    "label": "五寨县",
    "value": "wuzhaixian",
    "zip_code": "036200",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "140929",
    "label": "岢岚县",
    "value": "kelanxian",
    "zip_code": "036300",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "140930",
    "label": "河曲县",
    "value": "hequxian",
    "zip_code": "036500",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "140931",
    "label": "保德县",
    "value": "baodexian",
    "zip_code": "036600",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "140932",
    "label": "偏关县",
    "value": "pianguanxian",
    "zip_code": "036400",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "140981",
    "label": "原平市",
    "value": "yuanpingshi",
    "zip_code": "034100",
    "parent_code": "140900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "141000",
    "label": "临汾市",
    "value": "linfenshi",
    "zip_code": "041000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "141002",
    "label": "尧都区",
    "value": "yaoduqu",
    "zip_code": "041000",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "141021",
    "label": "曲沃县",
    "value": "quwoxian",
    "zip_code": "043400",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "141022",
    "label": "翼城县",
    "value": "yichengxian",
    "zip_code": "043500",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "141023",
    "label": "襄汾县",
    "value": "xiangfenxian",
    "zip_code": "041500",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "141024",
    "label": "洪洞县",
    "value": "hongdongxian",
    "zip_code": "031600",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "141025",
    "label": "古县",
    "value": "guxian",
    "zip_code": "042400",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "141026",
    "label": "安泽县",
    "value": "anzexian",
    "zip_code": "042500",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "141027",
    "label": "浮山县",
    "value": "fushanxian",
    "zip_code": "042600",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "141028",
    "label": "吉县",
    "value": "jixian",
    "zip_code": "042200",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "141029",
    "label": "乡宁县",
    "value": "xiangningxian",
    "zip_code": "042100",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "141030",
    "label": "大宁县",
    "value": "daningxian",
    "zip_code": "042300",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "141031",
    "label": "隰县",
    "value": "xixian",
    "zip_code": "041300",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "141032",
    "label": "永和县",
    "value": "yonghexian",
    "zip_code": "041400",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "141033",
    "label": "蒲县",
    "value": "puxian",
    "zip_code": "041200",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "141034",
    "label": "汾西县",
    "value": "fenxixian",
    "zip_code": "031500",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "141081",
    "label": "侯马市",
    "value": "houmashi",
    "zip_code": "043007",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "141082",
    "label": "霍州市",
    "value": "huozhoushi",
    "zip_code": "031400",
    "parent_code": "141000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "141100",
    "label": "吕梁市",
    "value": "lvliangshi",
    "zip_code": "033000",
    "parent_code": "140000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "141102",
    "label": "离石区",
    "value": "lishiqu",
    "zip_code": "033000",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "141121",
    "label": "文水县",
    "value": "wenshuixian",
    "zip_code": "032100",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "141122",
    "label": "交城县",
    "value": "jiaochengxian",
    "zip_code": "030500",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "141123",
    "label": "兴县",
    "value": "xingxian",
    "zip_code": "033600",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "141124",
    "label": "临县",
    "value": "linxian",
    "zip_code": "033200",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "141125",
    "label": "柳林县",
    "value": "liulinxian",
    "zip_code": "033300",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "141126",
    "label": "石楼县",
    "value": "shilouxian",
    "zip_code": "032500",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "141127",
    "label": "岚县",
    "value": "lanxian",
    "zip_code": "033500",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "141128",
    "label": "方山县",
    "value": "fangshanxian",
    "zip_code": "033100",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "141129",
    "label": "中阳县",
    "value": "zhongyangxian",
    "zip_code": "033400",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "141130",
    "label": "交口县",
    "value": "jiaokouxian",
    "zip_code": "032400",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "141181",
    "label": "孝义市",
    "value": "xiaoyishi",
    "zip_code": "032300",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "141182",
    "label": "汾阳市",
    "value": "fenyangshi",
    "zip_code": "032200",
    "parent_code": "141100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "150000",
    "label": "内蒙古自治区",
    "value": "neimengguzizhiqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "N"
  },
  {
    "code": "150100",
    "label": "呼和浩特市",
    "value": "huhehaoteshi",
    "zip_code": "010000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "150102",
    "label": "新城区",
    "value": "xinchengqu",
    "zip_code": "010030",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "150103",
    "label": "回民区",
    "value": "huiminqu",
    "zip_code": "010030",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150104",
    "label": "玉泉区",
    "value": "yuquanqu",
    "zip_code": "010020",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "150105",
    "label": "赛罕区",
    "value": "saihanqu",
    "zip_code": "010020",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "150121",
    "label": "土默特左旗",
    "value": "tumotezuoqi",
    "zip_code": "010100",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "150122",
    "label": "托克托县",
    "value": "tuoketuoxian",
    "zip_code": "010200",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "150123",
    "label": "和林格尔县",
    "value": "helingeerxian",
    "zip_code": "011500",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150124",
    "label": "清水河县",
    "value": "qingshuihexian",
    "zip_code": "011600",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "150125",
    "label": "武川县",
    "value": "wuchuanxian",
    "zip_code": "011700",
    "parent_code": "150100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150200",
    "label": "包头市",
    "value": "baotoushi",
    "zip_code": "014000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "150202",
    "label": "东河区",
    "value": "donghequ",
    "zip_code": "014040",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "150203",
    "label": "昆都仑区",
    "value": "kundulunqu",
    "zip_code": "014010",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150204",
    "label": "青山区",
    "value": "qingshanqu",
    "zip_code": "014030",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "150205",
    "label": "石拐区",
    "value": "shiguaiqu",
    "zip_code": "014070",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "150206",
    "label": "白云鄂博矿区",
    "value": "baiyunebokuangqu",
    "zip_code": "0",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "150207",
    "label": "九原区",
    "value": "jiuyuanqu",
    "zip_code": "014060",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "150221",
    "label": "土默特右旗",
    "value": "tumoteyouqi",
    "zip_code": "014100",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "150222",
    "label": "固阳县",
    "value": "guyangxian",
    "zip_code": "014200",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "150223",
    "label": "达尔罕茂明安联合旗",
    "value": "daerhanmaominganlianheqi",
    "zip_code": "014500",
    "parent_code": "150200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "150300",
    "label": "乌海市",
    "value": "wuhaishi",
    "zip_code": "016000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "150302",
    "label": "海勃湾区",
    "value": "haibowanqu",
    "zip_code": "016000",
    "parent_code": "150300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150303",
    "label": "海南区",
    "value": "hainanqu",
    "zip_code": "016030",
    "parent_code": "150300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150304",
    "label": "乌达区",
    "value": "wudaqu",
    "zip_code": "016040",
    "parent_code": "150300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150400",
    "label": "赤峰市",
    "value": "chifengshi",
    "zip_code": "024000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "150402",
    "label": "红山区",
    "value": "hongshanqu",
    "zip_code": "024020",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150403",
    "label": "元宝山区",
    "value": "yuanbaoshanqu",
    "zip_code": "024076",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "150404",
    "label": "松山区",
    "value": "songshanqu",
    "zip_code": "024005",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "150421",
    "label": "阿鲁科尔沁旗",
    "value": "alukeerqinqi",
    "zip_code": "025550",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "150422",
    "label": "巴林左旗",
    "value": "balinzuoqi",
    "zip_code": "025450",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "150423",
    "label": "巴林右旗",
    "value": "balinyouqi",
    "zip_code": "025150",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "150424",
    "label": "林西县",
    "value": "linxixian",
    "zip_code": "025250",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "150425",
    "label": "克什克腾旗",
    "value": "keshiketengqi",
    "zip_code": "025350",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150426",
    "label": "翁牛特旗",
    "value": "wengniuteqi",
    "zip_code": "024500",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150428",
    "label": "喀喇沁旗",
    "value": "kalaqinqi",
    "zip_code": "024400",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150429",
    "label": "宁城县",
    "value": "ningchengxian",
    "zip_code": "024200",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "150430",
    "label": "敖汉旗",
    "value": "aohanqi",
    "zip_code": "024300",
    "parent_code": "150400",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "150500",
    "label": "通辽市",
    "value": "tongliaoshi",
    "zip_code": "028000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "150502",
    "label": "科尔沁区",
    "value": "keerqinqu",
    "zip_code": "028000",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150521",
    "label": "科尔沁左翼中旗",
    "value": "keerqinzuoyizhongqi",
    "zip_code": "029300",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150522",
    "label": "科尔沁左翼后旗",
    "value": "keerqinzuoyihouqi",
    "zip_code": "028100",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150523",
    "label": "开鲁县",
    "value": "kailuxian",
    "zip_code": "028400",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150524",
    "label": "库伦旗",
    "value": "kulunqi",
    "zip_code": "028200",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150525",
    "label": "奈曼旗",
    "value": "naimanqi",
    "zip_code": "028300",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "150526",
    "label": "扎鲁特旗",
    "value": "zhaluteqi",
    "zip_code": "029100",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "150581",
    "label": "霍林郭勒市",
    "value": "huolinguoleshi",
    "zip_code": "029200",
    "parent_code": "150500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150600",
    "label": "鄂尔多斯市",
    "value": "eerduosishi",
    "zip_code": "017000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "E"
  },
  {
    "code": "150602",
    "label": "东胜区",
    "value": "dongshengqu",
    "zip_code": "017000",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "150603",
    "label": "康巴什区",
    "value": "kangbashiqu",
    "zip_code": "017010",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "150621",
    "label": "达拉特旗",
    "value": "dalateqi",
    "zip_code": "014300",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "150622",
    "label": "准格尔旗",
    "value": "zhungeerqi",
    "zip_code": "017100",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "150623",
    "label": "鄂托克前旗",
    "value": "etuokeqianqi",
    "zip_code": "016200",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "150624",
    "label": "鄂托克旗",
    "value": "etuokeqi",
    "zip_code": "016100",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "150625",
    "label": "杭锦旗",
    "value": "hangjinqi",
    "zip_code": "017400",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150626",
    "label": "乌审旗",
    "value": "wushenqi",
    "zip_code": "017300",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150627",
    "label": "伊金霍洛旗",
    "value": "yijinhuoluoqi",
    "zip_code": "017200",
    "parent_code": "150600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "150700",
    "label": "呼伦贝尔市",
    "value": "hulunbeiershi",
    "zip_code": "021000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "150702",
    "label": "海拉尔区",
    "value": "hailaerqu",
    "zip_code": "021000",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150703",
    "label": "扎赉诺尔区",
    "value": "zhalainuoerqu",
    "zip_code": "021000",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "150721",
    "label": "阿荣旗",
    "value": "arongqi",
    "zip_code": "162750",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "150722",
    "label": "莫力达瓦达斡尔族自治旗",
    "value": "molidawadawoerzuzizhiqi",
    "zip_code": "162850",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "150723",
    "label": "鄂伦春自治旗",
    "value": "elunchunzizhiqi",
    "zip_code": "165450",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "150724",
    "label": "鄂温克族自治旗",
    "value": "ewenkezuzizhiqi",
    "zip_code": "021100",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "150725",
    "label": "陈巴尔虎旗",
    "value": "chenbaerhuqi",
    "zip_code": "021500",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "150726",
    "label": "新巴尔虎左旗",
    "value": "xinbaerhuzuoqi",
    "zip_code": "021200",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "150727",
    "label": "新巴尔虎右旗",
    "value": "xinbaerhuyouqi",
    "zip_code": "021300",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "150781",
    "label": "满洲里市",
    "value": "manzhoulishi",
    "zip_code": "021400",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "150782",
    "label": "牙克石市",
    "value": "yakeshishi",
    "zip_code": "022150",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "150783",
    "label": "扎兰屯市",
    "value": "zhalantunshi",
    "zip_code": "162650",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "150784",
    "label": "额尔古纳市",
    "value": "eergunashi",
    "zip_code": "022250",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "150785",
    "label": "根河市",
    "value": "genheshi",
    "zip_code": "022350",
    "parent_code": "150700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "150800",
    "label": "巴彦淖尔市",
    "value": "bayannaoershi",
    "zip_code": "015000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "150802",
    "label": "临河区",
    "value": "linhequ",
    "zip_code": "015001",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "150821",
    "label": "五原县",
    "value": "wuyuanxian",
    "zip_code": "015100",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150822",
    "label": "磴口县",
    "value": "dengkouxian",
    "zip_code": "015200",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "150823",
    "label": "乌拉特前旗",
    "value": "wulateqianqi",
    "zip_code": "014400",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150824",
    "label": "乌拉特中旗",
    "value": "wulatezhongqi",
    "zip_code": "015300",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150825",
    "label": "乌拉特后旗",
    "value": "wulatehouqi",
    "zip_code": "015500",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "150826",
    "label": "杭锦后旗",
    "value": "hangjinhouqi",
    "zip_code": "015400",
    "parent_code": "150800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150900",
    "label": "乌兰察布市",
    "value": "wulanchabushi",
    "zip_code": "0",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "150902",
    "label": "集宁区",
    "value": "jiningqu",
    "zip_code": "012000",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "150921",
    "label": "卓资县",
    "value": "zhuozixian",
    "zip_code": "012300",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "150922",
    "label": "化德县",
    "value": "huadexian",
    "zip_code": "013350",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "150923",
    "label": "商都县",
    "value": "shangduxian",
    "zip_code": "013450",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "150924",
    "label": "兴和县",
    "value": "xinghexian",
    "zip_code": "013650",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "150925",
    "label": "凉城县",
    "value": "liangchengxian",
    "zip_code": "013750",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "150926",
    "label": "察哈尔右翼前旗",
    "value": "chahaeryouyiqianqi",
    "zip_code": "012200",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "150927",
    "label": "察哈尔右翼中旗",
    "value": "chahaeryouyizhongqi",
    "zip_code": "013550",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "150928",
    "label": "察哈尔右翼后旗",
    "value": "chahaeryouyihouqi",
    "zip_code": "012400",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "150929",
    "label": "四子王旗",
    "value": "siziwangqi",
    "zip_code": "011800",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "150981",
    "label": "丰镇市",
    "value": "fengzhenshi",
    "zip_code": "012100",
    "parent_code": "150900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "152200",
    "label": "兴安盟",
    "value": "xinganmeng",
    "zip_code": "0",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "152201",
    "label": "乌兰浩特市",
    "value": "wulanhaoteshi",
    "zip_code": "137400",
    "parent_code": "152200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "152202",
    "label": "阿尔山市",
    "value": "aershanshi",
    "zip_code": "137400",
    "parent_code": "152200",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "152221",
    "label": "科尔沁右翼前旗",
    "value": "keerqinyouyiqianqi",
    "zip_code": "137400",
    "parent_code": "152200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "152222",
    "label": "科尔沁右翼中旗",
    "value": "keerqinyouyizhongqi",
    "zip_code": "029400",
    "parent_code": "152200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "152223",
    "label": "扎赉特旗",
    "value": "zhalaiteqi",
    "zip_code": "137600",
    "parent_code": "152200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "152224",
    "label": "突泉县",
    "value": "tuquanxian",
    "zip_code": "137500",
    "parent_code": "152200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "152500",
    "label": "锡林郭勒盟",
    "value": "xilinguoleimeng",
    "zip_code": "026000",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "152501",
    "label": "二连浩特市",
    "value": "erlianhaoteshi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "152502",
    "label": "锡林浩特市",
    "value": "xilinhaoteshi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "152522",
    "label": "阿巴嘎旗",
    "value": "abagaqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "152523",
    "label": "苏尼特左旗",
    "value": "sunitezuoqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "152524",
    "label": "苏尼特右旗",
    "value": "suniteyouqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "152525",
    "label": "东乌珠穆沁旗",
    "value": "dongwuzhumuqinqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "152526",
    "label": "西乌珠穆沁旗",
    "value": "xiwuzhumuqinqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "152527",
    "label": "太仆寺旗",
    "value": "taipusiqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "152528",
    "label": "镶黄旗",
    "value": "xianghuangqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "152529",
    "label": "正镶白旗",
    "value": "zhengxiangbaiqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "152530",
    "label": "正蓝旗",
    "value": "zhenglanqi",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "152531",
    "label": "多伦县",
    "value": "duolunxian",
    "zip_code": "012100",
    "parent_code": "152500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "152900",
    "label": "阿拉善盟",
    "value": "alashanmeng",
    "zip_code": "0",
    "parent_code": "150000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "152921",
    "label": "阿拉善左旗",
    "value": "alashanzuoqi",
    "zip_code": "750300",
    "parent_code": "152900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "152922",
    "label": "阿拉善右旗",
    "value": "alashanyouqi",
    "zip_code": "737300",
    "parent_code": "152900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "152923",
    "label": "额济纳旗",
    "value": "ejinaqi",
    "zip_code": "735400",
    "parent_code": "152900",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "210000",
    "label": "辽宁省",
    "value": "liaoningsheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "L"
  },
  {
    "code": "210100",
    "label": "沈阳市",
    "value": "shenyangshi",
    "zip_code": "110000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "210102",
    "label": "和平区",
    "value": "hepingqu",
    "zip_code": "110001",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210103",
    "label": "沈河区",
    "value": "shenhequ",
    "zip_code": "110013",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "210104",
    "label": "大东区",
    "value": "dadongqu",
    "zip_code": "110041",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "210105",
    "label": "皇姑区",
    "value": "huangguqu",
    "zip_code": "110031",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210106",
    "label": "铁西区",
    "value": "tiexiqu",
    "zip_code": "114013",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "210111",
    "label": "苏家屯区",
    "value": "sujiatunqu",
    "zip_code": "110101",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "210112",
    "label": "浑南区",
    "value": "hunnanqu",
    "zip_code": "110101",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210113",
    "label": "沈北新区",
    "value": "shenbeixinqu",
    "zip_code": "110121",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "210114",
    "label": "于洪区",
    "value": "yuhongqu",
    "zip_code": "110141",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "210115",
    "label": "辽中区",
    "value": "liaozhongqu",
    "zip_code": "110200",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "210123",
    "label": "康平县",
    "value": "kangpingxian",
    "zip_code": "110500",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "210124",
    "label": "法库县",
    "value": "fakuxian",
    "zip_code": "110400",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "210181",
    "label": "新民市",
    "value": "xinminshi",
    "zip_code": "110300",
    "parent_code": "210100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210200",
    "label": "大连市",
    "value": "dalianshi",
    "zip_code": "116000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "210202",
    "label": "中山区",
    "value": "zhongshanqu",
    "zip_code": "116001",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "210203",
    "label": "西岗区",
    "value": "xigangqu",
    "zip_code": "116011",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210204",
    "label": "沙河口区",
    "value": "shahekouqu",
    "zip_code": "116021",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "210211",
    "label": "甘井子区",
    "value": "ganjingziqu",
    "zip_code": "116033",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "210212",
    "label": "旅顺口区",
    "value": "lvshunkouqu",
    "zip_code": "116041",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "210213",
    "label": "金州区",
    "value": "jinzhouqu",
    "zip_code": "116100",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "210214",
    "label": "普兰店区",
    "value": "pulandianqu",
    "zip_code": "116200",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "210224",
    "label": "长海县",
    "value": "changhaixian",
    "zip_code": "116500",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "210281",
    "label": "瓦房店市",
    "value": "wafangdianshi",
    "zip_code": "116300",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "210283",
    "label": "庄河市",
    "value": "zhuangheshi",
    "zip_code": "116400",
    "parent_code": "210200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "210300",
    "label": "鞍山市",
    "value": "anshanshi",
    "zip_code": "114000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "210302",
    "label": "铁东区",
    "value": "tiedongqu",
    "zip_code": "114001",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "210303",
    "label": "铁西区",
    "value": "tiexiqu",
    "zip_code": "136000",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "210304",
    "label": "立山区",
    "value": "lishanqu",
    "zip_code": "114031",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "210311",
    "label": "千山区",
    "value": "qianshanqu",
    "zip_code": "114041",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "210321",
    "label": "台安县",
    "value": "taianxian",
    "zip_code": "114100",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "210323",
    "label": "岫岩满族自治县",
    "value": "xiuyanmanzuzizhixian",
    "zip_code": "114300",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210381",
    "label": "海城市",
    "value": "haichengshi",
    "zip_code": "114200",
    "parent_code": "210300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210400",
    "label": "抚顺市",
    "value": "fushunshi",
    "zip_code": "113000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "210402",
    "label": "新抚区",
    "value": "xinfuqu",
    "zip_code": "113008",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210403",
    "label": "东洲区",
    "value": "dongzhouqu",
    "zip_code": "113003",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "210404",
    "label": "望花区",
    "value": "wanghuaqu",
    "zip_code": "113001",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "210411",
    "label": "顺城区",
    "value": "shunchengqu",
    "zip_code": "113006",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "210421",
    "label": "抚顺县",
    "value": "fushunxian",
    "zip_code": "113006",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "210422",
    "label": "新宾满族自治县",
    "value": "xinbinmanzuzizhixian",
    "zip_code": "113200",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210423",
    "label": "清原满族自治县",
    "value": "qingyuanmanzuzizhixian",
    "zip_code": "113300",
    "parent_code": "210400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "210500",
    "label": "本溪市",
    "value": "benxishi",
    "zip_code": "117000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "210502",
    "label": "平山区",
    "value": "pingshanqu",
    "zip_code": "117000",
    "parent_code": "210500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "210503",
    "label": "溪湖区",
    "value": "xihuqu",
    "zip_code": "117002",
    "parent_code": "210500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210504",
    "label": "明山区",
    "value": "mingshanqu",
    "zip_code": "117021",
    "parent_code": "210500",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "210505",
    "label": "南芬区",
    "value": "nanfenqu",
    "zip_code": "117014",
    "parent_code": "210500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "210521",
    "label": "本溪满族自治县",
    "value": "benximanzuzizhixian",
    "zip_code": "117100",
    "parent_code": "210500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "210522",
    "label": "桓仁满族自治县",
    "value": "huanrenmanzuzizhixian",
    "zip_code": "117200",
    "parent_code": "210500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210600",
    "label": "丹东市",
    "value": "dandongshi",
    "zip_code": "118000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "210602",
    "label": "元宝区",
    "value": "yuanbaoqu",
    "zip_code": "118000",
    "parent_code": "210600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "210603",
    "label": "振兴区",
    "value": "zhenxingqu",
    "zip_code": "118002",
    "parent_code": "210600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "210604",
    "label": "振安区",
    "value": "zhenanqu",
    "zip_code": "118001",
    "parent_code": "210600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "210624",
    "label": "宽甸满族自治县",
    "value": "kuandianmanzuzizhixian",
    "zip_code": "118200",
    "parent_code": "210600",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "210681",
    "label": "东港市",
    "value": "donggangshi",
    "zip_code": "118300",
    "parent_code": "210600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "210682",
    "label": "凤城市",
    "value": "fengchengshi",
    "zip_code": "118100",
    "parent_code": "210600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "210700",
    "label": "锦州市",
    "value": "jinzhoushi",
    "zip_code": "121000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "210702",
    "label": "古塔区",
    "value": "gutaqu",
    "zip_code": "121001",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "210703",
    "label": "凌河区",
    "value": "linghequ",
    "zip_code": "121000",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "210711",
    "label": "太和区",
    "value": "taihequ",
    "zip_code": "121011",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "210726",
    "label": "黑山县",
    "value": "heishanxian",
    "zip_code": "121400",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210727",
    "label": "义县",
    "value": "yixian",
    "zip_code": "121100",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "210781",
    "label": "凌海市",
    "value": "linghaishi",
    "zip_code": "121200",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "210782",
    "label": "北镇市",
    "value": "beizhenshi",
    "zip_code": "0",
    "parent_code": "210700",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "210800",
    "label": "营口市",
    "value": "yingkoushi",
    "zip_code": "115000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "210802",
    "label": "站前区",
    "value": "zhanqianqu",
    "zip_code": "115002",
    "parent_code": "210800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "210803",
    "label": "西市区",
    "value": "xishiqu",
    "zip_code": "115004",
    "parent_code": "210800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210804",
    "label": "鲅鱼圈区",
    "value": "bayuquanqu",
    "zip_code": "115004",
    "parent_code": "210800",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "210811",
    "label": "老边区",
    "value": "laobianqu",
    "zip_code": "115005",
    "parent_code": "210800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "210881",
    "label": "盖州市",
    "value": "gaizhoushi",
    "zip_code": "115200",
    "parent_code": "210800",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "210882",
    "label": "大石桥市",
    "value": "dashiqiaoshi",
    "zip_code": "115100",
    "parent_code": "210800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "210900",
    "label": "阜新市",
    "value": "fuxinshi",
    "zip_code": "123000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "210902",
    "label": "海州区",
    "value": "haizhouqu",
    "zip_code": "123000",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "210903",
    "label": "新邱区",
    "value": "xinqiuqu",
    "zip_code": "123005",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210904",
    "label": "太平区",
    "value": "taipingqu",
    "zip_code": "123003",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "210905",
    "label": "清河门区",
    "value": "qinghemenqu",
    "zip_code": "123006",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "210911",
    "label": "细河区",
    "value": "xihequ",
    "zip_code": "123000",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "210921",
    "label": "阜新蒙古族自治县",
    "value": "fuxinmengguzuzizhixian",
    "zip_code": "123100",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "210922",
    "label": "彰武县",
    "value": "zhangwuxian",
    "zip_code": "123200",
    "parent_code": "210900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "211000",
    "label": "辽阳市",
    "value": "liaoyangshi",
    "zip_code": "111000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "211002",
    "label": "白塔区",
    "value": "baitaqu",
    "zip_code": "111000",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "211003",
    "label": "文圣区",
    "value": "wenshengqu",
    "zip_code": "111000",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "211004",
    "label": "宏伟区",
    "value": "hongweiqu",
    "zip_code": "111003",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "211005",
    "label": "弓长岭区",
    "value": "gongchanglingqu",
    "zip_code": "111008",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "211011",
    "label": "太子河区",
    "value": "taizihequ",
    "zip_code": "111000",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "211021",
    "label": "辽阳县",
    "value": "liaoyangxian",
    "zip_code": "111200",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "211081",
    "label": "灯塔市",
    "value": "dengtashi",
    "zip_code": "111300",
    "parent_code": "211000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "211100",
    "label": "盘锦市",
    "value": "panjinshi",
    "zip_code": "124000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "211102",
    "label": "双台子区",
    "value": "shuangtaiziqu",
    "zip_code": "124000",
    "parent_code": "211100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "211103",
    "label": "兴隆台区",
    "value": "xinglongtaiqu",
    "zip_code": "124010",
    "parent_code": "211100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "211104",
    "label": "大洼区",
    "value": "dawaqu",
    "zip_code": "124200",
    "parent_code": "211100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "211122",
    "label": "盘山县",
    "value": "panshanxian",
    "zip_code": "124000",
    "parent_code": "211100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "211200",
    "label": "铁岭市",
    "value": "tielingshi",
    "zip_code": "112000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "211202",
    "label": "银州区",
    "value": "yinzhouqu",
    "zip_code": "112000",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "211204",
    "label": "清河区",
    "value": "qinghequ",
    "zip_code": "112003",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "211221",
    "label": "铁岭县",
    "value": "tielingxian",
    "zip_code": "112000",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "211223",
    "label": "西丰县",
    "value": "xifengxian",
    "zip_code": "112400",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "211224",
    "label": "昌图县",
    "value": "changtuxian",
    "zip_code": "112500",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "211281",
    "label": "调兵山市",
    "value": "diaobingshanshi",
    "zip_code": "112700",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "211282",
    "label": "开原市",
    "value": "kaiyuanshi",
    "zip_code": "112300",
    "parent_code": "211200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "211300",
    "label": "朝阳市",
    "value": "chaoyangshi",
    "zip_code": "122000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "211302",
    "label": "双塔区",
    "value": "shuangtaqu",
    "zip_code": "122000",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "211303",
    "label": "龙城区",
    "value": "longchengqu",
    "zip_code": "122000",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "211321",
    "label": "朝阳县",
    "value": "chaoyangxian",
    "zip_code": "122000",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "211322",
    "label": "建平县",
    "value": "jianpingxian",
    "zip_code": "122400",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "211324",
    "label": "喀喇沁左翼蒙古族自治县",
    "value": "kalaqinzuoyimengguzuzizhixian",
    "zip_code": "122300",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "211381",
    "label": "北票市",
    "value": "beipiaoshi",
    "zip_code": "122100",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "211382",
    "label": "凌源市",
    "value": "lingyuanshi",
    "zip_code": "122500",
    "parent_code": "211300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "211400",
    "label": "葫芦岛市",
    "value": "huludaoshi",
    "zip_code": "125000",
    "parent_code": "210000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "211402",
    "label": "连山区",
    "value": "lianshanqu",
    "zip_code": "125001",
    "parent_code": "211400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "211403",
    "label": "龙港区",
    "value": "longgangqu",
    "zip_code": "125003",
    "parent_code": "211400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "211404",
    "label": "南票区",
    "value": "nanpiaoqu",
    "zip_code": "125027",
    "parent_code": "211400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "211421",
    "label": "绥中县",
    "value": "suizhongxian",
    "zip_code": "125200",
    "parent_code": "211400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "211422",
    "label": "建昌县",
    "value": "jianchangxian",
    "zip_code": "125300",
    "parent_code": "211400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "211481",
    "label": "兴城市",
    "value": "xingchengshi",
    "zip_code": "125100",
    "parent_code": "211400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "220000",
    "label": "吉林省",
    "value": "jilinsheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "J"
  },
  {
    "code": "220100",
    "label": "长春市",
    "value": "changchunshi",
    "zip_code": "130000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "220102",
    "label": "南关区",
    "value": "nanguanqu",
    "zip_code": "130022",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "220103",
    "label": "宽城区",
    "value": "kuanchengqu",
    "zip_code": "130051",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "220104",
    "label": "朝阳区",
    "value": "chaoyangqu",
    "zip_code": "130012",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "220105",
    "label": "二道区",
    "value": "erdaoqu",
    "zip_code": "130031",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "220106",
    "label": "绿园区",
    "value": "lvyuanqu",
    "zip_code": "130062",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "220112",
    "label": "双阳区",
    "value": "shuangyangqu",
    "zip_code": "130600",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "220113",
    "label": "九台区",
    "value": "jiutaiqu",
    "zip_code": "130500",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "220122",
    "label": "农安县",
    "value": "nonganxian",
    "zip_code": "130200",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "220182",
    "label": "榆树市",
    "value": "yushushi",
    "zip_code": "130400",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "220183",
    "label": "德惠市",
    "value": "dehuishi",
    "zip_code": "130300",
    "parent_code": "220100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "220200",
    "label": "吉林市",
    "value": "jilinshi",
    "zip_code": "132000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "220202",
    "label": "昌邑区",
    "value": "changyiqu",
    "zip_code": "132002",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "220203",
    "label": "龙潭区",
    "value": "longtanqu",
    "zip_code": "132021",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "220204",
    "label": "船营区",
    "value": "chuanyingqu",
    "zip_code": "132011",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "220211",
    "label": "丰满区",
    "value": "fengmanqu",
    "zip_code": "132013",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "220221",
    "label": "永吉县",
    "value": "yongjixian",
    "zip_code": "132200",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "220281",
    "label": "蛟河市",
    "value": "jiaoheshi",
    "zip_code": "132500",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "220282",
    "label": "桦甸市",
    "value": "huadianshi",
    "zip_code": "132400",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "220283",
    "label": "舒兰市",
    "value": "shulanshi",
    "zip_code": "132600",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "220284",
    "label": "磐石市",
    "value": "panshishi",
    "zip_code": "132300",
    "parent_code": "220200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "220300",
    "label": "四平市",
    "value": "sipingshi",
    "zip_code": "136000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "220302",
    "label": "铁西区",
    "value": "tiexiqu",
    "zip_code": "136000",
    "parent_code": "220300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "220303",
    "label": "铁东区",
    "value": "tiedongqu",
    "zip_code": "136001",
    "parent_code": "220300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "220322",
    "label": "梨树县",
    "value": "lishuxian",
    "zip_code": "136500",
    "parent_code": "220300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "220323",
    "label": "伊通满族自治县",
    "value": "yitongmanzuzizhixian",
    "zip_code": "130700",
    "parent_code": "220300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "220381",
    "label": "公主岭市",
    "value": "gongzhulingshi",
    "zip_code": "136100",
    "parent_code": "220300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "220382",
    "label": "双辽市",
    "value": "shuangliaoshi",
    "zip_code": "136400",
    "parent_code": "220300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "220400",
    "label": "辽源市",
    "value": "liaoyuanshi",
    "zip_code": "136200",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "220402",
    "label": "龙山区",
    "value": "longshanqu",
    "zip_code": "136200",
    "parent_code": "220400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "220403",
    "label": "西安区",
    "value": "xianqu",
    "zip_code": "136201",
    "parent_code": "220400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "220421",
    "label": "东丰县",
    "value": "dongfengxian",
    "zip_code": "136300",
    "parent_code": "220400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "220422",
    "label": "东辽县",
    "value": "dongliaoxian",
    "zip_code": "136600",
    "parent_code": "220400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "220500",
    "label": "通化市",
    "value": "tonghuashi",
    "zip_code": "134000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "220502",
    "label": "东昌区",
    "value": "dongchangqu",
    "zip_code": "134001",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "220503",
    "label": "二道江区",
    "value": "erdaojiangqu",
    "zip_code": "134003",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "220521",
    "label": "通化县",
    "value": "tonghuaxian",
    "zip_code": "134100",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "220523",
    "label": "辉南县",
    "value": "huinanxian",
    "zip_code": "135100",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "220524",
    "label": "柳河县",
    "value": "liuhexian",
    "zip_code": "135300",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "220581",
    "label": "梅河口市",
    "value": "meihekoushi",
    "zip_code": "135000",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "220582",
    "label": "集安市",
    "value": "jianshi",
    "zip_code": "134200",
    "parent_code": "220500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "220600",
    "label": "白山市",
    "value": "baishanshi",
    "zip_code": "134300",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "220602",
    "label": "浑江区",
    "value": "hunjiangqu",
    "zip_code": "134300",
    "parent_code": "220600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "220605",
    "label": "江源区",
    "value": "jiangyuanqu",
    "zip_code": "134300",
    "parent_code": "220600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "220621",
    "label": "抚松县",
    "value": "fusongxian",
    "zip_code": "134500",
    "parent_code": "220600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "220622",
    "label": "靖宇县",
    "value": "jingyuxian",
    "zip_code": "135200",
    "parent_code": "220600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "220623",
    "label": "长白朝鲜族自治县",
    "value": "changbaichaoxianzuzizhixian",
    "zip_code": "134400",
    "parent_code": "220600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "220681",
    "label": "临江市",
    "value": "linjiangshi",
    "zip_code": "134600",
    "parent_code": "220600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "220700",
    "label": "松原市",
    "value": "songyuanshi",
    "zip_code": "138000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "220702",
    "label": "宁江区",
    "value": "ningjiangqu",
    "zip_code": "138000",
    "parent_code": "220700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "220721",
    "label": "前郭尔罗斯蒙古族自治县",
    "value": "qianguoerluosimengguzuzizhixian",
    "zip_code": "138000",
    "parent_code": "220700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "220722",
    "label": "长岭县",
    "value": "changlingxian",
    "zip_code": "131500",
    "parent_code": "220700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "220723",
    "label": "乾安县",
    "value": "qiananxian",
    "zip_code": "131400",
    "parent_code": "220700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "220781",
    "label": "扶余市",
    "value": "fuyushi",
    "zip_code": "131200",
    "parent_code": "220700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "220800",
    "label": "白城市",
    "value": "baichengshi",
    "zip_code": "137000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "220802",
    "label": "洮北区",
    "value": "taobeiqu",
    "zip_code": "137000",
    "parent_code": "220800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "220821",
    "label": "镇赉县",
    "value": "zhenlaixian",
    "zip_code": "137300",
    "parent_code": "220800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "220822",
    "label": "通榆县",
    "value": "tongyuxian",
    "zip_code": "137200",
    "parent_code": "220800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "220881",
    "label": "洮南市",
    "value": "taonanshi",
    "zip_code": "137100",
    "parent_code": "220800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "220882",
    "label": "大安市",
    "value": "daanshi",
    "zip_code": "131300",
    "parent_code": "220800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "222400",
    "label": "延边朝鲜族自治州",
    "value": "yanbianchaoxianzuzizhizhou",
    "zip_code": "133000",
    "parent_code": "220000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "222401",
    "label": "延吉市",
    "value": "yanjishi",
    "zip_code": "133000",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "222402",
    "label": "图们市",
    "value": "tumenshi",
    "zip_code": "133100",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "222403",
    "label": "敦化市",
    "value": "dunhuashi",
    "zip_code": "133700",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "222404",
    "label": "珲春市",
    "value": "huichunshi",
    "zip_code": "133300",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "222405",
    "label": "龙井市",
    "value": "longjingshi",
    "zip_code": "133400",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "222406",
    "label": "和龙市",
    "value": "helongshi",
    "zip_code": "133500",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "222424",
    "label": "汪清县",
    "value": "wangqingxian",
    "zip_code": "133200",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "222426",
    "label": "安图县",
    "value": "antuxian",
    "zip_code": "133600",
    "parent_code": "222400",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "230000",
    "label": "黑龙江省",
    "value": "heilongjiangsheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "H"
  },
  {
    "code": "230100",
    "label": "哈尔滨市",
    "value": "haerbinshi",
    "zip_code": "150000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "230102",
    "label": "道里区",
    "value": "daoliqu",
    "zip_code": "150010",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230103",
    "label": "南岗区",
    "value": "nangangqu",
    "zip_code": "150006",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "230104",
    "label": "道外区",
    "value": "daowaiqu",
    "zip_code": "150020",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230108",
    "label": "平房区",
    "value": "pingfangqu",
    "zip_code": "150060",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "230109",
    "label": "松北区",
    "value": "songbeiqu",
    "zip_code": "150028",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230110",
    "label": "香坊区",
    "value": "xiangfangqu",
    "zip_code": "150036",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230111",
    "label": "呼兰区",
    "value": "hulanqu",
    "zip_code": "150500",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230112",
    "label": "阿城区",
    "value": "achengqu",
    "zip_code": "150300",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "230113",
    "label": "双城区",
    "value": "shuangchengqu",
    "zip_code": "150100",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230123",
    "label": "依兰县",
    "value": "yilanxian",
    "zip_code": "154800",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "230124",
    "label": "方正县",
    "value": "fangzhengxian",
    "zip_code": "150800",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "230125",
    "label": "宾县",
    "value": "binxian",
    "zip_code": "150400",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "230126",
    "label": "巴彦县",
    "value": "bayanxian",
    "zip_code": "151800",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "230127",
    "label": "木兰县",
    "value": "mulanxian",
    "zip_code": "151900",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "230128",
    "label": "通河县",
    "value": "tonghexian",
    "zip_code": "150900",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230129",
    "label": "延寿县",
    "value": "yanshouxian",
    "zip_code": "150700",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "230183",
    "label": "尚志市",
    "value": "shangzhishi",
    "zip_code": "150600",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230184",
    "label": "五常市",
    "value": "wuchangshi",
    "zip_code": "150200",
    "parent_code": "230100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "230200",
    "label": "齐齐哈尔市",
    "value": "qiqihaershi",
    "zip_code": "161000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "230202",
    "label": "龙沙区",
    "value": "longshaqu",
    "zip_code": "161000",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230203",
    "label": "建华区",
    "value": "jianhuaqu",
    "zip_code": "161006",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230204",
    "label": "铁锋区",
    "value": "tiefengqu",
    "zip_code": "161000",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230205",
    "label": "昂昂溪区",
    "value": "angangxiqu",
    "zip_code": "161000",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "230206",
    "label": "富拉尔基区",
    "value": "fulaerjiqu",
    "zip_code": "161041",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "230207",
    "label": "碾子山区",
    "value": "nianzishanqu",
    "zip_code": "161046",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "230208",
    "label": "梅里斯达斡尔族区",
    "value": "meilisidawoerzuqu",
    "zip_code": "161021",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "230221",
    "label": "龙江县",
    "value": "longjiangxian",
    "zip_code": "161100",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230223",
    "label": "依安县",
    "value": "yianxian",
    "zip_code": "161500",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "230224",
    "label": "泰来县",
    "value": "tailaixian",
    "zip_code": "162400",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230225",
    "label": "甘南县",
    "value": "gannanxian",
    "zip_code": "162100",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "230227",
    "label": "富裕县",
    "value": "fuyuxian",
    "zip_code": "161200",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "230229",
    "label": "克山县",
    "value": "keshanxian",
    "zip_code": "161600",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "230230",
    "label": "克东县",
    "value": "kedongxian",
    "zip_code": "164800",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "230231",
    "label": "拜泉县",
    "value": "baiquanxian",
    "zip_code": "164700",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "230281",
    "label": "讷河市",
    "value": "neheshi",
    "zip_code": "161300",
    "parent_code": "230200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "230300",
    "label": "鸡西市",
    "value": "jixishi",
    "zip_code": "158100",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "230302",
    "label": "鸡冠区",
    "value": "jiguanqu",
    "zip_code": "158100",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230303",
    "label": "恒山区",
    "value": "hengshanqu",
    "zip_code": "158130",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230304",
    "label": "滴道区",
    "value": "didaoqu",
    "zip_code": "158150",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230305",
    "label": "梨树区",
    "value": "lishuqu",
    "zip_code": "158160",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230306",
    "label": "城子河区",
    "value": "chengzihequ",
    "zip_code": "158170",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "230307",
    "label": "麻山区",
    "value": "mashanqu",
    "zip_code": "158180",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "230321",
    "label": "鸡东县",
    "value": "jidongxian",
    "zip_code": "158200",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230381",
    "label": "虎林市",
    "value": "hulinshi",
    "zip_code": "158400",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230382",
    "label": "密山市",
    "value": "mishanshi",
    "zip_code": "158300",
    "parent_code": "230300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "230400",
    "label": "鹤岗市",
    "value": "hegangshi",
    "zip_code": "154100",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "230402",
    "label": "向阳区",
    "value": "xiangyangqu",
    "zip_code": "154100",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230403",
    "label": "工农区",
    "value": "gongnongqu",
    "zip_code": "154101",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "230404",
    "label": "南山区",
    "value": "nanshanqu",
    "zip_code": "154104",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "230405",
    "label": "兴安区",
    "value": "xinganqu",
    "zip_code": "154102",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230406",
    "label": "东山区",
    "value": "dongshanqu",
    "zip_code": "522031",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230407",
    "label": "兴山区",
    "value": "xingshanqu",
    "zip_code": "154105",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230421",
    "label": "萝北县",
    "value": "luobeixian",
    "zip_code": "154200",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230422",
    "label": "绥滨县",
    "value": "suibinxian",
    "zip_code": "156200",
    "parent_code": "230400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230500",
    "label": "双鸭山市",
    "value": "shuangyashanshi",
    "zip_code": "155100",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "230502",
    "label": "尖山区",
    "value": "jianshanqu",
    "zip_code": "155100",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230503",
    "label": "岭东区",
    "value": "lingdongqu",
    "zip_code": "155120",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230505",
    "label": "四方台区",
    "value": "sifangtaiqu",
    "zip_code": "155130",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230506",
    "label": "宝山区",
    "value": "baoshanqu",
    "zip_code": "155131",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "230521",
    "label": "集贤县",
    "value": "jixianxian",
    "zip_code": "155900",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230522",
    "label": "友谊县",
    "value": "youyixian",
    "zip_code": "155800",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "230523",
    "label": "宝清县",
    "value": "baoqingxian",
    "zip_code": "155600",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "230524",
    "label": "饶河县",
    "value": "raohexian",
    "zip_code": "155700",
    "parent_code": "230500",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "230600",
    "label": "大庆市",
    "value": "daqingshi",
    "zip_code": "163000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "230602",
    "label": "萨尔图区",
    "value": "saertuqu",
    "zip_code": "163001",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230603",
    "label": "龙凤区",
    "value": "longfengqu",
    "zip_code": "163711",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230604",
    "label": "让胡路区",
    "value": "ranghuluqu",
    "zip_code": "163712",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "230605",
    "label": "红岗区",
    "value": "honggangqu",
    "zip_code": "163511",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230606",
    "label": "大同区",
    "value": "datongqu",
    "zip_code": "163515",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230621",
    "label": "肇州县",
    "value": "zhaozhouxian",
    "zip_code": "166400",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "230622",
    "label": "肇源县",
    "value": "zhaoyuanxian",
    "zip_code": "166500",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "230623",
    "label": "林甸县",
    "value": "lindianxian",
    "zip_code": "166300",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "230624",
    "label": "杜尔伯特蒙古族自治县",
    "value": "duerbaitemengguzuzizhixian",
    "zip_code": "166200",
    "parent_code": "230600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230700",
    "label": "伊春市",
    "value": "yichunshi",
    "zip_code": "153000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "230702",
    "label": "伊春区",
    "value": "yichunqu",
    "zip_code": "153000",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "230703",
    "label": "南岔区",
    "value": "nanchaqu",
    "zip_code": "153100",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "230704",
    "label": "友好区",
    "value": "youhaoqu",
    "zip_code": "153031",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "230705",
    "label": "西林区",
    "value": "xilinqu",
    "zip_code": "153025",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230706",
    "label": "翠峦区",
    "value": "cuiluanqu",
    "zip_code": "153013",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "230707",
    "label": "新青区",
    "value": "xinqingqu",
    "zip_code": "153036",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230708",
    "label": "美溪区",
    "value": "meixiqu",
    "zip_code": "153021",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "230709",
    "label": "金山屯区",
    "value": "jinshantunqu",
    "zip_code": "153026",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230710",
    "label": "五营区",
    "value": "wuyingqu",
    "zip_code": "153033",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "230711",
    "label": "乌马河区",
    "value": "wumahequ",
    "zip_code": "153011",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "230712",
    "label": "汤旺河区",
    "value": "tangwanghequ",
    "zip_code": "153037",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230713",
    "label": "带岭区",
    "value": "dailingqu",
    "zip_code": "153106",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230714",
    "label": "乌伊岭区",
    "value": "wuyilingqu",
    "zip_code": "153038",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "230715",
    "label": "红星区",
    "value": "hongxingqu",
    "zip_code": "153035",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230716",
    "label": "上甘岭区",
    "value": "shangganlingqu",
    "zip_code": "153032",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "230722",
    "label": "嘉荫县",
    "value": "jiayinxian",
    "zip_code": "153200",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230781",
    "label": "铁力市",
    "value": "tielishi",
    "zip_code": "152500",
    "parent_code": "230700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230800",
    "label": "佳木斯市",
    "value": "jiamusishi",
    "zip_code": "154000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "230803",
    "label": "向阳区",
    "value": "xiangyangqu",
    "zip_code": "154002",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230804",
    "label": "前进区",
    "value": "qianjinqu",
    "zip_code": "154002",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "230805",
    "label": "东风区",
    "value": "dongfengqu",
    "zip_code": "154005",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "230811",
    "label": "郊区",
    "value": "jiaoqu",
    "zip_code": "244000",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "230822",
    "label": "桦南县",
    "value": "huananxian",
    "zip_code": "154400",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230826",
    "label": "桦川县",
    "value": "huachuanxian",
    "zip_code": "154300",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "230828",
    "label": "汤原县",
    "value": "tangyuanxian",
    "zip_code": "154700",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230881",
    "label": "同江市",
    "value": "tongjiangshi",
    "zip_code": "156400",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230882",
    "label": "富锦市",
    "value": "fujinshi",
    "zip_code": "156100",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "230883",
    "label": "抚远市",
    "value": "fuyuanshi",
    "zip_code": "156500",
    "parent_code": "230800",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "230900",
    "label": "七台河市",
    "value": "qitaiheshi",
    "zip_code": "154600",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "230902",
    "label": "新兴区",
    "value": "xinxingqu",
    "zip_code": "154604",
    "parent_code": "230900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "230903",
    "label": "桃山区",
    "value": "taoshanqu",
    "zip_code": "154600",
    "parent_code": "230900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "230904",
    "label": "茄子河区",
    "value": "qiezihequ",
    "zip_code": "154622",
    "parent_code": "230900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "230921",
    "label": "勃利县",
    "value": "bolixian",
    "zip_code": "154500",
    "parent_code": "230900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "231000",
    "label": "牡丹江市",
    "value": "mudanjiangshi",
    "zip_code": "157000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "231002",
    "label": "东安区",
    "value": "donganqu",
    "zip_code": "157000",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "231003",
    "label": "阳明区",
    "value": "yangmingqu",
    "zip_code": "157013",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "231004",
    "label": "爱民区",
    "value": "aiminqu",
    "zip_code": "157009",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "231005",
    "label": "西安区",
    "value": "xianqu",
    "zip_code": "157000",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "231025",
    "label": "林口县",
    "value": "linkouxian",
    "zip_code": "157600",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "231081",
    "label": "绥芬河市",
    "value": "suifenheshi",
    "zip_code": "157300",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "231083",
    "label": "海林市",
    "value": "hailinshi",
    "zip_code": "157100",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "231084",
    "label": "宁安市",
    "value": "ninganshi",
    "zip_code": "157400",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "231085",
    "label": "穆棱市",
    "value": "mulingshi",
    "zip_code": "157500",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "231086",
    "label": "东宁市",
    "value": "dongningshi",
    "zip_code": "157200",
    "parent_code": "231000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "231100",
    "label": "黑河市",
    "value": "heiheshi",
    "zip_code": "164300",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "231102",
    "label": "爱辉区",
    "value": "aihuiqu",
    "zip_code": "164300",
    "parent_code": "231100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "231121",
    "label": "嫩江县",
    "value": "nenjiangxian",
    "zip_code": "161400",
    "parent_code": "231100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "231123",
    "label": "逊克县",
    "value": "xunkexian",
    "zip_code": "164400",
    "parent_code": "231100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "231124",
    "label": "孙吴县",
    "value": "sunwuxian",
    "zip_code": "164200",
    "parent_code": "231100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "231181",
    "label": "北安市",
    "value": "beianshi",
    "zip_code": "164000",
    "parent_code": "231100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "231182",
    "label": "五大连池市",
    "value": "wudalianchishi",
    "zip_code": "164100",
    "parent_code": "231100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "231200",
    "label": "绥化市",
    "value": "suihuashi",
    "zip_code": "152000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "231202",
    "label": "北林区",
    "value": "beilinqu",
    "zip_code": "152000",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "231221",
    "label": "望奎县",
    "value": "wangkuixian",
    "zip_code": "152100",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "231222",
    "label": "兰西县",
    "value": "lanxixian",
    "zip_code": "151500",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "231223",
    "label": "青冈县",
    "value": "qinggangxian",
    "zip_code": "151600",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "231224",
    "label": "庆安县",
    "value": "qinganxian",
    "zip_code": "152400",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "231225",
    "label": "明水县",
    "value": "mingshuixian",
    "zip_code": "151700",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "231226",
    "label": "绥棱县",
    "value": "suilingxian",
    "zip_code": "152200",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "231281",
    "label": "安达市",
    "value": "andashi",
    "zip_code": "151400",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "231282",
    "label": "肇东市",
    "value": "zhaodongshi",
    "zip_code": "151100",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "231283",
    "label": "海伦市",
    "value": "hailunshi",
    "zip_code": "152300",
    "parent_code": "231200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "232700",
    "label": "大兴安岭地区",
    "value": "daxinganlingdiqu",
    "zip_code": "165000",
    "parent_code": "230000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "232701",
    "label": "加格达奇区",
    "value": "jiagedaqiqu",
    "zip_code": "165000",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "232702",
    "label": "松岭区",
    "value": "songlingqu",
    "zip_code": "165010",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "232703",
    "label": "新林区",
    "value": "xinlinqu",
    "zip_code": "165000",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "232704",
    "label": "呼中区",
    "value": "huzhongqu",
    "zip_code": "165036",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "232721",
    "label": "呼玛县",
    "value": "humaxian",
    "zip_code": "165100",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "232722",
    "label": "塔河县",
    "value": "tahexian",
    "zip_code": "165200",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "232723",
    "label": "漠河县",
    "value": "mohexian",
    "zip_code": "165300",
    "parent_code": "232700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "310000",
    "label": "上海市",
    "value": "shanghaishi",
    "zip_code": "200000",
    "type": 0,
    "first_letter": "S"
  },
  {
    "code": "310100",
    "label": "上海市",
    "value": "shanghaishi",
    "zip_code": "200000",
    "parent_code": "310000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "310101",
    "label": "黄浦区",
    "value": "huangpuqu",
    "zip_code": "200001",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "310104",
    "label": "徐汇区",
    "value": "xuhuiqu",
    "zip_code": "200030",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "310105",
    "label": "长宁区",
    "value": "changningqu",
    "zip_code": "200050",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "310106",
    "label": "静安区",
    "value": "jinganqu",
    "zip_code": "200050",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "310107",
    "label": "普陀区",
    "value": "putuoqu",
    "zip_code": "200333",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "310109",
    "label": "虹口区",
    "value": "hongkouqu",
    "zip_code": "200080",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "310110",
    "label": "杨浦区",
    "value": "yangpuqu",
    "zip_code": "200082",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "310112",
    "label": "闵行区",
    "value": "minxingqu",
    "zip_code": "201100",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "310113",
    "label": "宝山区",
    "value": "baoshanqu",
    "zip_code": "201900",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "310114",
    "label": "嘉定区",
    "value": "jiadingqu",
    "zip_code": "201800",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "310115",
    "label": "浦东新区",
    "value": "pudongxinqu",
    "zip_code": "200135",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "310116",
    "label": "金山区",
    "value": "jinshanqu",
    "zip_code": "200540",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "310117",
    "label": "松江区",
    "value": "songjiangqu",
    "zip_code": "201600",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "310118",
    "label": "青浦区",
    "value": "qingpuqu",
    "zip_code": "201700",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "310120",
    "label": "奉贤区",
    "value": "fengxianqu",
    "zip_code": "201400",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "310151",
    "label": "崇明区",
    "value": "chongmingqu",
    "zip_code": "202150",
    "parent_code": "310100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "320000",
    "label": "江苏省",
    "value": "jiangsusheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "J"
  },
  {
    "code": "320100",
    "label": "南京市",
    "value": "nanjingshi",
    "zip_code": "210000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "320102",
    "label": "玄武区",
    "value": "xuanwuqu",
    "zip_code": "210018",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320104",
    "label": "秦淮区",
    "value": "qinhuaiqu",
    "zip_code": "210001",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "320105",
    "label": "建邺区",
    "value": "jianyequ",
    "zip_code": "210004",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320106",
    "label": "鼓楼区",
    "value": "gulouqu",
    "zip_code": "210009",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320111",
    "label": "浦口区",
    "value": "pukouqu",
    "zip_code": "211800",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "320113",
    "label": "栖霞区",
    "value": "qixiaqu",
    "zip_code": "210046",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "320114",
    "label": "雨花台区",
    "value": "yuhuataiqu",
    "zip_code": "210012",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "320115",
    "label": "江宁区",
    "value": "jiangningqu",
    "zip_code": "211100",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320116",
    "label": "六合区",
    "value": "liuhequ",
    "zip_code": "211500",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "320117",
    "label": "溧水区",
    "value": "lishuiqu",
    "zip_code": "211200",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "320118",
    "label": "高淳区",
    "value": "gaochunqu",
    "zip_code": "211300",
    "parent_code": "320100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320200",
    "label": "无锡市",
    "value": "wuxishi",
    "zip_code": "214000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "320205",
    "label": "锡山区",
    "value": "xishanqu",
    "zip_code": "214021",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320206",
    "label": "惠山区",
    "value": "huishanqu",
    "zip_code": "214021",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320211",
    "label": "滨湖区",
    "value": "binhuqu",
    "zip_code": "214062",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "320213",
    "label": "梁溪区",
    "value": "liangxiqu",
    "zip_code": "214400",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "320214",
    "label": "新吴区",
    "value": "xinwuqu",
    "zip_code": "214200",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320281",
    "label": "江阴市",
    "value": "jiangyinshi",
    "zip_code": "214400",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320282",
    "label": "宜兴市",
    "value": "yixingshi",
    "zip_code": "214200",
    "parent_code": "320200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "320300",
    "label": "徐州市",
    "value": "xuzhoushi",
    "zip_code": "221000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "320302",
    "label": "鼓楼区",
    "value": "gulouqu",
    "zip_code": "221005",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320303",
    "label": "云龙区",
    "value": "yunlongqu",
    "zip_code": "221009",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "320305",
    "label": "贾汪区",
    "value": "jiawangqu",
    "zip_code": "221011",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320311",
    "label": "泉山区",
    "value": "quanshanqu",
    "zip_code": "221006",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "320312",
    "label": "铜山区",
    "value": "tongshanqu",
    "zip_code": "221000",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "320321",
    "label": "丰县",
    "value": "fengxian",
    "zip_code": "221700",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "320322",
    "label": "沛县",
    "value": "peixian",
    "zip_code": "221600",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "320324",
    "label": "睢宁县",
    "value": "suiningxian",
    "zip_code": "221200",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "320381",
    "label": "新沂市",
    "value": "xinyishi",
    "zip_code": "221400",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320382",
    "label": "邳州市",
    "value": "pizhoushi",
    "zip_code": "221300",
    "parent_code": "320300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "320400",
    "label": "常州市",
    "value": "changzhoushi",
    "zip_code": "213000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "320402",
    "label": "天宁区",
    "value": "tianningqu",
    "zip_code": "213003",
    "parent_code": "320400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "320404",
    "label": "钟楼区",
    "value": "zhonglouqu",
    "zip_code": "213002",
    "parent_code": "320400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "320411",
    "label": "新北区",
    "value": "xinbeiqu",
    "zip_code": "213001",
    "parent_code": "320400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320412",
    "label": "武进区",
    "value": "wujinqu",
    "zip_code": "213161",
    "parent_code": "320400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "320413",
    "label": "金坛区",
    "value": "jintanqu",
    "zip_code": "213200",
    "parent_code": "320400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320481",
    "label": "溧阳市",
    "value": "liyangshi",
    "zip_code": "213300",
    "parent_code": "320400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "320500",
    "label": "苏州市",
    "value": "suzhoushi",
    "zip_code": "215000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "320505",
    "label": "虎丘区",
    "value": "huqiuqu",
    "zip_code": "215004",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320506",
    "label": "吴中区",
    "value": "wuzhongqu",
    "zip_code": "215128",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "320507",
    "label": "相城区",
    "value": "xiangchengqu",
    "zip_code": "215131",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320508",
    "label": "姑苏区",
    "value": "gusuqu",
    "zip_code": "215000",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320509",
    "label": "吴江区",
    "value": "wujiangqu",
    "zip_code": "215000",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "320581",
    "label": "常熟市",
    "value": "changshushi",
    "zip_code": "215500",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "320582",
    "label": "张家港市",
    "value": "zhangjiagangshi",
    "zip_code": "215600",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "320583",
    "label": "昆山市",
    "value": "kunshanshi",
    "zip_code": "215300",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "320585",
    "label": "太仓市",
    "value": "taicangshi",
    "zip_code": "215400",
    "parent_code": "320500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "320600",
    "label": "南通市",
    "value": "nantongshi",
    "zip_code": "226000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "320602",
    "label": "崇川区",
    "value": "chongchuanqu",
    "zip_code": "226001",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "320611",
    "label": "港闸区",
    "value": "gangzhaqu",
    "zip_code": "226001",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320612",
    "label": "通州区",
    "value": "tongzhouqu",
    "zip_code": "226300",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "320621",
    "label": "海安县",
    "value": "haianxian",
    "zip_code": "226600",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320623",
    "label": "如东县",
    "value": "rudongxian",
    "zip_code": "226400",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "320681",
    "label": "启东市",
    "value": "qidongshi",
    "zip_code": "226200",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "320682",
    "label": "如皋市",
    "value": "rugaoshi",
    "zip_code": "226500",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "320684",
    "label": "海门市",
    "value": "haimenshi",
    "zip_code": "226100",
    "parent_code": "320600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320700",
    "label": "连云港市",
    "value": "lianyungangshi",
    "zip_code": "222000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "320703",
    "label": "连云区",
    "value": "lianyunqu",
    "zip_code": "222042",
    "parent_code": "320700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "320706",
    "label": "海州区",
    "value": "haizhouqu",
    "zip_code": "222023",
    "parent_code": "320700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320707",
    "label": "赣榆区",
    "value": "ganyuqu",
    "zip_code": "222100",
    "parent_code": "320700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320722",
    "label": "东海县",
    "value": "donghaixian",
    "zip_code": "222300",
    "parent_code": "320700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "320723",
    "label": "灌云县",
    "value": "guanyunxian",
    "zip_code": "222200",
    "parent_code": "320700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320724",
    "label": "灌南县",
    "value": "guannanxian",
    "zip_code": "223500",
    "parent_code": "320700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "320800",
    "label": "淮安市",
    "value": "huaianshi",
    "zip_code": "223001",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "320803",
    "label": "淮安区",
    "value": "huaianqu",
    "zip_code": "223001",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320804",
    "label": "淮阴区",
    "value": "huaiyinqu",
    "zip_code": "223300",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320812",
    "label": "清江浦区",
    "value": "qingjiangpuqu",
    "zip_code": "223002",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "320813",
    "label": "洪泽区",
    "value": "hongzequ",
    "zip_code": "223100",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "320826",
    "label": "涟水县",
    "value": "lianshuixian",
    "zip_code": "223400",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "320830",
    "label": "盱眙县",
    "value": "xuyixian",
    "zip_code": "211700",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320831",
    "label": "金湖县",
    "value": "jinhuxian",
    "zip_code": "211600",
    "parent_code": "320800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320900",
    "label": "盐城市",
    "value": "yanchengshi",
    "zip_code": "224000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "320902",
    "label": "亭湖区",
    "value": "tinghuqu",
    "zip_code": "224005",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "320903",
    "label": "盐都区",
    "value": "yanduqu",
    "zip_code": "224055",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "320904",
    "label": "大丰区",
    "value": "dafengqu",
    "zip_code": "224100",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "320921",
    "label": "响水县",
    "value": "xiangshuixian",
    "zip_code": "224600",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "320922",
    "label": "滨海县",
    "value": "binhaixian",
    "zip_code": "224500",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "320923",
    "label": "阜宁县",
    "value": "funingxian",
    "zip_code": "224400",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "320924",
    "label": "射阳县",
    "value": "sheyangxian",
    "zip_code": "224300",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "320925",
    "label": "建湖县",
    "value": "jianhuxian",
    "zip_code": "224700",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "320981",
    "label": "东台市",
    "value": "dongtaishi",
    "zip_code": "224200",
    "parent_code": "320900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "321000",
    "label": "扬州市",
    "value": "yangzhoushi",
    "zip_code": "225000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "321002",
    "label": "广陵区",
    "value": "guanglingqu",
    "zip_code": "225002",
    "parent_code": "321000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "321003",
    "label": "邗江区",
    "value": "hanjiangqu",
    "zip_code": "225002",
    "parent_code": "321000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "321012",
    "label": "江都区",
    "value": "jiangduqu",
    "zip_code": "0",
    "parent_code": "321000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "321023",
    "label": "宝应县",
    "value": "baoyingxian",
    "zip_code": "225800",
    "parent_code": "321000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "321081",
    "label": "仪征市",
    "value": "yizhengshi",
    "zip_code": "211400",
    "parent_code": "321000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "321084",
    "label": "高邮市",
    "value": "gaoyoushi",
    "zip_code": "225600",
    "parent_code": "321000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "321100",
    "label": "镇江市",
    "value": "zhenjiangshi",
    "zip_code": "212000",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "321102",
    "label": "京口区",
    "value": "jingkouqu",
    "zip_code": "212001",
    "parent_code": "321100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "321111",
    "label": "润州区",
    "value": "runzhouqu",
    "zip_code": "212004",
    "parent_code": "321100",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "321112",
    "label": "丹徒区",
    "value": "dantuqu",
    "zip_code": "212001",
    "parent_code": "321100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "321181",
    "label": "丹阳市",
    "value": "danyangshi",
    "zip_code": "212300",
    "parent_code": "321100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "321182",
    "label": "扬中市",
    "value": "yangzhongshi",
    "zip_code": "212200",
    "parent_code": "321100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "321183",
    "label": "句容市",
    "value": "jurongshi",
    "zip_code": "212400",
    "parent_code": "321100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "321200",
    "label": "泰州市",
    "value": "taizhoushi",
    "zip_code": "225300",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "321202",
    "label": "海陵区",
    "value": "hailingqu",
    "zip_code": "225300",
    "parent_code": "321200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "321203",
    "label": "高港区",
    "value": "gaogangqu",
    "zip_code": "225321",
    "parent_code": "321200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "321204",
    "label": "姜堰区",
    "value": "jiangyanqu",
    "zip_code": "225500",
    "parent_code": "321200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "321281",
    "label": "兴化市",
    "value": "xinghuashi",
    "zip_code": "225700",
    "parent_code": "321200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "321282",
    "label": "靖江市",
    "value": "jingjiangshi",
    "zip_code": "214500",
    "parent_code": "321200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "321283",
    "label": "泰兴市",
    "value": "taixingshi",
    "zip_code": "225400",
    "parent_code": "321200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "321300",
    "label": "宿迁市",
    "value": "suqianshi",
    "zip_code": "223800",
    "parent_code": "320000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "321302",
    "label": "宿城区",
    "value": "suchengqu",
    "zip_code": "223800",
    "parent_code": "321300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "321311",
    "label": "宿豫区",
    "value": "suyuqu",
    "zip_code": "223800",
    "parent_code": "321300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "321322",
    "label": "沭阳县",
    "value": "shuyangxian",
    "zip_code": "223600",
    "parent_code": "321300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "321323",
    "label": "泗阳县",
    "value": "siyangxian",
    "zip_code": "223700",
    "parent_code": "321300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "321324",
    "label": "泗洪县",
    "value": "sihongxian",
    "zip_code": "223900",
    "parent_code": "321300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "330000",
    "label": "浙江省",
    "value": "zhejiangsheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "Z"
  },
  {
    "code": "330100",
    "label": "杭州市",
    "value": "hangzhoushi",
    "zip_code": "310000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "330102",
    "label": "上城区",
    "value": "shangchengqu",
    "zip_code": "310002",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "330105",
    "label": "拱墅区",
    "value": "gongshuqu",
    "zip_code": "310011",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "330106",
    "label": "西湖区",
    "value": "xihuqu",
    "zip_code": "310013",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "330108",
    "label": "滨江区",
    "value": "binjiangqu",
    "zip_code": "310051",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "330109",
    "label": "萧山区",
    "value": "xiaoshanqu",
    "zip_code": "311200",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "330110",
    "label": "余杭区",
    "value": "yuhangqu",
    "zip_code": "311100",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330111",
    "label": "富阳区",
    "value": "fuyangqu",
    "zip_code": "311400",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "330112",
    "label": "临安区",
    "value": "linanqu",
    "zip_code": "311300",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330113",
    "label": "临平区",
    "value": "linpingqu",
    "zip_code": "311100",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330114",
    "label": "钱塘区",
    "value": "qiantangqu",
    "zip_code": "311100",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "330122",
    "label": "桐庐县",
    "value": "tongluxian",
    "zip_code": "311500",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "330127",
    "label": "淳安县",
    "value": "chunanxian",
    "zip_code": "311700",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "330182",
    "label": "建德市",
    "value": "jiandeshi",
    "zip_code": "311600",
    "parent_code": "330100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "330200",
    "label": "宁波市",
    "value": "ningboshi",
    "zip_code": "315000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "330203",
    "label": "海曙区",
    "value": "haishuqu",
    "zip_code": "315000",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "330205",
    "label": "江北区",
    "value": "jiangbeiqu",
    "zip_code": "315040",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "330206",
    "label": "北仑区",
    "value": "beilunqu",
    "zip_code": "315800",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "330211",
    "label": "镇海区",
    "value": "zhenhaiqu",
    "zip_code": "315200",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "330212",
    "label": "鄞州区",
    "value": "yinzhouqu",
    "zip_code": "315100",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330213",
    "label": "奉化区",
    "value": "fenghuaqu",
    "zip_code": "315500",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "330225",
    "label": "象山县",
    "value": "xiangshanxian",
    "zip_code": "315700",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "330226",
    "label": "宁海县",
    "value": "ninghaixian",
    "zip_code": "315600",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "330281",
    "label": "余姚市",
    "value": "yuyaoshi",
    "zip_code": "315400",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330282",
    "label": "慈溪市",
    "value": "cixishi",
    "zip_code": "315300",
    "parent_code": "330200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "330300",
    "label": "温州市",
    "value": "wenzhoushi",
    "zip_code": "325000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "330302",
    "label": "鹿城区",
    "value": "luchengqu",
    "zip_code": "325000",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330303",
    "label": "龙湾区",
    "value": "longwanqu",
    "zip_code": "325013",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330304",
    "label": "瓯海区",
    "value": "ouhaiqu",
    "zip_code": "325005",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "O"
  },
  {
    "code": "330305",
    "label": "洞头区",
    "value": "dongtouqu",
    "zip_code": "325700",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "330324",
    "label": "永嘉县",
    "value": "yongjiaxian",
    "zip_code": "315100",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330326",
    "label": "平阳县",
    "value": "pingyangxian",
    "zip_code": "325400",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "330327",
    "label": "苍南县",
    "value": "cangnanxian",
    "zip_code": "325800",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "330328",
    "label": "文成县",
    "value": "wenchengxian",
    "zip_code": "325300",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "330329",
    "label": "泰顺县",
    "value": "taishunxian",
    "zip_code": "325500",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "330381",
    "label": "瑞安市",
    "value": "ruianshi",
    "zip_code": "325200",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "330382",
    "label": "乐清市",
    "value": "leqingshi",
    "zip_code": "325600",
    "parent_code": "330300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330400",
    "label": "嘉兴市",
    "value": "jiaxingshi",
    "zip_code": "314000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "330402",
    "label": "南湖区",
    "value": "nanhuqu",
    "zip_code": "314001",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "330411",
    "label": "秀洲区",
    "value": "xiuzhouqu",
    "zip_code": "314001",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "330421",
    "label": "嘉善县",
    "value": "jiashanxian",
    "zip_code": "314100",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "330424",
    "label": "海盐县",
    "value": "haiyanxian",
    "zip_code": "314300",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "330481",
    "label": "海宁市",
    "value": "hainingshi",
    "zip_code": "314400",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "330482",
    "label": "平湖市",
    "value": "pinghushi",
    "zip_code": "314200",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "330483",
    "label": "桐乡市",
    "value": "tongxiangshi",
    "zip_code": "314500",
    "parent_code": "330400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "330500",
    "label": "湖州市",
    "value": "huzhoushi",
    "zip_code": "313000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "330502",
    "label": "吴兴区",
    "value": "wuxingqu",
    "zip_code": "313000",
    "parent_code": "330500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "330503",
    "label": "南浔区",
    "value": "nanxunqu",
    "zip_code": "313009",
    "parent_code": "330500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "330521",
    "label": "德清县",
    "value": "deqingxian",
    "zip_code": "313200",
    "parent_code": "330500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "330522",
    "label": "长兴县",
    "value": "changxingxian",
    "zip_code": "313100",
    "parent_code": "330500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "330523",
    "label": "安吉县",
    "value": "anjixian",
    "zip_code": "313300",
    "parent_code": "330500",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "330600",
    "label": "绍兴市",
    "value": "shaoxingshi",
    "zip_code": "312000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "330602",
    "label": "越城区",
    "value": "yuechengqu",
    "zip_code": "312000",
    "parent_code": "330600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330603",
    "label": "柯桥区",
    "value": "keqiaoqu",
    "zip_code": "312000",
    "parent_code": "330600",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "330604",
    "label": "上虞区",
    "value": "shangyuqu",
    "zip_code": "312300",
    "parent_code": "330600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "330624",
    "label": "新昌县",
    "value": "xinchangxian",
    "zip_code": "312500",
    "parent_code": "330600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "330681",
    "label": "诸暨市",
    "value": "zhujishi",
    "zip_code": "311800",
    "parent_code": "330600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "330683",
    "label": "嵊州市",
    "value": "shengzhoushi",
    "zip_code": "312400",
    "parent_code": "330600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "330700",
    "label": "金华市",
    "value": "jinhuashi",
    "zip_code": "321000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "330702",
    "label": "婺城区",
    "value": "wuchengqu",
    "zip_code": "321000",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "330703",
    "label": "金东区",
    "value": "jindongqu",
    "zip_code": "321000",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "330723",
    "label": "武义县",
    "value": "wuyixian",
    "zip_code": "321200",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "330726",
    "label": "浦江县",
    "value": "pujiangxian",
    "zip_code": "322200",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "330727",
    "label": "磐安县",
    "value": "pananxian",
    "zip_code": "322300",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "330781",
    "label": "兰溪市",
    "value": "lanxishi",
    "zip_code": "321100",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330782",
    "label": "义乌市",
    "value": "yiwushi",
    "zip_code": "322000",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330783",
    "label": "东阳市",
    "value": "dongyangshi",
    "zip_code": "322100",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "330784",
    "label": "永康市",
    "value": "yongkangshi",
    "zip_code": "321300",
    "parent_code": "330700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "330800",
    "label": "衢州市",
    "value": "quzhoushi",
    "zip_code": "324000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "330802",
    "label": "柯城区",
    "value": "kechengqu",
    "zip_code": "324100",
    "parent_code": "330800",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "330803",
    "label": "衢江区",
    "value": "qujiangqu",
    "zip_code": "324022",
    "parent_code": "330800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "330822",
    "label": "常山县",
    "value": "changshanxian",
    "zip_code": "324200",
    "parent_code": "330800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "330824",
    "label": "开化县",
    "value": "kaihuaxian",
    "zip_code": "324300",
    "parent_code": "330800",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "330825",
    "label": "龙游县",
    "value": "longyouxian",
    "zip_code": "324400",
    "parent_code": "330800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "330881",
    "label": "江山市",
    "value": "jiangshanshi",
    "zip_code": "324100",
    "parent_code": "330800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "330900",
    "label": "舟山市",
    "value": "zhoushanshi",
    "zip_code": "316000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "330902",
    "label": "定海区",
    "value": "dinghaiqu",
    "zip_code": "316000",
    "parent_code": "330900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "330903",
    "label": "普陀区",
    "value": "putuoqu",
    "zip_code": "316100",
    "parent_code": "330900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "330921",
    "label": "岱山县",
    "value": "daishanxian",
    "zip_code": "316200",
    "parent_code": "330900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "330922",
    "label": "嵊泗县",
    "value": "shengsixian",
    "zip_code": "202450",
    "parent_code": "330900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "331000",
    "label": "台州市",
    "value": "taizhoushi",
    "zip_code": "318000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "331002",
    "label": "椒江区",
    "value": "jiaojiangqu",
    "zip_code": "318000",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "331003",
    "label": "黄岩区",
    "value": "huangyanqu",
    "zip_code": "318020",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "331004",
    "label": "路桥区",
    "value": "luqiaoqu",
    "zip_code": "318050",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "331022",
    "label": "三门县",
    "value": "sanmenxian",
    "zip_code": "317100",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "331023",
    "label": "天台县",
    "value": "tiantaixian",
    "zip_code": "317200",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "331024",
    "label": "仙居县",
    "value": "xianjuxian",
    "zip_code": "317300",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "331081",
    "label": "温岭市",
    "value": "wenlingshi",
    "zip_code": "317500",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "331082",
    "label": "临海市",
    "value": "linhaishi",
    "zip_code": "317000",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "331083",
    "label": "玉环市",
    "value": "yuhuanshi",
    "zip_code": "317600",
    "parent_code": "331000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "331100",
    "label": "丽水市",
    "value": "lishuishi",
    "zip_code": "323000",
    "parent_code": "330000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "331102",
    "label": "莲都区",
    "value": "lianduqu",
    "zip_code": "323000",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "331121",
    "label": "青田县",
    "value": "qingtianxian",
    "zip_code": "323900",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "331122",
    "label": "缙云县",
    "value": "jinyunxian",
    "zip_code": "321400",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "331123",
    "label": "遂昌县",
    "value": "suichangxian",
    "zip_code": "323300",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "331124",
    "label": "松阳县",
    "value": "songyangxian",
    "zip_code": "323400",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "331125",
    "label": "云和县",
    "value": "yunhexian",
    "zip_code": "323600",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "331126",
    "label": "庆元县",
    "value": "qingyuanxian",
    "zip_code": "323800",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "331127",
    "label": "景宁畲族自治县",
    "value": "jingningshezuzizhixian",
    "zip_code": "323500",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "331181",
    "label": "龙泉市",
    "value": "longquanshi",
    "zip_code": "323700",
    "parent_code": "331100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "340000",
    "label": "安徽省",
    "value": "anhuisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "A"
  },
  {
    "code": "340100",
    "label": "合肥市",
    "value": "hefeishi",
    "zip_code": "230000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "340102",
    "label": "瑶海区",
    "value": "yaohaiqu",
    "zip_code": "230011",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340103",
    "label": "庐阳区",
    "value": "luyangqu",
    "zip_code": "230001",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "340104",
    "label": "蜀山区",
    "value": "shushanqu",
    "zip_code": "230031",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "340111",
    "label": "包河区",
    "value": "baohequ",
    "zip_code": "230041",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "340121",
    "label": "长丰县",
    "value": "changfengxian",
    "zip_code": "231100",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "340122",
    "label": "肥东县",
    "value": "feidongxian",
    "zip_code": "231600",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "340123",
    "label": "肥西县",
    "value": "feixixian",
    "zip_code": "231200",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "340124",
    "label": "庐江县",
    "value": "lujiangxian",
    "zip_code": "231500",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "340181",
    "label": "巢湖市",
    "value": "chaohushi",
    "zip_code": "238000",
    "parent_code": "340100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "340200",
    "label": "芜湖市",
    "value": "wuhushi",
    "zip_code": "241000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "340202",
    "label": "镜湖区",
    "value": "jinghuqu",
    "zip_code": "241000",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "340203",
    "label": "弋江区",
    "value": "yijiangqu",
    "zip_code": "241000",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340207",
    "label": "鸠江区",
    "value": "jiujiangqu",
    "zip_code": "241000",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "340208",
    "label": "三山区",
    "value": "sanshanqu",
    "zip_code": "241000",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "340221",
    "label": "芜湖县",
    "value": "wuhuxian",
    "zip_code": "241100",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "340222",
    "label": "繁昌县",
    "value": "fanchangxian",
    "zip_code": "241200",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "340223",
    "label": "南陵县",
    "value": "nanlingxian",
    "zip_code": "242400",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "340225",
    "label": "无为县",
    "value": "wuweixian",
    "zip_code": "238300",
    "parent_code": "340200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "340300",
    "label": "蚌埠市",
    "value": "bengbushi",
    "zip_code": "233000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "340302",
    "label": "龙子湖区",
    "value": "longzihuqu",
    "zip_code": "233000",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "340303",
    "label": "蚌山区",
    "value": "bengshanqu",
    "zip_code": "233000",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "340304",
    "label": "禹会区",
    "value": "yuhuiqu",
    "zip_code": "233000",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340311",
    "label": "淮上区",
    "value": "huaishangqu",
    "zip_code": "233000",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "340321",
    "label": "怀远县",
    "value": "huaiyuanxian",
    "zip_code": "233400",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "340322",
    "label": "五河县",
    "value": "wuhexian",
    "zip_code": "233300",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "340323",
    "label": "固镇县",
    "value": "guzhenxian",
    "zip_code": "233700",
    "parent_code": "340300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "340400",
    "label": "淮南市",
    "value": "huainanshi",
    "zip_code": "232000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "340402",
    "label": "大通区",
    "value": "datongqu",
    "zip_code": "232033",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "340403",
    "label": "田家庵区",
    "value": "tianjiaanqu",
    "zip_code": "232000",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "340404",
    "label": "谢家集区",
    "value": "xiejiajiqu",
    "zip_code": "232052",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "340405",
    "label": "八公山区",
    "value": "bagongshanqu",
    "zip_code": "232072",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "340406",
    "label": "潘集区",
    "value": "panjiqu",
    "zip_code": "232082",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "340421",
    "label": "凤台县",
    "value": "fengtaixian",
    "zip_code": "232100",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "340422",
    "label": "寿县",
    "value": "shouxian",
    "zip_code": "232100",
    "parent_code": "340400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "340500",
    "label": "马鞍山市",
    "value": "maanshanshi",
    "zip_code": "243000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "340503",
    "label": "花山区",
    "value": "huashanqu",
    "zip_code": "243000",
    "parent_code": "340500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "340504",
    "label": "雨山区",
    "value": "yushanqu",
    "zip_code": "243071",
    "parent_code": "340500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340506",
    "label": "博望区",
    "value": "bowangqu",
    "zip_code": "243000",
    "parent_code": "340500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "340521",
    "label": "当涂县",
    "value": "dangtuxian",
    "zip_code": "243100",
    "parent_code": "340500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "340522",
    "label": "含山县",
    "value": "hanshanxian",
    "zip_code": "238100",
    "parent_code": "340500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "340523",
    "label": "和县",
    "value": "hexian",
    "zip_code": "238200",
    "parent_code": "340500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "340600",
    "label": "淮北市",
    "value": "huaibeishi",
    "zip_code": "235000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "340602",
    "label": "杜集区",
    "value": "dujiqu",
    "zip_code": "235000",
    "parent_code": "340600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "340603",
    "label": "相山区",
    "value": "xiangshanqu",
    "zip_code": "235000",
    "parent_code": "340600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "340604",
    "label": "烈山区",
    "value": "lieshanqu",
    "zip_code": "235000",
    "parent_code": "340600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "340621",
    "label": "濉溪县",
    "value": "suixixian",
    "zip_code": "235100",
    "parent_code": "340600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "340700",
    "label": "铜陵市",
    "value": "tonglingshi",
    "zip_code": "244000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "340705",
    "label": "铜官区",
    "value": "tongguanqu",
    "zip_code": "244000",
    "parent_code": "340700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "340706",
    "label": "义安区",
    "value": "yianqu",
    "zip_code": "244000",
    "parent_code": "340700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340711",
    "label": "郊区",
    "value": "jiaoqu",
    "zip_code": "244000",
    "parent_code": "340700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "340722",
    "label": "枞阳县",
    "value": "congyangxian",
    "zip_code": "244100",
    "parent_code": "340700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "340800",
    "label": "安庆市",
    "value": "anqingshi",
    "zip_code": "246000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "340802",
    "label": "迎江区",
    "value": "yingjiangqu",
    "zip_code": "246001",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340803",
    "label": "大观区",
    "value": "daguanqu",
    "zip_code": "246002",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "340811",
    "label": "宜秀区",
    "value": "yixiuqu",
    "zip_code": "246003",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340822",
    "label": "怀宁县",
    "value": "huainingxian",
    "zip_code": "246100",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "340824",
    "label": "潜山县",
    "value": "qianshanxian",
    "zip_code": "246300",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "340825",
    "label": "太湖县",
    "value": "taihuxian",
    "zip_code": "246400",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "340826",
    "label": "宿松县",
    "value": "susongxian",
    "zip_code": "246500",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "340827",
    "label": "望江县",
    "value": "wangjiangxian",
    "zip_code": "246200",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "340828",
    "label": "岳西县",
    "value": "yuexixian",
    "zip_code": "246600",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "340881",
    "label": "桐城市",
    "value": "tongchengshi",
    "zip_code": "231400",
    "parent_code": "340800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "341000",
    "label": "黄山市",
    "value": "huangshanshi",
    "zip_code": "245000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "341002",
    "label": "屯溪区",
    "value": "tunxiqu",
    "zip_code": "245000",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "341003",
    "label": "黄山区",
    "value": "huangshanqu",
    "zip_code": "242700",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "341004",
    "label": "徽州区",
    "value": "huizhouqu",
    "zip_code": "245061",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "341021",
    "label": "歙县",
    "value": "shexian",
    "zip_code": "245200",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "341022",
    "label": "休宁县",
    "value": "xiuningxian",
    "zip_code": "245400",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "341023",
    "label": "黟县",
    "value": "yixian",
    "zip_code": "245500",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341024",
    "label": "祁门县",
    "value": "qimenxian",
    "zip_code": "245600",
    "parent_code": "341000",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "341100",
    "label": "滁州市",
    "value": "chuzhoushi",
    "zip_code": "239000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "341102",
    "label": "琅琊区",
    "value": "langyaqu",
    "zip_code": "239000",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "341103",
    "label": "南谯区",
    "value": "nanqiaoqu",
    "zip_code": "239000",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "341122",
    "label": "来安县",
    "value": "laianxian",
    "zip_code": "239200",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "341124",
    "label": "全椒县",
    "value": "quanjiaoxian",
    "zip_code": "239500",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "341125",
    "label": "定远县",
    "value": "dingyuanxian",
    "zip_code": "233200",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "341126",
    "label": "凤阳县",
    "value": "fengyangxian",
    "zip_code": "233100",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "341181",
    "label": "天长市",
    "value": "tianchangshi",
    "zip_code": "239300",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "341182",
    "label": "明光市",
    "value": "mingguangshi",
    "zip_code": "239400",
    "parent_code": "341100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "341200",
    "label": "阜阳市",
    "value": "fuyangshi",
    "zip_code": "236000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "341202",
    "label": "颍州区",
    "value": "yingzhouqu",
    "zip_code": "236001",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341203",
    "label": "颍东区",
    "value": "yingdongqu",
    "zip_code": "236058",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341204",
    "label": "颍泉区",
    "value": "yingquanqu",
    "zip_code": "236045",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341221",
    "label": "临泉县",
    "value": "linquanxian",
    "zip_code": "236400",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "341222",
    "label": "太和县",
    "value": "taihexian",
    "zip_code": "236600",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "341225",
    "label": "阜南县",
    "value": "funanxian",
    "zip_code": "236300",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "341226",
    "label": "颍上县",
    "value": "yingshangxian",
    "zip_code": "236200",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341282",
    "label": "界首市",
    "value": "jieshoushi",
    "zip_code": "236500",
    "parent_code": "341200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "341300",
    "label": "宿州市",
    "value": "suzhoushi",
    "zip_code": "234000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "341302",
    "label": "埇桥区",
    "value": "yongqiaoqu",
    "zip_code": "234000",
    "parent_code": "341300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341321",
    "label": "砀山县",
    "value": "dangshanxian",
    "zip_code": "235300",
    "parent_code": "341300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "341322",
    "label": "萧县",
    "value": "xiaoxian",
    "zip_code": "235200",
    "parent_code": "341300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "341323",
    "label": "灵璧县",
    "value": "lingbixian",
    "zip_code": "234200",
    "parent_code": "341300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "341324",
    "label": "泗县",
    "value": "sixian",
    "zip_code": "234300",
    "parent_code": "341300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "341500",
    "label": "六安市",
    "value": "liuanshi",
    "zip_code": "237000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "341502",
    "label": "金安区",
    "value": "jinanqu",
    "zip_code": "237000",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "341503",
    "label": "裕安区",
    "value": "yuanqu",
    "zip_code": "237010",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "341504",
    "label": "叶集区",
    "value": "xejiqu",
    "zip_code": "237431",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "341522",
    "label": "霍邱县",
    "value": "huoqiuxian",
    "zip_code": "237400",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "341523",
    "label": "舒城县",
    "value": "shuchengxian",
    "zip_code": "231300",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "341524",
    "label": "金寨县",
    "value": "jinzhaixian",
    "zip_code": "237300",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "341525",
    "label": "霍山县",
    "value": "huoshanxian",
    "zip_code": "237200",
    "parent_code": "341500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "341600",
    "label": "亳州市",
    "value": "bozhoushi",
    "zip_code": "236000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "341602",
    "label": "谯城区",
    "value": "qiaochengqu",
    "zip_code": "236800",
    "parent_code": "341600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "341621",
    "label": "涡阳县",
    "value": "guoyangxian",
    "zip_code": "233600",
    "parent_code": "341600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "341622",
    "label": "蒙城县",
    "value": "mengchengxian",
    "zip_code": "233500",
    "parent_code": "341600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "341623",
    "label": "利辛县",
    "value": "lixinxian",
    "zip_code": "236700",
    "parent_code": "341600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "341700",
    "label": "池州市",
    "value": "chizhoushi",
    "zip_code": "247100",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "341702",
    "label": "贵池区",
    "value": "guichiqu",
    "zip_code": "247100",
    "parent_code": "341700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "341721",
    "label": "东至县",
    "value": "dongzhixian",
    "zip_code": "247200",
    "parent_code": "341700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "341722",
    "label": "石台县",
    "value": "shitaixian",
    "zip_code": "245100",
    "parent_code": "341700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "341723",
    "label": "青阳县",
    "value": "qingyangxian",
    "zip_code": "242800",
    "parent_code": "341700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "341800",
    "label": "宣城市",
    "value": "xuanchengshi",
    "zip_code": "242000",
    "parent_code": "340000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "341802",
    "label": "宣州区",
    "value": "xuanzhouqu",
    "zip_code": "242000",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "341821",
    "label": "郎溪县",
    "value": "langxixian",
    "zip_code": "242100",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "341822",
    "label": "广德县",
    "value": "guangdexian",
    "zip_code": "242200",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "341823",
    "label": "泾县",
    "value": "jingxian",
    "zip_code": "242500",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "341824",
    "label": "绩溪县",
    "value": "jixixian",
    "zip_code": "245300",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "341825",
    "label": "旌德县",
    "value": "jingdexian",
    "zip_code": "242600",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "341881",
    "label": "宁国市",
    "value": "ningguoshi",
    "zip_code": "242300",
    "parent_code": "341800",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "350000",
    "label": "福建省",
    "value": "fujiansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "F"
  },
  {
    "code": "350100",
    "label": "福州市",
    "value": "fuzhoushi",
    "zip_code": "350000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "350102",
    "label": "鼓楼区",
    "value": "gulouqu",
    "zip_code": "350001",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "350103",
    "label": "台江区",
    "value": "taijiangqu",
    "zip_code": "350004",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "350104",
    "label": "仓山区",
    "value": "cangshanqu",
    "zip_code": "350007",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "350105",
    "label": "马尾区",
    "value": "maweiqu",
    "zip_code": "350015",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "350111",
    "label": "晋安区",
    "value": "jinanqu",
    "zip_code": "350011",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350112",
    "label": "长乐区",
    "value": "changlequ",
    "zip_code": "350200",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "350121",
    "label": "闽侯县",
    "value": "minhouxian",
    "zip_code": "350100",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "350122",
    "label": "连江县",
    "value": "lianjiangxian",
    "zip_code": "350500",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350123",
    "label": "罗源县",
    "value": "luoyuanxian",
    "zip_code": "350600",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350124",
    "label": "闽清县",
    "value": "minqingxian",
    "zip_code": "350800",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "350125",
    "label": "永泰县",
    "value": "yongtaixian",
    "zip_code": "350700",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350128",
    "label": "平潭县",
    "value": "pingtanxian",
    "zip_code": "350400",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "350181",
    "label": "福清市",
    "value": "fuqingshi",
    "zip_code": "350300",
    "parent_code": "350100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "350200",
    "label": "厦门市",
    "value": "xiamenshi",
    "zip_code": "361000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "350203",
    "label": "思明区",
    "value": "simingqu",
    "zip_code": "361001",
    "parent_code": "350200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350205",
    "label": "海沧区",
    "value": "haicangqu",
    "zip_code": "361026",
    "parent_code": "350200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "350206",
    "label": "湖里区",
    "value": "huliqu",
    "zip_code": "361006",
    "parent_code": "350200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "350211",
    "label": "集美区",
    "value": "jimeiqu",
    "zip_code": "361021",
    "parent_code": "350200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350212",
    "label": "同安区",
    "value": "tonganqu",
    "zip_code": "361100",
    "parent_code": "350200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "350213",
    "label": "翔安区",
    "value": "xianganqu",
    "zip_code": "361101",
    "parent_code": "350200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "350300",
    "label": "莆田市",
    "value": "putianshi",
    "zip_code": "351100",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "350302",
    "label": "城厢区",
    "value": "chengxiangqu",
    "zip_code": "351100",
    "parent_code": "350300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "350303",
    "label": "涵江区",
    "value": "hanjiangqu",
    "zip_code": "351111",
    "parent_code": "350300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "350304",
    "label": "荔城区",
    "value": "lichengqu",
    "zip_code": "351100",
    "parent_code": "350300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350305",
    "label": "秀屿区",
    "value": "xiuyuqu",
    "zip_code": "351152",
    "parent_code": "350300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "350322",
    "label": "仙游县",
    "value": "xianyouxian",
    "zip_code": "351200",
    "parent_code": "350300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "350400",
    "label": "三明市",
    "value": "sanmingshi",
    "zip_code": "365000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "350404",
    "label": "三元区",
    "value": "sanyuanqu",
    "zip_code": "365001",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350405",
    "label": "沙县区",
    "value": "shaxianqu",
    "zip_code": "365500",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350421",
    "label": "明溪县",
    "value": "mingxixian",
    "zip_code": "365200",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "350423",
    "label": "清流县",
    "value": "qingliuxian",
    "zip_code": "365300",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "350424",
    "label": "宁化县",
    "value": "ninghuaxian",
    "zip_code": "365400",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "350425",
    "label": "大田县",
    "value": "datianxian",
    "zip_code": "366100",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "350426",
    "label": "尤溪县",
    "value": "youxixian",
    "zip_code": "365100",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350428",
    "label": "将乐县",
    "value": "jianglexian",
    "zip_code": "353300",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350429",
    "label": "泰宁县",
    "value": "tainingxian",
    "zip_code": "354400",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "350430",
    "label": "建宁县",
    "value": "jianningxian",
    "zip_code": "354500",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350481",
    "label": "永安市",
    "value": "yonganshi",
    "zip_code": "366000",
    "parent_code": "350400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350500",
    "label": "泉州市",
    "value": "quanzhoushi",
    "zip_code": "362000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "350502",
    "label": "鲤城区",
    "value": "lichengqu",
    "zip_code": "362000",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350503",
    "label": "丰泽区",
    "value": "fengzequ",
    "zip_code": "362000",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "350504",
    "label": "洛江区",
    "value": "luojiangqu",
    "zip_code": "362011",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350505",
    "label": "泉港区",
    "value": "quangangqu",
    "zip_code": "362114",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "350521",
    "label": "惠安县",
    "value": "huianxian",
    "zip_code": "362100",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "350524",
    "label": "安溪县",
    "value": "anxixian",
    "zip_code": "362400",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "350525",
    "label": "永春县",
    "value": "yongchunxian",
    "zip_code": "362600",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350526",
    "label": "德化县",
    "value": "dehuaxian",
    "zip_code": "362500",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "350527",
    "label": "金门县",
    "value": "jinmenxian",
    "zip_code": "362000",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350581",
    "label": "石狮市",
    "value": "shishishi",
    "zip_code": "362700",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350582",
    "label": "晋江市",
    "value": "jinjiangshi",
    "zip_code": "362200",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350583",
    "label": "南安市",
    "value": "nananshi",
    "zip_code": "362300",
    "parent_code": "350500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "350600",
    "label": "漳州市",
    "value": "zhangzhoushi",
    "zip_code": "363000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "350602",
    "label": "芗城区",
    "value": "xiangchengqu",
    "zip_code": "363000",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "350603",
    "label": "龙文区",
    "value": "longwenqu",
    "zip_code": "363005",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350604",
    "label": "龙海区",
    "value": "longhaiqu",
    "zip_code": "363100",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350605",
    "label": "长泰区",
    "value": "changtaiqu",
    "zip_code": "363900",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "350622",
    "label": "云霄县",
    "value": "yunxiaoxian",
    "zip_code": "363300",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350623",
    "label": "漳浦县",
    "value": "zhangpuxian",
    "zip_code": "363200",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "350624",
    "label": "诏安县",
    "value": "zhaoanxian",
    "zip_code": "363500",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "350626",
    "label": "东山县",
    "value": "dongshanxian",
    "zip_code": "363400",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "350627",
    "label": "南靖县",
    "value": "nanjingxian",
    "zip_code": "363600",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "350628",
    "label": "平和县",
    "value": "pinghexian",
    "zip_code": "363700",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "350629",
    "label": "华安县",
    "value": "huaanxian",
    "zip_code": "363800",
    "parent_code": "350600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "350700",
    "label": "南平市",
    "value": "nanpingshi",
    "zip_code": "353000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "350702",
    "label": "延平区",
    "value": "yanpingqu",
    "zip_code": "353000",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350703",
    "label": "建阳区",
    "value": "jianyangqu",
    "zip_code": "354200",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350721",
    "label": "顺昌县",
    "value": "shunchangxian",
    "zip_code": "353200",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350722",
    "label": "浦城县",
    "value": "puchengxian",
    "zip_code": "353400",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "350723",
    "label": "光泽县",
    "value": "guangzexian",
    "zip_code": "354100",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "350724",
    "label": "松溪县",
    "value": "songxixian",
    "zip_code": "353500",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350725",
    "label": "政和县",
    "value": "zhenghexian",
    "zip_code": "353600",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "350781",
    "label": "邵武市",
    "value": "shaowushi",
    "zip_code": "354000",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350782",
    "label": "武夷山市",
    "value": "wuyishanshi",
    "zip_code": "354300",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "350783",
    "label": "建瓯市",
    "value": "jianoushi",
    "zip_code": "353100",
    "parent_code": "350700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350800",
    "label": "龙岩市",
    "value": "longyanshi",
    "zip_code": "364000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "350802",
    "label": "新罗区",
    "value": "xinluoqu",
    "zip_code": "364000",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "350803",
    "label": "永定区",
    "value": "yongdingqu",
    "zip_code": "427000",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "350821",
    "label": "长汀县",
    "value": "changtingxian",
    "zip_code": "366300",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "350823",
    "label": "上杭县",
    "value": "shanghangxian",
    "zip_code": "364200",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350824",
    "label": "武平县",
    "value": "wupingxian",
    "zip_code": "364300",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "350825",
    "label": "连城县",
    "value": "lianchengxian",
    "zip_code": "366200",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "350881",
    "label": "漳平市",
    "value": "zhangpingshi",
    "zip_code": "364400",
    "parent_code": "350800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "350900",
    "label": "宁德市",
    "value": "ningdeshi",
    "zip_code": "352000",
    "parent_code": "350000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "350902",
    "label": "蕉城区",
    "value": "jiaochengqu",
    "zip_code": "352100",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "350921",
    "label": "霞浦县",
    "value": "xiapuxian",
    "zip_code": "355100",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "350922",
    "label": "古田县",
    "value": "gutianxian",
    "zip_code": "352200",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "350923",
    "label": "屏南县",
    "value": "pingnanxian",
    "zip_code": "352300",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "350924",
    "label": "寿宁县",
    "value": "shouningxian",
    "zip_code": "355500",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "350925",
    "label": "周宁县",
    "value": "zhouningxian",
    "zip_code": "355400",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "350926",
    "label": "柘荣县",
    "value": "zherongxian",
    "zip_code": "355300",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "350981",
    "label": "福安市",
    "value": "fuanshi",
    "zip_code": "355000",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "350982",
    "label": "福鼎市",
    "value": "fudingshi",
    "zip_code": "355200",
    "parent_code": "350900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "360000",
    "label": "江西省",
    "value": "jiangxisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "J"
  },
  {
    "code": "360100",
    "label": "南昌市",
    "value": "nanchangshi",
    "zip_code": "330000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "360102",
    "label": "东湖区",
    "value": "donghuqu",
    "zip_code": "330006",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "360103",
    "label": "西湖区",
    "value": "xihuqu",
    "zip_code": "330009",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360104",
    "label": "青云谱区",
    "value": "qingyunpuqu",
    "zip_code": "330001",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "360105",
    "label": "湾里区",
    "value": "wanliqu",
    "zip_code": "330004",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "360111",
    "label": "青山湖区",
    "value": "qingshanhuqu",
    "zip_code": "330029",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "360112",
    "label": "新建区",
    "value": "xinjianqu",
    "zip_code": "330100",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360121",
    "label": "南昌县",
    "value": "nanchangxian",
    "zip_code": "330200",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "360123",
    "label": "安义县",
    "value": "anyixian",
    "zip_code": "330500",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "360124",
    "label": "进贤县",
    "value": "jinxianxian",
    "zip_code": "331700",
    "parent_code": "360100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "360200",
    "label": "景德镇市",
    "value": "jingdezhenshi",
    "zip_code": "333000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "360202",
    "label": "昌江区",
    "value": "changjiangqu",
    "zip_code": "333000",
    "parent_code": "360200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "360203",
    "label": "珠山区",
    "value": "zhushanqu",
    "zip_code": "333000",
    "parent_code": "360200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "360222",
    "label": "浮梁县",
    "value": "fuliangxian",
    "zip_code": "333400",
    "parent_code": "360200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "360281",
    "label": "乐平市",
    "value": "lepingshi",
    "zip_code": "333300",
    "parent_code": "360200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "360300",
    "label": "萍乡市",
    "value": "pingxiangshi",
    "zip_code": "337000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "360302",
    "label": "安源区",
    "value": "anyuanqu",
    "zip_code": "337000",
    "parent_code": "360300",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "360313",
    "label": "湘东区",
    "value": "xiangdongqu",
    "zip_code": "337016",
    "parent_code": "360300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360321",
    "label": "莲花县",
    "value": "lianhuaxian",
    "zip_code": "337100",
    "parent_code": "360300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "360322",
    "label": "上栗县",
    "value": "shanglixian",
    "zip_code": "337009",
    "parent_code": "360300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "360323",
    "label": "芦溪县",
    "value": "luxixian",
    "zip_code": "337053",
    "parent_code": "360300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "360400",
    "label": "九江市",
    "value": "jiujiangshi",
    "zip_code": "332000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "360402",
    "label": "濂溪区",
    "value": "lianxiqu",
    "zip_code": "332005",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "360403",
    "label": "浔阳区",
    "value": "xunyangqu",
    "zip_code": "332000",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360404",
    "label": "柴桑区",
    "value": "chaisangqu",
    "zip_code": "332100",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "360423",
    "label": "武宁县",
    "value": "wuningxian",
    "zip_code": "332300",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "360424",
    "label": "修水县",
    "value": "xiushuixian",
    "zip_code": "332400",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360425",
    "label": "永修县",
    "value": "yongxiuxian",
    "zip_code": "330300",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360426",
    "label": "德安县",
    "value": "deanxian",
    "zip_code": "330400",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "360428",
    "label": "都昌县",
    "value": "duchangxian",
    "zip_code": "332600",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "360429",
    "label": "湖口县",
    "value": "hukouxian",
    "zip_code": "332500",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "360430",
    "label": "彭泽县",
    "value": "pengzexian",
    "zip_code": "332700",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "360481",
    "label": "瑞昌市",
    "value": "ruichangshi",
    "zip_code": "332200",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "360482",
    "label": "共青城市",
    "value": "gongqingchengshi",
    "zip_code": "332020",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "360483",
    "label": "庐山市",
    "value": "lushanshi",
    "zip_code": "332020",
    "parent_code": "360400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "360500",
    "label": "新余市",
    "value": "xinyushi",
    "zip_code": "336500",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "360502",
    "label": "渝水区",
    "value": "yushuiqu",
    "zip_code": "338025",
    "parent_code": "360500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360521",
    "label": "分宜县",
    "value": "fenyixian",
    "zip_code": "336600",
    "parent_code": "360500",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "360600",
    "label": "鹰潭市",
    "value": "yingtanshi",
    "zip_code": "335000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "360602",
    "label": "月湖区",
    "value": "yuehuqu",
    "zip_code": "335000",
    "parent_code": "360600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360622",
    "label": "余江区",
    "value": "yujiangqu",
    "zip_code": "335200",
    "parent_code": "360600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360681",
    "label": "贵溪市",
    "value": "guixishi",
    "zip_code": "335400",
    "parent_code": "360600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "360700",
    "label": "赣州市",
    "value": "ganzhoushi",
    "zip_code": "341000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "360702",
    "label": "章贡区",
    "value": "zhanggongqu",
    "zip_code": "341000",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "360703",
    "label": "南康区",
    "value": "nankangqu",
    "zip_code": "341400",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "360704",
    "label": "赣县区",
    "value": "ganxianqu",
    "zip_code": "341100",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "360722",
    "label": "信丰县",
    "value": "xinfengxian",
    "zip_code": "341600",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360723",
    "label": "大余县",
    "value": "dayuxian",
    "zip_code": "341500",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "360724",
    "label": "上犹县",
    "value": "shangyouxian",
    "zip_code": "341200",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "360725",
    "label": "崇义县",
    "value": "chongyixian",
    "zip_code": "341300",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "360726",
    "label": "安远县",
    "value": "anyuanxian",
    "zip_code": "342100",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "360727",
    "label": "龙南县",
    "value": "longnanxian",
    "zip_code": "341700",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "360728",
    "label": "定南县",
    "value": "dingnanxian",
    "zip_code": "341900",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "360729",
    "label": "全南县",
    "value": "quannanxian",
    "zip_code": "341800",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "360730",
    "label": "宁都县",
    "value": "ningduxian",
    "zip_code": "342800",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "360731",
    "label": "于都县",
    "value": "yuduxian",
    "zip_code": "342300",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360732",
    "label": "兴国县",
    "value": "xingguoxian",
    "zip_code": "342400",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360733",
    "label": "会昌县",
    "value": "huichangxian",
    "zip_code": "342600",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "360734",
    "label": "寻乌县",
    "value": "xunwuxian",
    "zip_code": "342200",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360735",
    "label": "石城县",
    "value": "shichengxian",
    "zip_code": "342700",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "360781",
    "label": "瑞金市",
    "value": "ruijinshi",
    "zip_code": "342500",
    "parent_code": "360700",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "360800",
    "label": "吉安市",
    "value": "jianshi",
    "zip_code": "343000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "360802",
    "label": "吉州区",
    "value": "jizhouqu",
    "zip_code": "343000",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "360803",
    "label": "青原区",
    "value": "qingyuanqu",
    "zip_code": "343009",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "360821",
    "label": "吉安县",
    "value": "jianxian",
    "zip_code": "343100",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "360822",
    "label": "吉水县",
    "value": "jishuixian",
    "zip_code": "331600",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "360823",
    "label": "峡江县",
    "value": "xiajiangxian",
    "zip_code": "331400",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360824",
    "label": "新干县",
    "value": "xinganxian",
    "zip_code": "331300",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "360825",
    "label": "永丰县",
    "value": "yongfengxian",
    "zip_code": "331500",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360826",
    "label": "泰和县",
    "value": "taihexian",
    "zip_code": "343700",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "360827",
    "label": "遂川县",
    "value": "suichuanxian",
    "zip_code": "343900",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "360828",
    "label": "万安县",
    "value": "wananxian",
    "zip_code": "343800",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "360829",
    "label": "安福县",
    "value": "anfuxian",
    "zip_code": "343200",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "360830",
    "label": "永新县",
    "value": "yongxinxian",
    "zip_code": "343400",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360881",
    "label": "井冈山市",
    "value": "jinggangshanshi",
    "zip_code": "343600",
    "parent_code": "360800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "360900",
    "label": "宜春市",
    "value": "yichunshi",
    "zip_code": "336000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "360902",
    "label": "袁州区",
    "value": "yuanzhouqu",
    "zip_code": "336000",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360921",
    "label": "奉新县",
    "value": "fengxinxian",
    "zip_code": "330700",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "360922",
    "label": "万载县",
    "value": "wanzaixian",
    "zip_code": "336100",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "360923",
    "label": "上高县",
    "value": "shanggaoxian",
    "zip_code": "336400",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "360924",
    "label": "宜丰县",
    "value": "yifengxian",
    "zip_code": "336300",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "360925",
    "label": "靖安县",
    "value": "jinganxian",
    "zip_code": "330600",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "360926",
    "label": "铜鼓县",
    "value": "tongguxian",
    "zip_code": "336200",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "360981",
    "label": "丰城市",
    "value": "fengchengshi",
    "zip_code": "331100",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "360982",
    "label": "樟树市",
    "value": "zhangshushi",
    "zip_code": "331200",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "360983",
    "label": "高安市",
    "value": "gaoanshi",
    "zip_code": "330800",
    "parent_code": "360900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "361000",
    "label": "抚州市",
    "value": "fuzhoushi",
    "zip_code": "344000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "361002",
    "label": "临川区",
    "value": "linchuanqu",
    "zip_code": "344100",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "361003",
    "label": "东乡区",
    "value": "dongxiangqu",
    "zip_code": "331800",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "361021",
    "label": "南城县",
    "value": "nanchengxian",
    "zip_code": "344700",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "361022",
    "label": "黎川县",
    "value": "lichuanxian",
    "zip_code": "344600",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "361023",
    "label": "南丰县",
    "value": "nanfengxian",
    "zip_code": "344500",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "361024",
    "label": "崇仁县",
    "value": "chongrenxian",
    "zip_code": "344200",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "361025",
    "label": "乐安县",
    "value": "leanxian",
    "zip_code": "344300",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "361026",
    "label": "宜黄县",
    "value": "yihuangxian",
    "zip_code": "344400",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "361027",
    "label": "金溪县",
    "value": "jinxixian",
    "zip_code": "344800",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "361028",
    "label": "资溪县",
    "value": "zixixian",
    "zip_code": "335300",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "361030",
    "label": "广昌县",
    "value": "guangchangxian",
    "zip_code": "344900",
    "parent_code": "361000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "361100",
    "label": "上饶市",
    "value": "shangraoshi",
    "zip_code": "334000",
    "parent_code": "360000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "361102",
    "label": "信州区",
    "value": "xinzhouqu",
    "zip_code": "334000",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "361103",
    "label": "广丰区",
    "value": "guangfengqu",
    "zip_code": "334600",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "361121",
    "label": "上饶县",
    "value": "shangraoxian",
    "zip_code": "334100",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "361123",
    "label": "玉山县",
    "value": "yushanxian",
    "zip_code": "334700",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "361124",
    "label": "铅山县",
    "value": "qianshanxian",
    "zip_code": "334500",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "361125",
    "label": "横峰县",
    "value": "hengfengxian",
    "zip_code": "334300",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "361126",
    "label": "弋阳县",
    "value": "yiyangxian",
    "zip_code": "334400",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "361127",
    "label": "余干县",
    "value": "yuganxian",
    "zip_code": "335100",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "361128",
    "label": "鄱阳县",
    "value": "poyangxian",
    "zip_code": "333100",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "361129",
    "label": "万年县",
    "value": "wannianxian",
    "zip_code": "335500",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "361130",
    "label": "婺源县",
    "value": "wuyuanxian",
    "zip_code": "333200",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "361181",
    "label": "德兴市",
    "value": "dexingshi",
    "zip_code": "334200",
    "parent_code": "361100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "370000",
    "label": "山东省",
    "value": "shandongsheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "S"
  },
  {
    "code": "370100",
    "label": "济南市",
    "value": "jinanshi",
    "zip_code": "250000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "370102",
    "label": "历下区",
    "value": "lixiaqu",
    "zip_code": "250014",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370103",
    "label": "市中区",
    "value": "shizhongqu",
    "zip_code": "250001",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370104",
    "label": "槐荫区",
    "value": "huaiyinqu",
    "zip_code": "250022",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "370105",
    "label": "天桥区",
    "value": "tianqiaoqu",
    "zip_code": "250031",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "370112",
    "label": "历城区",
    "value": "lichengqu",
    "zip_code": "250100",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370113",
    "label": "长清区",
    "value": "changqingqu",
    "zip_code": "250300",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "370114",
    "label": "章丘区",
    "value": "zhangqiuqu",
    "zip_code": "250200",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370124",
    "label": "平阴县",
    "value": "pingyinxian",
    "zip_code": "250400",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "370125",
    "label": "济阳县",
    "value": "jiyangxian",
    "zip_code": "251400",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "370126",
    "label": "商河县",
    "value": "shanghexian",
    "zip_code": "251600",
    "parent_code": "370100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370200",
    "label": "青岛市",
    "value": "qingdaoshi",
    "zip_code": "266000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "370202",
    "label": "市南区",
    "value": "shinanqu",
    "zip_code": "266001",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370203",
    "label": "市北区",
    "value": "shibeiqu",
    "zip_code": "266011",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370211",
    "label": "黄岛区",
    "value": "huangdaoqu",
    "zip_code": "266500",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "370212",
    "label": "崂山区",
    "value": "laoshanqu",
    "zip_code": "266100",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370213",
    "label": "李沧区",
    "value": "licangqu",
    "zip_code": "266021",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370214",
    "label": "城阳区",
    "value": "chengyangqu",
    "zip_code": "266041",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "370215",
    "label": "即墨区",
    "value": "jimoqu",
    "zip_code": "266200",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "370281",
    "label": "胶州市",
    "value": "jiaozhoushi",
    "zip_code": "266300",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "370283",
    "label": "平度市",
    "value": "pingdushi",
    "zip_code": "266700",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "370285",
    "label": "莱西市",
    "value": "laixishi",
    "zip_code": "266600",
    "parent_code": "370200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370300",
    "label": "淄博市",
    "value": "ziboshi",
    "zip_code": "255000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "370302",
    "label": "淄川区",
    "value": "zichuanqu",
    "zip_code": "255100",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370303",
    "label": "张店区",
    "value": "zhangdianqu",
    "zip_code": "255022",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370304",
    "label": "博山区",
    "value": "boshanqu",
    "zip_code": "255200",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "370305",
    "label": "临淄区",
    "value": "linziqu",
    "zip_code": "255400",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370306",
    "label": "周村区",
    "value": "zhoucunqu",
    "zip_code": "255300",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370321",
    "label": "桓台县",
    "value": "huantaixian",
    "zip_code": "256400",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "370322",
    "label": "高青县",
    "value": "gaoqingxian",
    "zip_code": "256300",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "370323",
    "label": "沂源县",
    "value": "yiyuanxian",
    "zip_code": "256100",
    "parent_code": "370300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "370400",
    "label": "枣庄市",
    "value": "zaozhuangshi",
    "zip_code": "277000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "370402",
    "label": "市中区",
    "value": "shizhongqu",
    "zip_code": "277101",
    "parent_code": "370400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370403",
    "label": "薛城区",
    "value": "xuechengqu",
    "zip_code": "277000",
    "parent_code": "370400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "370404",
    "label": "峄城区",
    "value": "yichengqu",
    "zip_code": "277300",
    "parent_code": "370400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "370405",
    "label": "台儿庄区",
    "value": "taierzhuangqu",
    "zip_code": "277400",
    "parent_code": "370400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "370406",
    "label": "山亭区",
    "value": "shantingqu",
    "zip_code": "277200",
    "parent_code": "370400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370481",
    "label": "滕州市",
    "value": "tengzhoushi",
    "zip_code": "277500",
    "parent_code": "370400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "370500",
    "label": "东营市",
    "value": "dongyingshi",
    "zip_code": "257000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "370502",
    "label": "东营区",
    "value": "dongyingqu",
    "zip_code": "257029",
    "parent_code": "370500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "370503",
    "label": "河口区",
    "value": "hekouqu",
    "zip_code": "257200",
    "parent_code": "370500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "370505",
    "label": "垦利区",
    "value": "kenliqu",
    "zip_code": "257500",
    "parent_code": "370500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "370522",
    "label": "利津县",
    "value": "lijinxian",
    "zip_code": "257400",
    "parent_code": "370500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370523",
    "label": "广饶县",
    "value": "guangraoxian",
    "zip_code": "257300",
    "parent_code": "370500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "370600",
    "label": "烟台市",
    "value": "yantaishi",
    "zip_code": "264000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "370602",
    "label": "芝罘区",
    "value": "zhifuqu",
    "zip_code": "264001",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370611",
    "label": "福山区",
    "value": "fushanqu",
    "zip_code": "265500",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "370612",
    "label": "牟平区",
    "value": "moupingqu",
    "zip_code": "264100",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "370613",
    "label": "莱山区",
    "value": "laishanqu",
    "zip_code": "264600",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370634",
    "label": "长岛县",
    "value": "changdaoxian",
    "zip_code": "265800",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "370681",
    "label": "龙口市",
    "value": "longkoushi",
    "zip_code": "265700",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370682",
    "label": "莱阳市",
    "value": "laiyangshi",
    "zip_code": "265200",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370683",
    "label": "莱州市",
    "value": "laizhoushi",
    "zip_code": "261400",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370684",
    "label": "蓬莱市",
    "value": "penglaishi",
    "zip_code": "265600",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "370685",
    "label": "招远市",
    "value": "zhaoyuanshi",
    "zip_code": "265400",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370686",
    "label": "栖霞市",
    "value": "qixiashi",
    "zip_code": "265300",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "370687",
    "label": "海阳市",
    "value": "haiyangshi",
    "zip_code": "265100",
    "parent_code": "370600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "370700",
    "label": "潍坊市",
    "value": "weifangshi",
    "zip_code": "261000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "370702",
    "label": "潍城区",
    "value": "weichengqu",
    "zip_code": "261021",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "370703",
    "label": "寒亭区",
    "value": "hantingqu",
    "zip_code": "261100",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "370704",
    "label": "坊子区",
    "value": "fangziqu",
    "zip_code": "261200",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "370705",
    "label": "奎文区",
    "value": "kuiwenqu",
    "zip_code": "261031",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "370724",
    "label": "临朐县",
    "value": "linquxian",
    "zip_code": "262600",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370725",
    "label": "昌乐县",
    "value": "changlexian",
    "zip_code": "262400",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "370781",
    "label": "青州市",
    "value": "qingzhoushi",
    "zip_code": "262500",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "370782",
    "label": "诸城市",
    "value": "zhuchengshi",
    "zip_code": "262200",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370783",
    "label": "寿光市",
    "value": "shouguangshi",
    "zip_code": "262700",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370784",
    "label": "安丘市",
    "value": "anqiushi",
    "zip_code": "262100",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "370785",
    "label": "高密市",
    "value": "gaomishi",
    "zip_code": "261500",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "370786",
    "label": "昌邑市",
    "value": "changyishi",
    "zip_code": "261300",
    "parent_code": "370700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "370800",
    "label": "济宁市",
    "value": "jiningshi",
    "zip_code": "272000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "370811",
    "label": "任城区",
    "value": "renchengqu",
    "zip_code": "272113",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "370812",
    "label": "兖州区",
    "value": "yanzhouqu",
    "zip_code": "272000",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "370826",
    "label": "微山县",
    "value": "weishanxian",
    "zip_code": "277600",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "370827",
    "label": "鱼台县",
    "value": "yutaixian",
    "zip_code": "272300",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "370828",
    "label": "金乡县",
    "value": "jinxiangxian",
    "zip_code": "272200",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "370829",
    "label": "嘉祥县",
    "value": "jiaxiangxian",
    "zip_code": "272400",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "370830",
    "label": "汶上县",
    "value": "wenshangxian",
    "zip_code": "272501",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "370831",
    "label": "泗水县",
    "value": "sishuixian",
    "zip_code": "273200",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "370832",
    "label": "梁山县",
    "value": "liangshanxian",
    "zip_code": "272600",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "370881",
    "label": "曲阜市",
    "value": "qufushi",
    "zip_code": "273100",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "370883",
    "label": "邹城市",
    "value": "zouchengshi",
    "zip_code": "273500",
    "parent_code": "370800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "370900",
    "label": "泰安市",
    "value": "taianshi",
    "zip_code": "271000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "370902",
    "label": "泰山区",
    "value": "taishanqu",
    "zip_code": "271000",
    "parent_code": "370900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "370911",
    "label": "岱岳区",
    "value": "daiyuequ",
    "zip_code": "271000",
    "parent_code": "370900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "370921",
    "label": "宁阳县",
    "value": "ningyangxian",
    "zip_code": "271400",
    "parent_code": "370900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "370923",
    "label": "东平县",
    "value": "dongpingxian",
    "zip_code": "271500",
    "parent_code": "370900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "370982",
    "label": "新泰市",
    "value": "xintaishi",
    "zip_code": "271200",
    "parent_code": "370900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "370983",
    "label": "肥城市",
    "value": "feichengshi",
    "zip_code": "271600",
    "parent_code": "370900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "371000",
    "label": "威海市",
    "value": "weihaishi",
    "zip_code": "264200",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "371002",
    "label": "环翠区",
    "value": "huancuiqu",
    "zip_code": "264200",
    "parent_code": "371000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "371003",
    "label": "文登区",
    "value": "wendengqu",
    "zip_code": "264400",
    "parent_code": "371000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "371082",
    "label": "荣成市",
    "value": "rongchengshi",
    "zip_code": "264300",
    "parent_code": "371000",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "371083",
    "label": "乳山市",
    "value": "rushanshi",
    "zip_code": "264500",
    "parent_code": "371000",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "371100",
    "label": "日照市",
    "value": "rizhaoshi",
    "zip_code": "276800",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "R"
  },
  {
    "code": "371102",
    "label": "东港区",
    "value": "donggangqu",
    "zip_code": "276800",
    "parent_code": "371100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "371103",
    "label": "岚山区",
    "value": "lanshanqu",
    "zip_code": "276808",
    "parent_code": "371100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371121",
    "label": "五莲县",
    "value": "wulianxian",
    "zip_code": "272300",
    "parent_code": "371100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "371122",
    "label": "莒县",
    "value": "juxian",
    "zip_code": "266500",
    "parent_code": "371100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "371200",
    "label": "莱芜市",
    "value": "laiwushi",
    "zip_code": "271100",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "371202",
    "label": "莱城区",
    "value": "laichengqu",
    "zip_code": "271100",
    "parent_code": "371200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371203",
    "label": "钢城区",
    "value": "gangchengqu",
    "zip_code": "271100",
    "parent_code": "371200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "371300",
    "label": "临沂市",
    "value": "linyishi",
    "zip_code": "276000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "371302",
    "label": "兰山区",
    "value": "lanshanqu",
    "zip_code": "276002",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371311",
    "label": "罗庄区",
    "value": "luozhuangqu",
    "zip_code": "276022",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371312",
    "label": "河东区",
    "value": "hedongqu",
    "zip_code": "572000",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "371321",
    "label": "沂南县",
    "value": "yinanxian",
    "zip_code": "276300",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "371322",
    "label": "郯城县",
    "value": "tanchengxian",
    "zip_code": "276100",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "371323",
    "label": "沂水县",
    "value": "yishuixian",
    "zip_code": "276400",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "371324",
    "label": "兰陵县",
    "value": "lanlingxian",
    "zip_code": "277700",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371325",
    "label": "费县",
    "value": "feixian",
    "zip_code": "273400",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "371326",
    "label": "平邑县",
    "value": "pingyixian",
    "zip_code": "273300",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "371327",
    "label": "莒南县",
    "value": "junanxian",
    "zip_code": "276600",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "371328",
    "label": "蒙阴县",
    "value": "mengyinxian",
    "zip_code": "276200",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "371329",
    "label": "临沭县",
    "value": "linshuxian",
    "zip_code": "276700",
    "parent_code": "371300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371400",
    "label": "德州市",
    "value": "dezhoushi",
    "zip_code": "253000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "371402",
    "label": "德城区",
    "value": "dechengqu",
    "zip_code": "253011",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "371403",
    "label": "陵城区",
    "value": "lingchengqu",
    "zip_code": "253500",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371422",
    "label": "宁津县",
    "value": "ningjinxian",
    "zip_code": "253400",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "371423",
    "label": "庆云县",
    "value": "qingyunxian",
    "zip_code": "253700",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "371424",
    "label": "临邑县",
    "value": "linyixian",
    "zip_code": "251500",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371425",
    "label": "齐河县",
    "value": "qihexian",
    "zip_code": "251100",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "371426",
    "label": "平原县",
    "value": "pingyuanxian",
    "zip_code": "253100",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "371427",
    "label": "夏津县",
    "value": "xiajinxian",
    "zip_code": "253200",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "371428",
    "label": "武城县",
    "value": "wuchengxian",
    "zip_code": "253300",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "371481",
    "label": "乐陵市",
    "value": "lelingshi",
    "zip_code": "253600",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371482",
    "label": "禹城市",
    "value": "yuchengshi",
    "zip_code": "251200",
    "parent_code": "371400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "371500",
    "label": "聊城市",
    "value": "liaochengshi",
    "zip_code": "252000",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "371502",
    "label": "东昌府区",
    "value": "dongchangfuqu",
    "zip_code": "252000",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "371521",
    "label": "阳谷县",
    "value": "yangguxian",
    "zip_code": "252300",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "371522",
    "label": "莘县",
    "value": "xinxian",
    "zip_code": "252400",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "371523",
    "label": "茌平县",
    "value": "chipingxian",
    "zip_code": "252100",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "371524",
    "label": "东阿县",
    "value": "dongaxian",
    "zip_code": "252200",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "371525",
    "label": "冠县",
    "value": "guanxian",
    "zip_code": "252500",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "371526",
    "label": "高唐县",
    "value": "gaotangxian",
    "zip_code": "252800",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "371581",
    "label": "临清市",
    "value": "linqingshi",
    "zip_code": "252600",
    "parent_code": "371500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "371600",
    "label": "滨州市",
    "value": "binzhoushi",
    "zip_code": "256600",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "371602",
    "label": "滨城区",
    "value": "binchengqu",
    "zip_code": "256613",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "371603",
    "label": "沾化区",
    "value": "zhanhuaqu",
    "zip_code": "256800",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "371621",
    "label": "惠民县",
    "value": "huiminxian",
    "zip_code": "251700",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "371622",
    "label": "阳信县",
    "value": "yangxinxian",
    "zip_code": "251800",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "371623",
    "label": "无棣县",
    "value": "wudixian",
    "zip_code": "251900",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "371625",
    "label": "博兴县",
    "value": "boxingxian",
    "zip_code": "256500",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "371626",
    "label": "邹平县",
    "value": "zoupingxian",
    "zip_code": "256200",
    "parent_code": "371600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "371700",
    "label": "菏泽市",
    "value": "hezeshi",
    "zip_code": "0",
    "parent_code": "370000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "371702",
    "label": "牡丹区",
    "value": "mudanqu",
    "zip_code": "274009",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "371703",
    "label": "定陶区",
    "value": "dingtaoqu",
    "zip_code": "274100",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "371721",
    "label": "曹县",
    "value": "caoxian",
    "zip_code": "274400",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "371722",
    "label": "单县",
    "value": "shanxian",
    "zip_code": "274300",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "371723",
    "label": "成武县",
    "value": "chengwuxian",
    "zip_code": "274200",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "371724",
    "label": "巨野县",
    "value": "juyexian",
    "zip_code": "274900",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "371725",
    "label": "郓城县",
    "value": "yunchengxian",
    "zip_code": "274700",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "371726",
    "label": "鄄城县",
    "value": "juanchengxian",
    "zip_code": "274600",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "371728",
    "label": "东明县",
    "value": "dongmingxian",
    "zip_code": "274500",
    "parent_code": "371700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "410000",
    "label": "河南省",
    "value": "henansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "H"
  },
  {
    "code": "410100",
    "label": "郑州市",
    "value": "zhengzhoushi",
    "zip_code": "450000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "410102",
    "label": "中原区",
    "value": "zhongyuanqu",
    "zip_code": "450007",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "410103",
    "label": "二七区",
    "value": "erqiqu",
    "zip_code": "450052",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "410104",
    "label": "管城回族区",
    "value": "guanchenghuizuqu",
    "zip_code": "450000",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "410105",
    "label": "金水区",
    "value": "jinshuiqu",
    "zip_code": "450003",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "410106",
    "label": "上街区",
    "value": "shangjiequ",
    "zip_code": "450041",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "410108",
    "label": "惠济区",
    "value": "huijiqu",
    "zip_code": "450053",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410122",
    "label": "中牟县",
    "value": "zhongmuxian",
    "zip_code": "451450",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "410181",
    "label": "巩义市",
    "value": "gongyishi",
    "zip_code": "451200",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "410182",
    "label": "荥阳市",
    "value": "xingyangshi",
    "zip_code": "450100",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410183",
    "label": "新密市",
    "value": "xinmishi",
    "zip_code": "452300",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410184",
    "label": "新郑市",
    "value": "xinzhengshi",
    "zip_code": "451100",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410185",
    "label": "登封市",
    "value": "dengfengshi",
    "zip_code": "452470",
    "parent_code": "410100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "410200",
    "label": "开封市",
    "value": "kaifengshi",
    "zip_code": "475000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "K"
  },
  {
    "code": "410202",
    "label": "龙亭区",
    "value": "longtingqu",
    "zip_code": "475000",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410203",
    "label": "顺河回族区",
    "value": "shunhehuizuqu",
    "zip_code": "475000",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "410204",
    "label": "鼓楼区",
    "value": "gulouqu",
    "zip_code": "475000",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "410205",
    "label": "禹王台区",
    "value": "yuwangtaiqu",
    "zip_code": "475000",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410212",
    "label": "祥符区",
    "value": "xiangfuqu",
    "zip_code": "475100",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410221",
    "label": "杞县",
    "value": "qixian",
    "zip_code": "475200",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "410222",
    "label": "通许县",
    "value": "tongxuxian",
    "zip_code": "452200",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "410223",
    "label": "尉氏县",
    "value": "weishixian",
    "zip_code": "452100",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410225",
    "label": "兰考县",
    "value": "lankaoxian",
    "zip_code": "475300",
    "parent_code": "410200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410300",
    "label": "洛阳市",
    "value": "luoyangshi",
    "zip_code": "471000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "410302",
    "label": "老城区",
    "value": "laochengqu",
    "zip_code": "471002",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410303",
    "label": "西工区",
    "value": "xigongqu",
    "zip_code": "471000",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410304",
    "label": "瀍河回族区",
    "value": "chanhehuizuqu",
    "zip_code": "471002",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "410305",
    "label": "涧西区",
    "value": "jianxiqu",
    "zip_code": "471003",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "410307",
    "label": "偃师区",
    "value": "yanshiqu",
    "zip_code": "471900",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410308",
    "label": "孟津区",
    "value": "mengjinqu",
    "zip_code": "471100",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "410311",
    "label": "洛龙区",
    "value": "luolongqu",
    "zip_code": "471000",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410323",
    "label": "新安县",
    "value": "xinanxian",
    "zip_code": "471800",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410324",
    "label": "栾川县",
    "value": "luanchuanxian",
    "zip_code": "471500",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410325",
    "label": "嵩县",
    "value": "songxian",
    "zip_code": "471400",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "410326",
    "label": "汝阳县",
    "value": "ruyangxian",
    "zip_code": "471200",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "410327",
    "label": "宜阳县",
    "value": "yiyangxian",
    "zip_code": "471600",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410328",
    "label": "洛宁县",
    "value": "luoningxian",
    "zip_code": "471700",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410329",
    "label": "伊川县",
    "value": "yichuanxian",
    "zip_code": "471300",
    "parent_code": "410300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410400",
    "label": "平顶山市",
    "value": "pingdingshanshi",
    "zip_code": "467000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "410402",
    "label": "新华区",
    "value": "xinhuaqu",
    "zip_code": "467002",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410403",
    "label": "卫东区",
    "value": "weidongqu",
    "zip_code": "467021",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410404",
    "label": "石龙区",
    "value": "shilongqu",
    "zip_code": "467045",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "410411",
    "label": "湛河区",
    "value": "zhanhequ",
    "zip_code": "467000",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "410421",
    "label": "宝丰县",
    "value": "baofengxian",
    "zip_code": "467400",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "410422",
    "label": "叶县",
    "value": "xexian",
    "zip_code": "467200",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410423",
    "label": "鲁山县",
    "value": "lushanxian",
    "zip_code": "467300",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410425",
    "label": "郏县",
    "value": "jiaxian",
    "zip_code": "467100",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "410481",
    "label": "舞钢市",
    "value": "wugangshi",
    "zip_code": "462500",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410482",
    "label": "汝州市",
    "value": "ruzhoushi",
    "zip_code": "467500",
    "parent_code": "410400",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "410500",
    "label": "安阳市",
    "value": "anyangshi",
    "zip_code": "0",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "410502",
    "label": "文峰区",
    "value": "wenfengqu",
    "zip_code": "455000",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410503",
    "label": "北关区",
    "value": "beiguanqu",
    "zip_code": "455001",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "410505",
    "label": "殷都区",
    "value": "yinduqu",
    "zip_code": "455004",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410506",
    "label": "龙安区",
    "value": "longanqu",
    "zip_code": "455001",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410522",
    "label": "安阳县",
    "value": "anyangxian",
    "zip_code": "455000",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "410523",
    "label": "汤阴县",
    "value": "tangyinxian",
    "zip_code": "456150",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "410526",
    "label": "滑县",
    "value": "huaxian",
    "zip_code": "456400",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410527",
    "label": "内黄县",
    "value": "neihuangxian",
    "zip_code": "456350",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "410581",
    "label": "林州市",
    "value": "linzhoushi",
    "zip_code": "456500",
    "parent_code": "410500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "410600",
    "label": "鹤壁市",
    "value": "hebishi",
    "zip_code": "458000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "410602",
    "label": "鹤山区",
    "value": "heshanqu",
    "zip_code": "458010",
    "parent_code": "410600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410603",
    "label": "山城区",
    "value": "shanchengqu",
    "zip_code": "458000",
    "parent_code": "410600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "410611",
    "label": "淇滨区",
    "value": "qibinqu",
    "zip_code": "458000",
    "parent_code": "410600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "410621",
    "label": "浚县",
    "value": "junxian",
    "zip_code": "456250",
    "parent_code": "410600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "410622",
    "label": "淇县",
    "value": "qixian",
    "zip_code": "456750",
    "parent_code": "410600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "410700",
    "label": "新乡市",
    "value": "xinxiangshi",
    "zip_code": "453000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "410702",
    "label": "红旗区",
    "value": "hongqiqu",
    "zip_code": "453000",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410703",
    "label": "卫滨区",
    "value": "weibinqu",
    "zip_code": "453000",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410704",
    "label": "凤泉区",
    "value": "fengquanqu",
    "zip_code": "453011",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "410711",
    "label": "牧野区",
    "value": "muyequ",
    "zip_code": "453002",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "410721",
    "label": "新乡县",
    "value": "xinxiangxian",
    "zip_code": "453700",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410724",
    "label": "获嘉县",
    "value": "huojiaxian",
    "zip_code": "453800",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410725",
    "label": "原阳县",
    "value": "yuanyangxian",
    "zip_code": "453500",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410726",
    "label": "延津县",
    "value": "yanjinxian",
    "zip_code": "453200",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "410727",
    "label": "封丘县",
    "value": "fengqiuxian",
    "zip_code": "453300",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "410728",
    "label": "长垣县",
    "value": "changyuanxian",
    "zip_code": "453400",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "410781",
    "label": "卫辉市",
    "value": "weihuishi",
    "zip_code": "453100",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410782",
    "label": "辉县市",
    "value": "huixianshi",
    "zip_code": "453600",
    "parent_code": "410700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410800",
    "label": "焦作市",
    "value": "jiaozuoshi",
    "zip_code": "454150",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "410802",
    "label": "解放区",
    "value": "jiefangqu",
    "zip_code": "454000",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "410803",
    "label": "中站区",
    "value": "zhongzhanqu",
    "zip_code": "454191",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "410804",
    "label": "马村区",
    "value": "macunqu",
    "zip_code": "454171",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "410811",
    "label": "山阳区",
    "value": "shanyangqu",
    "zip_code": "454002",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "410821",
    "label": "修武县",
    "value": "xiuwuxian",
    "zip_code": "454350",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "410822",
    "label": "博爱县",
    "value": "boaixian",
    "zip_code": "454450",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "410823",
    "label": "武陟县",
    "value": "wuzhixian",
    "zip_code": "454950",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410825",
    "label": "温县",
    "value": "wenxian",
    "zip_code": "454850",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "410882",
    "label": "沁阳市",
    "value": "qinyangshi",
    "zip_code": "454550",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "410883",
    "label": "孟州市",
    "value": "mengzhoushi",
    "zip_code": "454750",
    "parent_code": "410800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "410900",
    "label": "濮阳市",
    "value": "puyangshi",
    "zip_code": "457000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "410902",
    "label": "华龙区",
    "value": "hualongqu",
    "zip_code": "457001",
    "parent_code": "410900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "410922",
    "label": "清丰县",
    "value": "qingfengxian",
    "zip_code": "457300",
    "parent_code": "410900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "410923",
    "label": "南乐县",
    "value": "nanlexian",
    "zip_code": "457400",
    "parent_code": "410900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "410926",
    "label": "范县",
    "value": "fanxian",
    "zip_code": "457500",
    "parent_code": "410900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "410927",
    "label": "台前县",
    "value": "taiqianxian",
    "zip_code": "457600",
    "parent_code": "410900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "410928",
    "label": "濮阳县",
    "value": "puyangxian",
    "zip_code": "457100",
    "parent_code": "410900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "411000",
    "label": "许昌市",
    "value": "xuchangshi",
    "zip_code": "461000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "411002",
    "label": "魏都区",
    "value": "weiduqu",
    "zip_code": "461000",
    "parent_code": "411000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "411003",
    "label": "建安区",
    "value": "jiananqu",
    "zip_code": "461100",
    "parent_code": "411000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "411024",
    "label": "鄢陵县",
    "value": "yanlingxian",
    "zip_code": "461200",
    "parent_code": "411000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411025",
    "label": "襄城县",
    "value": "xiangchengxian",
    "zip_code": "461700",
    "parent_code": "411000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411081",
    "label": "禹州市",
    "value": "yuzhoushi",
    "zip_code": "461670",
    "parent_code": "411000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411082",
    "label": "长葛市",
    "value": "changgeshi",
    "zip_code": "461500",
    "parent_code": "411000",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "411100",
    "label": "漯河市",
    "value": "luoheshi",
    "zip_code": "462000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "411102",
    "label": "源汇区",
    "value": "yuanhuiqu",
    "zip_code": "462000",
    "parent_code": "411100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411103",
    "label": "郾城区",
    "value": "yanchengqu",
    "zip_code": "462300",
    "parent_code": "411100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411104",
    "label": "召陵区",
    "value": "shaolingqu",
    "zip_code": "462300",
    "parent_code": "411100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411121",
    "label": "舞阳县",
    "value": "wuyangxian",
    "zip_code": "462400",
    "parent_code": "411100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "411122",
    "label": "临颍县",
    "value": "linyingxian",
    "zip_code": "462600",
    "parent_code": "411100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "411200",
    "label": "三门峡市",
    "value": "sanmenxiashi",
    "zip_code": "472000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "411202",
    "label": "湖滨区",
    "value": "hubinqu",
    "zip_code": "472000",
    "parent_code": "411200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "411203",
    "label": "陕州区",
    "value": "shanzhouqu",
    "zip_code": "472100",
    "parent_code": "411200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411221",
    "label": "渑池县",
    "value": "minchixian",
    "zip_code": "472400",
    "parent_code": "411200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "411224",
    "label": "卢氏县",
    "value": "lushixian",
    "zip_code": "472200",
    "parent_code": "411200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "411281",
    "label": "义马市",
    "value": "yimashi",
    "zip_code": "472300",
    "parent_code": "411200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411282",
    "label": "灵宝市",
    "value": "lingbaoshi",
    "zip_code": "472500",
    "parent_code": "411200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "411300",
    "label": "南阳市",
    "value": "nanyangshi",
    "zip_code": "473000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "411302",
    "label": "宛城区",
    "value": "wanchengqu",
    "zip_code": "473001",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "411303",
    "label": "卧龙区",
    "value": "wolongqu",
    "zip_code": "473003",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "411321",
    "label": "南召县",
    "value": "nanzhaoxian",
    "zip_code": "474650",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "411322",
    "label": "方城县",
    "value": "fangchengxian",
    "zip_code": "473200",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "411323",
    "label": "西峡县",
    "value": "xixiaxian",
    "zip_code": "474550",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411324",
    "label": "镇平县",
    "value": "zhenpingxian",
    "zip_code": "474250",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "411325",
    "label": "内乡县",
    "value": "neixiangxian",
    "zip_code": "474350",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "411326",
    "label": "淅川县",
    "value": "xichuanxian",
    "zip_code": "474450",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411327",
    "label": "社旗县",
    "value": "sheqixian",
    "zip_code": "473300",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411328",
    "label": "唐河县",
    "value": "tanghexian",
    "zip_code": "473400",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "411329",
    "label": "新野县",
    "value": "xinyexian",
    "zip_code": "473500",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411330",
    "label": "桐柏县",
    "value": "tongbaixian",
    "zip_code": "474750",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "411381",
    "label": "邓州市",
    "value": "dengzhoushi",
    "zip_code": "474150",
    "parent_code": "411300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "411400",
    "label": "商丘市",
    "value": "shangqiushi",
    "zip_code": "476000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "411402",
    "label": "梁园区",
    "value": "liangyuanqu",
    "zip_code": "476000",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "411403",
    "label": "睢阳区",
    "value": "suiyangqu",
    "zip_code": "476100",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411421",
    "label": "民权县",
    "value": "minquanxian",
    "zip_code": "476800",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "411422",
    "label": "睢县",
    "value": "suixian",
    "zip_code": "476900",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411423",
    "label": "宁陵县",
    "value": "ninglingxian",
    "zip_code": "476700",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "411424",
    "label": "柘城县",
    "value": "zhechengxian",
    "zip_code": "476200",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "411425",
    "label": "虞城县",
    "value": "yuchengxian",
    "zip_code": "476300",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411426",
    "label": "夏邑县",
    "value": "xiayixian",
    "zip_code": "476400",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411481",
    "label": "永城市",
    "value": "yongchengshi",
    "zip_code": "476600",
    "parent_code": "411400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411500",
    "label": "信阳市",
    "value": "xinyangshi",
    "zip_code": "464000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "411502",
    "label": "浉河区",
    "value": "shihequ",
    "zip_code": "464000",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411503",
    "label": "平桥区",
    "value": "pingqiaoqu",
    "zip_code": "464100",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "411521",
    "label": "罗山县",
    "value": "luoshanxian",
    "zip_code": "464200",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "411522",
    "label": "光山县",
    "value": "guangshanxian",
    "zip_code": "465450",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "411523",
    "label": "新县",
    "value": "xinxian",
    "zip_code": "465550",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411524",
    "label": "商城县",
    "value": "shangchengxian",
    "zip_code": "465350",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411525",
    "label": "固始县",
    "value": "gushixian",
    "zip_code": "465250",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "411526",
    "label": "潢川县",
    "value": "huangchuanxian",
    "zip_code": "465150",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "411527",
    "label": "淮滨县",
    "value": "huaibinxian",
    "zip_code": "464400",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "411528",
    "label": "息县",
    "value": "xixian",
    "zip_code": "464300",
    "parent_code": "411500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411600",
    "label": "周口市",
    "value": "zhoukoushi",
    "zip_code": "466000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "411602",
    "label": "川汇区",
    "value": "chuanhuiqu",
    "zip_code": "466000",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "411621",
    "label": "扶沟县",
    "value": "fugouxian",
    "zip_code": "461300",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "411622",
    "label": "西华县",
    "value": "xihuaxian",
    "zip_code": "466600",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411623",
    "label": "商水县",
    "value": "shangshuixian",
    "zip_code": "466100",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411624",
    "label": "沈丘县",
    "value": "shenqiuxian",
    "zip_code": "466300",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411625",
    "label": "郸城县",
    "value": "danchengxian",
    "zip_code": "477150",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "411626",
    "label": "淮阳县",
    "value": "huaiyangxian",
    "zip_code": "477150",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "411627",
    "label": "太康县",
    "value": "taikangxian",
    "zip_code": "461400",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "411628",
    "label": "鹿邑县",
    "value": "luyixian",
    "zip_code": "477200",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "411681",
    "label": "项城市",
    "value": "xiangchengshi",
    "zip_code": "466200",
    "parent_code": "411600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411700",
    "label": "驻马店市",
    "value": "zhumadianshi",
    "zip_code": "463000",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "411702",
    "label": "驿城区",
    "value": "yichengqu",
    "zip_code": "463000",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "411721",
    "label": "西平县",
    "value": "xipingxian",
    "zip_code": "463900",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "411722",
    "label": "上蔡县",
    "value": "shangcaixian",
    "zip_code": "463800",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411723",
    "label": "平舆县",
    "value": "pingyuxian",
    "zip_code": "463400",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "411724",
    "label": "正阳县",
    "value": "zhengyangxian",
    "zip_code": "463600",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "411725",
    "label": "确山县",
    "value": "queshanxian",
    "zip_code": "463200",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "411726",
    "label": "泌阳县",
    "value": "biyangxian",
    "zip_code": "463700",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "411727",
    "label": "汝南县",
    "value": "runanxian",
    "zip_code": "463300",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "411728",
    "label": "遂平县",
    "value": "suipingxian",
    "zip_code": "463100",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "411729",
    "label": "新蔡县",
    "value": "xincaixian",
    "zip_code": "463500",
    "parent_code": "411700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "419000",
    "label": "省直辖县级行政区划",
    "value": "shengzhixiaxianjixingzhengquhua",
    "zip_code": "0",
    "parent_code": "410000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "419001",
    "label": "济源市",
    "value": "jiyuanshi",
    "zip_code": "454650",
    "parent_code": "419000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "420000",
    "label": "湖北省",
    "value": "hubeisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "H"
  },
  {
    "code": "420100",
    "label": "武汉市",
    "value": "wuhanshi",
    "zip_code": "430000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "420102",
    "label": "江岸区",
    "value": "jianganqu",
    "zip_code": "430014",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "420103",
    "label": "江汉区",
    "value": "jianghanqu",
    "zip_code": "430021",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "420104",
    "label": "硚口区",
    "value": "qiaokouqu",
    "zip_code": "430033",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "420105",
    "label": "汉阳区",
    "value": "hanyangqu",
    "zip_code": "430050",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "420106",
    "label": "武昌区",
    "value": "wuchangqu",
    "zip_code": "430061",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "420107",
    "label": "青山区",
    "value": "qingshanqu",
    "zip_code": "430080",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "420111",
    "label": "洪山区",
    "value": "hongshanqu",
    "zip_code": "430070",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "420112",
    "label": "东西湖区",
    "value": "dongxihuqu",
    "zip_code": "430040",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420113",
    "label": "汉南区",
    "value": "hannanqu",
    "zip_code": "430090",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "420114",
    "label": "蔡甸区",
    "value": "caidianqu",
    "zip_code": "430100",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "420115",
    "label": "江夏区",
    "value": "jiangxiaqu",
    "zip_code": "430200",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "420116",
    "label": "黄陂区",
    "value": "huangpoqu",
    "zip_code": "432200",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "420117",
    "label": "新洲区",
    "value": "xinzhouqu",
    "zip_code": "431400",
    "parent_code": "420100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420200",
    "label": "黄石市",
    "value": "huangshishi",
    "zip_code": "435000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "420202",
    "label": "黄石港区",
    "value": "huangshigangqu",
    "zip_code": "435000",
    "parent_code": "420200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "420203",
    "label": "西塞山区",
    "value": "xisaishanqu",
    "zip_code": "435001",
    "parent_code": "420200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420204",
    "label": "下陆区",
    "value": "xialuqu",
    "zip_code": "435005",
    "parent_code": "420200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420205",
    "label": "铁山区",
    "value": "tieshanqu",
    "zip_code": "435006",
    "parent_code": "420200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "420222",
    "label": "阳新县",
    "value": "yangxinxian",
    "zip_code": "435200",
    "parent_code": "420200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420281",
    "label": "大冶市",
    "value": "dayeshi",
    "zip_code": "435100",
    "parent_code": "420200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420300",
    "label": "十堰市",
    "value": "shiyanshi",
    "zip_code": "442000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "420302",
    "label": "茅箭区",
    "value": "maojianqu",
    "zip_code": "442012",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "420303",
    "label": "张湾区",
    "value": "zhangwanqu",
    "zip_code": "442001",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420304",
    "label": "郧阳区",
    "value": "yunyangqu",
    "zip_code": "442500",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420322",
    "label": "郧西县",
    "value": "yunxixian",
    "zip_code": "442600",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420323",
    "label": "竹山县",
    "value": "zhushanxian",
    "zip_code": "442200",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420324",
    "label": "竹溪县",
    "value": "zhuxixian",
    "zip_code": "442300",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420325",
    "label": "房县",
    "value": "fangxian",
    "zip_code": "442100",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "420381",
    "label": "丹江口市",
    "value": "danjiangkoushi",
    "zip_code": "442700",
    "parent_code": "420300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420500",
    "label": "宜昌市",
    "value": "yichangshi",
    "zip_code": "443000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "420502",
    "label": "西陵区",
    "value": "xilingqu",
    "zip_code": "443000",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420503",
    "label": "伍家岗区",
    "value": "wujiagangqu",
    "zip_code": "443001",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "420504",
    "label": "点军区",
    "value": "dianjunqu",
    "zip_code": "443006",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420505",
    "label": "猇亭区",
    "value": "xiaotingqu",
    "zip_code": "443007",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420506",
    "label": "夷陵区",
    "value": "yilingqu",
    "zip_code": "443100",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420525",
    "label": "远安县",
    "value": "yuananxian",
    "zip_code": "444200",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420526",
    "label": "兴山县",
    "value": "xingshanxian",
    "zip_code": "443711",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420527",
    "label": "秭归县",
    "value": "ziguixian",
    "zip_code": "443600",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420528",
    "label": "长阳土家族自治县",
    "value": "changyangtujiazuzizhixian",
    "zip_code": "443500",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "420529",
    "label": "五峰土家族自治县",
    "value": "wufengtujiazuzizhixian",
    "zip_code": "443400",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "420581",
    "label": "宜都市",
    "value": "yidushi",
    "zip_code": "443300",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420582",
    "label": "当阳市",
    "value": "dangyangshi",
    "zip_code": "444100",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420583",
    "label": "枝江市",
    "value": "zhijiangshi",
    "zip_code": "443200",
    "parent_code": "420500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420600",
    "label": "襄阳市",
    "value": "xiangyangshi",
    "zip_code": "0",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "420602",
    "label": "襄城区",
    "value": "xiangchengqu",
    "zip_code": "441021",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420606",
    "label": "樊城区",
    "value": "fanchengqu",
    "zip_code": "441001",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "420607",
    "label": "襄州区",
    "value": "xiangzhouqu",
    "zip_code": "441000",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420624",
    "label": "南漳县",
    "value": "nanzhangxian",
    "zip_code": "441500",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "420625",
    "label": "谷城县",
    "value": "guchengxian",
    "zip_code": "441700",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "420626",
    "label": "保康县",
    "value": "baokangxian",
    "zip_code": "441600",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "420682",
    "label": "老河口市",
    "value": "laohekoushi",
    "zip_code": "441800",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "420683",
    "label": "枣阳市",
    "value": "zaoyangshi",
    "zip_code": "441200",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420684",
    "label": "宜城市",
    "value": "yichengshi",
    "zip_code": "441400",
    "parent_code": "420600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420700",
    "label": "鄂州市",
    "value": "ezhoushi",
    "zip_code": "436000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "E"
  },
  {
    "code": "420702",
    "label": "梁子湖区",
    "value": "liangzihuqu",
    "zip_code": "436064",
    "parent_code": "420700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "420703",
    "label": "华容区",
    "value": "huarongqu",
    "zip_code": "436030",
    "parent_code": "420700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "420704",
    "label": "鄂城区",
    "value": "echengqu",
    "zip_code": "436000",
    "parent_code": "420700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "420800",
    "label": "荆门市",
    "value": "jingmenshi",
    "zip_code": "448000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "420802",
    "label": "东宝区",
    "value": "dongbaoqu",
    "zip_code": "448004",
    "parent_code": "420800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420804",
    "label": "掇刀区",
    "value": "duodaoqu",
    "zip_code": "448124",
    "parent_code": "420800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420821",
    "label": "京山县",
    "value": "jingshanxian",
    "zip_code": "431800",
    "parent_code": "420800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "420822",
    "label": "沙洋县",
    "value": "shayangxian",
    "zip_code": "448200",
    "parent_code": "420800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "420881",
    "label": "钟祥市",
    "value": "zhongxiangshi",
    "zip_code": "431900",
    "parent_code": "420800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "420900",
    "label": "孝感市",
    "value": "xiaoganshi",
    "zip_code": "432000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "420902",
    "label": "孝南区",
    "value": "xiaonanqu",
    "zip_code": "432100",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420921",
    "label": "孝昌县",
    "value": "xiaochangxian",
    "zip_code": "432900",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "420922",
    "label": "大悟县",
    "value": "dawuxian",
    "zip_code": "432800",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "420923",
    "label": "云梦县",
    "value": "yunmengxian",
    "zip_code": "432500",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420981",
    "label": "应城市",
    "value": "yingchengshi",
    "zip_code": "432400",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "420982",
    "label": "安陆市",
    "value": "anlushi",
    "zip_code": "432600",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "420984",
    "label": "汉川市",
    "value": "hanchuanshi",
    "zip_code": "432300",
    "parent_code": "420900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "421000",
    "label": "荆州市",
    "value": "jingzhoushi",
    "zip_code": "434000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "421002",
    "label": "沙市区",
    "value": "shashiqu",
    "zip_code": "434000",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "421003",
    "label": "荆州区",
    "value": "jingzhouqu",
    "zip_code": "434020",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "421022",
    "label": "公安县",
    "value": "gonganxian",
    "zip_code": "434300",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "421023",
    "label": "监利县",
    "value": "jianlixian",
    "zip_code": "433300",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "421024",
    "label": "江陵县",
    "value": "jianglingxian",
    "zip_code": "434101",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "421081",
    "label": "石首市",
    "value": "shishoushi",
    "zip_code": "434400",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "421083",
    "label": "洪湖市",
    "value": "honghushi",
    "zip_code": "433200",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "421087",
    "label": "松滋市",
    "value": "songzishi",
    "zip_code": "434200",
    "parent_code": "421000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "421100",
    "label": "黄冈市",
    "value": "huanggangshi",
    "zip_code": "438000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "421102",
    "label": "黄州区",
    "value": "huangzhouqu",
    "zip_code": "438000",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "421121",
    "label": "团风县",
    "value": "tuanfengxian",
    "zip_code": "438000",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "421122",
    "label": "红安县",
    "value": "honganxian",
    "zip_code": "438401",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "421123",
    "label": "罗田县",
    "value": "luotianxian",
    "zip_code": "438600",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "421124",
    "label": "英山县",
    "value": "yingshanxian",
    "zip_code": "438700",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "421125",
    "label": "浠水县",
    "value": "xishuixian",
    "zip_code": "438200",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "421126",
    "label": "蕲春县",
    "value": "qichunxian",
    "zip_code": "435300",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "421127",
    "label": "黄梅县",
    "value": "huangmeixian",
    "zip_code": "435500",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "421181",
    "label": "麻城市",
    "value": "machengshi",
    "zip_code": "438300",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "421182",
    "label": "武穴市",
    "value": "wuxueshi",
    "zip_code": "435400",
    "parent_code": "421100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "421200",
    "label": "咸宁市",
    "value": "xianningshi",
    "zip_code": "437000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "421202",
    "label": "咸安区",
    "value": "xiananqu",
    "zip_code": "437000",
    "parent_code": "421200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "421221",
    "label": "嘉鱼县",
    "value": "jiayuxian",
    "zip_code": "437200",
    "parent_code": "421200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "421222",
    "label": "通城县",
    "value": "tongchengxian",
    "zip_code": "437400",
    "parent_code": "421200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "421223",
    "label": "崇阳县",
    "value": "chongyangxian",
    "zip_code": "437500",
    "parent_code": "421200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "421224",
    "label": "通山县",
    "value": "tongshanxian",
    "zip_code": "437600",
    "parent_code": "421200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "421281",
    "label": "赤壁市",
    "value": "chibishi",
    "zip_code": "437300",
    "parent_code": "421200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "421300",
    "label": "随州市",
    "value": "suizhoushi",
    "zip_code": "441300",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "421303",
    "label": "曾都区",
    "value": "cengduqu",
    "zip_code": "441300",
    "parent_code": "421300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "421321",
    "label": "随县",
    "value": "suixian",
    "zip_code": "431500",
    "parent_code": "421300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "421381",
    "label": "广水市",
    "value": "guangshuishi",
    "zip_code": "432700",
    "parent_code": "421300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "422800",
    "label": "恩施土家族苗族自治州",
    "value": "enshitujiazumiaozuzizhizhou",
    "zip_code": "445000",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "E"
  },
  {
    "code": "422801",
    "label": "恩施市",
    "value": "enshishi",
    "zip_code": "445000",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "422802",
    "label": "利川市",
    "value": "lichuanshi",
    "zip_code": "445400",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "422822",
    "label": "建始县",
    "value": "jianshixian",
    "zip_code": "445300",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "422823",
    "label": "巴东县",
    "value": "badongxian",
    "zip_code": "444300",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "422825",
    "label": "宣恩县",
    "value": "xuanenxian",
    "zip_code": "445500",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "422826",
    "label": "咸丰县",
    "value": "xianfengxian",
    "zip_code": "445600",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "422827",
    "label": "来凤县",
    "value": "laifengxian",
    "zip_code": "445700",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "422828",
    "label": "鹤峰县",
    "value": "hefengxian",
    "zip_code": "445800",
    "parent_code": "422800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "429000",
    "label": "省直辖县级行政区划",
    "value": "shengzhixiaxianjixingzhengquhua",
    "zip_code": "0",
    "parent_code": "420000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "429004",
    "label": "仙桃市",
    "value": "xiantaoshi",
    "zip_code": "433000",
    "parent_code": "429000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "429005",
    "label": "潜江市",
    "value": "qianjiangshi",
    "zip_code": "433100",
    "parent_code": "429000",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "429006",
    "label": "天门市",
    "value": "tianmenshi",
    "zip_code": "431700",
    "parent_code": "429000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "429021",
    "label": "神农架林区",
    "value": "shennongjialinqu",
    "zip_code": "442400",
    "parent_code": "429000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430000",
    "label": "湖南省",
    "value": "hunansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "H"
  },
  {
    "code": "430100",
    "label": "长沙市",
    "value": "changshashi",
    "zip_code": "410000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "430102",
    "label": "芙蓉区",
    "value": "furongqu",
    "zip_code": "410011",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "430103",
    "label": "天心区",
    "value": "tianxinqu",
    "zip_code": "410011",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "430104",
    "label": "岳麓区",
    "value": "yueluqu",
    "zip_code": "410006",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430105",
    "label": "开福区",
    "value": "kaifuqu",
    "zip_code": "410008",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "430111",
    "label": "雨花区",
    "value": "yuhuaqu",
    "zip_code": "410011",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430112",
    "label": "望城区",
    "value": "wangchengqu",
    "zip_code": "410000",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "430121",
    "label": "长沙县",
    "value": "changshaxian",
    "zip_code": "410100",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "430181",
    "label": "浏阳市",
    "value": "liuyangshi",
    "zip_code": "410300",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430182",
    "label": "宁乡市",
    "value": "ningxiangshi",
    "zip_code": "410600",
    "parent_code": "430100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "430200",
    "label": "株洲市",
    "value": "zhuzhoushi",
    "zip_code": "412000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "430202",
    "label": "荷塘区",
    "value": "hetangqu",
    "zip_code": "412000",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430203",
    "label": "芦淞区",
    "value": "lusongqu",
    "zip_code": "412000",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430204",
    "label": "石峰区",
    "value": "shifengqu",
    "zip_code": "412005",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430211",
    "label": "天元区",
    "value": "tianyuanqu",
    "zip_code": "412007",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "430221",
    "label": "株洲县",
    "value": "zhuzhouxian",
    "zip_code": "412100",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "430223",
    "label": "攸县",
    "value": "youxian",
    "zip_code": "412300",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430224",
    "label": "茶陵县",
    "value": "chalingxian",
    "zip_code": "412400",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "430225",
    "label": "炎陵县",
    "value": "yanlingxian",
    "zip_code": "412500",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430281",
    "label": "醴陵市",
    "value": "lilingshi",
    "zip_code": "412200",
    "parent_code": "430200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430300",
    "label": "湘潭市",
    "value": "xiangtanshi",
    "zip_code": "411100",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "430302",
    "label": "雨湖区",
    "value": "yuhuqu",
    "zip_code": "411100",
    "parent_code": "430300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430304",
    "label": "岳塘区",
    "value": "yuetangqu",
    "zip_code": "411101",
    "parent_code": "430300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430321",
    "label": "湘潭县",
    "value": "xiangtanxian",
    "zip_code": "411228",
    "parent_code": "430300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "430381",
    "label": "湘乡市",
    "value": "xiangxiangshi",
    "zip_code": "411400",
    "parent_code": "430300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "430382",
    "label": "韶山市",
    "value": "shaoshanshi",
    "zip_code": "411300",
    "parent_code": "430300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430400",
    "label": "衡阳市",
    "value": "hengyangshi",
    "zip_code": "421000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "430405",
    "label": "珠晖区",
    "value": "zhuhuiqu",
    "zip_code": "421002",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "430406",
    "label": "雁峰区",
    "value": "yanfengqu",
    "zip_code": "421001",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430407",
    "label": "石鼓区",
    "value": "shiguqu",
    "zip_code": "421001",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430408",
    "label": "蒸湘区",
    "value": "zhengxiangqu",
    "zip_code": "421001",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "430412",
    "label": "南岳区",
    "value": "nanyuequ",
    "zip_code": "421900",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "430421",
    "label": "衡阳县",
    "value": "hengyangxian",
    "zip_code": "421200",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430422",
    "label": "衡南县",
    "value": "hengnanxian",
    "zip_code": "421131",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430423",
    "label": "衡山县",
    "value": "hengshanxian",
    "zip_code": "421300",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430424",
    "label": "衡东县",
    "value": "hengdongxian",
    "zip_code": "421400",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430426",
    "label": "祁东县",
    "value": "qidongxian",
    "zip_code": "421600",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "430481",
    "label": "耒阳市",
    "value": "leiyangshi",
    "zip_code": "421800",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430482",
    "label": "常宁市",
    "value": "changningshi",
    "zip_code": "421500",
    "parent_code": "430400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "430500",
    "label": "邵阳市",
    "value": "shaoyangshi",
    "zip_code": "422000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "430502",
    "label": "双清区",
    "value": "shuangqingqu",
    "zip_code": "422001",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430503",
    "label": "大祥区",
    "value": "daxiangqu",
    "zip_code": "422000",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "430511",
    "label": "北塔区",
    "value": "beitaqu",
    "zip_code": "422007",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "430521",
    "label": "邵东县",
    "value": "shaodongxian",
    "zip_code": "422800",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430522",
    "label": "新邵县",
    "value": "xinshaoxian",
    "zip_code": "422900",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "430523",
    "label": "邵阳县",
    "value": "shaoyangxian",
    "zip_code": "422100",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430524",
    "label": "隆回县",
    "value": "longhuixian",
    "zip_code": "422200",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430525",
    "label": "洞口县",
    "value": "dongkouxian",
    "zip_code": "422300",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "430527",
    "label": "绥宁县",
    "value": "suiningxian",
    "zip_code": "422600",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430528",
    "label": "新宁县",
    "value": "xinningxian",
    "zip_code": "422700",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "430529",
    "label": "城步苗族自治县",
    "value": "chengbumiaozuzizhixian",
    "zip_code": "422500",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "430581",
    "label": "武冈市",
    "value": "wugangshi",
    "zip_code": "422400",
    "parent_code": "430500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "430600",
    "label": "岳阳市",
    "value": "yueyangshi",
    "zip_code": "414000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "430602",
    "label": "岳阳楼区",
    "value": "yueyanglouqu",
    "zip_code": "414000",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430603",
    "label": "云溪区",
    "value": "yunxiqu",
    "zip_code": "414009",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430611",
    "label": "君山区",
    "value": "junshanqu",
    "zip_code": "414005",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "430621",
    "label": "岳阳县",
    "value": "yueyangxian",
    "zip_code": "414100",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430623",
    "label": "华容县",
    "value": "huarongxian",
    "zip_code": "414200",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430624",
    "label": "湘阴县",
    "value": "xiangyinxian",
    "zip_code": "414200",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "430626",
    "label": "平江县",
    "value": "pingjiangxian",
    "zip_code": "414500",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "430681",
    "label": "汨罗市",
    "value": "miluoshi",
    "zip_code": "414400",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "430682",
    "label": "临湘市",
    "value": "linxiangshi",
    "zip_code": "414300",
    "parent_code": "430600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430700",
    "label": "常德市",
    "value": "changdeshi",
    "zip_code": "415000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "430702",
    "label": "武陵区",
    "value": "wulingqu",
    "zip_code": "415000",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "430703",
    "label": "鼎城区",
    "value": "dingchengqu",
    "zip_code": "415101",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "430721",
    "label": "安乡县",
    "value": "anxiangxian",
    "zip_code": "415600",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "430722",
    "label": "汉寿县",
    "value": "hanshouxian",
    "zip_code": "415900",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430723",
    "label": "澧县",
    "value": "lixian",
    "zip_code": "415500",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430724",
    "label": "临澧县",
    "value": "linlixian",
    "zip_code": "415200",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "430725",
    "label": "桃源县",
    "value": "taoyuanxian",
    "zip_code": "415700",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "430726",
    "label": "石门县",
    "value": "shimenxian",
    "zip_code": "415300",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430781",
    "label": "津市市",
    "value": "jinshishi",
    "zip_code": "415400",
    "parent_code": "430700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "430800",
    "label": "张家界市",
    "value": "zhangjiajieshi",
    "zip_code": "427000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "430802",
    "label": "永定区",
    "value": "yongdingqu",
    "zip_code": "427000",
    "parent_code": "430800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "430811",
    "label": "武陵源区",
    "value": "wulingyuanqu",
    "zip_code": "427400",
    "parent_code": "430800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "430821",
    "label": "慈利县",
    "value": "cilixian",
    "zip_code": "427200",
    "parent_code": "430800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "430822",
    "label": "桑植县",
    "value": "sangzhixian",
    "zip_code": "427100",
    "parent_code": "430800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "430900",
    "label": "益阳市",
    "value": "yiyangshi",
    "zip_code": "413000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "430902",
    "label": "资阳区",
    "value": "ziyangqu",
    "zip_code": "413001",
    "parent_code": "430900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "430903",
    "label": "赫山区",
    "value": "heshanqu",
    "zip_code": "413002",
    "parent_code": "430900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "430921",
    "label": "南县",
    "value": "nanxian",
    "zip_code": "413200",
    "parent_code": "430900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "430922",
    "label": "桃江县",
    "value": "taojiangxian",
    "zip_code": "413400",
    "parent_code": "430900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "430923",
    "label": "安化县",
    "value": "anhuaxian",
    "zip_code": "413500",
    "parent_code": "430900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "430981",
    "label": "沅江市",
    "value": "yuanjiangshi",
    "zip_code": "413100",
    "parent_code": "430900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "431000",
    "label": "郴州市",
    "value": "chenzhoushi",
    "zip_code": "423000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "431002",
    "label": "北湖区",
    "value": "beihuqu",
    "zip_code": "423000",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "431003",
    "label": "苏仙区",
    "value": "suxianqu",
    "zip_code": "423000",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "431021",
    "label": "桂阳县",
    "value": "guiyangxian",
    "zip_code": "424400",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "431022",
    "label": "宜章县",
    "value": "yizhangxian",
    "zip_code": "424200",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "431023",
    "label": "永兴县",
    "value": "yongxingxian",
    "zip_code": "423300",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "431024",
    "label": "嘉禾县",
    "value": "jiahexian",
    "zip_code": "424500",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "431025",
    "label": "临武县",
    "value": "linwuxian",
    "zip_code": "424300",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "431026",
    "label": "汝城县",
    "value": "ruchengxian",
    "zip_code": "424100",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "431027",
    "label": "桂东县",
    "value": "guidongxian",
    "zip_code": "423500",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "431028",
    "label": "安仁县",
    "value": "anrenxian",
    "zip_code": "423600",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "431081",
    "label": "资兴市",
    "value": "zixingshi",
    "zip_code": "423400",
    "parent_code": "431000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "431100",
    "label": "永州市",
    "value": "yongzhoushi",
    "zip_code": "425000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "431102",
    "label": "零陵区",
    "value": "linglingqu",
    "zip_code": "425002",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "431103",
    "label": "冷水滩区",
    "value": "lengshuitanqu",
    "zip_code": "425100",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "431122",
    "label": "东安县",
    "value": "donganxian",
    "zip_code": "425900",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "431123",
    "label": "双牌县",
    "value": "shuangpaixian",
    "zip_code": "425200",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "431124",
    "label": "道县",
    "value": "daoxian",
    "zip_code": "425300",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "431125",
    "label": "江永县",
    "value": "jiangyongxian",
    "zip_code": "425400",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "431126",
    "label": "宁远县",
    "value": "ningyuanxian",
    "zip_code": "425600",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "431127",
    "label": "蓝山县",
    "value": "lanshanxian",
    "zip_code": "425800",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "431128",
    "label": "新田县",
    "value": "xintianxian",
    "zip_code": "425700",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "431129",
    "label": "江华瑶族自治县",
    "value": "jianghuayaozuzizhixian",
    "zip_code": "425500",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "431181",
    "label": "祁阳市",
    "value": "qiyangshi",
    "zip_code": "426100",
    "parent_code": "431100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "431200",
    "label": "怀化市",
    "value": "huaihuashi",
    "zip_code": "418000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "431202",
    "label": "鹤城区",
    "value": "hechengqu",
    "zip_code": "418000",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "431221",
    "label": "中方县",
    "value": "zhongfangxian",
    "zip_code": "418005",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "431222",
    "label": "沅陵县",
    "value": "yuanlingxian",
    "zip_code": "419600",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "431223",
    "label": "辰溪县",
    "value": "chenxixian",
    "zip_code": "419500",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "431224",
    "label": "溆浦县",
    "value": "xupuxian",
    "zip_code": "419300",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "431225",
    "label": "会同县",
    "value": "huitongxian",
    "zip_code": "418300",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "431226",
    "label": "麻阳苗族自治县",
    "value": "mayangmiaozuzizhixian",
    "zip_code": "419400",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "431227",
    "label": "新晃侗族自治县",
    "value": "xinhuangtongzuzizhixian",
    "zip_code": "419200",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "431228",
    "label": "芷江侗族自治县",
    "value": "zhijiangtongzuzizhixian",
    "zip_code": "419100",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "431229",
    "label": "靖州苗族侗族自治县",
    "value": "jingzhoumiaozutongzuzizhixian",
    "zip_code": "418400",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "431230",
    "label": "通道侗族自治县",
    "value": "tongdaotongzuzizhixian",
    "zip_code": "418500",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "431281",
    "label": "洪江市",
    "value": "hongjiangshi",
    "zip_code": "418116",
    "parent_code": "431200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "431300",
    "label": "娄底市",
    "value": "loudishi",
    "zip_code": "417000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "431302",
    "label": "娄星区",
    "value": "louxingqu",
    "zip_code": "417000",
    "parent_code": "431300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "431321",
    "label": "双峰县",
    "value": "shuangfengxian",
    "zip_code": "417700",
    "parent_code": "431300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "431322",
    "label": "新化县",
    "value": "xinhuaxian",
    "zip_code": "417600",
    "parent_code": "431300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "431381",
    "label": "冷水江市",
    "value": "lengshuijiangshi",
    "zip_code": "417500",
    "parent_code": "431300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "431382",
    "label": "涟源市",
    "value": "lianyuanshi",
    "zip_code": "417100",
    "parent_code": "431300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "433100",
    "label": "湘西土家族苗族自治州",
    "value": "xiangxitujiazumiaozuzizhizhou",
    "zip_code": "416000",
    "parent_code": "430000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "433101",
    "label": "吉首市",
    "value": "jishoushi",
    "zip_code": "416000",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "433122",
    "label": "泸溪县",
    "value": "luxixian",
    "zip_code": "416100",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "433123",
    "label": "凤凰县",
    "value": "fenghuangxian",
    "zip_code": "416200",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "433124",
    "label": "花垣县",
    "value": "huayuanxian",
    "zip_code": "416400",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "433125",
    "label": "保靖县",
    "value": "baojingxian",
    "zip_code": "416500",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "433126",
    "label": "古丈县",
    "value": "guzhangxian",
    "zip_code": "416300",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "433127",
    "label": "永顺县",
    "value": "yongshunxian",
    "zip_code": "416700",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "433130",
    "label": "龙山县",
    "value": "longshanxian",
    "zip_code": "416800",
    "parent_code": "433100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440000",
    "label": "广东省",
    "value": "guangdongsheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "G"
  },
  {
    "code": "440100",
    "label": "广州市",
    "value": "guangzhoushi",
    "zip_code": "510000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "440103",
    "label": "荔湾区",
    "value": "liwanqu",
    "zip_code": "510145",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440104",
    "label": "越秀区",
    "value": "yuexiuqu",
    "zip_code": "510030",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "440105",
    "label": "海珠区",
    "value": "haizhuqu",
    "zip_code": "510220",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "440106",
    "label": "天河区",
    "value": "tianhequ",
    "zip_code": "510630",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "440111",
    "label": "白云区",
    "value": "baiyunqu",
    "zip_code": "510080",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "440112",
    "label": "黄埔区",
    "value": "huangpuqu",
    "zip_code": "510700",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "440113",
    "label": "番禺区",
    "value": "panyuqu",
    "zip_code": "511400",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "440114",
    "label": "花都区",
    "value": "huaduqu",
    "zip_code": "510800",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "440115",
    "label": "南沙区",
    "value": "nanshaqu",
    "zip_code": "511400",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "440117",
    "label": "从化区",
    "value": "conghuaqu",
    "zip_code": "510900",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "440118",
    "label": "增城区",
    "value": "zengchengqu",
    "zip_code": "511300",
    "parent_code": "440100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "440200",
    "label": "韶关市",
    "value": "shaoguanshi",
    "zip_code": "512000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "440203",
    "label": "武江区",
    "value": "wujiangqu",
    "zip_code": "512026",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "440204",
    "label": "浈江区",
    "value": "zhenjiangqu",
    "zip_code": "512023",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "440205",
    "label": "曲江区",
    "value": "qujiangqu",
    "zip_code": "512100",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "440222",
    "label": "始兴县",
    "value": "shixingxian",
    "zip_code": "512500",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "440224",
    "label": "仁化县",
    "value": "renhuaxian",
    "zip_code": "512300",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "440229",
    "label": "翁源县",
    "value": "wengyuanxian",
    "zip_code": "512600",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "440232",
    "label": "乳源瑶族自治县",
    "value": "ruyuanyaozuzizhixian",
    "zip_code": "512700",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "440233",
    "label": "新丰县",
    "value": "xinfengxian",
    "zip_code": "511100",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "440281",
    "label": "乐昌市",
    "value": "lechangshi",
    "zip_code": "512200",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440282",
    "label": "南雄市",
    "value": "nanxiongshi",
    "zip_code": "512400",
    "parent_code": "440200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "440300",
    "label": "深圳市",
    "value": "shenzhenshi",
    "zip_code": "518000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "440303",
    "label": "罗湖区",
    "value": "luohuqu",
    "zip_code": "518001",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440304",
    "label": "福田区",
    "value": "futianqu",
    "zip_code": "518033",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "440305",
    "label": "南山区",
    "value": "nanshanqu",
    "zip_code": "518052",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "440306",
    "label": "宝安区",
    "value": "baoanqu",
    "zip_code": "518101",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "440307",
    "label": "龙岗区",
    "value": "longgangqu",
    "zip_code": "518116",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440308",
    "label": "盐田区",
    "value": "yantianqu",
    "zip_code": "518083",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "440309",
    "label": "龙华区",
    "value": "longhuaqu",
    "zip_code": "570105",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440310",
    "label": "坪山区",
    "value": "pingshanqu",
    "zip_code": "518118",
    "parent_code": "440300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "440400",
    "label": "珠海市",
    "value": "zhuhaishi",
    "zip_code": "519000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "440402",
    "label": "香洲区",
    "value": "xiangzhouqu",
    "zip_code": "519000",
    "parent_code": "440400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "440403",
    "label": "斗门区",
    "value": "doumenqu",
    "zip_code": "519100",
    "parent_code": "440400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "440404",
    "label": "金湾区",
    "value": "jinwanqu",
    "zip_code": "519090",
    "parent_code": "440400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "440500",
    "label": "汕头市",
    "value": "shantoushi",
    "zip_code": "515000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "440507",
    "label": "龙湖区",
    "value": "longhuqu",
    "zip_code": "515041",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440511",
    "label": "金平区",
    "value": "jinpingqu",
    "zip_code": "515041",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "440512",
    "label": "濠江区",
    "value": "haojiangqu",
    "zip_code": "515071",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "440513",
    "label": "潮阳区",
    "value": "chaoyangqu",
    "zip_code": "515100",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "440514",
    "label": "潮南区",
    "value": "chaonanqu",
    "zip_code": "515144",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "440515",
    "label": "澄海区",
    "value": "chenghaiqu",
    "zip_code": "515800",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "440523",
    "label": "南澳县",
    "value": "nanaoxian",
    "zip_code": "515900",
    "parent_code": "440500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "440600",
    "label": "佛山市",
    "value": "foshanshi",
    "zip_code": "528000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "440604",
    "label": "禅城区",
    "value": "chanchengqu",
    "zip_code": "528000",
    "parent_code": "440600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "440605",
    "label": "南海区",
    "value": "nanhaiqu",
    "zip_code": "528200",
    "parent_code": "440600",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "440606",
    "label": "顺德区",
    "value": "shundequ",
    "zip_code": "528300",
    "parent_code": "440600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "440607",
    "label": "三水区",
    "value": "sanshuiqu",
    "zip_code": "528100",
    "parent_code": "440600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "440608",
    "label": "高明区",
    "value": "gaomingqu",
    "zip_code": "528500",
    "parent_code": "440600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "440700",
    "label": "江门市",
    "value": "jiangmenshi",
    "zip_code": "529000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "440703",
    "label": "蓬江区",
    "value": "pengjiangqu",
    "zip_code": "529051",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "440704",
    "label": "江海区",
    "value": "jianghaiqu",
    "zip_code": "529000",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "440705",
    "label": "新会区",
    "value": "xinhuiqu",
    "zip_code": "529100",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "440781",
    "label": "台山市",
    "value": "taishanshi",
    "zip_code": "529211",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "440783",
    "label": "开平市",
    "value": "kaipingshi",
    "zip_code": "529312",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "440784",
    "label": "鹤山市",
    "value": "heshanshi",
    "zip_code": "529711",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "440785",
    "label": "恩平市",
    "value": "enpingshi",
    "zip_code": "529411",
    "parent_code": "440700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "440800",
    "label": "湛江市",
    "value": "zhanjiangshi",
    "zip_code": "524000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "440802",
    "label": "赤坎区",
    "value": "chikanqu",
    "zip_code": "524033",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "440803",
    "label": "霞山区",
    "value": "xiashanqu",
    "zip_code": "524002",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "440804",
    "label": "坡头区",
    "value": "potouqu",
    "zip_code": "524057",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "440811",
    "label": "麻章区",
    "value": "mazhangqu",
    "zip_code": "524003",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "440823",
    "label": "遂溪县",
    "value": "suixixian",
    "zip_code": "524300",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "440825",
    "label": "徐闻县",
    "value": "xuwenxian",
    "zip_code": "524100",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "440881",
    "label": "廉江市",
    "value": "lianjiangshi",
    "zip_code": "524400",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440882",
    "label": "雷州市",
    "value": "leizhoushi",
    "zip_code": "524200",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "440883",
    "label": "吴川市",
    "value": "wuchuanshi",
    "zip_code": "524500",
    "parent_code": "440800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "440900",
    "label": "茂名市",
    "value": "maomingshi",
    "zip_code": "525000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "440902",
    "label": "茂南区",
    "value": "maonanqu",
    "zip_code": "525011",
    "parent_code": "440900",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "440904",
    "label": "电白区",
    "value": "dianbaiqu",
    "zip_code": "525400",
    "parent_code": "440900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "440981",
    "label": "高州市",
    "value": "gaozhoushi",
    "zip_code": "525200",
    "parent_code": "440900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "440982",
    "label": "化州市",
    "value": "huazhoushi",
    "zip_code": "525100",
    "parent_code": "440900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "440983",
    "label": "信宜市",
    "value": "xinyishi",
    "zip_code": "525300",
    "parent_code": "440900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "441200",
    "label": "肇庆市",
    "value": "zhaoqingshi",
    "zip_code": "526000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "441202",
    "label": "端州区",
    "value": "duanzhouqu",
    "zip_code": "526040",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441203",
    "label": "鼎湖区",
    "value": "dinghuqu",
    "zip_code": "526070",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441204",
    "label": "高要区",
    "value": "gaoyaoqu",
    "zip_code": "526100",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "441223",
    "label": "广宁县",
    "value": "guangningxian",
    "zip_code": "526300",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "441224",
    "label": "怀集县",
    "value": "huaijixian",
    "zip_code": "526400",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441225",
    "label": "封开县",
    "value": "fengkaixian",
    "zip_code": "526500",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "441226",
    "label": "德庆县",
    "value": "deqingxian",
    "zip_code": "526600",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441284",
    "label": "四会市",
    "value": "sihuishi",
    "zip_code": "526200",
    "parent_code": "441200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "441300",
    "label": "惠州市",
    "value": "huizhoushi",
    "zip_code": "516000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "441302",
    "label": "惠城区",
    "value": "huichengqu",
    "zip_code": "516001",
    "parent_code": "441300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441303",
    "label": "惠阳区",
    "value": "huiyangqu",
    "zip_code": "516200",
    "parent_code": "441300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441322",
    "label": "博罗县",
    "value": "boluoxian",
    "zip_code": "516100",
    "parent_code": "441300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "441323",
    "label": "惠东县",
    "value": "huidongxian",
    "zip_code": "516300",
    "parent_code": "441300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441324",
    "label": "龙门县",
    "value": "longmenxian",
    "zip_code": "516800",
    "parent_code": "441300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441400",
    "label": "梅州市",
    "value": "meizhoushi",
    "zip_code": "514000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "441402",
    "label": "梅江区",
    "value": "meijiangqu",
    "zip_code": "514000",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "441403",
    "label": "梅县区",
    "value": "meixianqu",
    "zip_code": "514700",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "441422",
    "label": "大埔县",
    "value": "dapuxian",
    "zip_code": "514200",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441423",
    "label": "丰顺县",
    "value": "fengshunxian",
    "zip_code": "514300",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "441424",
    "label": "五华县",
    "value": "wuhuaxian",
    "zip_code": "514400",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "441426",
    "label": "平远县",
    "value": "pingyuanxian",
    "zip_code": "514600",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "441427",
    "label": "蕉岭县",
    "value": "jiaolingxian",
    "zip_code": "514100",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "441481",
    "label": "兴宁市",
    "value": "xingningshi",
    "zip_code": "514500",
    "parent_code": "441400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "441500",
    "label": "汕尾市",
    "value": "shanweishi",
    "zip_code": "516600",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "441502",
    "label": "城区",
    "value": "chengqu",
    "zip_code": "516601",
    "parent_code": "441500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "441521",
    "label": "海丰县",
    "value": "haifengxian",
    "zip_code": "516400",
    "parent_code": "441500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441523",
    "label": "陆河县",
    "value": "luhexian",
    "zip_code": "516700",
    "parent_code": "441500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441581",
    "label": "陆丰市",
    "value": "lufengshi",
    "zip_code": "516500",
    "parent_code": "441500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441600",
    "label": "河源市",
    "value": "heyuanshi",
    "zip_code": "517000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "441602",
    "label": "源城区",
    "value": "yuanchengqu",
    "zip_code": "517000",
    "parent_code": "441600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "441621",
    "label": "紫金县",
    "value": "zijinxian",
    "zip_code": "517400",
    "parent_code": "441600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "441622",
    "label": "龙川县",
    "value": "longchuanxian",
    "zip_code": "517300",
    "parent_code": "441600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441623",
    "label": "连平县",
    "value": "lianpingxian",
    "zip_code": "517100",
    "parent_code": "441600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441624",
    "label": "和平县",
    "value": "hepingxian",
    "zip_code": "517200",
    "parent_code": "441600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441625",
    "label": "东源县",
    "value": "dongyuanxian",
    "zip_code": "517500",
    "parent_code": "441600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441700",
    "label": "阳江市",
    "value": "yangjiangshi",
    "zip_code": "529500",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "441702",
    "label": "江城区",
    "value": "jiangchengqu",
    "zip_code": "529525",
    "parent_code": "441700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "441704",
    "label": "阳东区",
    "value": "yangdongqu",
    "zip_code": "529900",
    "parent_code": "441700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "441721",
    "label": "阳西县",
    "value": "yangxixian",
    "zip_code": "529800",
    "parent_code": "441700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "441781",
    "label": "阳春市",
    "value": "yangchunshi",
    "zip_code": "529611",
    "parent_code": "441700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "441800",
    "label": "清远市",
    "value": "qingyuanshi",
    "zip_code": "511500",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "441802",
    "label": "清城区",
    "value": "qingchengqu",
    "zip_code": "511500",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "441803",
    "label": "清新区",
    "value": "qingxinqu",
    "zip_code": "511800",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "441821",
    "label": "佛冈县",
    "value": "fogangxian",
    "zip_code": "511600",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "441823",
    "label": "阳山县",
    "value": "yangshanxian",
    "zip_code": "513100",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "441825",
    "label": "连山壮族瑶族自治县",
    "value": "lianshanzhuangzuyaozuzizhixian",
    "zip_code": "513200",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441826",
    "label": "连南瑶族自治县",
    "value": "liannanyaozuzizhixian",
    "zip_code": "513300",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441881",
    "label": "英德市",
    "value": "yingdeshi",
    "zip_code": "513000",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "441882",
    "label": "连州市",
    "value": "lianzhoushi",
    "zip_code": "513401",
    "parent_code": "441800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441900",
    "label": "东莞市",
    "value": "dongguanshi",
    "zip_code": "523000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "441901",
    "label": "东城街道",
    "value": "dongchengjiedao",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441902",
    "label": "南城街道",
    "value": "nanchengjiedao",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "441903",
    "label": "万江街道",
    "value": "wanjiangjiedao",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "441904",
    "label": "莞城街道",
    "value": "guanchengjiedao",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "441905",
    "label": "石碣镇",
    "value": "shijiezhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "441906",
    "label": "石龙镇",
    "value": "shilongzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "441907",
    "label": "茶山镇",
    "value": "chashanzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "441908",
    "label": "石排镇",
    "value": "shipaizhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "441909",
    "label": "企石镇",
    "value": "qishizhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "441910",
    "label": "横沥镇",
    "value": "henglizhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441911",
    "label": "桥头镇",
    "value": "qiaotouzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "441912",
    "label": "谢岗镇",
    "value": "xiegangzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "441913",
    "label": "东坑镇",
    "value": "dongkengzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441914",
    "label": "常平镇",
    "value": "changpingzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "441915",
    "label": "寮步镇",
    "value": "liaobuzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "441916",
    "label": "樟木头镇",
    "value": "zhangmutouzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "441917",
    "label": "大朗镇",
    "value": "dalangzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441918",
    "label": "黄江镇",
    "value": "huangjiangzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441919",
    "label": "清溪镇",
    "value": "qingxizhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "441920",
    "label": "塘厦镇",
    "value": "tangxiazhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "441921",
    "label": "凤岗镇",
    "value": "fenggangzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "441922",
    "label": "大岭山镇",
    "value": "dalingshanzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441923",
    "label": "长安镇",
    "value": "changanzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "441924",
    "label": "虎门镇",
    "value": "humenzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441925",
    "label": "厚街镇",
    "value": "houjiezhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441926",
    "label": "沙田镇",
    "value": "shatianzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "441927",
    "label": "道滘镇",
    "value": "daojiaozhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "441928",
    "label": "洪梅镇",
    "value": "hongmeizhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441929",
    "label": "麻涌镇",
    "value": "machongzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "441930",
    "label": "望牛墩镇",
    "value": "wangniudunzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "441931",
    "label": "中堂镇",
    "value": "zhongtangzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "441932",
    "label": "高埗镇",
    "value": "gaobuzhen",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "441933",
    "label": "松山湖管委会",
    "value": "songshanhuguanweihui",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "441934",
    "label": "虎门港管委会",
    "value": "humengangguanweihui",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "441935",
    "label": "东莞生态园",
    "value": "dongguanshengtaiyuan",
    "zip_code": "523000",
    "parent_code": "441900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "442000",
    "label": "中山市",
    "value": "zhongshanshi",
    "zip_code": "528403",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "442001",
    "label": "石岐区街道",
    "value": "shiqiqujiedao",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "442002",
    "label": "东区街道",
    "value": "dongqujiedao",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "442003",
    "label": "火炬开发区",
    "value": "huojukaifaqu",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "442004",
    "label": "西区街道",
    "value": "xiqujiedao",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "442005",
    "label": "南区街道",
    "value": "nanqujiedao",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "442006",
    "label": "五桂山街道",
    "value": "wuguishanjiedao",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "442007",
    "label": "小榄镇",
    "value": "xiaolanzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "442008",
    "label": "黄圃镇",
    "value": "huangpuzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "442009",
    "label": "民众镇",
    "value": "minzhongzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "442010",
    "label": "东凤镇",
    "value": "dongfengzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "442011",
    "label": "东升镇",
    "value": "dongshengzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "442012",
    "label": "古镇镇",
    "value": "guzhenzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "442013",
    "label": "沙溪镇",
    "value": "shaxizhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "442014",
    "label": "坦洲镇",
    "value": "tanzhouzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "442015",
    "label": "港口镇",
    "value": "gangkouzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "442016",
    "label": "三角镇",
    "value": "sanjiaozhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "442017",
    "label": "横栏镇",
    "value": "henglanzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "442018",
    "label": "南头镇",
    "value": "nantouzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "442019",
    "label": "阜沙镇",
    "value": "fushazhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "442020",
    "label": "南朗镇",
    "value": "nanlangzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "442021",
    "label": "三乡镇",
    "value": "sanxiangzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "442022",
    "label": "板芙镇",
    "value": "banfuzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "442023",
    "label": "大涌镇",
    "value": "dayongzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "442024",
    "label": "神湾镇",
    "value": "shenwanzhen",
    "zip_code": "528403",
    "parent_code": "442000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "445100",
    "label": "潮州市",
    "value": "chaozhoushi",
    "zip_code": "521000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "445102",
    "label": "湘桥区",
    "value": "xiangqiaoqu",
    "zip_code": "521000",
    "parent_code": "445100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "445103",
    "label": "潮安区",
    "value": "chaoanqu",
    "zip_code": "515638",
    "parent_code": "445100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "445122",
    "label": "饶平县",
    "value": "raopingxian",
    "zip_code": "515700",
    "parent_code": "445100",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "445200",
    "label": "揭阳市",
    "value": "jieyangshi",
    "zip_code": "522000",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "445202",
    "label": "榕城区",
    "value": "rongchengqu",
    "zip_code": "522095",
    "parent_code": "445200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "445203",
    "label": "揭东区",
    "value": "jiedongqu",
    "zip_code": "515500",
    "parent_code": "445200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "445222",
    "label": "揭西县",
    "value": "jiexixian",
    "zip_code": "515400",
    "parent_code": "445200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "445224",
    "label": "惠来县",
    "value": "huilaixian",
    "zip_code": "515200",
    "parent_code": "445200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "445281",
    "label": "普宁市",
    "value": "puningshi",
    "zip_code": "515300",
    "parent_code": "445200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "445300",
    "label": "云浮市",
    "value": "yunfushi",
    "zip_code": "527300",
    "parent_code": "440000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "445302",
    "label": "云城区",
    "value": "yunchengqu",
    "zip_code": "527300",
    "parent_code": "445300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "445303",
    "label": "云安区",
    "value": "yunanqu",
    "zip_code": "527500",
    "parent_code": "445300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "445321",
    "label": "新兴县",
    "value": "xinxingxian",
    "zip_code": "527400",
    "parent_code": "445300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "445322",
    "label": "郁南县",
    "value": "yunanxian",
    "zip_code": "527100",
    "parent_code": "445300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "445381",
    "label": "罗定市",
    "value": "luodingshi",
    "zip_code": "527500",
    "parent_code": "445300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450000",
    "label": "广西壮族自治区",
    "value": "guangxizhuangzuzizhiqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "G"
  },
  {
    "code": "450100",
    "label": "南宁市",
    "value": "nanningshi",
    "zip_code": "530000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "450102",
    "label": "兴宁区",
    "value": "xingningqu",
    "zip_code": "530012",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "450103",
    "label": "青秀区",
    "value": "qingxiuqu",
    "zip_code": "530022",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "450105",
    "label": "江南区",
    "value": "jiangnanqu",
    "zip_code": "530031",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "450107",
    "label": "西乡塘区",
    "value": "xixiangtangqu",
    "zip_code": "530001",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "450108",
    "label": "良庆区",
    "value": "liangqingqu",
    "zip_code": "530200",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450109",
    "label": "邕宁区",
    "value": "yongningqu",
    "zip_code": "530200",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450110",
    "label": "武鸣区",
    "value": "wumingqu",
    "zip_code": "530100",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "450123",
    "label": "隆安县",
    "value": "longanxian",
    "zip_code": "532700",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450124",
    "label": "马山县",
    "value": "mashanxian",
    "zip_code": "530600",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "450125",
    "label": "上林县",
    "value": "shanglinxian",
    "zip_code": "530500",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "450126",
    "label": "宾阳县",
    "value": "binyangxian",
    "zip_code": "530400",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "450181",
    "label": "横州市",
    "value": "hengzhoushi",
    "zip_code": "530300",
    "parent_code": "450100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "450200",
    "label": "柳州市",
    "value": "liuzhoushi",
    "zip_code": "545000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "450202",
    "label": "城中区",
    "value": "chengzhongqu",
    "zip_code": "545001",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "450203",
    "label": "鱼峰区",
    "value": "yufengqu",
    "zip_code": "545005",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450204",
    "label": "柳南区",
    "value": "liunanqu",
    "zip_code": "545005",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450205",
    "label": "柳北区",
    "value": "liubeiqu",
    "zip_code": "545001",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450206",
    "label": "柳江区",
    "value": "liujiangqu",
    "zip_code": "545100",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450222",
    "label": "柳城县",
    "value": "liuchengxian",
    "zip_code": "545200",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450223",
    "label": "鹿寨县",
    "value": "luzhaixian",
    "zip_code": "545600",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450224",
    "label": "融安县",
    "value": "ronganxian",
    "zip_code": "545400",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "450225",
    "label": "融水苗族自治县",
    "value": "rongshuimiaozuzizhixian",
    "zip_code": "545300",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "450226",
    "label": "三江侗族自治县",
    "value": "sanjiangtongzuzizhixian",
    "zip_code": "545500",
    "parent_code": "450200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "450300",
    "label": "桂林市",
    "value": "guilinshi",
    "zip_code": "541000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "450302",
    "label": "秀峰区",
    "value": "xiufengqu",
    "zip_code": "541001",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "450303",
    "label": "叠彩区",
    "value": "diecaiqu",
    "zip_code": "541001",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "450304",
    "label": "象山区",
    "value": "xiangshanqu",
    "zip_code": "541002",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "450305",
    "label": "七星区",
    "value": "qixingqu",
    "zip_code": "541004",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "450311",
    "label": "雁山区",
    "value": "yanshanqu",
    "zip_code": "541006",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450312",
    "label": "临桂区",
    "value": "linguiqu",
    "zip_code": "541199",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450321",
    "label": "阳朔县",
    "value": "yangshuoxian",
    "zip_code": "541900",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450323",
    "label": "灵川县",
    "value": "lingchuanxian",
    "zip_code": "541200",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450324",
    "label": "全州县",
    "value": "quanzhouxian",
    "zip_code": "541500",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "450325",
    "label": "兴安县",
    "value": "xinganxian",
    "zip_code": "541300",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "450326",
    "label": "永福县",
    "value": "yongfuxian",
    "zip_code": "541800",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450327",
    "label": "灌阳县",
    "value": "guanyangxian",
    "zip_code": "541600",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "450328",
    "label": "龙胜各族自治县",
    "value": "longshenggezuzizhixian",
    "zip_code": "541700",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450329",
    "label": "资源县",
    "value": "ziyuanxian",
    "zip_code": "541400",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "450330",
    "label": "平乐县",
    "value": "pinglexian",
    "zip_code": "542400",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "450331",
    "label": "荔浦县",
    "value": "lipuxian",
    "zip_code": "546600",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450332",
    "label": "恭城瑶族自治县",
    "value": "gongchengyaozuzizhixian",
    "zip_code": "542500",
    "parent_code": "450300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "450400",
    "label": "梧州市",
    "value": "wuzhoushi",
    "zip_code": "543000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "450403",
    "label": "万秀区",
    "value": "wanxiuqu",
    "zip_code": "543000",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "450405",
    "label": "长洲区",
    "value": "changzhouqu",
    "zip_code": "543002",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "450406",
    "label": "龙圩区",
    "value": "longxuqu",
    "zip_code": "543004",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450421",
    "label": "苍梧县",
    "value": "cangwuxian",
    "zip_code": "543100",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "450422",
    "label": "藤县",
    "value": "tengxian",
    "zip_code": "543300",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "450423",
    "label": "蒙山县",
    "value": "mengshanxian",
    "zip_code": "546700",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "450481",
    "label": "岑溪市",
    "value": "cenxishi",
    "zip_code": "543200",
    "parent_code": "450400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "450500",
    "label": "北海市",
    "value": "beihaishi",
    "zip_code": "536000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "450502",
    "label": "海城区",
    "value": "haichengqu",
    "zip_code": "536000",
    "parent_code": "450500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "450503",
    "label": "银海区",
    "value": "yinhaiqu",
    "zip_code": "536000",
    "parent_code": "450500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450512",
    "label": "铁山港区",
    "value": "tieshangangqu",
    "zip_code": "536017",
    "parent_code": "450500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "450521",
    "label": "合浦县",
    "value": "hepuxian",
    "zip_code": "536100",
    "parent_code": "450500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "450600",
    "label": "防城港市",
    "value": "fangchenggangshi",
    "zip_code": "538000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "F"
  },
  {
    "code": "450602",
    "label": "港口区",
    "value": "gangkouqu",
    "zip_code": "538001",
    "parent_code": "450600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "450603",
    "label": "防城区",
    "value": "fangchengqu",
    "zip_code": "538021",
    "parent_code": "450600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "450621",
    "label": "上思县",
    "value": "shangsixian",
    "zip_code": "535500",
    "parent_code": "450600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "450681",
    "label": "东兴市",
    "value": "dongxingshi",
    "zip_code": "538100",
    "parent_code": "450600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "450700",
    "label": "钦州市",
    "value": "qinzhoushi",
    "zip_code": "535000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "450702",
    "label": "钦南区",
    "value": "qinnanqu",
    "zip_code": "535000",
    "parent_code": "450700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "450703",
    "label": "钦北区",
    "value": "qinbeiqu",
    "zip_code": "535000",
    "parent_code": "450700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "450721",
    "label": "灵山县",
    "value": "lingshanxian",
    "zip_code": "535400",
    "parent_code": "450700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450722",
    "label": "浦北县",
    "value": "pubeixian",
    "zip_code": "535300",
    "parent_code": "450700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "450800",
    "label": "贵港市",
    "value": "guigangshi",
    "zip_code": "537000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "450802",
    "label": "港北区",
    "value": "gangbeiqu",
    "zip_code": "537100",
    "parent_code": "450800",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "450803",
    "label": "港南区",
    "value": "gangnanqu",
    "zip_code": "537132",
    "parent_code": "450800",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "450804",
    "label": "覃塘区",
    "value": "qintangqu",
    "zip_code": "537121",
    "parent_code": "450800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "450821",
    "label": "平南县",
    "value": "pingnanxian",
    "zip_code": "537300",
    "parent_code": "450800",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "450881",
    "label": "桂平市",
    "value": "guipingshi",
    "zip_code": "537200",
    "parent_code": "450800",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "450900",
    "label": "玉林市",
    "value": "yulinshi",
    "zip_code": "0",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "450902",
    "label": "玉州区",
    "value": "yuzhouqu",
    "zip_code": "537200",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "450903",
    "label": "福绵区",
    "value": "fumianqu",
    "zip_code": "537500",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "450921",
    "label": "容县",
    "value": "rongxian",
    "zip_code": "537500",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "450922",
    "label": "陆川县",
    "value": "luchuanxian",
    "zip_code": "537700",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "450923",
    "label": "博白县",
    "value": "bobaixian",
    "zip_code": "537600",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "450924",
    "label": "兴业县",
    "value": "xingyexian",
    "zip_code": "537800",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "450981",
    "label": "北流市",
    "value": "beiliushi",
    "zip_code": "537400",
    "parent_code": "450900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "451000",
    "label": "百色市",
    "value": "baiseshi",
    "zip_code": "533000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "451002",
    "label": "右江区",
    "value": "youjiangqu",
    "zip_code": "533000",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "451021",
    "label": "田阳县",
    "value": "tianyangxian",
    "zip_code": "533600",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "451022",
    "label": "田东县",
    "value": "tiandongxian",
    "zip_code": "531500",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "451023",
    "label": "平果县",
    "value": "pingguoxian",
    "zip_code": "531400",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "451024",
    "label": "德保县",
    "value": "debaoxian",
    "zip_code": "533700",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "451026",
    "label": "那坡县",
    "value": "napoxian",
    "zip_code": "533900",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "451027",
    "label": "凌云县",
    "value": "lingyunxian",
    "zip_code": "533100",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "451028",
    "label": "乐业县",
    "value": "leyexian",
    "zip_code": "533200",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "451029",
    "label": "田林县",
    "value": "tianlinxian",
    "zip_code": "533300",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "451030",
    "label": "西林县",
    "value": "xilinxian",
    "zip_code": "533500",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "451031",
    "label": "隆林各族自治县",
    "value": "longlingezuzizhixian",
    "zip_code": "533400",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "451081",
    "label": "靖西市",
    "value": "jingxishi",
    "zip_code": "533000",
    "parent_code": "451000",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "451100",
    "label": "贺州市",
    "value": "hezhoushi",
    "zip_code": "542800",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "451102",
    "label": "八步区",
    "value": "babuqu",
    "zip_code": "542800",
    "parent_code": "451100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "451103",
    "label": "平桂区",
    "value": "pingguiqu",
    "zip_code": "542800",
    "parent_code": "451100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "451121",
    "label": "昭平县",
    "value": "zhaopingxian",
    "zip_code": "546800",
    "parent_code": "451100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "451122",
    "label": "钟山县",
    "value": "zhongshanxian",
    "zip_code": "542600",
    "parent_code": "451100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "451123",
    "label": "富川瑶族自治县",
    "value": "fuchuanyaozuzizhixian",
    "zip_code": "542700",
    "parent_code": "451100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "451200",
    "label": "河池市",
    "value": "hechishi",
    "zip_code": "547000",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "451202",
    "label": "金城江区",
    "value": "jinchengjiangqu",
    "zip_code": "547000",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "451203",
    "label": "宜州区",
    "value": "yizhouqu",
    "zip_code": "546300",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "451221",
    "label": "南丹县",
    "value": "nandanxian",
    "zip_code": "547200",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "451222",
    "label": "天峨县",
    "value": "tianexian",
    "zip_code": "547300",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "451223",
    "label": "凤山县",
    "value": "fengshanxian",
    "zip_code": "547600",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "451224",
    "label": "东兰县",
    "value": "donglanxian",
    "zip_code": "547400",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "451225",
    "label": "罗城仫佬族自治县",
    "value": "luochengmulaozuzizhixian",
    "zip_code": "546400",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "451226",
    "label": "环江毛南族自治县",
    "value": "huanjiangmaonanzuzizhixian",
    "zip_code": "547100",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "451227",
    "label": "巴马瑶族自治县",
    "value": "bamayaozuzizhixian",
    "zip_code": "547500",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "451228",
    "label": "都安瑶族自治县",
    "value": "duanyaozuzizhixian",
    "zip_code": "530700",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "451229",
    "label": "大化瑶族自治县",
    "value": "dahuayaozuzizhixian",
    "zip_code": "530800",
    "parent_code": "451200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "451300",
    "label": "来宾市",
    "value": "laibinshi",
    "zip_code": "546100",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "451302",
    "label": "兴宾区",
    "value": "xingbinqu",
    "zip_code": "546100",
    "parent_code": "451300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "451321",
    "label": "忻城县",
    "value": "xinchengxian",
    "zip_code": "546200",
    "parent_code": "451300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "451322",
    "label": "象州县",
    "value": "xiangzhouxian",
    "zip_code": "545800",
    "parent_code": "451300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "451323",
    "label": "武宣县",
    "value": "wuxuanxian",
    "zip_code": "545900",
    "parent_code": "451300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "451324",
    "label": "金秀瑶族自治县",
    "value": "jinxiuyaozuzizhixian",
    "zip_code": "545700",
    "parent_code": "451300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "451381",
    "label": "合山市",
    "value": "heshanshi",
    "zip_code": "546500",
    "parent_code": "451300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "451400",
    "label": "崇左市",
    "value": "chongzuoshi",
    "zip_code": "532200",
    "parent_code": "450000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "451402",
    "label": "江州区",
    "value": "jiangzhouqu",
    "zip_code": "532200",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "451421",
    "label": "扶绥县",
    "value": "fusuixian",
    "zip_code": "532100",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "451422",
    "label": "宁明县",
    "value": "ningmingxian",
    "zip_code": "532500",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "451423",
    "label": "龙州县",
    "value": "longzhouxian",
    "zip_code": "532400",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "451424",
    "label": "大新县",
    "value": "daxinxian",
    "zip_code": "532300",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "451425",
    "label": "天等县",
    "value": "tiandengxian",
    "zip_code": "532800",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "451481",
    "label": "凭祥市",
    "value": "pingxiangshi",
    "zip_code": "532600",
    "parent_code": "451400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "460000",
    "label": "海南省",
    "value": "hainansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "H"
  },
  {
    "code": "460100",
    "label": "海口市",
    "value": "haikoushi",
    "zip_code": "570100",
    "parent_code": "460000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "460105",
    "label": "秀英区",
    "value": "xiuyingqu",
    "zip_code": "570311",
    "parent_code": "460100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "460106",
    "label": "龙华区",
    "value": "longhuaqu",
    "zip_code": "570105",
    "parent_code": "460100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "460107",
    "label": "琼山区",
    "value": "qiongshanqu",
    "zip_code": "571100",
    "parent_code": "460100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "460108",
    "label": "美兰区",
    "value": "meilanqu",
    "zip_code": "570203",
    "parent_code": "460100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "460200",
    "label": "三亚市",
    "value": "sanyashi",
    "zip_code": "572000",
    "parent_code": "460000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "460202",
    "label": "海棠区",
    "value": "haitangqu",
    "zip_code": "572000",
    "parent_code": "460200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "460203",
    "label": "吉阳区",
    "value": "jiyangqu",
    "zip_code": "572000",
    "parent_code": "460200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "460204",
    "label": "天涯区",
    "value": "tianyaqu",
    "zip_code": "572000",
    "parent_code": "460200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "460205",
    "label": "崖州区",
    "value": "yazhouqu",
    "zip_code": "572000",
    "parent_code": "460200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "460300",
    "label": "三沙市",
    "value": "sanshashi",
    "zip_code": "0",
    "parent_code": "460000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "460321",
    "label": "西沙群岛",
    "value": "xishaqundao",
    "zip_code": "572000",
    "parent_code": "460300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "460322",
    "label": "南沙群岛",
    "value": "nanshaqundao",
    "zip_code": "572000",
    "parent_code": "460300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "460323",
    "label": "中沙群岛的岛礁及其海域",
    "value": "zhongshaqundaodedaojiaojiqihaiyu",
    "zip_code": "572000",
    "parent_code": "460300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "460400",
    "label": "儋州市",
    "value": "danzhoushi",
    "zip_code": "571700",
    "parent_code": "460000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "460401",
    "label": "那大镇",
    "value": "nadazhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "460402",
    "label": "和庆镇",
    "value": "heqingzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "460403",
    "label": "南丰镇",
    "value": "nanfengzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "460404",
    "label": "大成镇",
    "value": "dachengzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "460405",
    "label": "雅星镇",
    "value": "yaxingzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "460406",
    "label": "兰洋镇",
    "value": "lanyangzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "460407",
    "label": "光村镇",
    "value": "guangcunzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "460408",
    "label": "木棠镇",
    "value": "mutangzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "460409",
    "label": "海头镇",
    "value": "haitouzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "460410",
    "label": "峨蔓镇",
    "value": "emanzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "460411",
    "label": "三都镇",
    "value": "sanduzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "460412",
    "label": "王五镇",
    "value": "wangwuzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "460413",
    "label": "白马井镇",
    "value": "baimajingzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "460414",
    "label": "中和镇",
    "value": "zhonghezhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "460415",
    "label": "排浦镇",
    "value": "paipuzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "460416",
    "label": "东成镇",
    "value": "dongchengzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "460417",
    "label": "新州镇",
    "value": "xinzhouzhen",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "460418",
    "label": "国营西培农场",
    "value": "guoyingxipeinongchang",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "460419",
    "label": "国营西联农场",
    "value": "guoyingxiliannongchang",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "460420",
    "label": "国营蓝洋农场",
    "value": "guoyinglanyangnongchang",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "460421",
    "label": "国营八一农场",
    "value": "guoyingbayinongchang",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "460422",
    "label": "洋浦经济开发区",
    "value": "yangpujingjikaifaqu",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "460423",
    "label": "华南热作学院",
    "value": "huananrezuoxueyuan",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "460424",
    "label": "红岭农场",
    "value": "honglingnongchang",
    "zip_code": "571700",
    "parent_code": "460400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "469000",
    "label": "省直辖县级行政区划",
    "value": "shengzhixiaxianjixingzhengquhua",
    "zip_code": "0",
    "parent_code": "460000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "469001",
    "label": "五指山市",
    "value": "wuzhishanshi",
    "zip_code": "572200",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "469002",
    "label": "琼海市",
    "value": "qionghaishi",
    "zip_code": "571400",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "469005",
    "label": "文昌市",
    "value": "wenchangshi",
    "zip_code": "571300",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "469006",
    "label": "万宁市",
    "value": "wanningshi",
    "zip_code": "571500",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "469007",
    "label": "东方市",
    "value": "dongfangshi",
    "zip_code": "572600",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "469021",
    "label": "定安县",
    "value": "dinganxian",
    "zip_code": "571200",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "469022",
    "label": "屯昌县",
    "value": "tunchangxian",
    "zip_code": "571600",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "469023",
    "label": "澄迈县",
    "value": "chengmaixian",
    "zip_code": "571900",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "469024",
    "label": "临高县",
    "value": "lingaoxian",
    "zip_code": "571800",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "469025",
    "label": "白沙黎族自治县",
    "value": "baishalizuzizhixian",
    "zip_code": "572800",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "469026",
    "label": "昌江黎族自治县",
    "value": "changjianglizuzizhixian",
    "zip_code": "572700",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "469027",
    "label": "乐东黎族自治县",
    "value": "ledonglizuzizhixian",
    "zip_code": "572500",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "469028",
    "label": "陵水黎族自治县",
    "value": "lingshuilizuzizhixian",
    "zip_code": "572400",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "469029",
    "label": "保亭黎族苗族自治县",
    "value": "baotinglizumiaozuzizhixian",
    "zip_code": "572300",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "469030",
    "label": "琼中黎族苗族自治县",
    "value": "qiongzhonglizumiaozuzizhixian",
    "zip_code": "572900",
    "parent_code": "469000",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "500000",
    "label": "重庆市",
    "value": "chongqingshi",
    "zip_code": "400000",
    "type": 0,
    "first_letter": "C"
  },
  {
    "code": "500100",
    "label": "重庆市",
    "value": "chongqingshi",
    "zip_code": "400000",
    "parent_code": "500000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "500101",
    "label": "万州区",
    "value": "wanzhouqu",
    "zip_code": "404100",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "500102",
    "label": "涪陵区",
    "value": "fulingqu",
    "zip_code": "408000",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "500103",
    "label": "渝中区",
    "value": "yuzhongqu",
    "zip_code": "400010",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "500104",
    "label": "大渡口区",
    "value": "dadukouqu",
    "zip_code": "400080",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "500105",
    "label": "江北区",
    "value": "jiangbeiqu",
    "zip_code": "400020",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "500106",
    "label": "沙坪坝区",
    "value": "shapingbaqu",
    "zip_code": "400030",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "500107",
    "label": "九龙坡区",
    "value": "jiulongpoqu",
    "zip_code": "400050",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "500108",
    "label": "南岸区",
    "value": "nananqu",
    "zip_code": "400064",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "500109",
    "label": "北碚区",
    "value": "beibeiqu",
    "zip_code": "400700",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "500110",
    "label": "綦江区",
    "value": "qijiangqu",
    "zip_code": "400000",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "500111",
    "label": "大足区",
    "value": "dazuqu",
    "zip_code": "400000",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "500112",
    "label": "渝北区",
    "value": "yubeiqu",
    "zip_code": "401120",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "500113",
    "label": "巴南区",
    "value": "bananqu",
    "zip_code": "401320",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "500114",
    "label": "黔江区",
    "value": "qianjiangqu",
    "zip_code": "409700",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "500115",
    "label": "长寿区",
    "value": "changshouqu",
    "zip_code": "401220",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "500116",
    "label": "江津区",
    "value": "jiangjinqu",
    "zip_code": "402260",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "500117",
    "label": "合川区",
    "value": "hechuanqu",
    "zip_code": "401520",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "500118",
    "label": "永川区",
    "value": "yongchuanqu",
    "zip_code": "402160",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "500119",
    "label": "南川区",
    "value": "nanchuanqu",
    "zip_code": "408400",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "500120",
    "label": "璧山区",
    "value": "bishanqu",
    "zip_code": "408400",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "500151",
    "label": "铜梁区",
    "value": "tongliangqu",
    "zip_code": "408400",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "500152",
    "label": "潼南区",
    "value": "tongnanqu",
    "zip_code": "402660",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "500153",
    "label": "荣昌区",
    "value": "rongchangqu",
    "zip_code": "408400",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "500154",
    "label": "开州区",
    "value": "kaizhouqu",
    "zip_code": "408400",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "500155",
    "label": "梁平区",
    "value": "liangpingqu",
    "zip_code": "405200",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "500156",
    "label": "武隆区",
    "value": "wulongqu",
    "zip_code": "408500",
    "parent_code": "500100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "500200",
    "label": "县",
    "value": "xian",
    "zip_code": "0",
    "parent_code": "500000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "500229",
    "label": "城口县",
    "value": "chengkouxian",
    "zip_code": "405900",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "500230",
    "label": "丰都县",
    "value": "fengduxian",
    "zip_code": "408200",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "500231",
    "label": "垫江县",
    "value": "dianjiangxian",
    "zip_code": "408300",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "500233",
    "label": "忠县",
    "value": "zhongxian",
    "zip_code": "404300",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "500235",
    "label": "云阳县",
    "value": "yunyangxian",
    "zip_code": "404500",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "500236",
    "label": "奉节县",
    "value": "fengjiexian",
    "zip_code": "404600",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "500237",
    "label": "巫山县",
    "value": "wushanxian",
    "zip_code": "404700",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "500238",
    "label": "巫溪县",
    "value": "wuxixian",
    "zip_code": "405800",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "500240",
    "label": "石柱土家族自治县",
    "value": "shizhutujiazuzizhixian",
    "zip_code": "409100",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "500241",
    "label": "秀山土家族苗族自治县",
    "value": "xiushantujiazumiaozuzizhixian",
    "zip_code": "409900",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "500242",
    "label": "酉阳土家族苗族自治县",
    "value": "youyangtujiazumiaozuzizhixian",
    "zip_code": "409800",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "500243",
    "label": "彭水苗族土家族自治县",
    "value": "pengshuimiaozutujiazuzizhixian",
    "zip_code": "409600",
    "parent_code": "500200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "510000",
    "label": "四川省",
    "value": "sichuansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "S"
  },
  {
    "code": "510100",
    "label": "成都市",
    "value": "chengdushi",
    "zip_code": "610000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "510104",
    "label": "锦江区",
    "value": "jinjiangqu",
    "zip_code": "610021",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510105",
    "label": "青羊区",
    "value": "qingyangqu",
    "zip_code": "610031",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "510106",
    "label": "金牛区",
    "value": "jinniuqu",
    "zip_code": "610036",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510107",
    "label": "武侯区",
    "value": "wuhouqu",
    "zip_code": "610041",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "510108",
    "label": "成华区",
    "value": "chenghuaqu",
    "zip_code": "610066",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "510112",
    "label": "龙泉驿区",
    "value": "longquanyiqu",
    "zip_code": "610100",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "510113",
    "label": "青白江区",
    "value": "qingbaijiangqu",
    "zip_code": "610300",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "510114",
    "label": "新都区",
    "value": "xinduqu",
    "zip_code": "610500",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "510115",
    "label": "温江区",
    "value": "wenjiangqu",
    "zip_code": "611130",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "510116",
    "label": "双流区",
    "value": "shuangliuqu",
    "zip_code": "610200",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "510117",
    "label": "郫都区",
    "value": "piduqu",
    "zip_code": "611730",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "510121",
    "label": "金堂县",
    "value": "jintangxian",
    "zip_code": "610400",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510129",
    "label": "大邑县",
    "value": "dayixian",
    "zip_code": "611300",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "510131",
    "label": "蒲江县",
    "value": "pujiangxian",
    "zip_code": "611630",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "510132",
    "label": "新津县",
    "value": "xinjinxian",
    "zip_code": "611430",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "510181",
    "label": "都江堰市",
    "value": "dujiangyanshi",
    "zip_code": "611830",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "510182",
    "label": "彭州市",
    "value": "pengzhoushi",
    "zip_code": "611930",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "510183",
    "label": "邛崃市",
    "value": "qionglaishi",
    "zip_code": "611530",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "510184",
    "label": "崇州市",
    "value": "chongzhoushi",
    "zip_code": "611230",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "510185",
    "label": "简阳市",
    "value": "jianyangshi",
    "zip_code": "611230",
    "parent_code": "510100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510300",
    "label": "自贡市",
    "value": "zigongshi",
    "zip_code": "643000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "510302",
    "label": "自流井区",
    "value": "ziliujingqu",
    "zip_code": "643000",
    "parent_code": "510300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "510303",
    "label": "贡井区",
    "value": "gongjingqu",
    "zip_code": "643020",
    "parent_code": "510300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "510304",
    "label": "大安区",
    "value": "daanqu",
    "zip_code": "643010",
    "parent_code": "510300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "510311",
    "label": "沿滩区",
    "value": "yantanqu",
    "zip_code": "643030",
    "parent_code": "510300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "510321",
    "label": "荣县",
    "value": "rongxian",
    "zip_code": "643100",
    "parent_code": "510300",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "510322",
    "label": "富顺县",
    "value": "fushunxian",
    "zip_code": "643200",
    "parent_code": "510300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "510400",
    "label": "攀枝花市",
    "value": "panzhihuashi",
    "zip_code": "617000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "510402",
    "label": "东区",
    "value": "dongqu",
    "zip_code": "617067",
    "parent_code": "510400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "510403",
    "label": "西区",
    "value": "xiqu",
    "zip_code": "617068",
    "parent_code": "510400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "510411",
    "label": "仁和区",
    "value": "renhequ",
    "zip_code": "617061",
    "parent_code": "510400",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "510421",
    "label": "米易县",
    "value": "miyixian",
    "zip_code": "617200",
    "parent_code": "510400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "510422",
    "label": "盐边县",
    "value": "yanbianxian",
    "zip_code": "617100",
    "parent_code": "510400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "510500",
    "label": "泸州市",
    "value": "luzhoushi",
    "zip_code": "646000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "510502",
    "label": "江阳区",
    "value": "jiangyangqu",
    "zip_code": "646000",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510503",
    "label": "纳溪区",
    "value": "naxiqu",
    "zip_code": "646300",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "510504",
    "label": "龙马潭区",
    "value": "longmatanqu",
    "zip_code": "646000",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "510521",
    "label": "泸县",
    "value": "luxian",
    "zip_code": "646106",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "510522",
    "label": "合江县",
    "value": "hejiangxian",
    "zip_code": "646200",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "510524",
    "label": "叙永县",
    "value": "xuyongxian",
    "zip_code": "646400",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "510525",
    "label": "古蔺县",
    "value": "gulinxian",
    "zip_code": "646500",
    "parent_code": "510500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "510600",
    "label": "德阳市",
    "value": "deyangshi",
    "zip_code": "618000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "510603",
    "label": "旌阳区",
    "value": "jingyangqu",
    "zip_code": "618000",
    "parent_code": "510600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510604",
    "label": "罗江区",
    "value": "luojiangqu",
    "zip_code": "618500",
    "parent_code": "510600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "510623",
    "label": "中江县",
    "value": "zhongjiangxian",
    "zip_code": "618100",
    "parent_code": "510600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "510681",
    "label": "广汉市",
    "value": "guanghanshi",
    "zip_code": "618300",
    "parent_code": "510600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "510682",
    "label": "什邡市",
    "value": "shifangshi",
    "zip_code": "618300",
    "parent_code": "510600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "510683",
    "label": "绵竹市",
    "value": "mianzhushi",
    "zip_code": "618200",
    "parent_code": "510600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "510700",
    "label": "绵阳市",
    "value": "mianyangshi",
    "zip_code": "621000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "510703",
    "label": "涪城区",
    "value": "fuchengqu",
    "zip_code": "621000",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "510704",
    "label": "游仙区",
    "value": "youxianqu",
    "zip_code": "621022",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "510705",
    "label": "安州区",
    "value": "anzhouqu",
    "zip_code": "622650",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "510722",
    "label": "三台县",
    "value": "santaixian",
    "zip_code": "621100",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "510723",
    "label": "盐亭县",
    "value": "yantingxian",
    "zip_code": "621600",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "510725",
    "label": "梓潼县",
    "value": "zitongxian",
    "zip_code": "622150",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "510726",
    "label": "北川羌族自治县",
    "value": "beichuanqiangzuzizhixian",
    "zip_code": "622750",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "510727",
    "label": "平武县",
    "value": "pingwuxian",
    "zip_code": "622550",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "510781",
    "label": "江油市",
    "value": "jiangyoushi",
    "zip_code": "621700",
    "parent_code": "510700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510800",
    "label": "广元市",
    "value": "guangyuanshi",
    "zip_code": "628000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "510802",
    "label": "利州区",
    "value": "lizhouqu",
    "zip_code": "628017",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "510811",
    "label": "昭化区",
    "value": "zhaohuaqu",
    "zip_code": "628000",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "510812",
    "label": "朝天区",
    "value": "chaotianqu",
    "zip_code": "628017",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "510821",
    "label": "旺苍县",
    "value": "wangcangxian",
    "zip_code": "628200",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "510822",
    "label": "青川县",
    "value": "qingchuanxian",
    "zip_code": "628100",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "510823",
    "label": "剑阁县",
    "value": "jiangexian",
    "zip_code": "628300",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "510824",
    "label": "苍溪县",
    "value": "cangxixian",
    "zip_code": "628400",
    "parent_code": "510800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "510900",
    "label": "遂宁市",
    "value": "suiningshi",
    "zip_code": "629000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "510903",
    "label": "船山区",
    "value": "chuanshanqu",
    "zip_code": "629000",
    "parent_code": "510900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "510904",
    "label": "安居区",
    "value": "anjuqu",
    "zip_code": "629000",
    "parent_code": "510900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "510921",
    "label": "蓬溪县",
    "value": "pengxixian",
    "zip_code": "629100",
    "parent_code": "510900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "510922",
    "label": "射洪县",
    "value": "shehongxian",
    "zip_code": "629200",
    "parent_code": "510900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "510923",
    "label": "大英县",
    "value": "dayingxian",
    "zip_code": "629300",
    "parent_code": "510900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "511000",
    "label": "内江市",
    "value": "neijiangshi",
    "zip_code": "641000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "511002",
    "label": "市中区",
    "value": "shizhongqu",
    "zip_code": "614000",
    "parent_code": "511000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "511011",
    "label": "东兴区",
    "value": "dongxingqu",
    "zip_code": "641100",
    "parent_code": "511000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "511024",
    "label": "威远县",
    "value": "weiyuanxian",
    "zip_code": "642450",
    "parent_code": "511000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "511025",
    "label": "资中县",
    "value": "zizhongxian",
    "zip_code": "641200",
    "parent_code": "511000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "511083",
    "label": "隆昌市",
    "value": "longchangshi",
    "zip_code": "642150",
    "parent_code": "511000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "511100",
    "label": "乐山市",
    "value": "leshanshi",
    "zip_code": "614000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "511102",
    "label": "市中区",
    "value": "shizhongqu",
    "zip_code": "614000",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "511111",
    "label": "沙湾区",
    "value": "shawanqu",
    "zip_code": "614900",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "511112",
    "label": "五通桥区",
    "value": "wutongqiaoqu",
    "zip_code": "614800",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "511113",
    "label": "金口河区",
    "value": "jinkouhequ",
    "zip_code": "614700",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "511123",
    "label": "犍为县",
    "value": "qianweixian",
    "zip_code": "614400",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "511124",
    "label": "井研县",
    "value": "jingyanxian",
    "zip_code": "613100",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "511126",
    "label": "夹江县",
    "value": "jiajiangxian",
    "zip_code": "614100",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "511129",
    "label": "沐川县",
    "value": "muchuanxian",
    "zip_code": "614500",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "511132",
    "label": "峨边彝族自治县",
    "value": "ebianyizuzizhixian",
    "zip_code": "614300",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "511133",
    "label": "马边彝族自治县",
    "value": "mabianyizuzizhixian",
    "zip_code": "614600",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "511181",
    "label": "峨眉山市",
    "value": "emeishanshi",
    "zip_code": "614200",
    "parent_code": "511100",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "511300",
    "label": "南充市",
    "value": "nanchongshi",
    "zip_code": "637000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "511302",
    "label": "顺庆区",
    "value": "shunqingqu",
    "zip_code": "637000",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "511303",
    "label": "高坪区",
    "value": "gaopingqu",
    "zip_code": "637100",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "511304",
    "label": "嘉陵区",
    "value": "jialingqu",
    "zip_code": "637100",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "511321",
    "label": "南部县",
    "value": "nanbuxian",
    "zip_code": "637300",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "511322",
    "label": "营山县",
    "value": "yingshanxian",
    "zip_code": "637700",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "511323",
    "label": "蓬安县",
    "value": "penganxian",
    "zip_code": "637800",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "511324",
    "label": "仪陇县",
    "value": "yilongxian",
    "zip_code": "637600",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "511325",
    "label": "西充县",
    "value": "xichongxian",
    "zip_code": "637200",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "511381",
    "label": "阆中市",
    "value": "langzhongshi",
    "zip_code": "637400",
    "parent_code": "511300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "511400",
    "label": "眉山市",
    "value": "meishanshi",
    "zip_code": "620000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "511402",
    "label": "东坡区",
    "value": "dongpoqu",
    "zip_code": "620010",
    "parent_code": "511400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "511403",
    "label": "彭山区",
    "value": "pengshanqu",
    "zip_code": "620860",
    "parent_code": "511400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "511421",
    "label": "仁寿县",
    "value": "renshouxian",
    "zip_code": "620500",
    "parent_code": "511400",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "511423",
    "label": "洪雅县",
    "value": "hongyaxian",
    "zip_code": "620360",
    "parent_code": "511400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "511424",
    "label": "丹棱县",
    "value": "danlingxian",
    "zip_code": "620200",
    "parent_code": "511400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "511425",
    "label": "青神县",
    "value": "qingshenxian",
    "zip_code": "620460",
    "parent_code": "511400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "511500",
    "label": "宜宾市",
    "value": "yibinshi",
    "zip_code": "644000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "511502",
    "label": "翠屏区",
    "value": "cuipingqu",
    "zip_code": "644000",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "511503",
    "label": "南溪区",
    "value": "nanxiqu",
    "zip_code": "0",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "511521",
    "label": "宜宾县",
    "value": "yibinxian",
    "zip_code": "644600",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "511523",
    "label": "江安县",
    "value": "jianganxian",
    "zip_code": "644200",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "511524",
    "label": "长宁县",
    "value": "changningxian",
    "zip_code": "644300",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "511525",
    "label": "高县",
    "value": "gaoxian",
    "zip_code": "645150",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "511526",
    "label": "珙县",
    "value": "gongxian",
    "zip_code": "644500",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "511527",
    "label": "筠连县",
    "value": "junlianxian",
    "zip_code": "645250",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "511528",
    "label": "兴文县",
    "value": "xingwenxian",
    "zip_code": "644400",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "511529",
    "label": "屏山县",
    "value": "pingshanxian",
    "zip_code": "645350",
    "parent_code": "511500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "511600",
    "label": "广安市",
    "value": "guanganshi",
    "zip_code": "638500",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "511602",
    "label": "广安区",
    "value": "guanganqu",
    "zip_code": "638000",
    "parent_code": "511600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "511603",
    "label": "前锋区",
    "value": "qianfengqu",
    "zip_code": "638019",
    "parent_code": "511600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "511621",
    "label": "岳池县",
    "value": "yuechixian",
    "zip_code": "638300",
    "parent_code": "511600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "511622",
    "label": "武胜县",
    "value": "wushengxian",
    "zip_code": "638400",
    "parent_code": "511600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "511623",
    "label": "邻水县",
    "value": "linshuixian",
    "zip_code": "638500",
    "parent_code": "511600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "511681",
    "label": "华蓥市",
    "value": "huayingshi",
    "zip_code": "638600",
    "parent_code": "511600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "511700",
    "label": "达州市",
    "value": "dazhoushi",
    "zip_code": "635000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "511702",
    "label": "通川区",
    "value": "tongchuanqu",
    "zip_code": "635000",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "511703",
    "label": "达川区",
    "value": "dachuanqu",
    "zip_code": "635000",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "511722",
    "label": "宣汉县",
    "value": "xuanhanxian",
    "zip_code": "636150",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "511723",
    "label": "开江县",
    "value": "kaijiangxian",
    "zip_code": "636250",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "511724",
    "label": "大竹县",
    "value": "dazhuxian",
    "zip_code": "635100",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "511725",
    "label": "渠县",
    "value": "quxian",
    "zip_code": "635200",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "511781",
    "label": "万源市",
    "value": "wanyuanshi",
    "zip_code": "636350",
    "parent_code": "511700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "511800",
    "label": "雅安市",
    "value": "yaanshi",
    "zip_code": "625000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "511802",
    "label": "雨城区",
    "value": "yuchengqu",
    "zip_code": "625000",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "511803",
    "label": "名山区",
    "value": "mingshanqu",
    "zip_code": "0",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "511822",
    "label": "荥经县",
    "value": "xingjingxian",
    "zip_code": "625200",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "511823",
    "label": "汉源县",
    "value": "hanyuanxian",
    "zip_code": "625300",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "511824",
    "label": "石棉县",
    "value": "shimianxian",
    "zip_code": "625400",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "511825",
    "label": "天全县",
    "value": "tianquanxian",
    "zip_code": "625500",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "511826",
    "label": "芦山县",
    "value": "lushanxian",
    "zip_code": "625600",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "511827",
    "label": "宝兴县",
    "value": "baoxingxian",
    "zip_code": "625700",
    "parent_code": "511800",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "511900",
    "label": "巴中市",
    "value": "bazhongshi",
    "zip_code": "636600",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "511902",
    "label": "巴州区",
    "value": "bazhouqu",
    "zip_code": "636001",
    "parent_code": "511900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "511903",
    "label": "恩阳区",
    "value": "enyangqu",
    "zip_code": "636001",
    "parent_code": "511900",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "511921",
    "label": "通江县",
    "value": "tongjiangxian",
    "zip_code": "636700",
    "parent_code": "511900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "511922",
    "label": "南江县",
    "value": "nanjiangxian",
    "zip_code": "636600",
    "parent_code": "511900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "511923",
    "label": "平昌县",
    "value": "pingchangxian",
    "zip_code": "636400",
    "parent_code": "511900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "512000",
    "label": "资阳市",
    "value": "ziyangshi",
    "zip_code": "641300",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "512002",
    "label": "雁江区",
    "value": "yanjiangqu",
    "zip_code": "641300",
    "parent_code": "512000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "512021",
    "label": "安岳县",
    "value": "anyuexian",
    "zip_code": "642350",
    "parent_code": "512000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "512022",
    "label": "乐至县",
    "value": "lezhixian",
    "zip_code": "641500",
    "parent_code": "512000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "513200",
    "label": "阿坝藏族羌族自治州",
    "value": "abazangzuqiangzuzizhizhou",
    "zip_code": "624000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "513201",
    "label": "马尔康市",
    "value": "maerkangshi",
    "zip_code": "624000",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "513221",
    "label": "汶川县",
    "value": "wenchuanxian",
    "zip_code": "623000",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "513222",
    "label": "理县",
    "value": "lixian",
    "zip_code": "623100",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "513223",
    "label": "茂县",
    "value": "maoxian",
    "zip_code": "623200",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "513224",
    "label": "松潘县",
    "value": "songpanxian",
    "zip_code": "623300",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "513225",
    "label": "九寨沟县",
    "value": "jiuzhaigouxian",
    "zip_code": "623400",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "513226",
    "label": "金川县",
    "value": "jinchuanxian",
    "zip_code": "624100",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "513227",
    "label": "小金县",
    "value": "xiaojinxian",
    "zip_code": "624200",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "513228",
    "label": "黑水县",
    "value": "heishuixian",
    "zip_code": "623500",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "513230",
    "label": "壤塘县",
    "value": "rangtangxian",
    "zip_code": "624300",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "513231",
    "label": "阿坝县",
    "value": "abaxian",
    "zip_code": "624600",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "513232",
    "label": "若尔盖县",
    "value": "ruoergaixian",
    "zip_code": "624500",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "513233",
    "label": "红原县",
    "value": "hongyuanxian",
    "zip_code": "624400",
    "parent_code": "513200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "513300",
    "label": "甘孜藏族自治州",
    "value": "ganzizangzuzizhizhou",
    "zip_code": "626000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "513301",
    "label": "康定市",
    "value": "kangdingshi",
    "zip_code": "626000",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "513322",
    "label": "泸定县",
    "value": "ludingxian",
    "zip_code": "626100",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "513323",
    "label": "丹巴县",
    "value": "danbaxian",
    "zip_code": "626300",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "513324",
    "label": "九龙县",
    "value": "jiulongxian",
    "zip_code": "626200",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "513325",
    "label": "雅江县",
    "value": "yajiangxian",
    "zip_code": "627450",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "513326",
    "label": "道孚县",
    "value": "daofuxian",
    "zip_code": "626400",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "513327",
    "label": "炉霍县",
    "value": "luhuoxian",
    "zip_code": "626500",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "513328",
    "label": "甘孜县",
    "value": "ganzixian",
    "zip_code": "626700",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "513329",
    "label": "新龙县",
    "value": "xinlongxian",
    "zip_code": "626800",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "513330",
    "label": "德格县",
    "value": "degexian",
    "zip_code": "627250",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "513331",
    "label": "白玉县",
    "value": "baiyuxian",
    "zip_code": "627150",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "513332",
    "label": "石渠县",
    "value": "shiquxian",
    "zip_code": "627350",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "513333",
    "label": "色达县",
    "value": "sedaxian",
    "zip_code": "626600",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "513334",
    "label": "理塘县",
    "value": "litangxian",
    "zip_code": "627550",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "513335",
    "label": "巴塘县",
    "value": "batangxian",
    "zip_code": "627650",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "513336",
    "label": "乡城县",
    "value": "xiangchengxian",
    "zip_code": "627850",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "513337",
    "label": "稻城县",
    "value": "daochengxian",
    "zip_code": "627750",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "513338",
    "label": "得荣县",
    "value": "derongxian",
    "zip_code": "627950",
    "parent_code": "513300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "513400",
    "label": "凉山彝族自治州",
    "value": "liangshanyizuzizhizhou",
    "zip_code": "615000",
    "parent_code": "510000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "513401",
    "label": "西昌市",
    "value": "xichangshi",
    "zip_code": "615000",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "513402",
    "label": "会理市",
    "value": "huilishi",
    "zip_code": "615100",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "513422",
    "label": "木里藏族自治县",
    "value": "mulizangzuzizhixian",
    "zip_code": "615800",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "513423",
    "label": "盐源县",
    "value": "yanyuanxian",
    "zip_code": "615700",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "513424",
    "label": "德昌县",
    "value": "dechangxian",
    "zip_code": "615500",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "513426",
    "label": "会东县",
    "value": "huidongxian",
    "zip_code": "615200",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "513427",
    "label": "宁南县",
    "value": "ningnanxian",
    "zip_code": "615400",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "513428",
    "label": "普格县",
    "value": "pugexian",
    "zip_code": "615300",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "513429",
    "label": "布拖县",
    "value": "butuoxian",
    "zip_code": "615350",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "513430",
    "label": "金阳县",
    "value": "jinyangxian",
    "zip_code": "616250",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "513431",
    "label": "昭觉县",
    "value": "zhaojuexian",
    "zip_code": "616150",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "513432",
    "label": "喜德县",
    "value": "xidexian",
    "zip_code": "616750",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "513433",
    "label": "冕宁县",
    "value": "mianningxian",
    "zip_code": "615600",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "513434",
    "label": "越西县",
    "value": "yuexixian",
    "zip_code": "616650",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "513435",
    "label": "甘洛县",
    "value": "ganluoxian",
    "zip_code": "616850",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "513436",
    "label": "美姑县",
    "value": "meiguxian",
    "zip_code": "616450",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "513437",
    "label": "雷波县",
    "value": "leiboxian",
    "zip_code": "616550",
    "parent_code": "513400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "520000",
    "label": "贵州省",
    "value": "guizhousheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "G"
  },
  {
    "code": "520100",
    "label": "贵阳市",
    "value": "guiyangshi",
    "zip_code": "550000",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "520102",
    "label": "南明区",
    "value": "nanmingqu",
    "zip_code": "550001",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "520103",
    "label": "云岩区",
    "value": "yunyanqu",
    "zip_code": "550001",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "520111",
    "label": "花溪区",
    "value": "huaxiqu",
    "zip_code": "550025",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "520112",
    "label": "乌当区",
    "value": "wudangqu",
    "zip_code": "550018",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "520113",
    "label": "白云区",
    "value": "baiyunqu",
    "zip_code": "550014",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "520115",
    "label": "观山湖区",
    "value": "guanshanhuqu",
    "zip_code": "550009",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "520121",
    "label": "开阳县",
    "value": "kaiyangxian",
    "zip_code": "550300",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "520122",
    "label": "息烽县",
    "value": "xifengxian",
    "zip_code": "551100",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "520123",
    "label": "修文县",
    "value": "xiuwenxian",
    "zip_code": "550200",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "520181",
    "label": "清镇市",
    "value": "qingzhenshi",
    "zip_code": "551400",
    "parent_code": "520100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "520200",
    "label": "六盘水市",
    "value": "liupanshuishi",
    "zip_code": "553000",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "520201",
    "label": "钟山区",
    "value": "zhongshanqu",
    "zip_code": "553000",
    "parent_code": "520200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "520203",
    "label": "六枝特区",
    "value": "liuzhitequ",
    "zip_code": "553400",
    "parent_code": "520200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "520221",
    "label": "水城县",
    "value": "shuichengxian",
    "zip_code": "553000",
    "parent_code": "520200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "520281",
    "label": "盘州市",
    "value": "panzhoushi",
    "zip_code": "561601",
    "parent_code": "520200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "520300",
    "label": "遵义市",
    "value": "zunyishi",
    "zip_code": "563000",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "520302",
    "label": "红花岗区",
    "value": "honghuagangqu",
    "zip_code": "563000",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "520303",
    "label": "汇川区",
    "value": "huichuanqu",
    "zip_code": "563000",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "520304",
    "label": "播州区",
    "value": "bozhouqu",
    "zip_code": "563000",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "520322",
    "label": "桐梓县",
    "value": "tongzixian",
    "zip_code": "563200",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "520323",
    "label": "绥阳县",
    "value": "suiyangxian",
    "zip_code": "563300",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "520324",
    "label": "正安县",
    "value": "zhenganxian",
    "zip_code": "563400",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "520325",
    "label": "道真仡佬族苗族自治县",
    "value": "daozhengelaozumiaozuzizhixian",
    "zip_code": "563500",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "520326",
    "label": "务川仡佬族苗族自治县",
    "value": "wuchuangelaozumiaozuzizhixian",
    "zip_code": "564300",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "520327",
    "label": "凤冈县",
    "value": "fenggangxian",
    "zip_code": "564200",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "520328",
    "label": "湄潭县",
    "value": "meitanxian",
    "zip_code": "564100",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "520329",
    "label": "余庆县",
    "value": "yuqingxian",
    "zip_code": "564400",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "520330",
    "label": "习水县",
    "value": "xishuixian",
    "zip_code": "564600",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "520381",
    "label": "赤水市",
    "value": "chishuishi",
    "zip_code": "564700",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "520382",
    "label": "仁怀市",
    "value": "renhuaishi",
    "zip_code": "564500",
    "parent_code": "520300",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "520400",
    "label": "安顺市",
    "value": "anshunshi",
    "zip_code": "561000",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "520402",
    "label": "西秀区",
    "value": "xixiuqu",
    "zip_code": "561000",
    "parent_code": "520400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "520403",
    "label": "平坝区",
    "value": "pingbaqu",
    "zip_code": "561100",
    "parent_code": "520400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "520422",
    "label": "普定县",
    "value": "pudingxian",
    "zip_code": "562100",
    "parent_code": "520400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "520423",
    "label": "镇宁布依族苗族自治县",
    "value": "zhenningbuyizumiaozuzizhixian",
    "zip_code": "561200",
    "parent_code": "520400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "520424",
    "label": "关岭布依族苗族自治县",
    "value": "guanlingbuyizumiaozuzizhixian",
    "zip_code": "561300",
    "parent_code": "520400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "520425",
    "label": "紫云苗族布依族自治县",
    "value": "ziyunmiaozubuyizuzizhixian",
    "zip_code": "550800",
    "parent_code": "520400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "520500",
    "label": "毕节市",
    "value": "bijieshi",
    "zip_code": "551700",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "520502",
    "label": "七星关区",
    "value": "qixingguanqu",
    "zip_code": "551700",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "520521",
    "label": "大方县",
    "value": "dafangxian",
    "zip_code": "551600",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "520523",
    "label": "金沙县",
    "value": "jinshaxian",
    "zip_code": "551800",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "520524",
    "label": "织金县",
    "value": "zhijinxian",
    "zip_code": "552100",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "520525",
    "label": "纳雍县",
    "value": "nayongxian",
    "zip_code": "553300",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "520526",
    "label": "威宁彝族回族苗族自治县",
    "value": "weiningyizuhuizumiaozuzizhixian",
    "zip_code": "553100",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "520527",
    "label": "赫章县",
    "value": "hezhangxian",
    "zip_code": "553200",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "520581",
    "label": "黔西市",
    "value": "qianxishi",
    "zip_code": "551500",
    "parent_code": "520500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "520600",
    "label": "铜仁市",
    "value": "tongrenshi",
    "zip_code": "554300",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "520602",
    "label": "碧江区",
    "value": "bijiangqu",
    "zip_code": "554300",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "520603",
    "label": "万山区",
    "value": "wanshanqu",
    "zip_code": "554300",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "520621",
    "label": "江口县",
    "value": "jiangkouxian",
    "zip_code": "554400",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "520622",
    "label": "玉屏侗族自治县",
    "value": "yupingtongzuzizhixian",
    "zip_code": "554004",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "520623",
    "label": "石阡县",
    "value": "shiqianxian",
    "zip_code": "555100",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "520624",
    "label": "思南县",
    "value": "sinanxian",
    "zip_code": "565100",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "520625",
    "label": "印江土家族苗族自治县",
    "value": "yinjiangtujiazumiaozuzizhixian",
    "zip_code": "555200",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "520626",
    "label": "德江县",
    "value": "dejiangxian",
    "zip_code": "565200",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "520627",
    "label": "沿河土家族自治县",
    "value": "yanhetujiazuzizhixian",
    "zip_code": "565300",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "520628",
    "label": "松桃苗族自治县",
    "value": "songtaomiaozuzizhixian",
    "zip_code": "554100",
    "parent_code": "520600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "522300",
    "label": "黔西南布依族苗族自治州",
    "value": "qianxinanbuyizumiaozuzizhizhou",
    "zip_code": "562400",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "522301",
    "label": "兴义市",
    "value": "xingyishi",
    "zip_code": "562400",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "522322",
    "label": "兴仁县",
    "value": "xingrenxian",
    "zip_code": "562300",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "522323",
    "label": "普安县",
    "value": "puanxian",
    "zip_code": "561500",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "522324",
    "label": "晴隆县",
    "value": "qinglongxian",
    "zip_code": "561400",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "522325",
    "label": "贞丰县",
    "value": "zhenfengxian",
    "zip_code": "562200",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "522326",
    "label": "望谟县",
    "value": "wangmoxian",
    "zip_code": "552300",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "522327",
    "label": "册亨县",
    "value": "cehengxian",
    "zip_code": "552200",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "522328",
    "label": "安龙县",
    "value": "anlongxian",
    "zip_code": "552400",
    "parent_code": "522300",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "522600",
    "label": "黔东南苗族侗族自治州",
    "value": "qiandongnanmiaozutongzuzizhizhou",
    "zip_code": "556000",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "522601",
    "label": "凯里市",
    "value": "kailishi",
    "zip_code": "556000",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "522622",
    "label": "黄平县",
    "value": "huangpingxian",
    "zip_code": "556100",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "522623",
    "label": "施秉县",
    "value": "shibingxian",
    "zip_code": "556200",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "522624",
    "label": "三穗县",
    "value": "sansuixian",
    "zip_code": "556500",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "522625",
    "label": "镇远县",
    "value": "zhenyuanxian",
    "zip_code": "557700",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "522626",
    "label": "岑巩县",
    "value": "cengongxian",
    "zip_code": "557800",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "522627",
    "label": "天柱县",
    "value": "tianzhuxian",
    "zip_code": "556600",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "522628",
    "label": "锦屏县",
    "value": "jinpingxian",
    "zip_code": "556700",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "522629",
    "label": "剑河县",
    "value": "jianhexian",
    "zip_code": "556400",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "522630",
    "label": "台江县",
    "value": "taijiangxian",
    "zip_code": "556300",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "522631",
    "label": "黎平县",
    "value": "lipingxian",
    "zip_code": "557300",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "522632",
    "label": "榕江县",
    "value": "rongjiangxian",
    "zip_code": "557200",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "522633",
    "label": "从江县",
    "value": "congjiangxian",
    "zip_code": "557400",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "522634",
    "label": "雷山县",
    "value": "leishanxian",
    "zip_code": "557100",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "522635",
    "label": "麻江县",
    "value": "majiangxian",
    "zip_code": "557600",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "522636",
    "label": "丹寨县",
    "value": "danzhaixian",
    "zip_code": "557500",
    "parent_code": "522600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "522700",
    "label": "黔南布依族苗族自治州",
    "value": "qiannanbuyizumiaozuzizhizhou",
    "zip_code": "558000",
    "parent_code": "520000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "522701",
    "label": "都匀市",
    "value": "duyunshi",
    "zip_code": "558000",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "522702",
    "label": "福泉市",
    "value": "fuquanshi",
    "zip_code": "550500",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "522722",
    "label": "荔波县",
    "value": "liboxian",
    "zip_code": "558400",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "522723",
    "label": "贵定县",
    "value": "guidingxian",
    "zip_code": "551300",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "522725",
    "label": "瓮安县",
    "value": "wenganxian",
    "zip_code": "550400",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "522726",
    "label": "独山县",
    "value": "dushanxian",
    "zip_code": "558200",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "522727",
    "label": "平塘县",
    "value": "pingtangxian",
    "zip_code": "558300",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "522728",
    "label": "罗甸县",
    "value": "luodianxian",
    "zip_code": "550100",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "522729",
    "label": "长顺县",
    "value": "changshunxian",
    "zip_code": "550700",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "522730",
    "label": "龙里县",
    "value": "longlixian",
    "zip_code": "551200",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "522731",
    "label": "惠水县",
    "value": "huishuixian",
    "zip_code": "550600",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "522732",
    "label": "三都水族自治县",
    "value": "sandushuizuzizhixian",
    "zip_code": "558100",
    "parent_code": "522700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530000",
    "label": "云南省",
    "value": "yunnansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "Y"
  },
  {
    "code": "530100",
    "label": "昆明市",
    "value": "kunmingshi",
    "zip_code": "650000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "K"
  },
  {
    "code": "530102",
    "label": "五华区",
    "value": "wuhuaqu",
    "zip_code": "650032",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "530103",
    "label": "盘龙区",
    "value": "panlongqu",
    "zip_code": "650051",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "530111",
    "label": "官渡区",
    "value": "guanduqu",
    "zip_code": "650217",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "530112",
    "label": "西山区",
    "value": "xishanqu",
    "zip_code": "650100",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "530113",
    "label": "东川区",
    "value": "dongchuanqu",
    "zip_code": "654100",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "530114",
    "label": "呈贡区",
    "value": "chenggongqu",
    "zip_code": "650000",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "530115",
    "label": "晋宁区",
    "value": "jinningqu",
    "zip_code": "650600",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "530124",
    "label": "富民县",
    "value": "fuminxian",
    "zip_code": "650400",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "530125",
    "label": "宜良县",
    "value": "yiliangxian",
    "zip_code": "652100",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530126",
    "label": "石林彝族自治县",
    "value": "shilinyizuzizhixian",
    "zip_code": "652200",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530127",
    "label": "嵩明县",
    "value": "songmingxian",
    "zip_code": "651700",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530128",
    "label": "禄劝彝族苗族自治县",
    "value": "luquanyizumiaozuzizhixian",
    "zip_code": "651500",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530129",
    "label": "寻甸回族彝族自治县",
    "value": "xundianhuizuyizuzizhixian",
    "zip_code": "655200",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "530181",
    "label": "安宁市",
    "value": "anningshi",
    "zip_code": "650300",
    "parent_code": "530100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "530300",
    "label": "曲靖市",
    "value": "qujingshi",
    "zip_code": "655000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "530302",
    "label": "麒麟区",
    "value": "qilinqu",
    "zip_code": "655000",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "530303",
    "label": "沾益区",
    "value": "zhanyiqu",
    "zip_code": "655331",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "530321",
    "label": "马龙县",
    "value": "malongxian",
    "zip_code": "655100",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "530322",
    "label": "陆良县",
    "value": "luliangxian",
    "zip_code": "655600",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530323",
    "label": "师宗县",
    "value": "shizongxian",
    "zip_code": "655700",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530324",
    "label": "罗平县",
    "value": "luopingxian",
    "zip_code": "655800",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530325",
    "label": "富源县",
    "value": "fuyuanxian",
    "zip_code": "655500",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "530326",
    "label": "会泽县",
    "value": "huizexian",
    "zip_code": "654200",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "530381",
    "label": "宣威市",
    "value": "xuanweishi",
    "zip_code": "655400",
    "parent_code": "530300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "530400",
    "label": "玉溪市",
    "value": "yuxishi",
    "zip_code": "653100",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "530402",
    "label": "红塔区",
    "value": "hongtaqu",
    "zip_code": "653100",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "530403",
    "label": "江川区",
    "value": "jiangchuanqu",
    "zip_code": "652600",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "530422",
    "label": "澄江县",
    "value": "chengjiangxian",
    "zip_code": "652500",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "530423",
    "label": "通海县",
    "value": "tonghaixian",
    "zip_code": "652700",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "530424",
    "label": "华宁县",
    "value": "huaningxian",
    "zip_code": "652800",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "530425",
    "label": "易门县",
    "value": "yimenxian",
    "zip_code": "651100",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530426",
    "label": "峨山彝族自治县",
    "value": "eshanyizuzizhixian",
    "zip_code": "653200",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "530427",
    "label": "新平彝族傣族自治县",
    "value": "xinpingyizudaizuzizhixian",
    "zip_code": "653400",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "530428",
    "label": "元江哈尼族彝族傣族自治县",
    "value": "yuanjianghanizuyizudaizuzizhixian",
    "zip_code": "653300",
    "parent_code": "530400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530500",
    "label": "保山市",
    "value": "baoshanshi",
    "zip_code": "678000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "530502",
    "label": "隆阳区",
    "value": "longyangqu",
    "zip_code": "678000",
    "parent_code": "530500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530521",
    "label": "施甸县",
    "value": "shidianxian",
    "zip_code": "678200",
    "parent_code": "530500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530523",
    "label": "龙陵县",
    "value": "longlingxian",
    "zip_code": "678300",
    "parent_code": "530500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530524",
    "label": "昌宁县",
    "value": "changningxian",
    "zip_code": "678100",
    "parent_code": "530500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "530581",
    "label": "腾冲市",
    "value": "tengchongshi",
    "zip_code": "679100",
    "parent_code": "530500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "530600",
    "label": "昭通市",
    "value": "zhaotongshi",
    "zip_code": "657000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "530602",
    "label": "昭阳区",
    "value": "zhaoyangqu",
    "zip_code": "657000",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "530621",
    "label": "鲁甸县",
    "value": "ludianxian",
    "zip_code": "657100",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530622",
    "label": "巧家县",
    "value": "qiaojiaxian",
    "zip_code": "654600",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "530623",
    "label": "盐津县",
    "value": "yanjinxian",
    "zip_code": "657500",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530624",
    "label": "大关县",
    "value": "daguanxian",
    "zip_code": "657400",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "530625",
    "label": "永善县",
    "value": "yongshanxian",
    "zip_code": "657300",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530626",
    "label": "绥江县",
    "value": "suijiangxian",
    "zip_code": "657700",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530627",
    "label": "镇雄县",
    "value": "zhenxiongxian",
    "zip_code": "657200",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "530628",
    "label": "彝良县",
    "value": "yiliangxian",
    "zip_code": "657600",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530629",
    "label": "威信县",
    "value": "weixinxian",
    "zip_code": "657900",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "530630",
    "label": "水富县",
    "value": "shuifuxian",
    "zip_code": "657800",
    "parent_code": "530600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530700",
    "label": "丽江市",
    "value": "lijiangshi",
    "zip_code": "674100",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "530702",
    "label": "古城区",
    "value": "guchengqu",
    "zip_code": "674100",
    "parent_code": "530700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "530721",
    "label": "玉龙纳西族自治县",
    "value": "yulongnaxizuzizhixian",
    "zip_code": "674100",
    "parent_code": "530700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530722",
    "label": "永胜县",
    "value": "yongshengxian",
    "zip_code": "674200",
    "parent_code": "530700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530723",
    "label": "华坪县",
    "value": "huapingxian",
    "zip_code": "674800",
    "parent_code": "530700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "530724",
    "label": "宁蒗彝族自治县",
    "value": "ninglangyizuzizhixian",
    "zip_code": "674300",
    "parent_code": "530700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "530800",
    "label": "普洱市",
    "value": "puershi",
    "zip_code": "0",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "530802",
    "label": "思茅区",
    "value": "simaoqu",
    "zip_code": "665000",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530821",
    "label": "宁洱哈尼族彝族自治县",
    "value": "ningerhanizuyizuzizhixian",
    "zip_code": "665100",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "530822",
    "label": "墨江哈尼族自治县",
    "value": "mojianghanizuzizhixian",
    "zip_code": "654800",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "530823",
    "label": "景东彝族自治县",
    "value": "jingdongyizuzizhixian",
    "zip_code": "676200",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "530824",
    "label": "景谷傣族彝族自治县",
    "value": "jinggudaizuyizuzizhixian",
    "zip_code": "666400",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "530825",
    "label": "镇沅彝族哈尼族拉祜族自治县",
    "value": "zhenyuanyizuhanizulahuzuzizhixian",
    "zip_code": "666500",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "530826",
    "label": "江城哈尼族彝族自治县",
    "value": "jiangchenghanizuyizuzizhixian",
    "zip_code": "665900",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "530827",
    "label": "孟连傣族拉祜族佤族自治县",
    "value": "mengliandaizulahuzuwazuzizhixian",
    "zip_code": "665800",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "530828",
    "label": "澜沧拉祜族自治县",
    "value": "lancanglahuzuzizhixian",
    "zip_code": "665600",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530829",
    "label": "西盟佤族自治县",
    "value": "ximengwazuzizhixian",
    "zip_code": "665700",
    "parent_code": "530800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "530900",
    "label": "临沧市",
    "value": "lincangshi",
    "zip_code": "677000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "530902",
    "label": "临翔区",
    "value": "linxiangqu",
    "zip_code": "677000",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "530921",
    "label": "凤庆县",
    "value": "fengqingxian",
    "zip_code": "675900",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "530922",
    "label": "云县",
    "value": "yunxian",
    "zip_code": "675800",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530923",
    "label": "永德县",
    "value": "yongdexian",
    "zip_code": "677600",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "530924",
    "label": "镇康县",
    "value": "zhenkangxian",
    "zip_code": "677704",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "530925",
    "label": "双江拉祜族佤族布朗族傣族自治县",
    "value": "shuangjianglahuzuwazubulangzudaizuzizhixian",
    "zip_code": "677300",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "530926",
    "label": "耿马傣族佤族自治县",
    "value": "gengmadaizuwazuzizhixian",
    "zip_code": "677500",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "530927",
    "label": "沧源佤族自治县",
    "value": "cangyuanwazuzizhixian",
    "zip_code": "677400",
    "parent_code": "530900",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "532300",
    "label": "楚雄彝族自治州",
    "value": "chuxiongyizuzizhizhou",
    "zip_code": "675000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "532301",
    "label": "楚雄市",
    "value": "chuxiongshi",
    "zip_code": "675000",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "532302",
    "label": "禄丰市",
    "value": "lufengshi",
    "zip_code": "651200",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "532322",
    "label": "双柏县",
    "value": "shuangbaixian",
    "zip_code": "675100",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "532323",
    "label": "牟定县",
    "value": "moudingxian",
    "zip_code": "675500",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532324",
    "label": "南华县",
    "value": "nanhuaxian",
    "zip_code": "675200",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "532325",
    "label": "姚安县",
    "value": "yaoanxian",
    "zip_code": "675300",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532326",
    "label": "大姚县",
    "value": "dayaoxian",
    "zip_code": "675400",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "532327",
    "label": "永仁县",
    "value": "yongrenxian",
    "zip_code": "651400",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532328",
    "label": "元谋县",
    "value": "yuanmouxian",
    "zip_code": "651300",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532329",
    "label": "武定县",
    "value": "wudingxian",
    "zip_code": "651600",
    "parent_code": "532300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "532500",
    "label": "红河哈尼族彝族自治州",
    "value": "honghehanizuyizuzizhizhou",
    "zip_code": "661400",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "532501",
    "label": "个旧市",
    "value": "gejiushi",
    "zip_code": "661000",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "532502",
    "label": "开远市",
    "value": "kaiyuanshi",
    "zip_code": "661600",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "532503",
    "label": "蒙自市",
    "value": "mengzishi",
    "zip_code": "661400",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532504",
    "label": "弥勒市",
    "value": "mileishi",
    "zip_code": "652399",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532523",
    "label": "屏边苗族自治县",
    "value": "pingbianmiaozuzizhixian",
    "zip_code": "661200",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "532524",
    "label": "建水县",
    "value": "jianshuixian",
    "zip_code": "654300",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "532525",
    "label": "石屏县",
    "value": "shipingxian",
    "zip_code": "654300",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "532527",
    "label": "泸西县",
    "value": "luxixian",
    "zip_code": "652400",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "532528",
    "label": "元阳县",
    "value": "yuanyangxian",
    "zip_code": "662400",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532529",
    "label": "红河县",
    "value": "honghexian",
    "zip_code": "654400",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "532530",
    "label": "金平苗族瑶族傣族自治县",
    "value": "jinpingmiaozuyaozudaizuzizhixian",
    "zip_code": "661500",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "532531",
    "label": "绿春县",
    "value": "lvchunxian",
    "zip_code": "662500",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "532532",
    "label": "河口瑶族自治县",
    "value": "hekouyaozuzizhixian",
    "zip_code": "661300",
    "parent_code": "532500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "532600",
    "label": "文山壮族苗族自治州",
    "value": "wenshanzhuangzumiaozuzizhizhou",
    "zip_code": "663000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "532601",
    "label": "文山市",
    "value": "wenshanshi",
    "zip_code": "663000",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "532622",
    "label": "砚山县",
    "value": "yanshanxian",
    "zip_code": "663100",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532623",
    "label": "西畴县",
    "value": "xichouxian",
    "zip_code": "663500",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "532624",
    "label": "麻栗坡县",
    "value": "malipoxian",
    "zip_code": "663600",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532625",
    "label": "马关县",
    "value": "maguanxian",
    "zip_code": "663700",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532626",
    "label": "丘北县",
    "value": "qiubeixian",
    "zip_code": "663200",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "532627",
    "label": "广南县",
    "value": "guangnanxian",
    "zip_code": "663300",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "532628",
    "label": "富宁县",
    "value": "funingxian",
    "zip_code": "663400",
    "parent_code": "532600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "532800",
    "label": "西双版纳傣族自治州",
    "value": "xishuangbannadaizuzizhizhou",
    "zip_code": "666100",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "532801",
    "label": "景洪市",
    "value": "jinghongshi",
    "zip_code": "666100",
    "parent_code": "532800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "532822",
    "label": "勐海县",
    "value": "menghaixian",
    "zip_code": "666200",
    "parent_code": "532800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532823",
    "label": "勐腊县",
    "value": "menglaxian",
    "zip_code": "666300",
    "parent_code": "532800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532900",
    "label": "大理白族自治州",
    "value": "dalibaizuzizhizhou",
    "zip_code": "671000",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "532901",
    "label": "大理市",
    "value": "dalishi",
    "zip_code": "671000",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "532922",
    "label": "漾濞彝族自治县",
    "value": "yangbiyizuzizhixian",
    "zip_code": "672500",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532923",
    "label": "祥云县",
    "value": "xiangyunxian",
    "zip_code": "672100",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "532924",
    "label": "宾川县",
    "value": "binchuanxian",
    "zip_code": "671600",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "532925",
    "label": "弥渡县",
    "value": "miduxian",
    "zip_code": "675600",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "532926",
    "label": "南涧彝族自治县",
    "value": "nanjianyizuzizhixian",
    "zip_code": "675700",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "532927",
    "label": "巍山彝族回族自治县",
    "value": "weishanyizuhuizuzizhixian",
    "zip_code": "672400",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "532928",
    "label": "永平县",
    "value": "yongpingxian",
    "zip_code": "672600",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532929",
    "label": "云龙县",
    "value": "yunlongxian",
    "zip_code": "672700",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "532930",
    "label": "洱源县",
    "value": "eryuanxian",
    "zip_code": "671200",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "532931",
    "label": "剑川县",
    "value": "jianchuanxian",
    "zip_code": "671300",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "532932",
    "label": "鹤庆县",
    "value": "heqingxian",
    "zip_code": "671500",
    "parent_code": "532900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "533100",
    "label": "德宏傣族景颇族自治州",
    "value": "dehongdaizujingpozuzizhizhou",
    "zip_code": "678400",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "533102",
    "label": "瑞丽市",
    "value": "ruilishi",
    "zip_code": "678600",
    "parent_code": "533100",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "533103",
    "label": "芒市",
    "value": "mangshi",
    "zip_code": "678400",
    "parent_code": "533100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "533122",
    "label": "梁河县",
    "value": "lianghexian",
    "zip_code": "679200",
    "parent_code": "533100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "533123",
    "label": "盈江县",
    "value": "yingjiangxian",
    "zip_code": "679300",
    "parent_code": "533100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "533124",
    "label": "陇川县",
    "value": "longchuanxian",
    "zip_code": "678700",
    "parent_code": "533100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "533300",
    "label": "怒江傈僳族自治州",
    "value": "nujianglisuzuzizhizhou",
    "zip_code": "673100",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "533301",
    "label": "泸水市",
    "value": "lushuishi",
    "zip_code": "673100",
    "parent_code": "533300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "533323",
    "label": "福贡县",
    "value": "fugongxian",
    "zip_code": "673400",
    "parent_code": "533300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "533324",
    "label": "贡山独龙族怒族自治县",
    "value": "gongshandulongzunuzuzizhixian",
    "zip_code": "673500",
    "parent_code": "533300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "533325",
    "label": "兰坪白族普米族自治县",
    "value": "lanpingbaizupumizuzizhixian",
    "zip_code": "671400",
    "parent_code": "533300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "533400",
    "label": "迪庆藏族自治州",
    "value": "diqingzangzuzizhizhou",
    "zip_code": "674400",
    "parent_code": "530000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "533401",
    "label": "香格里拉市",
    "value": "xianggelilashi",
    "zip_code": "674400",
    "parent_code": "533400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "533422",
    "label": "德钦县",
    "value": "deqinxian",
    "zip_code": "674500",
    "parent_code": "533400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "533423",
    "label": "维西傈僳族自治县",
    "value": "weixilisuzuzizhixian",
    "zip_code": "674600",
    "parent_code": "533400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "540000",
    "label": "西藏自治区",
    "value": "xizangzizhiqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "X"
  },
  {
    "code": "540100",
    "label": "拉萨市",
    "value": "lasashi",
    "zip_code": "850000",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "540102",
    "label": "城关区",
    "value": "chengguanqu",
    "zip_code": "850000",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "540103",
    "label": "堆龙德庆区",
    "value": "duilongdeqingqu",
    "zip_code": "851400",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "540104",
    "label": "达孜区",
    "value": "daziqu",
    "zip_code": "850100",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "540121",
    "label": "林周县",
    "value": "linzhouxian",
    "zip_code": "852000",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540122",
    "label": "当雄县",
    "value": "dangxiongxian",
    "zip_code": "851500",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "540123",
    "label": "尼木县",
    "value": "nimuxian",
    "zip_code": "851300",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "540124",
    "label": "曲水县",
    "value": "qushuixian",
    "zip_code": "850600",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "540127",
    "label": "墨竹工卡县",
    "value": "mozhugongkaxian",
    "zip_code": "850200",
    "parent_code": "540100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "540200",
    "label": "日喀则市",
    "value": "rikazeshi",
    "zip_code": "857000",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "R"
  },
  {
    "code": "540202",
    "label": "桑珠孜区",
    "value": "sangzhuziqu",
    "zip_code": "857000",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "540221",
    "label": "南木林县",
    "value": "nanmulinxian",
    "zip_code": "857100",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "540222",
    "label": "江孜县",
    "value": "jiangzixian",
    "zip_code": "857400",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "540223",
    "label": "定日县",
    "value": "dingrixian",
    "zip_code": "858200",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "540224",
    "label": "萨迦县",
    "value": "sajiaxian",
    "zip_code": "857800",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "540225",
    "label": "拉孜县",
    "value": "lazixian",
    "zip_code": "858100",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540226",
    "label": "昂仁县",
    "value": "angrenxian",
    "zip_code": "858500",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "540227",
    "label": "谢通门县",
    "value": "xietongmenxian",
    "zip_code": "858900",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "540228",
    "label": "白朗县",
    "value": "bailangxian",
    "zip_code": "857300",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "540229",
    "label": "仁布县",
    "value": "renbuxian",
    "zip_code": "857200",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "540230",
    "label": "康马县",
    "value": "kangmaxian",
    "zip_code": "857500",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "540231",
    "label": "定结县",
    "value": "dingjiexian",
    "zip_code": "857900",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "540232",
    "label": "仲巴县",
    "value": "zhongbaxian",
    "zip_code": "858800",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "540233",
    "label": "亚东县",
    "value": "yadongxian",
    "zip_code": "857600",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "540234",
    "label": "吉隆县",
    "value": "jilongxian",
    "zip_code": "858700",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "540235",
    "label": "聂拉木县",
    "value": "nielamuxian",
    "zip_code": "858300",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "540236",
    "label": "萨嘎县",
    "value": "sagaxian",
    "zip_code": "857800",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "540237",
    "label": "岗巴县",
    "value": "gangbaxian",
    "zip_code": "857700",
    "parent_code": "540200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "540300",
    "label": "昌都市",
    "value": "changdushi",
    "zip_code": "854000",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "540302",
    "label": "卡若区",
    "value": "karuoqu",
    "zip_code": "854000",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "540321",
    "label": "江达县",
    "value": "jiangdaxian",
    "zip_code": "854100",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "540322",
    "label": "贡觉县",
    "value": "gongjuexian",
    "zip_code": "854200",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "540323",
    "label": "类乌齐县",
    "value": "leiwuqixian",
    "zip_code": "855600",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540324",
    "label": "丁青县",
    "value": "dingqingxian",
    "zip_code": "855700",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "540325",
    "label": "察雅县",
    "value": "chayaxian",
    "zip_code": "854300",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "540326",
    "label": "八宿县",
    "value": "basuxian",
    "zip_code": "854600",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "540327",
    "label": "左贡县",
    "value": "zuogongxian",
    "zip_code": "854400",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "540328",
    "label": "芒康县",
    "value": "mangkangxian",
    "zip_code": "854500",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "540329",
    "label": "洛隆县",
    "value": "luolongxian",
    "zip_code": "855400",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540330",
    "label": "边坝县",
    "value": "bianbaxian",
    "zip_code": "855500",
    "parent_code": "540300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "540400",
    "label": "林芝市",
    "value": "linzhishi",
    "zip_code": "860000",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "540402",
    "label": "巴宜区",
    "value": "bayiqu",
    "zip_code": "850400",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "540421",
    "label": "工布江达县",
    "value": "gongbujiangdaxian",
    "zip_code": "850300",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "540422",
    "label": "米林县",
    "value": "milinxian",
    "zip_code": "860500",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "540423",
    "label": "墨脱县",
    "value": "motuoxian",
    "zip_code": "855300",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "540424",
    "label": "波密县",
    "value": "bomixian",
    "zip_code": "855200",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "540425",
    "label": "察隅县",
    "value": "chayuxian",
    "zip_code": "855100",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "540426",
    "label": "朗县",
    "value": "langxian",
    "zip_code": "856500",
    "parent_code": "540400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540500",
    "label": "山南市",
    "value": "shannanshi",
    "zip_code": "856000",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "540502",
    "label": "乃东区",
    "value": "naidongqu",
    "zip_code": "856100",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "540521",
    "label": "扎囊县",
    "value": "zhanangxian",
    "zip_code": "850800",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "540522",
    "label": "贡嘎县",
    "value": "gonggaxian",
    "zip_code": "850700",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "540523",
    "label": "桑日县",
    "value": "sangrixian",
    "zip_code": "856200",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "540524",
    "label": "琼结县",
    "value": "qiongjiexian",
    "zip_code": "856800",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "540525",
    "label": "曲松县",
    "value": "qusongxian",
    "zip_code": "856300",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "540526",
    "label": "措美县",
    "value": "cuomeixian",
    "zip_code": "856900",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "540527",
    "label": "洛扎县",
    "value": "luozhaxian",
    "zip_code": "851200",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540528",
    "label": "加查县",
    "value": "jiachaxian",
    "zip_code": "856400",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "540529",
    "label": "隆子县",
    "value": "longzixian",
    "zip_code": "856600",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "540530",
    "label": "错那县",
    "value": "cuonaxian",
    "zip_code": "856700",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "540531",
    "label": "浪卡子县",
    "value": "langkazixian",
    "zip_code": "851000",
    "parent_code": "540500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "542400",
    "label": "那曲地区",
    "value": "naqudiqu",
    "zip_code": "0",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "542421",
    "label": "那曲县",
    "value": "naquxian",
    "zip_code": "852000",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "542422",
    "label": "嘉黎县",
    "value": "jialixian",
    "zip_code": "852400",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "542423",
    "label": "比如县",
    "value": "biruxian",
    "zip_code": "852300",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "542424",
    "label": "聂荣县",
    "value": "nierongxian",
    "zip_code": "853500",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "542425",
    "label": "安多县",
    "value": "anduoxian",
    "zip_code": "852600",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "542426",
    "label": "申扎县",
    "value": "shenzhaxian",
    "zip_code": "853100",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "542427",
    "label": "索县",
    "value": "suoxian",
    "zip_code": "852200",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "542428",
    "label": "班戈县",
    "value": "bangexian",
    "zip_code": "852500",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "542429",
    "label": "巴青县",
    "value": "baqingxian",
    "zip_code": "852100",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "542430",
    "label": "尼玛县",
    "value": "nimaxian",
    "zip_code": "853200",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "542431",
    "label": "双湖县",
    "value": "shuanghuxian",
    "zip_code": "853300",
    "parent_code": "542400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "542500",
    "label": "阿里地区",
    "value": "alidiqu",
    "zip_code": "859000",
    "parent_code": "540000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "542521",
    "label": "普兰县",
    "value": "pulanxian",
    "zip_code": "859500",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "542522",
    "label": "札达县",
    "value": "zhadaxian",
    "zip_code": "859600",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "542523",
    "label": "噶尔县",
    "value": "gaerxian",
    "zip_code": "859400",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "542524",
    "label": "日土县",
    "value": "rituxian",
    "zip_code": "859700",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "542525",
    "label": "革吉县",
    "value": "gejixian",
    "zip_code": "859100",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "542526",
    "label": "改则县",
    "value": "gaizexian",
    "zip_code": "859200",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "542527",
    "label": "措勤县",
    "value": "cuoqinxian",
    "zip_code": "859300",
    "parent_code": "542500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610000",
    "label": "陕西省",
    "value": "shanxisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "S"
  },
  {
    "code": "610100",
    "label": "西安市",
    "value": "xianshi",
    "zip_code": "710000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "610102",
    "label": "新城区",
    "value": "xinchengqu",
    "zip_code": "710004",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "610103",
    "label": "碑林区",
    "value": "beilinqu",
    "zip_code": "710001",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "610104",
    "label": "莲湖区",
    "value": "lianhuqu",
    "zip_code": "710003",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610111",
    "label": "灞桥区",
    "value": "baqiaoqu",
    "zip_code": "710038",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "610112",
    "label": "未央区",
    "value": "weiyangqu",
    "zip_code": "710014",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610113",
    "label": "雁塔区",
    "value": "yantaqu",
    "zip_code": "710061",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610114",
    "label": "阎良区",
    "value": "yanliangqu",
    "zip_code": "710087",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610115",
    "label": "临潼区",
    "value": "lintongqu",
    "zip_code": "710600",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610116",
    "label": "长安区",
    "value": "changanqu",
    "zip_code": "710100",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610117",
    "label": "高陵区",
    "value": "gaolingqu",
    "zip_code": "710200",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "610118",
    "label": "鄠邑区",
    "value": "huyiqu",
    "zip_code": "710300",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610122",
    "label": "蓝田县",
    "value": "lantianxian",
    "zip_code": "710500",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610124",
    "label": "周至县",
    "value": "zhouzhixian",
    "zip_code": "710400",
    "parent_code": "610100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610200",
    "label": "铜川市",
    "value": "tongchuanshi",
    "zip_code": "727000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "610202",
    "label": "王益区",
    "value": "wangyiqu",
    "zip_code": "727000",
    "parent_code": "610200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610203",
    "label": "印台区",
    "value": "yintaiqu",
    "zip_code": "727007",
    "parent_code": "610200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610204",
    "label": "耀州区",
    "value": "yaozhouqu",
    "zip_code": "727100",
    "parent_code": "610200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610222",
    "label": "宜君县",
    "value": "yijunxian",
    "zip_code": "727200",
    "parent_code": "610200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610300",
    "label": "宝鸡市",
    "value": "baojishi",
    "zip_code": "721000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "610302",
    "label": "渭滨区",
    "value": "weibinqu",
    "zip_code": "721000",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610303",
    "label": "金台区",
    "value": "jintaiqu",
    "zip_code": "721000",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "610304",
    "label": "陈仓区",
    "value": "chencangqu",
    "zip_code": "721300",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610305",
    "label": "凤翔区",
    "value": "fengxiangqu",
    "zip_code": "721400",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610323",
    "label": "岐山县",
    "value": "qishanxian",
    "zip_code": "722400",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "610324",
    "label": "扶风县",
    "value": "fufengxian",
    "zip_code": "722200",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610326",
    "label": "眉县",
    "value": "meixian",
    "zip_code": "722300",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "610327",
    "label": "陇县",
    "value": "longxian",
    "zip_code": "721200",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610328",
    "label": "千阳县",
    "value": "qianyangxian",
    "zip_code": "721100",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "610329",
    "label": "麟游县",
    "value": "linyouxian",
    "zip_code": "721500",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610330",
    "label": "凤县",
    "value": "fengxian",
    "zip_code": "721700",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610331",
    "label": "太白县",
    "value": "taibaixian",
    "zip_code": "721600",
    "parent_code": "610300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "610400",
    "label": "咸阳市",
    "value": "xianyangshi",
    "zip_code": "712000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "610402",
    "label": "秦都区",
    "value": "qinduqu",
    "zip_code": "712000",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "610403",
    "label": "杨陵区",
    "value": "yanglingqu",
    "zip_code": "712100",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610404",
    "label": "渭城区",
    "value": "weichengqu",
    "zip_code": "712000",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610422",
    "label": "三原县",
    "value": "sanyuanxian",
    "zip_code": "713800",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "610423",
    "label": "泾阳县",
    "value": "jingyangxian",
    "zip_code": "713700",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "610424",
    "label": "乾县",
    "value": "qianxian",
    "zip_code": "713300",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "610425",
    "label": "礼泉县",
    "value": "liquanxian",
    "zip_code": "713200",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610426",
    "label": "永寿县",
    "value": "yongshouxian",
    "zip_code": "713400",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610427",
    "label": "彬州市",
    "value": "binzhoushi",
    "zip_code": "713500",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "610428",
    "label": "长武县",
    "value": "changwuxian",
    "zip_code": "713600",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610429",
    "label": "旬邑县",
    "value": "xunyixian",
    "zip_code": "711300",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "610430",
    "label": "淳化县",
    "value": "chunhuaxian",
    "zip_code": "711200",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610431",
    "label": "武功县",
    "value": "wugongxian",
    "zip_code": "712200",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610481",
    "label": "兴平市",
    "value": "xingpingshi",
    "zip_code": "713100",
    "parent_code": "610400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "610500",
    "label": "渭南市",
    "value": "weinanshi",
    "zip_code": "714000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "610502",
    "label": "临渭区",
    "value": "linweiqu",
    "zip_code": "714000",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610503",
    "label": "华州区",
    "value": "huazhouqu",
    "zip_code": "714100",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610522",
    "label": "潼关县",
    "value": "tongguanxian",
    "zip_code": "714300",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "610523",
    "label": "大荔县",
    "value": "dalixian",
    "zip_code": "715100",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "610524",
    "label": "合阳县",
    "value": "heyangxian",
    "zip_code": "715300",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610525",
    "label": "澄城县",
    "value": "chengchengxian",
    "zip_code": "715200",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610526",
    "label": "蒲城县",
    "value": "puchengxian",
    "zip_code": "715500",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "610527",
    "label": "白水县",
    "value": "baishuixian",
    "zip_code": "715600",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "610528",
    "label": "富平县",
    "value": "fupingxian",
    "zip_code": "711700",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610581",
    "label": "韩城市",
    "value": "hanchengshi",
    "zip_code": "715400",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610582",
    "label": "华阴市",
    "value": "huayinshi",
    "zip_code": "714200",
    "parent_code": "610500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610600",
    "label": "延安市",
    "value": "yananshi",
    "zip_code": "716000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "610602",
    "label": "宝塔区",
    "value": "baotaqu",
    "zip_code": "716000",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "610603",
    "label": "安塞区",
    "value": "ansaiqu",
    "zip_code": "717400",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "610621",
    "label": "延长县",
    "value": "yanchangxian",
    "zip_code": "717100",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610622",
    "label": "延川县",
    "value": "yanchuanxian",
    "zip_code": "717200",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610623",
    "label": "子长县",
    "value": "zichangxian",
    "zip_code": "717300",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610625",
    "label": "志丹县",
    "value": "zhidanxian",
    "zip_code": "717500",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610626",
    "label": "吴起县",
    "value": "wuqixian",
    "zip_code": "716000",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610627",
    "label": "甘泉县",
    "value": "ganquanxian",
    "zip_code": "716100",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "610628",
    "label": "富县",
    "value": "fuxian",
    "zip_code": "727500",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610629",
    "label": "洛川县",
    "value": "luochuanxian",
    "zip_code": "727400",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610630",
    "label": "宜川县",
    "value": "yichuanxian",
    "zip_code": "716200",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610631",
    "label": "黄龙县",
    "value": "huanglongxian",
    "zip_code": "715700",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610632",
    "label": "黄陵县",
    "value": "huanglingxian",
    "zip_code": "727300",
    "parent_code": "610600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610700",
    "label": "汉中市",
    "value": "hanzhongshi",
    "zip_code": "723000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "610702",
    "label": "汉台区",
    "value": "hantaiqu",
    "zip_code": "723000",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610703",
    "label": "南郑区",
    "value": "nanzhengqu",
    "zip_code": "723100",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "610722",
    "label": "城固县",
    "value": "chengguxian",
    "zip_code": "723200",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "610723",
    "label": "洋县",
    "value": "yangxian",
    "zip_code": "723300",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610724",
    "label": "西乡县",
    "value": "xixiangxian",
    "zip_code": "723500",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "610725",
    "label": "勉县",
    "value": "mianxian",
    "zip_code": "724200",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "610726",
    "label": "宁强县",
    "value": "ningqiangxian",
    "zip_code": "724400",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "610727",
    "label": "略阳县",
    "value": "lveyangxian",
    "zip_code": "724300",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610728",
    "label": "镇巴县",
    "value": "zhenbaxian",
    "zip_code": "723600",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610729",
    "label": "留坝县",
    "value": "liubaxian",
    "zip_code": "724100",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610730",
    "label": "佛坪县",
    "value": "fopingxian",
    "zip_code": "723400",
    "parent_code": "610700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610800",
    "label": "榆林市",
    "value": "yulinshi",
    "zip_code": "719000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "610802",
    "label": "榆阳区",
    "value": "yuyangqu",
    "zip_code": "719000",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "610803",
    "label": "横山区",
    "value": "hengshanqu",
    "zip_code": "719100",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610822",
    "label": "府谷县",
    "value": "fuguxian",
    "zip_code": "719400",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "610824",
    "label": "靖边县",
    "value": "jingbianxian",
    "zip_code": "718500",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "610825",
    "label": "定边县",
    "value": "dingbianxian",
    "zip_code": "718600",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "610826",
    "label": "绥德县",
    "value": "suidexian",
    "zip_code": "718000",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "610827",
    "label": "米脂县",
    "value": "mizhixian",
    "zip_code": "718100",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "610828",
    "label": "佳县",
    "value": "jiaxian",
    "zip_code": "719200",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "610829",
    "label": "吴堡县",
    "value": "wubaoxian",
    "zip_code": "718200",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "610830",
    "label": "清涧县",
    "value": "qingjianxian",
    "zip_code": "718300",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "610831",
    "label": "子洲县",
    "value": "zizhouxian",
    "zip_code": "718400",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610881",
    "label": "神木市",
    "value": "shenmushi",
    "zip_code": "719300",
    "parent_code": "610800",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "610900",
    "label": "安康市",
    "value": "ankangshi",
    "zip_code": "725000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "610902",
    "label": "汉滨区",
    "value": "hanbinqu",
    "zip_code": "725000",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610921",
    "label": "汉阴县",
    "value": "hanyinxian",
    "zip_code": "725100",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "610922",
    "label": "石泉县",
    "value": "shiquanxian",
    "zip_code": "725200",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "610923",
    "label": "宁陕县",
    "value": "ningshanxian",
    "zip_code": "711600",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "610924",
    "label": "紫阳县",
    "value": "ziyangxian",
    "zip_code": "725300",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610925",
    "label": "岚皋县",
    "value": "langaoxian",
    "zip_code": "725400",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "610926",
    "label": "平利县",
    "value": "pinglixian",
    "zip_code": "725500",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "610927",
    "label": "镇坪县",
    "value": "zhenpingxian",
    "zip_code": "725600",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "610929",
    "label": "白河县",
    "value": "baihexian",
    "zip_code": "725800",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "610981",
    "label": "旬阳市",
    "value": "xunyangshi",
    "zip_code": "725700",
    "parent_code": "610900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "611000",
    "label": "商洛市",
    "value": "shangluoshi",
    "zip_code": "726000",
    "parent_code": "610000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "611002",
    "label": "商州区",
    "value": "shangzhouqu",
    "zip_code": "726000",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "611021",
    "label": "洛南县",
    "value": "luonanxian",
    "zip_code": "726100",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "611022",
    "label": "丹凤县",
    "value": "danfengxian",
    "zip_code": "726200",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "611023",
    "label": "商南县",
    "value": "shangnanxian",
    "zip_code": "726300",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "611024",
    "label": "山阳县",
    "value": "shanyangxian",
    "zip_code": "726400",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "611025",
    "label": "镇安县",
    "value": "zhenanxian",
    "zip_code": "711500",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "611026",
    "label": "柞水县",
    "value": "zhashuixian",
    "zip_code": "711400",
    "parent_code": "611000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "620000",
    "label": "甘肃省",
    "value": "gansusheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "G"
  },
  {
    "code": "620100",
    "label": "兰州市",
    "value": "lanzhoushi",
    "zip_code": "730000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "620102",
    "label": "城关区",
    "value": "chengguanqu",
    "zip_code": "730030",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "620103",
    "label": "七里河区",
    "value": "qilihequ",
    "zip_code": "730050",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "620104",
    "label": "西固区",
    "value": "xiguqu",
    "zip_code": "730060",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "620105",
    "label": "安宁区",
    "value": "anningqu",
    "zip_code": "730070",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "620111",
    "label": "红古区",
    "value": "hongguqu",
    "zip_code": "730080",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "620121",
    "label": "永登县",
    "value": "yongdengxian",
    "zip_code": "730300",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "620122",
    "label": "皋兰县",
    "value": "gaolanxian",
    "zip_code": "730200",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "620123",
    "label": "榆中县",
    "value": "yuzhongxian",
    "zip_code": "730100",
    "parent_code": "620100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "620200",
    "label": "嘉峪关市",
    "value": "jiayuguanshi",
    "zip_code": "735100",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "620201",
    "label": "雄关区",
    "value": "xiongguanqu",
    "zip_code": "735100",
    "parent_code": "620200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "620202",
    "label": "镜铁区",
    "value": "jingtiequ",
    "zip_code": "735100",
    "parent_code": "620200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620203",
    "label": "长城区",
    "value": "changchengqu",
    "zip_code": "735100",
    "parent_code": "620200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "620300",
    "label": "金昌市",
    "value": "jinchangshi",
    "zip_code": "737100",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "620302",
    "label": "金川区",
    "value": "jinchuanqu",
    "zip_code": "737103",
    "parent_code": "620300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620321",
    "label": "永昌县",
    "value": "yongchangxian",
    "zip_code": "737200",
    "parent_code": "620300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "620400",
    "label": "白银市",
    "value": "baiyinshi",
    "zip_code": "730900",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "620402",
    "label": "白银区",
    "value": "baiyinqu",
    "zip_code": "730900",
    "parent_code": "620400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "620403",
    "label": "平川区",
    "value": "pingchuanqu",
    "zip_code": "730913",
    "parent_code": "620400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "620421",
    "label": "靖远县",
    "value": "jingyuanxian",
    "zip_code": "730600",
    "parent_code": "620400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620422",
    "label": "会宁县",
    "value": "huiningxian",
    "zip_code": "730700",
    "parent_code": "620400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "620423",
    "label": "景泰县",
    "value": "jingtaixian",
    "zip_code": "730400",
    "parent_code": "620400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620500",
    "label": "天水市",
    "value": "tianshuishi",
    "zip_code": "741000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "620502",
    "label": "秦州区",
    "value": "qinzhouqu",
    "zip_code": "741000",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "620503",
    "label": "麦积区",
    "value": "maijiqu",
    "zip_code": "741020",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "620521",
    "label": "清水县",
    "value": "qingshuixian",
    "zip_code": "741400",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "620522",
    "label": "秦安县",
    "value": "qinanxian",
    "zip_code": "741600",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "620523",
    "label": "甘谷县",
    "value": "ganguxian",
    "zip_code": "741200",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "620524",
    "label": "武山县",
    "value": "wushanxian",
    "zip_code": "741300",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "620525",
    "label": "张家川回族自治县",
    "value": "zhangjiachuanhuizuzizhixian",
    "zip_code": "741500",
    "parent_code": "620500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "620600",
    "label": "武威市",
    "value": "wuweishi",
    "zip_code": "733000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "620602",
    "label": "凉州区",
    "value": "liangzhouqu",
    "zip_code": "733000",
    "parent_code": "620600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "620621",
    "label": "民勤县",
    "value": "minqinxian",
    "zip_code": "733300",
    "parent_code": "620600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "620622",
    "label": "古浪县",
    "value": "gulangxian",
    "zip_code": "733100",
    "parent_code": "620600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "620623",
    "label": "天祝藏族自治县",
    "value": "tianzhuzangzuzizhixian",
    "zip_code": "733200",
    "parent_code": "620600",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "620700",
    "label": "张掖市",
    "value": "zhangyeshi",
    "zip_code": "734000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "620702",
    "label": "甘州区",
    "value": "ganzhouqu",
    "zip_code": "734000",
    "parent_code": "620700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "620721",
    "label": "肃南裕固族自治县",
    "value": "sunanyuguzuzizhixian",
    "zip_code": "734400",
    "parent_code": "620700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "620722",
    "label": "民乐县",
    "value": "minlexian",
    "zip_code": "734500",
    "parent_code": "620700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "620723",
    "label": "临泽县",
    "value": "linzexian",
    "zip_code": "734200",
    "parent_code": "620700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "620724",
    "label": "高台县",
    "value": "gaotaixian",
    "zip_code": "734300",
    "parent_code": "620700",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "620725",
    "label": "山丹县",
    "value": "shandanxian",
    "zip_code": "734100",
    "parent_code": "620700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "620800",
    "label": "平凉市",
    "value": "pingliangshi",
    "zip_code": "744000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "620802",
    "label": "崆峒区",
    "value": "kongdongqu",
    "zip_code": "744000",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "620821",
    "label": "泾川县",
    "value": "jingchuanxian",
    "zip_code": "744300",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620822",
    "label": "灵台县",
    "value": "lingtaixian",
    "zip_code": "744400",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "620823",
    "label": "崇信县",
    "value": "chongxinxian",
    "zip_code": "744200",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "620824",
    "label": "华亭县",
    "value": "huatingxian",
    "zip_code": "744100",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "620825",
    "label": "庄浪县",
    "value": "zhuanglangxian",
    "zip_code": "744600",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "620826",
    "label": "静宁县",
    "value": "jingningxian",
    "zip_code": "743400",
    "parent_code": "620800",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620900",
    "label": "酒泉市",
    "value": "jiuquanshi",
    "zip_code": "735000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "620902",
    "label": "肃州区",
    "value": "suzhouqu",
    "zip_code": "735000",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "620921",
    "label": "金塔县",
    "value": "jintaxian",
    "zip_code": "735300",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "620922",
    "label": "瓜州县",
    "value": "guazhouxian",
    "zip_code": "735000",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "620923",
    "label": "肃北蒙古族自治县",
    "value": "subeimengguzuzizhixian",
    "zip_code": "736300",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "620924",
    "label": "阿克塞哈萨克族自治县",
    "value": "akesaihasakezuzizhixian",
    "zip_code": "736400",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "620981",
    "label": "玉门市",
    "value": "yumenshi",
    "zip_code": "735200",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "620982",
    "label": "敦煌市",
    "value": "dunhuangshi",
    "zip_code": "736200",
    "parent_code": "620900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "621000",
    "label": "庆阳市",
    "value": "qingyangshi",
    "zip_code": "745000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "Q"
  },
  {
    "code": "621002",
    "label": "西峰区",
    "value": "xifengqu",
    "zip_code": "745000",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "621021",
    "label": "庆城县",
    "value": "qingchengxian",
    "zip_code": "745100",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "621022",
    "label": "环县",
    "value": "huanxian",
    "zip_code": "745700",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "621023",
    "label": "华池县",
    "value": "huachixian",
    "zip_code": "745600",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "621024",
    "label": "合水县",
    "value": "heshuixian",
    "zip_code": "745400",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "621025",
    "label": "正宁县",
    "value": "zhengningxian",
    "zip_code": "745300",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "621026",
    "label": "宁县",
    "value": "ningxian",
    "zip_code": "745200",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "621027",
    "label": "镇原县",
    "value": "zhenyuanxian",
    "zip_code": "744500",
    "parent_code": "621000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "621100",
    "label": "定西市",
    "value": "dingxishi",
    "zip_code": "743000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "D"
  },
  {
    "code": "621102",
    "label": "安定区",
    "value": "andingqu",
    "zip_code": "744300",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "621121",
    "label": "通渭县",
    "value": "tongweixian",
    "zip_code": "743300",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "621122",
    "label": "陇西县",
    "value": "longxixian",
    "zip_code": "748100",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "621123",
    "label": "渭源县",
    "value": "weiyuanxian",
    "zip_code": "748200",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "621124",
    "label": "临洮县",
    "value": "lintaoxian",
    "zip_code": "730500",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "621125",
    "label": "漳县",
    "value": "zhangxian",
    "zip_code": "748300",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "621126",
    "label": "岷县",
    "value": "minxian",
    "zip_code": "748400",
    "parent_code": "621100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "621200",
    "label": "陇南市",
    "value": "longnanshi",
    "zip_code": "742500",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "621202",
    "label": "武都区",
    "value": "wuduqu",
    "zip_code": "746000",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "621221",
    "label": "成县",
    "value": "chengxian",
    "zip_code": "742500",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "621222",
    "label": "文县",
    "value": "wenxian",
    "zip_code": "746400",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "621223",
    "label": "宕昌县",
    "value": "dangchangxian",
    "zip_code": "748500",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "621224",
    "label": "康县",
    "value": "kangxian",
    "zip_code": "746500",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "621225",
    "label": "西和县",
    "value": "xihexian",
    "zip_code": "742100",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "621226",
    "label": "礼县",
    "value": "lixian",
    "zip_code": "742200",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "621227",
    "label": "徽县",
    "value": "huixian",
    "zip_code": "742300",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "621228",
    "label": "两当县",
    "value": "liangdangxian",
    "zip_code": "742400",
    "parent_code": "621200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "622900",
    "label": "临夏回族自治州",
    "value": "linxiahuizuzizhizhou",
    "zip_code": "731100",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "L"
  },
  {
    "code": "622901",
    "label": "临夏市",
    "value": "linxiashi",
    "zip_code": "731100",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "622921",
    "label": "临夏县",
    "value": "linxiaxian",
    "zip_code": "731800",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "622922",
    "label": "康乐县",
    "value": "kanglexian",
    "zip_code": "731500",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "622923",
    "label": "永靖县",
    "value": "yongjingxian",
    "zip_code": "731600",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "622924",
    "label": "广河县",
    "value": "guanghexian",
    "zip_code": "731300",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "622925",
    "label": "和政县",
    "value": "hezhengxian",
    "zip_code": "731200",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "622926",
    "label": "东乡族自治县",
    "value": "dongxiangzuzizhixian",
    "zip_code": "731400",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "622927",
    "label": "积石山保安族东乡族撒拉族自治县",
    "value": "jishishanbaoanzudongxiangzusalazuzizhixian",
    "zip_code": "731700",
    "parent_code": "622900",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "623000",
    "label": "甘南藏族自治州",
    "value": "gannanzangzuzizhizhou",
    "zip_code": "747000",
    "parent_code": "620000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "623001",
    "label": "合作市",
    "value": "hezuoshi",
    "zip_code": "747000",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "623021",
    "label": "临潭县",
    "value": "lintanxian",
    "zip_code": "747500",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "623022",
    "label": "卓尼县",
    "value": "zhuonixian",
    "zip_code": "747600",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "623023",
    "label": "舟曲县",
    "value": "zhouquxian",
    "zip_code": "746300",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "623024",
    "label": "迭部县",
    "value": "diebuxian",
    "zip_code": "747400",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "623025",
    "label": "玛曲县",
    "value": "maquxian",
    "zip_code": "747300",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "623026",
    "label": "碌曲县",
    "value": "luquxian",
    "zip_code": "747200",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "623027",
    "label": "夏河县",
    "value": "xiahexian",
    "zip_code": "747100",
    "parent_code": "623000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "630000",
    "label": "青海省",
    "value": "qinghaisheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "Q"
  },
  {
    "code": "630100",
    "label": "西宁市",
    "value": "xiningshi",
    "zip_code": "810000",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "630102",
    "label": "城东区",
    "value": "chengdongqu",
    "zip_code": "810000",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "630103",
    "label": "城中区",
    "value": "chengzhongqu",
    "zip_code": "810000",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "630104",
    "label": "城西区",
    "value": "chengxiqu",
    "zip_code": "810000",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "630105",
    "label": "城北区",
    "value": "chengbeiqu",
    "zip_code": "810000",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "630121",
    "label": "大通回族土族自治县",
    "value": "datonghuizutuzuzizhixian",
    "zip_code": "810100",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "630122",
    "label": "湟中县",
    "value": "huangzhongxian",
    "zip_code": "811600",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "630123",
    "label": "湟源县",
    "value": "huangyuanxian",
    "zip_code": "812100",
    "parent_code": "630100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "630200",
    "label": "海东市",
    "value": "haidongshi",
    "zip_code": "810699",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "630202",
    "label": "乐都区",
    "value": "leduqu",
    "zip_code": "810700",
    "parent_code": "630200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "630203",
    "label": "平安区",
    "value": "pinganqu",
    "zip_code": "810699",
    "parent_code": "630200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "630222",
    "label": "民和回族土族自治县",
    "value": "minhehuizutuzuzizhixian",
    "zip_code": "810800",
    "parent_code": "630200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "630223",
    "label": "互助土族自治县",
    "value": "huzhutuzuzizhixian",
    "zip_code": "810500",
    "parent_code": "630200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "630224",
    "label": "化隆回族自治县",
    "value": "hualonghuizuzizhixian",
    "zip_code": "810900",
    "parent_code": "630200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "630225",
    "label": "循化撒拉族自治县",
    "value": "xunhuasalazuzizhixian",
    "zip_code": "811100",
    "parent_code": "630200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "632200",
    "label": "海北藏族自治州",
    "value": "haibeizangzuzizhizhou",
    "zip_code": "812200",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "632221",
    "label": "门源回族自治县",
    "value": "menyuanhuizuzizhixian",
    "zip_code": "810300",
    "parent_code": "632200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "632222",
    "label": "祁连县",
    "value": "qilianxian",
    "zip_code": "810400",
    "parent_code": "632200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "632223",
    "label": "海晏县",
    "value": "haiyanxian",
    "zip_code": "812200",
    "parent_code": "632200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "632224",
    "label": "刚察县",
    "value": "gangchaxian",
    "zip_code": "812300",
    "parent_code": "632200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "632300",
    "label": "黄南藏族自治州",
    "value": "huangnanzangzuzizhizhou",
    "zip_code": "811300",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "632321",
    "label": "同仁县",
    "value": "tongrenxian",
    "zip_code": "811300",
    "parent_code": "632300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "632322",
    "label": "尖扎县",
    "value": "jianzhaxian",
    "zip_code": "811200",
    "parent_code": "632300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "632323",
    "label": "泽库县",
    "value": "zekuxian",
    "zip_code": "811400",
    "parent_code": "632300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "632324",
    "label": "河南蒙古族自治县",
    "value": "henanmengguzuzizhixian",
    "zip_code": "811500",
    "parent_code": "632300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "632500",
    "label": "海南藏族自治州",
    "value": "hainanzangzuzizhizhou",
    "zip_code": "813000",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "632521",
    "label": "共和县",
    "value": "gonghexian",
    "zip_code": "813000",
    "parent_code": "632500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "632522",
    "label": "同德县",
    "value": "tongdexian",
    "zip_code": "813200",
    "parent_code": "632500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "632523",
    "label": "贵德县",
    "value": "guidexian",
    "zip_code": "811700",
    "parent_code": "632500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "632524",
    "label": "兴海县",
    "value": "xinghaixian",
    "zip_code": "813300",
    "parent_code": "632500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "632525",
    "label": "贵南县",
    "value": "guinanxian",
    "zip_code": "813100",
    "parent_code": "632500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "632600",
    "label": "果洛藏族自治州",
    "value": "guoluozangzuzizhizhou",
    "zip_code": "814000",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "632621",
    "label": "玛沁县",
    "value": "maqinxian",
    "zip_code": "814000",
    "parent_code": "632600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "632622",
    "label": "班玛县",
    "value": "banmaxian",
    "zip_code": "814300",
    "parent_code": "632600",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "632623",
    "label": "甘德县",
    "value": "gandexian",
    "zip_code": "814100",
    "parent_code": "632600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "632624",
    "label": "达日县",
    "value": "darixian",
    "zip_code": "814200",
    "parent_code": "632600",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "632625",
    "label": "久治县",
    "value": "jiuzhixian",
    "zip_code": "624700",
    "parent_code": "632600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "632626",
    "label": "玛多县",
    "value": "maduoxian",
    "zip_code": "813500",
    "parent_code": "632600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "632700",
    "label": "玉树藏族自治州",
    "value": "yushuzangzuzizhizhou",
    "zip_code": "815000",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "632701",
    "label": "玉树市",
    "value": "yushushi",
    "zip_code": "815000",
    "parent_code": "632700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "632722",
    "label": "杂多县",
    "value": "zaduoxian",
    "zip_code": "815300",
    "parent_code": "632700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "632723",
    "label": "称多县",
    "value": "chengduoxian",
    "zip_code": "815100",
    "parent_code": "632700",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "632724",
    "label": "治多县",
    "value": "zhiduoxian",
    "zip_code": "815400",
    "parent_code": "632700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "632725",
    "label": "囊谦县",
    "value": "nangqianxian",
    "zip_code": "815200",
    "parent_code": "632700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "632726",
    "label": "曲麻莱县",
    "value": "qumalaixian",
    "zip_code": "815500",
    "parent_code": "632700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "632800",
    "label": "海西蒙古族藏族自治州",
    "value": "haiximengguzuzangzuzizhizhou",
    "zip_code": "817000",
    "parent_code": "630000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "632801",
    "label": "格尔木市",
    "value": "geermushi",
    "zip_code": "816000",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "632802",
    "label": "德令哈市",
    "value": "delinghashi",
    "zip_code": "817000",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "632821",
    "label": "乌兰县",
    "value": "wulanxian",
    "zip_code": "817100",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "632822",
    "label": "都兰县",
    "value": "dulanxian",
    "zip_code": "816100",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "632823",
    "label": "天峻县",
    "value": "tianjunxian",
    "zip_code": "817200",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "632824",
    "label": "冷湖行政委员会",
    "value": "lenghuxingzhengweiyuanhui",
    "zip_code": "816300",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "632825",
    "label": "大柴旦行政委员会",
    "value": "dachaidanxingzhengweiyuanhui",
    "zip_code": "817000",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "632826",
    "label": "茫崖行政委员会",
    "value": "mangyaxingzhengweiyuanhui",
    "zip_code": "817000",
    "parent_code": "632800",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "640000",
    "label": "宁夏回族自治区",
    "value": "ningxiahuizuzizhiqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "N"
  },
  {
    "code": "640100",
    "label": "银川市",
    "value": "yinchuanshi",
    "zip_code": "750000",
    "parent_code": "640000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "640104",
    "label": "兴庆区",
    "value": "xingqingqu",
    "zip_code": "750001",
    "parent_code": "640100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "640105",
    "label": "西夏区",
    "value": "xixiaqu",
    "zip_code": "750021",
    "parent_code": "640100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "640106",
    "label": "金凤区",
    "value": "jinfengqu",
    "zip_code": "750011",
    "parent_code": "640100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "640121",
    "label": "永宁县",
    "value": "yongningxian",
    "zip_code": "750100",
    "parent_code": "640100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "640122",
    "label": "贺兰县",
    "value": "helanxian",
    "zip_code": "750200",
    "parent_code": "640100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "640181",
    "label": "灵武市",
    "value": "lingwushi",
    "zip_code": "750004",
    "parent_code": "640100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "640200",
    "label": "石嘴山市",
    "value": "shizuishanshi",
    "zip_code": "753000",
    "parent_code": "640000",
    "type": 1,
    "first_letter": "S"
  },
  {
    "code": "640202",
    "label": "大武口区",
    "value": "dawukouqu",
    "zip_code": "753000",
    "parent_code": "640200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "640205",
    "label": "惠农区",
    "value": "huinongqu",
    "zip_code": "753600",
    "parent_code": "640200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "640221",
    "label": "平罗县",
    "value": "pingluoxian",
    "zip_code": "753400",
    "parent_code": "640200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "640300",
    "label": "吴忠市",
    "value": "wuzhongshi",
    "zip_code": "751100",
    "parent_code": "640000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "640302",
    "label": "利通区",
    "value": "litongqu",
    "zip_code": "751100",
    "parent_code": "640300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "640303",
    "label": "红寺堡区",
    "value": "hongsibuqu",
    "zip_code": "751100",
    "parent_code": "640300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "640323",
    "label": "盐池县",
    "value": "yanchixian",
    "zip_code": "751500",
    "parent_code": "640300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "640324",
    "label": "同心县",
    "value": "tongxinxian",
    "zip_code": "751300",
    "parent_code": "640300",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "640381",
    "label": "青铜峡市",
    "value": "qingtongxiashi",
    "zip_code": "751600",
    "parent_code": "640300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "640400",
    "label": "固原市",
    "value": "guyuanshi",
    "zip_code": "756000",
    "parent_code": "640000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "640402",
    "label": "原州区",
    "value": "yuanzhouqu",
    "zip_code": "756000",
    "parent_code": "640400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "640422",
    "label": "西吉县",
    "value": "xijixian",
    "zip_code": "756200",
    "parent_code": "640400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "640423",
    "label": "隆德县",
    "value": "longdexian",
    "zip_code": "756300",
    "parent_code": "640400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "640424",
    "label": "泾源县",
    "value": "jingyuanxian",
    "zip_code": "756400",
    "parent_code": "640400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "640425",
    "label": "彭阳县",
    "value": "pengyangxian",
    "zip_code": "756500",
    "parent_code": "640400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "640500",
    "label": "中卫市",
    "value": "zhongweishi",
    "zip_code": "751700",
    "parent_code": "640000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "640502",
    "label": "沙坡头区",
    "value": "shapotouqu",
    "zip_code": "755000",
    "parent_code": "640500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "640521",
    "label": "中宁县",
    "value": "zhongningxian",
    "zip_code": "755000",
    "parent_code": "640500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "640522",
    "label": "海原县",
    "value": "haiyuanxian",
    "zip_code": "755200",
    "parent_code": "640500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "650000",
    "label": "新疆维吾尔自治区",
    "value": "xinjiangweiwuerzizhiqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "X"
  },
  {
    "code": "650100",
    "label": "乌鲁木齐市",
    "value": "wulumuqishi",
    "zip_code": "830000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "W"
  },
  {
    "code": "650102",
    "label": "天山区",
    "value": "tianshanqu",
    "zip_code": "830000",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "650103",
    "label": "沙依巴克区",
    "value": "shayibakequ",
    "zip_code": "830002",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "650104",
    "label": "新市区",
    "value": "xinshiqu",
    "zip_code": "830011",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "650105",
    "label": "水磨沟区",
    "value": "shuimogouqu",
    "zip_code": "830017",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "650106",
    "label": "头屯河区",
    "value": "toutunhequ",
    "zip_code": "830022",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "650107",
    "label": "达坂城区",
    "value": "dabanchengqu",
    "zip_code": "830039",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "650109",
    "label": "米东区",
    "value": "midongqu",
    "zip_code": "830019",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "650121",
    "label": "乌鲁木齐县",
    "value": "wulumuqixian",
    "zip_code": "830063",
    "parent_code": "650100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "650200",
    "label": "克拉玛依市",
    "value": "kelamayishi",
    "zip_code": "834000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "K"
  },
  {
    "code": "650202",
    "label": "独山子区",
    "value": "dushanziqu",
    "zip_code": "834021",
    "parent_code": "650200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "650203",
    "label": "克拉玛依区",
    "value": "kelamayiqu",
    "zip_code": "834000",
    "parent_code": "650200",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "650204",
    "label": "白碱滩区",
    "value": "baijiantanqu",
    "zip_code": "834008",
    "parent_code": "650200",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "650205",
    "label": "乌尔禾区",
    "value": "wuerhequ",
    "zip_code": "834012",
    "parent_code": "650200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "650400",
    "label": "吐鲁番市",
    "value": "tulufanshi",
    "zip_code": "838000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "650402",
    "label": "高昌区",
    "value": "gaochangqu",
    "zip_code": "838000",
    "parent_code": "650400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "650421",
    "label": "鄯善县",
    "value": "shanshanxian",
    "zip_code": "838200",
    "parent_code": "650400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "650422",
    "label": "托克逊县",
    "value": "tuokexunxian",
    "zip_code": "838100",
    "parent_code": "650400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "650500",
    "label": "哈密市",
    "value": "hamishi",
    "zip_code": "839000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "650502",
    "label": "伊州区",
    "value": "yizhouqu",
    "zip_code": "839000",
    "parent_code": "650500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "650521",
    "label": "巴里坤哈萨克自治县",
    "value": "balikunhasakezizhixian",
    "zip_code": "839200",
    "parent_code": "650500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "650522",
    "label": "伊吾县",
    "value": "yiwuxian",
    "zip_code": "839300",
    "parent_code": "650500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "652300",
    "label": "昌吉回族自治州",
    "value": "changjihuizuzizhizhou",
    "zip_code": "831100",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "C"
  },
  {
    "code": "652301",
    "label": "昌吉市",
    "value": "changjishi",
    "zip_code": "831100",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "652302",
    "label": "阜康市",
    "value": "fukangshi",
    "zip_code": "831500",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "652323",
    "label": "呼图壁县",
    "value": "hutubixian",
    "zip_code": "831200",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "652324",
    "label": "玛纳斯县",
    "value": "manasixian",
    "zip_code": "832200",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "652325",
    "label": "奇台县",
    "value": "qitaixian",
    "zip_code": "831800",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "652327",
    "label": "吉木萨尔县",
    "value": "jimusaerxian",
    "zip_code": "831700",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "652328",
    "label": "木垒哈萨克自治县",
    "value": "muleihasakezizhixian",
    "zip_code": "831900",
    "parent_code": "652300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "652700",
    "label": "博尔塔拉蒙古自治州",
    "value": "boertalamengguzizhizhou",
    "zip_code": "833400",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "652701",
    "label": "博乐市",
    "value": "boleshi",
    "zip_code": "833400",
    "parent_code": "652700",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "652702",
    "label": "阿拉山口市",
    "value": "alashankoushi",
    "zip_code": "833400",
    "parent_code": "652700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "652722",
    "label": "精河县",
    "value": "jinghexian",
    "zip_code": "833300",
    "parent_code": "652700",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "652723",
    "label": "温泉县",
    "value": "wenquanxian",
    "zip_code": "833500",
    "parent_code": "652700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "652800",
    "label": "巴音郭楞蒙古自治州",
    "value": "bayinguolengmengguzizhizhou",
    "zip_code": "841000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "B"
  },
  {
    "code": "652801",
    "label": "库尔勒市",
    "value": "kuerleishi",
    "zip_code": "841000",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "652822",
    "label": "轮台县",
    "value": "luntaixian",
    "zip_code": "841600",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "652823",
    "label": "尉犁县",
    "value": "weilixian",
    "zip_code": "841500",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "652824",
    "label": "若羌县",
    "value": "ruoqiangxian",
    "zip_code": "841800",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "652825",
    "label": "且末县",
    "value": "qiemoxian",
    "zip_code": "841900",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "652826",
    "label": "焉耆回族自治县",
    "value": "yanqihuizuzizhixian",
    "zip_code": "841100",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "652827",
    "label": "和静县",
    "value": "hejingxian",
    "zip_code": "841300",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "652828",
    "label": "和硕县",
    "value": "heshuoxian",
    "zip_code": "841200",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "652829",
    "label": "博湖县",
    "value": "bohuxian",
    "zip_code": "841400",
    "parent_code": "652800",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "652900",
    "label": "阿克苏地区",
    "value": "akesudiqu",
    "zip_code": "843000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "652901",
    "label": "阿克苏市",
    "value": "akesushi",
    "zip_code": "843000",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "652922",
    "label": "温宿县",
    "value": "wensuxian",
    "zip_code": "843100",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "652923",
    "label": "库车县",
    "value": "kuchexian",
    "zip_code": "842000",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "652924",
    "label": "沙雅县",
    "value": "shayaxian",
    "zip_code": "842200",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "652925",
    "label": "新和县",
    "value": "xinhexian",
    "zip_code": "842100",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "652926",
    "label": "拜城县",
    "value": "baichengxian",
    "zip_code": "842300",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "652927",
    "label": "乌什县",
    "value": "wushixian",
    "zip_code": "843400",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "652928",
    "label": "阿瓦提县",
    "value": "awatixian",
    "zip_code": "843200",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "652929",
    "label": "柯坪县",
    "value": "kepingxian",
    "zip_code": "843600",
    "parent_code": "652900",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "653000",
    "label": "克孜勒苏柯尔克孜自治州",
    "value": "kezileisukeerkezizizhizhou",
    "zip_code": "845350",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "K"
  },
  {
    "code": "653001",
    "label": "阿图什市",
    "value": "atushishi",
    "zip_code": "845350",
    "parent_code": "653000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "653022",
    "label": "阿克陶县",
    "value": "aketaoxian",
    "zip_code": "845550",
    "parent_code": "653000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "653023",
    "label": "阿合奇县",
    "value": "aheqixian",
    "zip_code": "843500",
    "parent_code": "653000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "653024",
    "label": "乌恰县",
    "value": "wuqiaxian",
    "zip_code": "845450",
    "parent_code": "653000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "653100",
    "label": "喀什地区",
    "value": "kashidiqu",
    "zip_code": "844000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "K"
  },
  {
    "code": "653101",
    "label": "喀什市",
    "value": "kashishi",
    "zip_code": "844000",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "653121",
    "label": "疏附县",
    "value": "shufuxian",
    "zip_code": "844100",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "653122",
    "label": "疏勒县",
    "value": "shuleixian",
    "zip_code": "844200",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "653123",
    "label": "英吉沙县",
    "value": "yingjishaxian",
    "zip_code": "844500",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "653124",
    "label": "泽普县",
    "value": "zepuxian",
    "zip_code": "844800",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "653125",
    "label": "莎车县",
    "value": "shachexian",
    "zip_code": "844700",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "653126",
    "label": "叶城县",
    "value": "xechengxian",
    "zip_code": "844900",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "653127",
    "label": "麦盖提县",
    "value": "maigaitixian",
    "zip_code": "844600",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "653128",
    "label": "岳普湖县",
    "value": "yuepuhuxian",
    "zip_code": "844400",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "653129",
    "label": "伽师县",
    "value": "gashixian",
    "zip_code": "844300",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "653130",
    "label": "巴楚县",
    "value": "bachuxian",
    "zip_code": "843800",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "653131",
    "label": "塔什库尔干塔吉克自治县",
    "value": "tashikuergantajikezizhixian",
    "zip_code": "845250",
    "parent_code": "653100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "653200",
    "label": "和田地区",
    "value": "hetiandiqu",
    "zip_code": "848000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "653201",
    "label": "和田市",
    "value": "hetianshi",
    "zip_code": "848000",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "653221",
    "label": "和田县",
    "value": "hetianxian",
    "zip_code": "848000",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "653222",
    "label": "墨玉县",
    "value": "moyuxian",
    "zip_code": "848100",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "653223",
    "label": "皮山县",
    "value": "pishanxian",
    "zip_code": "845150",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "653224",
    "label": "洛浦县",
    "value": "luopuxian",
    "zip_code": "848200",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "653225",
    "label": "策勒县",
    "value": "celeixian",
    "zip_code": "848300",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "653226",
    "label": "于田县",
    "value": "yutianxian",
    "zip_code": "848400",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "653227",
    "label": "民丰县",
    "value": "minfengxian",
    "zip_code": "848500",
    "parent_code": "653200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "654000",
    "label": "伊犁哈萨克自治州",
    "value": "yilihasakezizhizhou",
    "zip_code": "835000",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "654002",
    "label": "伊宁市",
    "value": "yiningshi",
    "zip_code": "835000",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "654003",
    "label": "奎屯市",
    "value": "kuitunshi",
    "zip_code": "833200",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "654004",
    "label": "霍尔果斯市",
    "value": "huoerguosishi",
    "zip_code": "835100",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "654021",
    "label": "伊宁县",
    "value": "yiningxian",
    "zip_code": "835100",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "654022",
    "label": "察布查尔锡伯自治县",
    "value": "chabuchaerxibaizizhixian",
    "zip_code": "835300",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "654023",
    "label": "霍城县",
    "value": "huochengxian",
    "zip_code": "835200",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "654024",
    "label": "巩留县",
    "value": "gongliuxian",
    "zip_code": "835400",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "654025",
    "label": "新源县",
    "value": "xinyuanxian",
    "zip_code": "835800",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "654026",
    "label": "昭苏县",
    "value": "zhaosuxian",
    "zip_code": "835600",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "654027",
    "label": "特克斯县",
    "value": "tekesixian",
    "zip_code": "835500",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "654028",
    "label": "尼勒克县",
    "value": "nileikexian",
    "zip_code": "835700",
    "parent_code": "654000",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "654200",
    "label": "塔城地区",
    "value": "tachengdiqu",
    "zip_code": "834700",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "654201",
    "label": "塔城市",
    "value": "tachengshi",
    "zip_code": "834700",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "654202",
    "label": "乌苏市",
    "value": "wusushi",
    "zip_code": "833300",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "654203",
    "label": "沙湾市",
    "value": "shawanshi",
    "zip_code": "832100",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "654221",
    "label": "额敏县",
    "value": "eminxian",
    "zip_code": "834600",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "654224",
    "label": "托里县",
    "value": "tuolixian",
    "zip_code": "834500",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "654225",
    "label": "裕民县",
    "value": "yuminxian",
    "zip_code": "834800",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "654226",
    "label": "和布克赛尔蒙古自治县",
    "value": "hebukesaiermengguzizhixian",
    "zip_code": "834400",
    "parent_code": "654200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "654300",
    "label": "阿勒泰地区",
    "value": "aletaidiqu",
    "zip_code": "836500",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "654301",
    "label": "阿勒泰市",
    "value": "aletaishi",
    "zip_code": "836500",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "654321",
    "label": "布尔津县",
    "value": "buerjinxian",
    "zip_code": "836600",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "654322",
    "label": "富蕴县",
    "value": "fuyunxian",
    "zip_code": "836100",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "654323",
    "label": "福海县",
    "value": "fuhaixian",
    "zip_code": "836400",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "654324",
    "label": "哈巴河县",
    "value": "habahexian",
    "zip_code": "836700",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "654325",
    "label": "青河县",
    "value": "qinghexian",
    "zip_code": "836200",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "654326",
    "label": "吉木乃县",
    "value": "jimunaixian",
    "zip_code": "836800",
    "parent_code": "654300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "659000",
    "label": "自治区直辖县级行政区划",
    "value": "zizhiquzhixiaxianjixingzhengquhua",
    "zip_code": "0",
    "parent_code": "650000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "659001",
    "label": "石河子市",
    "value": "shihezishi",
    "zip_code": "832000",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "659002",
    "label": "阿拉尔市",
    "value": "alaershi",
    "zip_code": "843300",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "659003",
    "label": "图木舒克市",
    "value": "tumushukeshi",
    "zip_code": "843806",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "659004",
    "label": "五家渠市",
    "value": "wujiaqushi",
    "zip_code": "831300",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "659005",
    "label": "北屯市",
    "value": "beitunshi",
    "zip_code": "836000",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "659006",
    "label": "铁门关市",
    "value": "tiemenguanshi",
    "zip_code": "831300",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "659007",
    "label": "双河市",
    "value": "shuangheshi",
    "zip_code": "833408",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "659008",
    "label": "可克达拉市",
    "value": "kekedalashi",
    "zip_code": "835213",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "659009",
    "label": "昆玉市",
    "value": "kunyushi",
    "zip_code": "848116",
    "parent_code": "659000",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "710000",
    "label": "台湾省",
    "value": "taiwansheng",
    "zip_code": "0",
    "type": 0,
    "first_letter": "T"
  },
  {
    "code": "710100",
    "label": "台北市",
    "value": "taibeishi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "710101",
    "label": "中正区",
    "value": "zhongzhengqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710102",
    "label": "大同区",
    "value": "datongqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710103",
    "label": "中山区",
    "value": "zhongshanqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710104",
    "label": "松山区",
    "value": "songshanqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710105",
    "label": "大安区",
    "value": "daanqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710106",
    "label": "万华区",
    "value": "wanhuaqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "710107",
    "label": "信义区",
    "value": "xinyiqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710108",
    "label": "士林区",
    "value": "shilinqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710109",
    "label": "北投区",
    "value": "beitouqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710110",
    "label": "内湖区",
    "value": "neihuqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710111",
    "label": "南港区",
    "value": "nangangqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710112",
    "label": "文山区",
    "value": "wenshanqu",
    "zip_code": "0",
    "parent_code": "710100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "710200",
    "label": "高雄市",
    "value": "gaoxiongshi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "G"
  },
  {
    "code": "710201",
    "label": "新兴区",
    "value": "xinxingqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710202",
    "label": "前金区",
    "value": "qianjinqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710203",
    "label": "苓雅区",
    "value": "lingyaqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710204",
    "label": "盐埕区",
    "value": "yanchengqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710205",
    "label": "鼓山区",
    "value": "gushanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "710206",
    "label": "旗津区",
    "value": "qijinqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710207",
    "label": "前镇区",
    "value": "qianzhenqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710208",
    "label": "三民区",
    "value": "sanminqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710209",
    "label": "左营区",
    "value": "zuoyingqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710210",
    "label": "楠梓区",
    "value": "nanziqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710211",
    "label": "小港区",
    "value": "xiaogangqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710242",
    "label": "仁武区",
    "value": "renwuqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "710243",
    "label": "大社区",
    "value": "dashequ",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710244",
    "label": "冈山区",
    "value": "gangshanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "710245",
    "label": "路竹区",
    "value": "luzhuqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710246",
    "label": "阿莲区",
    "value": "alianqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "710247",
    "label": "田寮区",
    "value": "tianliaoqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "710248",
    "label": "燕巢区",
    "value": "yanchaoqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710249",
    "label": "桥头区",
    "value": "qiaotouqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710250",
    "label": "梓官区",
    "value": "ziguanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710251",
    "label": "弥陀区",
    "value": "mituoqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "710252",
    "label": "永安区",
    "value": "yonganqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710253",
    "label": "湖内区",
    "value": "huneiqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "710254",
    "label": "凤山区",
    "value": "fengshanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "710255",
    "label": "大寮区",
    "value": "daliaoqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710256",
    "label": "林园区",
    "value": "linyuanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710257",
    "label": "鸟松区",
    "value": "niaosongqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710258",
    "label": "大树区",
    "value": "dashuqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710259",
    "label": "旗山区",
    "value": "qishanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710260",
    "label": "美浓区",
    "value": "meinongqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "710261",
    "label": "六龟区",
    "value": "liuguiqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710262",
    "label": "内门区",
    "value": "neimenqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710263",
    "label": "杉林区",
    "value": "shanlinqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710264",
    "label": "甲仙区",
    "value": "jiaxianqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "710265",
    "label": "桃源区",
    "value": "taoyuanqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "710266",
    "label": "那玛夏区",
    "value": "namaxiaqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710267",
    "label": "茂林区",
    "value": "maolinqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "710268",
    "label": "茄萣区",
    "value": "qiedingqu",
    "zip_code": "0",
    "parent_code": "710200",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710300",
    "label": "台南市",
    "value": "tainanshi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "710301",
    "label": "中西区",
    "value": "zhongxiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710302",
    "label": "东区",
    "value": "dongqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710303",
    "label": "南区",
    "value": "nanqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710304",
    "label": "北区",
    "value": "beiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710305",
    "label": "安平区",
    "value": "anpingqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "710306",
    "label": "安南区",
    "value": "annanqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "710339",
    "label": "永康区",
    "value": "yongkangqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710340",
    "label": "归仁区",
    "value": "guirenqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "710341",
    "label": "新化区",
    "value": "xinhuaqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710342",
    "label": "左镇区",
    "value": "zuozhenqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710343",
    "label": "玉井区",
    "value": "yujingqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710344",
    "label": "楠西区",
    "value": "nanxiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710345",
    "label": "南化区",
    "value": "nanhuaqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710346",
    "label": "仁德区",
    "value": "rendequ",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "710347",
    "label": "关庙区",
    "value": "guanmiaoqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "710348",
    "label": "龙崎区",
    "value": "longqiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710349",
    "label": "官田区",
    "value": "guantianqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "710350",
    "label": "麻豆区",
    "value": "madouqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "710351",
    "label": "佳里区",
    "value": "jialiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "710352",
    "label": "西港区",
    "value": "xigangqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710353",
    "label": "七股区",
    "value": "qiguqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710354",
    "label": "将军区",
    "value": "jiangjunqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "710355",
    "label": "学甲区",
    "value": "xuejiaqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710356",
    "label": "北门区",
    "value": "beimenqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710357",
    "label": "新营区",
    "value": "xinyingqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710358",
    "label": "后壁区",
    "value": "houbiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "710359",
    "label": "白河区",
    "value": "baihequ",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710360",
    "label": "东山区",
    "value": "dongshanqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710361",
    "label": "六甲区",
    "value": "liujiaqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710362",
    "label": "下营区",
    "value": "xiayingqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710363",
    "label": "柳营区",
    "value": "liuyingqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710364",
    "label": "盐水区",
    "value": "yanshuiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710365",
    "label": "善化区",
    "value": "shanhuaqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710366",
    "label": "大内区",
    "value": "daneiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710367",
    "label": "山上区",
    "value": "shanshangqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710368",
    "label": "新市区",
    "value": "xinshiqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710369",
    "label": "安定区",
    "value": "andingqu",
    "zip_code": "0",
    "parent_code": "710300",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "710400",
    "label": "台中市",
    "value": "taizhongshi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "710401",
    "label": "中区",
    "value": "zhongqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710402",
    "label": "东区",
    "value": "dongqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710403",
    "label": "南区",
    "value": "nanqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710404",
    "label": "西区",
    "value": "xiqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710405",
    "label": "北区",
    "value": "beiqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710406",
    "label": "北屯区",
    "value": "beitunqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710407",
    "label": "西屯区",
    "value": "xitunqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710408",
    "label": "南屯区",
    "value": "nantunqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710431",
    "label": "太平区",
    "value": "taipingqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "710432",
    "label": "大里区",
    "value": "daliqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710433",
    "label": "雾峰区",
    "value": "wufengqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "710434",
    "label": "乌日区",
    "value": "wuriqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "710435",
    "label": "丰原区",
    "value": "fengyuanqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "710436",
    "label": "后里区",
    "value": "houliqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "710437",
    "label": "石冈区",
    "value": "shigangqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710438",
    "label": "东势区",
    "value": "dongshiqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710439",
    "label": "和平区",
    "value": "hepingqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "710440",
    "label": "新社区",
    "value": "xinshequ",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710441",
    "label": "潭子区",
    "value": "tanziqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "710442",
    "label": "大雅区",
    "value": "dayaqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710443",
    "label": "神冈区",
    "value": "shengangqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710444",
    "label": "大肚区",
    "value": "daduqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710445",
    "label": "沙鹿区",
    "value": "shaluqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710446",
    "label": "龙井区",
    "value": "longjingqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710447",
    "label": "梧栖区",
    "value": "wuxiqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "710448",
    "label": "清水区",
    "value": "qingshuiqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710449",
    "label": "大甲区",
    "value": "dajiaqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710450",
    "label": "外埔区",
    "value": "waipuqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "710451",
    "label": "大安区",
    "value": "daanqu",
    "zip_code": "0",
    "parent_code": "710400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710600",
    "label": "南投县",
    "value": "nantouxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "N"
  },
  {
    "code": "710614",
    "label": "南投市",
    "value": "nantoushi",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710615",
    "label": "中寮乡",
    "value": "zhongliaoxiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710616",
    "label": "草屯镇",
    "value": "caotunzhen",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "710617",
    "label": "国姓乡",
    "value": "guoxingxiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "710618",
    "label": "埔里镇",
    "value": "pulizhen",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "710619",
    "label": "仁爱乡",
    "value": "renaixiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "710620",
    "label": "名间乡",
    "value": "mingjianxiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "710621",
    "label": "集集镇",
    "value": "jijizhen",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "710622",
    "label": "水里乡",
    "value": "shuilixiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "710623",
    "label": "鱼池乡",
    "value": "yuchixiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "710624",
    "label": "信义乡",
    "value": "xinyixiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710625",
    "label": "竹山镇",
    "value": "zhushanzhen",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710626",
    "label": "鹿谷乡",
    "value": "luguxiang",
    "zip_code": "0",
    "parent_code": "710600",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "710700",
    "label": "基隆市",
    "value": "jilongshi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "710701",
    "label": "仁爱区",
    "value": "renaiqu",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "710702",
    "label": "信义区",
    "value": "xinyiqu",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710703",
    "label": "中正区",
    "value": "zhongzhengqu",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710704",
    "label": "中山区",
    "value": "zhongshanqu",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "710705",
    "label": "安乐区",
    "value": "anlequ",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "710706",
    "label": "暖暖区",
    "value": "nuannuanqu",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "710707",
    "label": "七堵区",
    "value": "qiduqu",
    "zip_code": "0",
    "parent_code": "710700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "710800",
    "label": "新竹市",
    "value": "xinzhushi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "710801",
    "label": "东区",
    "value": "dongqu",
    "zip_code": "0",
    "parent_code": "710800",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710802",
    "label": "北区",
    "value": "beiqu",
    "zip_code": "0",
    "parent_code": "710800",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "710803",
    "label": "香山区",
    "value": "xiangshanqu",
    "zip_code": "0",
    "parent_code": "710800",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "710900",
    "label": "嘉义市",
    "value": "jiayishi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "710901",
    "label": "东区",
    "value": "dongqu",
    "zip_code": "0",
    "parent_code": "710900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "710902",
    "label": "西区",
    "value": "xiqu",
    "zip_code": "0",
    "parent_code": "710900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711100",
    "label": "新北市",
    "value": "xinbeishi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "711130",
    "label": "万里区",
    "value": "wanliqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "711131",
    "label": "金山区",
    "value": "jinshanqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "711132",
    "label": "板桥区",
    "value": "banqiaoqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "711133",
    "label": "汐止区",
    "value": "xizhiqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711134",
    "label": "深坑区",
    "value": "shenkengqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711135",
    "label": "石碇区",
    "value": "shidingqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711136",
    "label": "瑞芳区",
    "value": "ruifangqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "711137",
    "label": "平溪区",
    "value": "pingxiqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711138",
    "label": "双溪区",
    "value": "shuangxiqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711139",
    "label": "贡寮区",
    "value": "gongliaoqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "711140",
    "label": "新店区",
    "value": "xindianqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711141",
    "label": "坪林区",
    "value": "pinglinqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711142",
    "label": "乌来区",
    "value": "wulaiqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "711143",
    "label": "永和区",
    "value": "yonghequ",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711144",
    "label": "中和区",
    "value": "zhonghequ",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711145",
    "label": "土城区",
    "value": "tuchengqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711146",
    "label": "三峡区",
    "value": "sanxiaqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711147",
    "label": "树林区",
    "value": "shulinqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711148",
    "label": "莺歌区",
    "value": "yinggequ",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711149",
    "label": "三重区",
    "value": "sanchongqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711150",
    "label": "新庄区",
    "value": "xinzhuangqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711151",
    "label": "泰山区",
    "value": "taishanqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711152",
    "label": "林口区",
    "value": "linkouqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711153",
    "label": "芦洲区",
    "value": "luzhouqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711154",
    "label": "五股区",
    "value": "wuguqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "711155",
    "label": "八里区",
    "value": "baliqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "711156",
    "label": "淡水区",
    "value": "danshuiqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711157",
    "label": "三芝区",
    "value": "sanzhiqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711158",
    "label": "石门区",
    "value": "shimenqu",
    "zip_code": "0",
    "parent_code": "711100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711200",
    "label": "宜兰县",
    "value": "yilanxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "711214",
    "label": "宜兰市",
    "value": "yilanshi",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711215",
    "label": "头城镇",
    "value": "touchengzhen",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711216",
    "label": "礁溪乡",
    "value": "jiaoxixiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "711217",
    "label": "壮围乡",
    "value": "zhuangweixiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711218",
    "label": "员山乡",
    "value": "yuanshanxiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711219",
    "label": "罗东镇",
    "value": "luodongzhen",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711220",
    "label": "三星乡",
    "value": "sanxingxiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711221",
    "label": "大同乡",
    "value": "datongxiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711222",
    "label": "五结乡",
    "value": "wujiexiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "711223",
    "label": "冬山乡",
    "value": "dongshanxiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711224",
    "label": "苏澳镇",
    "value": "suaozhen",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711225",
    "label": "南澳乡",
    "value": "nanaoxiang",
    "zip_code": "0",
    "parent_code": "711200",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "711300",
    "label": "新竹县",
    "value": "xinzhuxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "711314",
    "label": "竹北市",
    "value": "zhubeishi",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711315",
    "label": "湖口乡",
    "value": "hukouxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "711316",
    "label": "新丰乡",
    "value": "xinfengxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711317",
    "label": "新埔镇",
    "value": "xinpuzhen",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711318",
    "label": "关西镇",
    "value": "guanxizhen",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "711319",
    "label": "芎林乡",
    "value": "xionglinxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711320",
    "label": "宝山乡",
    "value": "baoshanxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "711321",
    "label": "竹东镇",
    "value": "zhudongzhen",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711322",
    "label": "五峰乡",
    "value": "wufengxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "711323",
    "label": "横山乡",
    "value": "hengshanxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "711324",
    "label": "尖石乡",
    "value": "jianshixiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "711325",
    "label": "北埔乡",
    "value": "beipuxiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "711326",
    "label": "峨眉乡",
    "value": "emeixiang",
    "zip_code": "0",
    "parent_code": "711300",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "711400",
    "label": "桃园市",
    "value": "taoyuanshi",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "711414",
    "label": "中坜区",
    "value": "zhongliqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711415",
    "label": "平镇区",
    "value": "pingzhenqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711416",
    "label": "龙潭区",
    "value": "longtanqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711417",
    "label": "杨梅区",
    "value": "yangmeiqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711418",
    "label": "新屋区",
    "value": "xinwuqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711419",
    "label": "观音区",
    "value": "guanyinqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "711420",
    "label": "桃园区",
    "value": "taoyuanqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711421",
    "label": "龟山区",
    "value": "guishanqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "711422",
    "label": "八德区",
    "value": "badequ",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "711423",
    "label": "大溪区",
    "value": "daxiqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711424",
    "label": "复兴区",
    "value": "fuxingqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "711425",
    "label": "大园区",
    "value": "dayuanqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711426",
    "label": "芦竹区",
    "value": "luzhuqu",
    "zip_code": "0",
    "parent_code": "711400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711500",
    "label": "苗栗县",
    "value": "miaolixian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "M"
  },
  {
    "code": "711519",
    "label": "竹南镇",
    "value": "zhunanzhen",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711520",
    "label": "头份市",
    "value": "toufenshi",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711521",
    "label": "三湾乡",
    "value": "sanwanxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711522",
    "label": "南庄乡",
    "value": "nanzhuangxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "711523",
    "label": "狮潭乡",
    "value": "shitanxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711524",
    "label": "后龙镇",
    "value": "houlongzhen",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "711525",
    "label": "通霄镇",
    "value": "tongxiaozhen",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711526",
    "label": "苑里镇",
    "value": "yuanlizhen",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711527",
    "label": "苗栗市",
    "value": "miaolishi",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "711528",
    "label": "造桥乡",
    "value": "zaoqiaoxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711529",
    "label": "头屋乡",
    "value": "touwuxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711530",
    "label": "公馆乡",
    "value": "gongguanxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "711531",
    "label": "大湖乡",
    "value": "dahuxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711532",
    "label": "泰安乡",
    "value": "taianxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711533",
    "label": "铜锣乡",
    "value": "tongluoxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711534",
    "label": "三义乡",
    "value": "sanyixiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711535",
    "label": "西湖乡",
    "value": "xihuxiang",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711536",
    "label": "卓兰镇",
    "value": "zhuolanzhen",
    "zip_code": "0",
    "parent_code": "711500",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711700",
    "label": "彰化县",
    "value": "zhanghuaxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "Z"
  },
  {
    "code": "711727",
    "label": "彰化市",
    "value": "zhanghuashi",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711728",
    "label": "芬园乡",
    "value": "fenyuanxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "711729",
    "label": "花坛乡",
    "value": "huatanxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "711730",
    "label": "秀水乡",
    "value": "xiushuixiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711731",
    "label": "鹿港镇",
    "value": "lugangzhen",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711732",
    "label": "福兴乡",
    "value": "fuxingxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "711733",
    "label": "线西乡",
    "value": "xianxixiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711734",
    "label": "和美镇",
    "value": "hemeizhen",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "711735",
    "label": "伸港乡",
    "value": "shengangxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711736",
    "label": "员林市",
    "value": "yuanlinshi",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711737",
    "label": "社头乡",
    "value": "shetouxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711738",
    "label": "永靖乡",
    "value": "yongjingxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711739",
    "label": "埔心乡",
    "value": "puxinxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711740",
    "label": "溪湖镇",
    "value": "xihuzhen",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711741",
    "label": "大村乡",
    "value": "dacunxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711742",
    "label": "埔盐乡",
    "value": "puyanxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711743",
    "label": "田中镇",
    "value": "tianzhongzhen",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711744",
    "label": "北斗镇",
    "value": "beidouzhen",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "711745",
    "label": "田尾乡",
    "value": "tianweixiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711746",
    "label": "埤头乡",
    "value": "pitouxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711747",
    "label": "溪州乡",
    "value": "xizhouxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711748",
    "label": "竹塘乡",
    "value": "zhutangxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711749",
    "label": "二林镇",
    "value": "erlinzhen",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "711750",
    "label": "大城乡",
    "value": "dachengxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711751",
    "label": "芳苑乡",
    "value": "fangyuanxiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "711752",
    "label": "二水乡",
    "value": "ershuixiang",
    "zip_code": "0",
    "parent_code": "711700",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "711900",
    "label": "嘉义县",
    "value": "jiayixian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "J"
  },
  {
    "code": "711919",
    "label": "番路乡",
    "value": "fanluxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "711920",
    "label": "梅山乡",
    "value": "meishanxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "711921",
    "label": "竹崎乡",
    "value": "zhuqixiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711922",
    "label": "阿里山乡",
    "value": "alishanxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "711923",
    "label": "中埔乡",
    "value": "zhongpuxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "711924",
    "label": "大埔乡",
    "value": "dapuxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711925",
    "label": "水上乡",
    "value": "shuishangxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "711926",
    "label": "鹿草乡",
    "value": "lucaoxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711927",
    "label": "太保市",
    "value": "taibaoshi",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "711928",
    "label": "朴子市",
    "value": "puzishi",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "711929",
    "label": "东石乡",
    "value": "dongshixiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711930",
    "label": "六脚乡",
    "value": "liujiaoxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "711931",
    "label": "新港乡",
    "value": "xingangxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711932",
    "label": "民雄乡",
    "value": "minxiongxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "711933",
    "label": "大林镇",
    "value": "dalinzhen",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "711934",
    "label": "溪口乡",
    "value": "xikouxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "711935",
    "label": "义竹乡",
    "value": "yizhuxiang",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "711936",
    "label": "布袋镇",
    "value": "budaizhen",
    "zip_code": "0",
    "parent_code": "711900",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "712100",
    "label": "云林县",
    "value": "yunlinxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "Y"
  },
  {
    "code": "712121",
    "label": "斗南镇",
    "value": "dounanzhen",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712122",
    "label": "大埤乡",
    "value": "dapixiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712123",
    "label": "虎尾镇",
    "value": "huweizhen",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "712124",
    "label": "土库镇",
    "value": "tukuzhen",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "712125",
    "label": "褒忠乡",
    "value": "baozhongxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "712126",
    "label": "东势乡",
    "value": "dongshixiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712127",
    "label": "台西乡",
    "value": "taixixiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "712128",
    "label": "仑背乡",
    "value": "lunbeixiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712129",
    "label": "麦寮乡",
    "value": "mailiaoxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "712130",
    "label": "斗六市",
    "value": "douliushi",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712131",
    "label": "林内乡",
    "value": "linneixiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712132",
    "label": "古坑乡",
    "value": "gukengxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "712133",
    "label": "莿桐乡",
    "value": "citongxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712134",
    "label": "西螺镇",
    "value": "xiluozhen",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "712135",
    "label": "二仑乡",
    "value": "erlunxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "E"
  },
  {
    "code": "712136",
    "label": "北港镇",
    "value": "beigangzhen",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "712137",
    "label": "水林乡",
    "value": "shuilinxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "712138",
    "label": "口湖乡",
    "value": "kouhuxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "712139",
    "label": "四湖乡",
    "value": "sihuxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "712140",
    "label": "元长乡",
    "value": "yuanchangxiang",
    "zip_code": "0",
    "parent_code": "712100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "712400",
    "label": "屏东县",
    "value": "pingdongxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "712434",
    "label": "屏东市",
    "value": "pingdongshi",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "P"
  },
  {
    "code": "712435",
    "label": "三地门乡",
    "value": "sandimenxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "712436",
    "label": "雾台乡",
    "value": "wutaixiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "712437",
    "label": "玛家乡",
    "value": "majiaxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "712438",
    "label": "九如乡",
    "value": "jiuruxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "712439",
    "label": "里港乡",
    "value": "ligangxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712440",
    "label": "高树乡",
    "value": "gaoshuxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "712441",
    "label": "盐埔乡",
    "value": "yanpuxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "712442",
    "label": "长治乡",
    "value": "changzhixiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712443",
    "label": "麟洛乡",
    "value": "linluoxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712444",
    "label": "竹田乡",
    "value": "zhutianxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "712445",
    "label": "内埔乡",
    "value": "neipuxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "712446",
    "label": "万丹乡",
    "value": "wandanxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "712447",
    "label": "潮州镇",
    "value": "chaozhouzhen",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712448",
    "label": "泰武乡",
    "value": "taiwuxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "712449",
    "label": "来义乡",
    "value": "laiyixiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712450",
    "label": "万峦乡",
    "value": "wanluanxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "712451",
    "label": "崁顶乡",
    "value": "kandingxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "712452",
    "label": "新埤乡",
    "value": "xinpixiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "712453",
    "label": "南州乡",
    "value": "nanzhouxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "712454",
    "label": "林边乡",
    "value": "linbianxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712455",
    "label": "东港镇",
    "value": "donggangzhen",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712456",
    "label": "琉球乡",
    "value": "liuqiuxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712457",
    "label": "佳冬乡",
    "value": "jiadongxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "712458",
    "label": "新园乡",
    "value": "xinyuanxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "712459",
    "label": "枋寮乡",
    "value": "fangliaoxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "712460",
    "label": "枋山乡",
    "value": "fangshanxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "712461",
    "label": "春日乡",
    "value": "chunrixiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712462",
    "label": "狮子乡",
    "value": "shizixiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "712463",
    "label": "车城乡",
    "value": "chechengxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712464",
    "label": "牡丹乡",
    "value": "mudanxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "712465",
    "label": "恒春镇",
    "value": "hengchunzhen",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "712466",
    "label": "满州乡",
    "value": "manzhouxiang",
    "zip_code": "0",
    "parent_code": "712400",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "712500",
    "label": "台东县",
    "value": "taidongxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "T"
  },
  {
    "code": "712517",
    "label": "台东市",
    "value": "taidongshi",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "712518",
    "label": "绿岛乡",
    "value": "lvdaoxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712519",
    "label": "兰屿乡",
    "value": "lanyuxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712520",
    "label": "延平乡",
    "value": "yanpingxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "712521",
    "label": "卑南乡",
    "value": "beinanxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "712522",
    "label": "鹿野乡",
    "value": "luyexiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "712523",
    "label": "关山镇",
    "value": "guanshanzhen",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "712524",
    "label": "海端乡",
    "value": "haiduanxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "712525",
    "label": "池上乡",
    "value": "chishangxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712526",
    "label": "东河乡",
    "value": "donghexiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712527",
    "label": "成功镇",
    "value": "chenggongzhen",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712528",
    "label": "长滨乡",
    "value": "changbinxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "C"
  },
  {
    "code": "712529",
    "label": "金峰乡",
    "value": "jinfengxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "712530",
    "label": "大武乡",
    "value": "dawuxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712531",
    "label": "达仁乡",
    "value": "darenxiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "712532",
    "label": "太麻里乡",
    "value": "taimalixiang",
    "zip_code": "0",
    "parent_code": "712500",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "712600",
    "label": "花莲县",
    "value": "hualianxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "H"
  },
  {
    "code": "712615",
    "label": "花莲市",
    "value": "hualianshi",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "712616",
    "label": "新城乡",
    "value": "xinchengxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "712618",
    "label": "秀林乡",
    "value": "xiulinxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "712619",
    "label": "吉安乡",
    "value": "jianxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "712620",
    "label": "寿丰乡",
    "value": "shoufengxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "712621",
    "label": "凤林镇",
    "value": "fenglinzhen",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "712622",
    "label": "光复乡",
    "value": "guangfuxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "712623",
    "label": "丰滨乡",
    "value": "fengbinxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "712624",
    "label": "瑞穗乡",
    "value": "ruisuixiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "R"
  },
  {
    "code": "712625",
    "label": "万荣乡",
    "value": "wanrongxiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "712626",
    "label": "玉里镇",
    "value": "yulizhen",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "712627",
    "label": "卓溪乡",
    "value": "zhuoxixiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "712628",
    "label": "富里乡",
    "value": "fulixiang",
    "zip_code": "0",
    "parent_code": "712600",
    "type": 2,
    "first_letter": "F"
  },
  {
    "code": "712700",
    "label": "澎湖县",
    "value": "penghuxian",
    "zip_code": "0",
    "parent_code": "710000",
    "type": 1,
    "first_letter": "P"
  },
  {
    "code": "712707",
    "label": "马公市",
    "value": "magongshi",
    "zip_code": "0",
    "parent_code": "712700",
    "type": 2,
    "first_letter": "M"
  },
  {
    "code": "712708",
    "label": "西屿乡",
    "value": "xiyuxiang",
    "zip_code": "0",
    "parent_code": "712700",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "712709",
    "label": "望安乡",
    "value": "wanganxiang",
    "zip_code": "0",
    "parent_code": "712700",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "712710",
    "label": "七美乡",
    "value": "qimeixiang",
    "zip_code": "0",
    "parent_code": "712700",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "712711",
    "label": "白沙乡",
    "value": "baishaxiang",
    "zip_code": "0",
    "parent_code": "712700",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "712712",
    "label": "湖西乡",
    "value": "huxixiang",
    "zip_code": "0",
    "parent_code": "712700",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "810000",
    "label": "香港特别行政区",
    "value": "xianggangtebiexingzhengqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "X"
  },
  {
    "code": "810100",
    "label": "香港特别行政区",
    "value": "xianggangtebiexingzhengqu",
    "zip_code": "0",
    "parent_code": "810000",
    "type": 1,
    "first_letter": "X"
  },
  {
    "code": "810101",
    "label": "中西区",
    "value": "zhongxiqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "Z"
  },
  {
    "code": "810102",
    "label": "东区",
    "value": "dongqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "810103",
    "label": "九龙城区",
    "value": "jiulongchengqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "J"
  },
  {
    "code": "810104",
    "label": "观塘区",
    "value": "guantangqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "G"
  },
  {
    "code": "810105",
    "label": "南区",
    "value": "nanqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "N"
  },
  {
    "code": "810106",
    "label": "深水埗区",
    "value": "shenshuibuqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "810107",
    "label": "湾仔区",
    "value": "wanzaiqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "W"
  },
  {
    "code": "810108",
    "label": "黄大仙区",
    "value": "huangdaxianqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "H"
  },
  {
    "code": "810109",
    "label": "油尖旺区",
    "value": "youjianwangqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "810110",
    "label": "离岛区",
    "value": "lidaoqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "810111",
    "label": "葵青区",
    "value": "kuiqingqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "K"
  },
  {
    "code": "810112",
    "label": "北区",
    "value": "beiqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "B"
  },
  {
    "code": "810113",
    "label": "西贡区",
    "value": "xigongqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "X"
  },
  {
    "code": "810114",
    "label": "沙田区",
    "value": "shatianqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "S"
  },
  {
    "code": "810115",
    "label": "屯门区",
    "value": "tunmenqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "T"
  },
  {
    "code": "810116",
    "label": "大埔区",
    "value": "dapuqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "810117",
    "label": "荃湾区",
    "value": "quanwanqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "Q"
  },
  {
    "code": "810118",
    "label": "元朗区",
    "value": "yuanlangqu",
    "zip_code": "0",
    "parent_code": "810100",
    "type": 2,
    "first_letter": "Y"
  },
  {
    "code": "820000",
    "label": "澳门特别行政区",
    "value": "aomentebiexingzhengqu",
    "zip_code": "0",
    "type": 0,
    "first_letter": "A"
  },
  {
    "code": "820100",
    "label": "澳门特别行政区",
    "value": "aomentebiexingzhengqu",
    "zip_code": "0",
    "parent_code": "820000",
    "type": 1,
    "first_letter": "A"
  },
  {
    "code": "820101",
    "label": "澳门半岛",
    "value": "aomenbandao",
    "zip_code": "0",
    "parent_code": "820100",
    "type": 2,
    "first_letter": "A"
  },
  {
    "code": "820102",
    "label": "凼仔",
    "value": "dangzai",
    "zip_code": "0",
    "parent_code": "820100",
    "type": 2,
    "first_letter": "D"
  },
  {
    "code": "820103",
    "label": "路凼城",
    "value": "ludangcheng",
    "zip_code": "0",
    "parent_code": "820100",
    "type": 2,
    "first_letter": "L"
  },
  {
    "code": "820104",
    "label": "路环",
    "value": "luhuan",
    "zip_code": "0",
    "parent_code": "820100",
    "type": 2,
    "first_letter": "L"
  }
]
let buy = [];
let area = [];
citys.forEach(e => {
  if (e.type == '0') {
    city.push(e)
  }
  if (e.type == '1') {
    buy.push(e)
  }
  if (e.type == '2') {
    area.push(e)
  }
});
buy.forEach(e => {
  e.children = [];
  area.forEach(j => {
    if (e.code == j.parent_code) {
      e.children.push(j)
    }
  })
})
city.forEach(e => {
  e.children = [];
  buy.forEach(j => {
    if (e.code == j.parent_code) {
      e.children.push(j)
    }
  })
})

export default city
