# 인사이드 자바스크립트 정리
### 03. 자바스크립트 데이터 타입과 연산자
- 배열의 length 프로퍼티
  - arr.length 프로퍼티는 배열 내의 가장 큰 인덱스에 1을 더한 값
  ~~~
  var arr = [];
  arr[100] = 100;
  console.log(arr.length) // 101
  ~~~
  - 값을 변경하는 게 가능. 기존 값보다 크면 그만큼의 배열 값이 undefined로 채워지고 적으면 해당 번지 이후 배열 값은 삭제됨.
  - 자바스크립트의 배열 표준 메서드는 length를 활용함.
- 배열과 객체의 차이
  - 배열에는 length 프로퍼티, push()와 같은 배열 표준 메서드가 존재.
  - 객체의 프로토타입은 Object.prototype, 배열의 프로토타입은 Array.prototype.
    - [참고]Array.prototype의 프로토타입은 Object.prototype.
  - 객체에도 length 프로퍼티를 추가하고 apply()를 활용하면 배열 메소드 활용 가능. 유사 배열 객체라고 부른다.
    - arguments 객체나 jQuery가 유사 배열 객체 형태로 되어 있다.
- 배열 메소드
  - push(), pop()
  - splice(start, deleteCount, item...)
    - start: 시작 위치
    - deleteCount: 삭제할 요소 수
    - item: 삭제한 위치에 추가할 요소

### 04. 함수와 프로토타입 체이닝
- 함수를 정의하는 방법
  - 함수 리터럴을 이용해 정의
    - 함수 리터럴로는 익명 함수 생성 가능
    - 01.함수 선언문
      - 함수 리터럴로 함수를 만드는 것. 익명 함수 안 된다.
      ~~~
      function add(x, y){
        return x + y;
      }
      ~~~
      - 사실 자바스크립트 엔진에 의해 다음과 같이 변경됨
      ~~~
      var add = function add(x, y){
        return x + y;
      }
      ~~~
    - 02.함수 표현식
      - 함수 리터럴로 함수를 만들어서 변수에 할당하는 것. 함수 이름이 없으므로 익명 함수.
      ~~~
      var add = function (x, y){
        return x + y;
      };
      ~~~
      - 왠만하면 함수 표현식을 사용하라. 함수 호이스팅이 되지 않기 때문.
    - 함수 선언문 끝에는 ;를 붙이지 않지만 함수 표현식 끝에는 ;를 붙인다.
      ~~~
      var func = function (){ 
        return 42;
      }
      (function(){
        console.log("function called");
      })();
      ~~~
      - 이런 경우 func가 단지 정의가 아니라 즉시 실행함수를 인수로 하는 함수처럼 받아들여져서 실행되기 때문.
  - Function() 생성자 함수를 이용한 정의
    - 사실 함수 리터럴 방식도 엔진 내부에선 Function() 생성자 함수로 생성함
    ~~~
    var add = new Function('x', 'y', 'return x + y');
    ~~~
    - 일반적으로는 사용하지 않는다
- 함수를 정의하면
  - 객체로 만들어짐.
  - 객체 내부의 [[Code]] 프로퍼티에 함수 코드가 저장됨
  ~~~
  add.result = add(3, 2);
  console.log(add.result); //5
  ~~~
  - 이렇게 객체처럼 프로퍼티를 동적으로 생성하고 결과값을 넣는 것도 가능
- 함수의 프로퍼티
  - [[name]]: 함수의 이름
  - [[caller]]: 자신을 호출한 함수
  - [[arguments]]: 인수
  - [[length]]: 함수를 작성할 때 정의한 인자 개수
  - [[__proto__]]: 프로토타입 === [[Prototype]] !== prototype
  - prototype: 생성자를 가리킴...?
  