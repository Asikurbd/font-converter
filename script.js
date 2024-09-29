function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}
callAll("./js/bijoy2uni.js");
callAll("./js/uni2bijoy.js");
callAll("./js/common.js");
callAll("./js/layout.js");
callAll("./js/count.js");
callAll("./js/js1.js");