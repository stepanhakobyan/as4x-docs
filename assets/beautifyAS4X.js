class SepPair {
    constructor(index1, char1) {
        this.index = index1;
        this.char = char1;
    }
}
function beautifyAS4X(code) {
    let script = code.innerHTML;
    let resultHTML = "";
    let prev = null;
    let next = findFirstSeparator(script);
    while (next != null) {
        switch (next.char) {
            case "{":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += "<b>" + s0 + "</b>" + next.char;
                    let s02 = script.substring(next.index + 1);
                    script = s02;
                }
                break;
            case "}":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += s0 + next.char;
                    let s02 = script.substring(next.index + 1);
                    script = s02;
                }
                break;
            case ";":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += parseAssignment(s0) + next.char;
                    let s02 = script.substring(next.index + 1);
                    script = s02;
                }
                break;
            case "'":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += s0 + "<green style='color:green'>" + next.char + "</green>";
                    script = script.substring(next.index + 1);
                    let iEndLine = script.indexOf("\n");
                    let s1 = script.substring(0, iEndLine + 1);
                    resultHTML += "<green style='color:green'>" + s1 + "</green>";
                    let s02 = script.substring(iEndLine + 1);
                    script = s02;
                }
                break;
            // case "\n":
            //     {
            //         let s0 = script.substring(0, next.index);
            //         resultHTML += s0 + next.char;
            //         let s02 = script.substring(next.index + 1);
            //         script = s02;
            //     }
            //     break;
            default:
                throw new Error("unprocessed char: " + next.char);
                break;
        }
        prev = next;
        next = findFirstSeparator(script);
    }
    resultHTML += script;
    code.innerHTML = resultHTML;
}
function findFirstSeparator(script) {
    let iSemicolon = new SepPair(script.indexOf(";"), ";");
    let iEndBrace = new SepPair(script.indexOf("}"), "}");
    let iOpenBrace = new SepPair(script.indexOf("{"), "{");
    //let iEndLine = new SepPair(script.indexOf("\n"), "\n");
    let iComment = new SepPair(script.indexOf("'"), "'");
    let arr = [];
    if (iSemicolon.index >= 0) {
        arr.push(iSemicolon);
    }
    if (iEndBrace.index >= 0) {
        arr.push(iEndBrace);
    }
    if (iOpenBrace.index >= 0) {
        arr.push(iOpenBrace);
    }
    // if (iEndLine.index >= 0) {
    //     arr.push(iEndLine);
    // }
    if (iComment.index >= 0) {
        arr.push(iComment);
    }
    if (arr.length == 0) {
        return null;
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].index < result.index) {
            result = arr[i];
        }
    }
    return result;
}
function parseAssignment(script) {
    let iAssign = script.indexOf("=");
    if (iAssign >= 0) {
        let key = script.substring(0, iAssign);
        let value = script.substring(iAssign + 1);
        let firstQuote = value.indexOf("\"");
        let lastQuote = value.lastIndexOf("\"");
        if (0 <= firstQuote && firstQuote < lastQuote) {
            let s1 = value.substring(0, firstQuote);
            let str = value.substring(firstQuote, lastQuote + 1);
            let s2 = value.substring(lastQuote + 1);
            return "<b>" + key + "</b>" + "=" + s1 + "<i style='color:#d14'>" + str + "</i>" + s2;
        }
        else {
            return "<b>" + key + "</b>" + "=" + "<i>" + value + "</i>";
        }
    }
    else {
        return script;
    }
}
let codes = document.getElementsByClassName("language-as4x");
Array.prototype.forEach.call(codes, (code) => {
    beautifyAS4X(code);
});