let question;
let selectionA = textContains('A').findOne().parent();
let questionList = selectionA.previousSibling();
if (questionList.hasChildren()) {
    questionList.children().forEach(c => {
        question += c.text();
    });
} else {
    question = questionList.text();
}

let answerList;

//去掉question中的无关字段
question = question.replace('undefined', '').replace('题干', '');

//获取搜索结果
dialogs.build({
    title: "请输入题目",
    positive: "确定",
    negative: "取消",
    inputPrefill: question
}).on("input", (text) => {
    //toast("你输入的是" + text);
        question = text;
        localTk(question);
        //sleep(1500);
        //console.hide();
    
}).show();


function localTk(question) {
    var rawText = files.read("./tk.json");
    var jsonText = JSON.parse(rawText);
    console.clear();
    console.show();

    jsonText.forEach(e => {
        var regex = new RegExp(question, 'i');

        // 如果问题匹配，打印相应的答案
        if (e.question.match(regex)) {
            console.print(e.question);
            console.print(e.answer);
            return;
        }

    });
}