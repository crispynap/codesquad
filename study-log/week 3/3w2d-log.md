# 3주 2일차 학습내용 정리
### 공유 사항
- 스크럼 직후 객체지향 자바스크립트의 원리 스터디
- 오후 2시 페이커 코드 리뷰
### 공부 계획
### 공부 내용
- 스크럼 직후 객체지향 자바스크립트의 원리 스터디
- 페이커 코드 리뷰
  - 의문점
    - app[result.commandName].apply(app, result.params); 은 어떤 역할을 하는 걸까
      - 함수형 프로그래밍을 하는 데 중요한 테크닉
- 코드 리뷰
  - 구분자 $을 excute에 인수로 줄 수 있었겠다. $ 전용이 아닌 메소드이므로 범용성 확장을 위해.
  - 폴리필은 피쳐 디텍션으로 하는 게 좋다. 소스처럼 메소드를 추가하는 게 아니라 기능을 탐지하는 기법으로 호환성 검사를 하는 것. 최악의 방법은 브라우저 버전을 검사하는 것.
  - 유틸 등 범용은 따로 묶는다. lib 등으로. 이미지는 image 폴더로. 
    - 나중에 웹개발을 한다면 페이지나 기능 단위로 분류할 수 있다.
  - 카운트는 객체로 놔두니 보기 좋다
  - 뗄 수 있는 기능이면 떼기 좋은 곳으로 분리하는 게 좋다.
  - 에러는 개발자를 위한 것. 사용자를 위한 것은 에러가 아니라 사용자에게 보여줘야 함. 에러를 발생시키는 건 유틸리티 같은 다른 개발자들이 쓸 라이브러리.
    - 사용자에게 에러를 출력하려면 다음 행동을 줘야 한다. 지원되지 않는 문자열입니다X 숫자를 넣어주세여
    - on Error 도 찾아보면 좋다
    - final 키워드도 찾아보자
  - 에어 비앤비 코드 컨벤션을 참고해보면 좋다. 구현 패턴에 대한 이야기도 있고.
- json 파서 레슨 1 설계를 계속하고 있다.