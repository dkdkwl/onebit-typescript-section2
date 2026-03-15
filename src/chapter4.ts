// ① 타입 별칭 (Type Alias)
type User = {
  id: number;
  name: string;
  nickname: string;
  bio: string;
  location: string;
  extra?: string; // ?를 붙이면 선택적 프로퍼티(optional property)
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "jhw",
  bio: "안녕하세요",
  location: "부천",
};

// ② 인덱스 시그니처 (Index Signature)
// 키와 값의 타입만 지정하면, 프로퍼티 개수에 제한 없이 사용 가능
// 값이 하나도 없어도 에러가 발생하지 않음

// 국가 코드 (string → string)
type CountryCode = {
  [key: string]: string;
};

let countryCode: CountryCode = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

// 국가 번호 (string → number)
type CountryNumberCodes = {
  [key: string]: number;
  korea: number; // 인덱스 시그니처와 함께 특정 프로퍼티를 정의할 수도 있음
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};
