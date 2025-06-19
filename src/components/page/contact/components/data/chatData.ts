export const initialMessage = {
    sender: "bot" as const,
    text: "안녕하세요 저는 정재연님이 만든 초간단 챗봇 유니입니다. 원하는 키워드를 입력해주세요!",
};

export const keywordResponses = [
    {
        keywords: ["안녕", "하이", "반가워", "우와"],
        response: "안녕하세요! 무엇을 도와드릴까요?",
    },
    {
        keywords: ["자기", "너는 누구니", "정체", "자기"],
        response: "저는 Thinkbot입니다. 개발을 도와드려요.",
    },
    {
        keywords: ["포부", "목표", "꿈"],
        response: "세상을 더 편리하게 만드는 챗봇이 되고 싶어요!",
    },
];
