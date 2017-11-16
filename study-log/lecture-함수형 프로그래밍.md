- 명령에서 객체가 먼저 온다면 객체형 프로그래밍, 함수가 먼저 온다면 함수형 프로그래밍.
- 함수형 프로그래밍은 함수를 만들고 그 함수에 맞게 데이터 세트를 구성
- 추상화의 단위가 함수. 조건을 함수에 위임.

- 전달하는 함수는 콜백과는 다르다. 여러 이름을 가진다.
  - predi(cate): 조건을 리턴하는 함수
  - iter(ate): 돌면서 반복적으로 실행되는 함수
  - mapper: 무언가와 무언가의 사이를 매핑하는 함수?

### 커링
- 함수와 인자를 다루는 기법. 함수의 인자를 적용해나가다가 필요한 인자가 모두 채워지면 함수 본체 실행.
- 일반적인 함수를 실행하지만 커링이 되도록 한다.
~~~
function _curry(fn){   //함수를 인자로 받는다
  return function(a){
    return function(b){
      return function(a, b);
    }
  }
}

var add = _curry(function(a, b) {
  return a + b;
})

var add10 = add(10);
add10(5); //15
add(10)(5); //15
~~~

### get
- 오브젝트의 값을 안전하게 참조
~~~
function _get(obj, key){
  return obj == null ? undefined : obj[key];
}

~~~