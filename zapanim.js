javascript: (function () {
    function zapanim(doc) {
        var st = doc.createElement("STYLE");
        var csstxt = "* { animation-name: none !important; animation-play-state: paused !important; } ";
        csstxt += "* { -webkit-animation-name: none !important; -webkit-animation-play-state: paused !important; } ";
        csstxt += "*:before { animation-name: none !important; animation-play-state: paused !important; } ";
        csstxt += "*:before { -webkit-animation-name: none !important; -webkit-animation-play-state: paused !important; } ";
        csstxt += "*:after { animation-name: none !important; animation-play-state: paused !important; } ";
        csstxt += "*:after { -webkit-animation-name: none !important; -webkit-animation-play-state: paused !important; } ";
        var t = doc.createTextNode(csstxt);
        st.appendChild(t);
        doc.head.appendChild(st);

        var elems = doc.getElementsByTagName("IFRAME");
        for (var i = 0; i < elems.length; i++) {
            var innerDoc = elems[i].contentDocument || elems[i].contentWindow.document;
            zapanim(innerDoc);
        }
    }
    zapanim(document);
})()
