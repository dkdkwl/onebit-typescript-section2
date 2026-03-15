// object
//객체의 타입을 정의하는 방법 - 객체 리터럴 타입 방식
//구조적 타입 시스템이다.
//property based type system 이라고도 불린다.
//보통 구조적 타입 시스템과 반대되는건 명목적 타입 시스템이다
//타입스크립트는 구조적 타입 시스템을 사용한다.

let users: {
  id: number; //?는 선택적 속성으로 id가 없어도 에러가 나지 않음 - 선택적 프로퍼티, 옵셔널 프로퍼티 라고 한다.
  name?: string;
} = {
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};
users.id; //object 타입은 객체의 속성에 접근할 수 없음

users = {
  id: 3,
  name: "",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "1234567890",
};
