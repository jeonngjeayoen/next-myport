export interface RotateBoxItem {
    title: string;
    subtitle: string;
    detail: string[];
    link: string;
    classnum: string;
}

export const rotateBoxData: RotateBoxItem[] = [
    {
        title: "탑티어 성형외과",
        subtitle: "병원 홈페이지 신규 구축",
        detail: ["기여도 : 80%", "작업시간 : 한달", "php 기반 전체 퍼블리싱 및 프론트엔드"],
        link: "http://toptierprs.co.kr",
        classnum: "01"
    },
    {
        title: "웰 그래피 자사몰",
        subtitle: "자사몰 웹사이트 리뉴얼",
        detail: ["기여도 : 70%", "작업시간 : 3주", "아임웹 기반 퍼블리싱 / 기획"],
        link: "https://wellgraphy.com/",
        classnum: "02"
    },
    {
        title: "무니버니 쇼핑몰",
        subtitle: "반응형 쇼핑몰 신규 구축",
        detail: ["기여도 : 75%", "작업시간 : 3주", "카페24 기반 퍼블리싱 / 프론트 스킨 작업"],
        link: "https://moonybunny.com/index.html",
        classnum: "03"
    },
    {
        title: "해피레포트",
        subtitle: "전체 프론트엔드 리뉴얼 + UI 개편",
        detail: ["기여도 : 85%", "작업시간 : 1.5달", "HTML/CSS + javascript/ASP"],
        link: "https://www.happyreport.co.kr/",
        classnum: "04"
    }
];