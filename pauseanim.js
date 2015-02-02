javascript: (function () {
    function pauseanim(doc) {
        var st = doc.createElement("STYLE");
        var csstxt = "* { animation-play-state: paused !important; } ";
        csstxt += "* { -webkit-animation-play-state: paused !important; } ";
        csstxt += "*:before { animation-play-state: paused !important; } ";
        csstxt += "*:before { -webkit-animation-play-state: paused !important; } ";
        csstxt += "*:after { animation-play-state: paused !important; } ";
        csstxt += "*:after { -webkit-animation-play-state: paused !important; } ";
        var t = doc.createTextNode(csstxt);
        st.appendChild(t);
        doc.head.appendChild(st);

        var elems = doc.getElementsByTagName("IFRAME");
        for (var i = 0; i < elems.length; i++) {
            var innerDoc = elems[i].contentDocument || elems[i].contentWindow.document;
            pauseanim(innerDoc);
        }
    }
    pauseanim(document);
})()
