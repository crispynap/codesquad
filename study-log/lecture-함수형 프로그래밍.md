- 명령에서 객체가 먼저 온다면 객체형 프로그래밍, 함수가 먼저 온다면 함수형 프로그래밍.
- 함수형 프로그래밍은 함수를 만들고 그 함수에 맞게 데이터 세트를 구성
- 추상화의 단위가 함수. 조건을 함수에 위임.

- 전달하는 함수는 콜백과는 다르다. 여러 이름을 가진다.
  - predi(cate): 조건을 리턴하는 함수
  - iter(ate): 돌면서 반복적으로 실행되는 함수
  - map(per): 무언가와 무언가의 사이를 매핑하는 함수

- 함수형 프로그래밍은 대입문을 잘 쓰지 않는다
- 값을 만들어놓고 문장을 내려가며 변형해가는 것이 아니라,
- 함수를 통과해나가면서 한 번에 새로운 값을 만들어나가는 것.

### filter
- 응용형 함수
- 함수를 받아서 원하는 시점에 평가를 하면서 로직을 완성하는 프로그램
~~~
function _filter(list, predi){
  var new_list = [];
  for (var i = 0; i < list.length; i++;){
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}
~~~

### map
~~~
function _map(list, mapper){
  var new_list = [];
  for (var i = 0; i < list.length; i++;){
    new_list.push(mapper(list[i]));
  }
  return new_list;
}
~~~

### each
~~~
function _each(list, iter) {
  for (var i = 0; i < list.length; i++;){
    iter(list[i])
  }
  return list;
}
~~~
- each를 적용시킨 map, filter
~~~
function _map(list, mapper){
  var new_list = [];
  _each(list, function(val){
    new_list.push(mapper(val));
  })
  return new_list;
}

function _filter(list, predi){
  var new_list = [];
  _each(list, function(val){
    if (predi(val)) new_list.push(val);
  })
  return new_list;
}
~~~


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

var add = _curry(function(a, b)) {
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