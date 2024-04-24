auto();
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

//question = "中国新民主主义革命的任务是反对帝国主义、封建主义和资本主义。";

//去掉question中的无关字段
question = question.replace('undefined', '').replace('题干', '');



var input = threads.disposable();
dialogs.build({
    title: "请输入题目",
    positive: "确定",
    negative: "取消",
    inputPrefill: question
}).on("input", text => {
    input.setAndNotify(text);
}).show();
question = input.blockedGet();
toast(question);
//sleep(2000);
answerList = lmTk(question);
answerLog(question, answerList)


//threads.shutDownAll();
//exit();



function lmTk(question) {
    //柠檬题库精确搜索
    let response = http.postJson("https://api.lemtk.xyz/api/v1/cx", {
        "v": "1.0",
        "question": `${question}`,
    }, {
        "headers": {
            "Authorization": "Bearer f5cc2c00f09ec826275f5d58fe0ec868",
            "Content-Type": "application/json"
        }
    });
    if (response.statusCode === 200) {
        console.log('请求成功');
        try {
            return response.body.json().data.answer;
        } catch (e) {

        }
    } else {
        console.log('请求失败');
    }
}

function answerLog(question, answerList) {
    console.clear();
    console.show();
    console.print(question);
    console.print("答案: " + answerList);
}