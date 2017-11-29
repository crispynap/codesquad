# DTD(Document Type Definition) : 문서 형식 정의
- doctype이 무엇을 하는 것인가요?
- 표준모드(standards mode)와 쿽스모드(quirks mode)의 다른 점은 무엇인가요?
- 라는 질문에 대해,
~~~
<!DOCTYPE ... >
~~~
으로 활용하는 문서 형식 정의에 대하여 알아봅니다.

## DTD란
- 문서 형식 정의(DTD:Document Type Definition)는 마크업 문서의 요소와 속성등을 해석하는 기준을 명시하는 것입니다.
- 문서 형식에는 크게 HTML5, XHTML, HTML의 세가지가 존재합니다.
- 이전 버전의 HTML(HTML2 ~ HTML4)은 SGML에 기반을 두어 만들어졌기 때문에 상세한 DTD 참조가 필요하며, 이 때문에 DOCTYPE 선언을 하려면 공개 식별자와 시스템 식별자가 포함된 긴 문자열을 작성해야 합니다.
- HTML 4.01 Strict 모드로 문서 형식을 정의할 경우의 예
~~~
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
~~~

## XHTML vs HTML5 
- XHTML
  - XHTML(Extensible Hypertext Markup Language)은 HTML과 동등한 표현 능력을 지닌 마크업 언어로, HTML보다 엄격한 문법을 가집니다.
  - HTML이 SGML의 응용인 데 반해, 매우 유연한 마크업 언어인 XHTML은 SGML의 제한된 부분집합인 XML의 응용입니다.
  - XHTML 문서는 하나의 XML 문서로서 문법적으로 정확해야 하기 때문에, HTML과 달리 표준 XML 라이브러리를 이용한 자동화된 처리가 가능합니다.
  - XHTML 1.0은 2000년 1월 26일, W3C(World Wide Web Consortium: 월드 와이드 웹 콘서시엄)의 권고안이 되었습니다.

- SGML과 XML
  - SGML(Standard Generalized Markup Language)은 문서용 마크업 언어를 정의하기 위한 메타 언어입니다.
  - SGML은 정부나 항공우주 기업의 대규모 계획 사업 과정에서 기계 판독형(machine-readable) 문서를 공유할 목적으로 설계되었습니다. 
  - SGML은 인쇄와 출판 산업에 광범위하게 사용되었지만, 너무 복잡한 이유로 소규모 범용 목적으로 사용하는데 걸림돌이 되었습니다.
  - XML은 SGML에서 파생된 언어입니다. SGML을 단순화하려는 시도로 시작되어, XHTML, RSS 등을 포함해 여러 방면에서 응용되고 있습니다.

- XHTML vs HTML 5
  - 2004년 W3C 회의에서 모질라 재단과 오페라 소프트웨어가 새로운 HTML 표준을 제안했지만, W3C에 의해 "웹의 혁명을 위한 기존의 지향점에 위배된다"고 거절당했습니다.
  - 이에 인터넷 익스플로러를 제외한 애플, 모질라, 오페라가 WHATWG라는 새로운 웹 표준 기관을 설립하고 HTML5 표준을 제정했습니다.
  - 비슷한 시기에 XHTML 2.0이 나왔지만 기존의 표준과 너무 동떨어져서 개발자들에게 널리 사용되지 않음. 2009년 폐기되기에 이르렀습니다.
  - 2014년부터 HTML5가 새로운 권고안이 되었습니다.

- HTML5
  - HTML5는 HTML의 완전한 5번째 버전입니다.
  - HTML5는 HTML 4.01, XHTML 1.0, DOM 레벨 2 HTML에 대한 차기 표준 제안입니다. 비디오, 오디오 등 다양한 부가기능과 최신 멀티미디어 콘텐츠를 액티브X 없이 브라우저에서 쉽게 볼 수 있게 하는 것을 목적으로 합니다.

## DTD를 정의하지 않으면 쿽스 모드(Quirks mode)로 렌더링된다
- DOCTYPE 선언이 존재하지 않거나 잘못 적혀있을 경우, 웹 브라우저는 웹문서를 쿽스 모드로 해석합니다.
- 쿽스 모드란 오래된 웹 브라우저를 위하여 디자인된 웹 페이지의 하위 호환성을 유지하기 위해 웹 브라우저가 웹문서를 해석하는 방식입니다.
- 반대로, 표준 모드(Standards Mode)는 W3C나 IETF(국제 인터넷 표준화 기구)의 표준을 엄격히 준수하여 문서를 해석합니다.
- 쿽스 모드에서는 같은 코드라도 웹 브라우저마다 서로 다르게 해석하므로 전혀 다른 결과물을 보여주게 됩니다.
- 오래된 브라우저의 경우 HTML과 CSS 명세(W3C 표준)가 완성되기도 전에 개발되어서 표준에 부응하지 못하였고, 그를 위해 쿽스 모드가 오래된 브라우저의 행동을 모방하도록 만들어진 것입니다.

## 표준 모드와 쿽스 모드의 차이
- IE 박스 모델 버그
  - 쿽스 모드:  width 계산 시, padding, border 를 포함한다.
  - 표준 모드: width 계산 시, padding, border를 포함하지 않는다.
- 인라인 요소의 수직 정렬
  - 비표준 모드: 박스의 border bottom에 맞추어 이미지를 정렬한다.
  - 표준 모드: baseline에 맞추어 정렬한다.
- table 안의 font size 상속
  - 비표준 모드: table 안에서 텍스트는 기본 font size를 상속하지 않는다.
  - 표준 모드: table 안에서의 텍스트는 기본 font size값을 상속 한다.
![](http://cfile21.uf.tistory.com/image/22162F45538BD71B369C5A)

## 정리
- doctype이 무엇을 하는 것인가요?
  - 문서 형식을 정의하기 위한 구문입니다.
  - HTML5를 사용한다면
  ~~~
  <!DOCTYPE html>
  ~~~
  - 이것만 쓰면 됩니다.

- 표준모드(standards mode)와 쿽스모드(quirks mode)의 다른 점은 무엇인가요?
  - 표준모드는 W3C나 IETF의 표준을 준수하여 웹페이지를 렌더링합니다.
  - 쿽스모드는 오래된 웹 브라우저에서도 호환되도록 비표준적인 방법의 CSS를 적용해 웹페이지를 렌더링하며, 렌더링 방식은 브라우저에 따라 다릅니다.
  - DOCTYPE 선언이 존재하지 않거나 잘못 적혀있을 경우 브라우저는 웹페이지를 쿽스모드로 해석합니다.

## 자료 출처
- [WEBDIR](http://webdir.tistory.com/40)
- [위키피디아](https://ko.wikipedia.org/wiki/%EC%BF%BC%ED%81%AC_%EB%AA%A8%EB%93%9C)
- [비표준 모드, 표준 모드의 차이와 DOCTYPE 선언](http://aboooks.tistory.com/169)
- 모던 웹 디자인을 위한 HTML5+CSS3 입문 개정판(2014, 윤인성, 한빛미디어)