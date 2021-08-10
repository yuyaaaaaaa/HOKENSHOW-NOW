const flowChart = [
    {
    // 0
    question: 'あなたは現在、労働者ですか？',
    answers: ['はい', 'いいえ'],
    index: [1, 2],
    status: ''
}, {
    // 1
    question: '雇用形態は何ですか？',
    answers: ['正社員', 'パート・アルバイト', '契約・派遣社員', '自営業・フリーランス'],
    index: ['二号', 3, 3, 5],
    status: ''
}, {
    // 2
    question: 'あなたは現在どの状態ですか？',
    answers: ['転職', '退職・無職・年金暮らし', '学生', '専業主婦'],
    index: [1, 9, 8, 14],
    status: ''
}, {
    // 3
    question: '週当たりの労働時間は２０時間以上ですか？',
    answers: ['はい', 'いいえ'],
    index: ['二号かも', 5],
    status: ''
}, {
    // 4
    question: 'あなたの年収は１３０万円以上ですか？（60歳以上で公的年金受給の場合は１８０万円以上）',
    answers: ['はい', 'いいえ'],
    index: ['一号・国保', '三号'],
    status: ['一号', '三号']
}, {
    // 5
    question: '家族の中に会社員・公務員（第２号被保険者）はいますか？',
    answers: ['はい', 'いいえ'],
    index: [6, '一号・国保'],
    status: ['一号', '三号']
}, {
    // 6
    question: 'その会社員・公務員（第２号被保険者）の方は配偶者ですか？',
    answers: ['はい', 'いいえ'],
    index: [4, '一号・扶養'],
    status: ['一号', '三号']
}, {
    // 7
    question: 'あなたの年間収入は１３０万円以上ですか？',
    answers: ['はい', 'いいえ'],
    index: ['一号・国保', '一号・扶養'],
    status: ['一号']
}, {
    // 8
    question: '広告収入等何かしらの収入はありますか？',
    answers: ['はい', 'いいえ'],
    index: [7, '一号・扶養'],
    status: ['一号']
}, {
    // 9
    question: '家族の中に会社員・公務員（第２号被保険者）はいますか？',
    answers: ['はい', 'いいえ'],
    index: [10, 11],
    status: ['一号', '三号']
}, {
    // 10
    question: 'その会社員・公務員（第２号被保険者）の方は配偶者ですか？',
    answers: ['はい', 'いいえ'],
    index: [12, 13],
    status: ['一号', '三号']
}, {
    // 11
    question: '退職した場合、在職期間は２ヶ月以上でしたか？（公務員は１年以上）',
    answers: ['はい', 'いいえ'],
    index: ['一号・任継', '一号・国保'],
    status: ['一号']
}, {
    // 12
    question: 'あなたの年金収入は年間１３０万円以上ですか？（６０歳以上の場合は１８０万円以上）',
    answers: ['はい', 'いいえ'],
    index: [11, '三号'],
    status: ['一号・三号']
}, {
    // 13
    question: 'あなたの年金収入は年間１３０万円以上ですか？（６０歳以上の場合は１８０万円以上）',
    answers: ['はい', 'いいえ'],
    index: [11, '一号・扶養'],
    status: ['一号']
}, {
    // 14
    question: '広告収入等何かしらの収入はありますか？',
    answers: ['はい', 'いいえ'],
    index: [15, '三号'],
    status: ['一号', '三号']
}, {
    // 15
    question: 'あなたの年間収入は１３０万円以上ですか？',
    answers: ['はい', 'いいえ'],
    index: ['一号・国保', '三号'],
    status: ['一号', '三号']
}
];

export default flowChart;