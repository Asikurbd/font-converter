function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}
callAll(".https://cdn.jsdelivr.net/gh/Asikurbd/font-converter/bijoy2uni.js");
callAll(".https://cdn.jsdelivr.net/gh/Asikurbd/font-converter/uni2bijoy.js");
callAll(".https://cdn.jsdelivr.net/gh/Asikurbd/font-converter/common.js");
callAll(".https://cdn.jsdelivr.net/gh/Asikurbd/font-converter/layout.js");
callAll(".https://cdn.jsdelivr.net/gh/Asikurbd/font-converter/count.js");
callAll(".https://cdn.jsdelivr.net/gh/Asikurbd/font-converter/js1.js");
