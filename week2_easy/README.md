# Javascript

## 배열 및 문자열 메서드

- [String Instance Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)
- [Array Instance Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

## JS on Browser

### 자바스크립트 런타임

- 런타임이란 프로그래밍 언어가 실행되는 환경을 말한다.
- 따라서 자바스크립트 런타임이란 자바스크립트가 실행되는 환경을 말한다.
- 자바스크립트 런타임 종류 : Node.js, 웹 브라우저 (크롬, 파이어폭스, IE 등)

### Web API

- 브라우저는 자바스크립트가 실행되는 환경이므로, 자바스크립트는 브라우저가 제공하는 Web API를 사용할 수 있다.
- 많은 Web API 중에 DOM이 있다. 라이브러리나 프레임워크 없이 순수 자바스크립트로 Interactive 웹페이지를 만들려면 DOM 조작은 필수이다.
  [Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API)

### DOM이란?

- `Document Object Model`
- 문서 객체 모델
- HTML, XML 문서의 **모든 요소들을 계층적으로 표현**하 문서 내 요소들을 **생성, 수정, 삭제**할 수 있도록 돕는 **인터페이스**이다.
- 브라우저의 렌더링 엔진은 html 파일을 파싱하여 DOM을 구축한다.
- DOM은 Node의 계층 구조로 이루어져 있다.
- 각 노드는 부모와 자식들을 가질 수 있다.
- HTML에 있는 tag들뿐만 아니라 text, 주석도 node가 된다.
- Node Type ([Node.nodeType - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType))
  ```
  Node.ELEMENT_NODE
  Node.ATTRIBUTE_NODE
  Node.TEXT_NODE
  Node.CDATA_SECTION_NODE
  Node.PROCESSING_INSTRUCTION_NODE
  Node.COMMENT_NODE
  Node.DOCUMENT_NODE
  Node.DOCUMENT_TYPE_NODE
  Node.DOCUMENT_FRAGMENT_NODE
  Node.NOTATION_NODE
  ```
- DOM Element는 Node의 특정 타입, `Node.ELEMENT_NODE`를 말한다.
- HTML의 태그들이 DOM Element가 된다.

### 자바스크립트로 DOM 조작하기

#### 1. HTML 요소 찾기

**document.getElementbyId("")**

- 인자로 찾으려는 요소의 id를 문자열 형태로 전달 (대소문자 구분)
- id는 유일한 값이므로, 하나의 element만 리턴한다.

**document.getElementsByClassName("")**

- 인자로 찾으려는 요소의 class 이름을 문자열 형태로 전달 (대소문자 구분)
- 해당 class 이름을 가지는 모든 element 목록을 리턴한다. (순회 가능)
- 다수의 class 이름을 모두 포함하고 있는 element를 찾을 수 있다.
  - 인자로 class 이름들을 스페이스로 구분하여 전달

```
// class 이름에 'red'와 'blue' 모두를 포함하는 element를 리턴한다.
document.getElementsByClassName("red blue");
```

**document.getElementsByTagName("div")**

- 인자로 찾을 element의 태그 이름을 전달한다.
- 해당 태그를 가진 모든 element를 리턴한다.

**document,querySelector("")**

- 인자로 받은 CSS선택자를 통해, element를 찾아 리턴한다.
- `ID`로 찾기: `document.querySelector('#div_1');`
  - id 이름 앞에 `#`을 붙여 인자로 전달한다.
  - 위 예시는 id가 'div_1'인 element를 찾아 리턴한다.
- `Class`로 찾기: `document.querySelector('.my');`
  - class 이름 앞에 `.`을 붙여 인자로 전달한다.
  - 만약 해당 class 이름을 가진 element가 2개 이상이라면 첫 번째 element를 리턴한다.
  - 위 예시는 class 이름이 'my'인 element 중 *첫 번째 element*를 찾아 리턴한다.
- `Tag`로 찾기: `document.querySelector('h1');`
  - 인자로 태그명을 문자열로 전달한다.
  - 만약 해당 태그명을 가진 element가 2개 이상이라면 첫 번째 element를 리턴한다.
  - div태그를 가지는 element 중 *첫 번째 element*를 리턴한다.
- `,`로 구분하기: `document.querySelector('.red, .green');`
  - 선택자를 ','로 구분하여 전달하면 여러 개의 선택자 중 첫 번째로 발견되는 선택자를 가진 element를 리턴한다.

```jsx
// 복잡한 선택자
const el = document.querySelector("div.user-panel.main input[name=login]");
```

- 위 예제는 클래스 이름으로 `user-panel`와 `main`을 가진 `div` 태그 안에 (`<div class="user-panel main">`), `name` 속성이 `login`인 `input` 요소들 중 첫 번째 element 리턴

**document.querySelectorAll("")**

- 앞서 보았던 `document.querySelector("")`와 사용법은 동일하다.
- 다만 `document.querySelector("")`는 첫 번째 element만을 반환했다면, `document.querySelectorAll("")`은 인자로 전달한 CSS 선택자로 찾은 모든 element 목록을 리턴한다.

#### 2. HTML 요소 추가하기

**document.createElement(tagName)**

- 태그명을 인수로 전달하여 태그명에 해당하는 새로운 요소를 반환한다.

**Node.appendChild(node)**

- `Node`의 자식 노드 리스트 중 인수로 전달받은 노드를 마지막 자식으로 추가한다.

**Node.insertBefore(newNode, referenceNode)**

- `Node`의 자식 노드인 `referenceNode` 앞에 새로운 노드를 추가한다.
- 만약 `referenceNode`가 `null`이라면, 새로운 노드는 자식 노드의 리스트의 끝에 추가된다.

**Element.append(param1, ... paramN)**

- `Element`의 마지막 자식으로 인수로 전달받은 노드나 문자열을 추가한다.

**Element.prepend(param1, ... paramN)**

- `Element`의 첫번째 자식으로 인수로 전달받은 노드나 문자열을 추가한다.

#### 3. 클래스명

**className vs classList**

- `className`과 `classList`는 DOM 요소의 프로퍼티이다.
- className는 말 그대로 요소의 클래스명을 말하고, className 프로퍼티 값을 바꾸면 요소의 클래스명 전체가 수정된다.
- classList도 요소의 클래스명을 반환하지만, 클래스명을 하나씩 추가 및 삭제할 수 있다.

> 요소가 여러 클래스명을 가질 경우, className을 이용하여 클래스명을 수정하는 것보다, classList를 이용하는 것이 간편하다.

#### 클래스명 읽기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1 id="header" class="class1 class2">Hello World</h1>
    <script src="src/script.js"></script>
  </body>
</html>
```

```jsx
// script.js
const header = document.querySelector("#header");
console.log(header.className); // "class1 class2"
console.log(header.classList); // { "0": "class1", "1": "class2" } [object DOMTokenList]
console.log(header.classList.item(0)); // "class1"
```

#### 클래스명 추가/수정/삭제하기

```jsx
header.className = "class";
console.log(header.className); // "class" (클래스명 전체가 수정됨)
```

```jsx
const darkModeBtn = document.querySelector(".dark-mode-btn");
const darkMode = document.querySelector(".dark-mode");
darkModeBtn.addEventListener("click", function () {
  if (darkMode.classList.contains("hidden")) {
    darkMode.classList.remove("hidden");
  } else {
    darkMode.classList.add("hidden");
  }
  // darkMode.classList.toggle("hidden"); // 이 한 줄로 줄일 수 있음.
});
```

**Element.classList.contains(class)**

- 인수로 전달받은 클래스명이 요소의 class 속성에 포함되어 있다면 `true`, 아니라면 `false`를 반환한다.

**Element.classList.add(class1, class2, ..., classN)**

- 인수로 전달받은 클래스명을 요소의 class 속성에 추가한다.
- 이미 존재한다면 무시한다.

**Element.classList.remove(class1, class2, ..., classN)**

- 인수로 전달받은 클래스명을 요소의 class 속성에서 제거한다.

**Element.classList.toggle(class)**

- 인수로 전달받은 클래스명이 `classList`에 있다면 해당 클래스명을 제거하고 없다면 추가한다.

#### 4. innerHTML, innerText, textContent

- innerHTML과 innerText는 Element의 속성이고, textContent는 Node의 속성이다.
- innerHTML: Element 내의 HTML, XML
- innerText: Element 내에서 사용자에게 '보여지는' 텍스트 값
  - `css`로 인해 화면에 보여지지 않는 텍스트 값은 포함하지 않는다.
- textContent: Node 내 텍스트 값
  - `css`로 인해 화면에 보여지지 않는 텍스트 값도 포함된다.

## Browser Event

### 이벤트란?

- 어떤 행위나 사건(일)이 일어났다는 신호
- 마우스 이벤트
  - `click` : 요소 위에서 마우스 왼쪽 버튼을 눌렀을 때 발생한다.
  - `contextMenu` : 요소 위에서 마우스 오른쪽 버튼을 눌렀을 때 발생한다.
  - `mouseover`와 `mouseout`: 마우스 커서를 요소 위로 움직이거나 커서나 요소 밖으로 움직였을 때 발생한다.
  - `mousedown`과 `mouseup`: 요소 위에서 마우스 왼쪽 버튼을 누르고 있거나 마우스 버튼을 텔 때 발생한다.
  - `mousemove` : 마우스를 움직일 때 발생한다.
- 폼 요소 이벤트
  - `submit` : 사용자가 form을 제출할 때 발생한다.
  - `focus` : 사용자가 input과 같은 요소에 포커스할 때 발생한다.
- 키보드 이벤트
  - `keydown`, `keyup`: 사용자가 키보드 버튼을 누르거나 뗄 때 발생한다.
- 문서 이벤트
  - `DOMContentLoaded`: HTML이 전부 로드 및 처리되어 DOM에 생성이 완료되었을 때 발생
- css 이벤트
  - `trasitionend` : css 애니메이션이 종료되었을 때 발생

### 이벤트 핸들러

- 이벤트에 반응하려면 이벤트가 발생했을 때 실행하는 함수인 핸들러를 할당해야 한다.
- 핸들러는 여러 가지 방법으로 할당할 수 있다.

**HTML 요소의 `on<event>`속성**

```html
<input value="클릭해 주세요." onclick="alert('클릭!')" type="button" />
```

**DOM 프로퍼티 `on<event>`**

```html
<input id="elem" type="button" value="클릭해 주세요." />
<script>
  elem.onclick = function () {
    alert("감사합니다.");
  };
</script>
```

- `onclick` 프로퍼티와 속성은 하나밖에 없기 때문에 하나의 이벤트에 대해 복수의 핸들러를 할당할 수 없다.

**target.addEventListener(type, listener)**

- 특정 이벤트가 target에 전달될 때마다 호출할 콜백함수를 지정한다.
- 앞선 두 가지 방법과 달리 하나의 이벤트에 대해 복수의 핸들러를 할당할 수 있다.
- 어떤 이벤트는 `addEventListener` 메서드를 써여야만 핸들러 할당이 가능하다. (ex. `DOMContentLoaded`)
- `type`: 첫 번째 인자로는 반응할 이벤트 유형을 문자열 형태로 전달한다. (`click`, `input`, `change` 등)
- `listener`: 두 번째 인자로는 해당 `target`에게 이벤트가 발생했을 때 호출할 함수를 전달한다. (react to the event)

**target.removeEventListener(type, listener)**

- 핸들러를 삭제하려면 핸들러 할당 시 사용한 함수를 두번째 인수로 그대로 전달해야 한다.

```js
// BAD
elem.addEventListener("click", () => alert("감사합니다!"));
elem.removeEventListener("click", () => alert("감사합니다!"));
```

```js
// GOOD
function handler() {
  alert("감사합니다!");
}
input.addEventListener("click", handler);
input.removeEventListener("click", handler);
```

> **객체 형태의 이벤트 핸들러**
>
> - `addEventListener` 메서드를 사용하면 함수뿐만 아니라 객체를 이벤트 핸들러로 할당할 수 있는데, 이벤트가 발생하면 객체의 `handleEvent` 메서드를 호출한다.
>
> ```js
> class Menu {
>   handleEvent(event) {
>     switch (event.type) {
>       case "mousedown":
>         elem.innerHTML = "마우스 버튼을 눌렀습니다.";
>         break;
>       case "mouseup":
>         elem.innerHTML += " 그리고 버튼을 뗐습니다.";
>         break;
>     }
>   }
> }
>
> let menu = new Menu();
> elem.addEventListener("mousedown", menu);
> elem.addEventListener("mouseup", menu);
> ```

### 이벤트 객체

- 이벤트를 제대로 다루기 위해서는 어떤 일이 발생했는지 상세히 알아야 한다.
  - `click` 이벤트가 발생했다면 마우스 포인터가 어디에 있는지
  - `keydown` 이벤트가 발생했다면 어떤 키가 눌렸는지
- 이벤트가 발생하면 브라우저는 **이벤트 객체** (event object)를 만든다.
  - 이벤트 객체에는 이벤트에 관한 상세한 정보가 있고, 이벤트 핸들러에 인수 형태로 전달한다.
  - `event.type`: 이벤트 타입 (`click`, `change` 등)
  - `event.currentTarget` : 이벤트를 처리하는 요소, 실행 중인 핸들러가 할당된 요소

> 참고: [Introduction of Browser Events](https://ko.javascript.info/introduction-browser-events)

### 이벤트 버블링

- **한 요소에 이벤트가 발생하면, 이 요소에 할당된 이벤트 핸들러가 동작하고, 이어서 부모 요소의 해당 이벤트에 대한 핸들러가 동작한다. 가장 상위의 조상 요소를 만날 때까지 이 과정이 반복된다.**

```html
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

`p` 요소를 클릭하면...

1. `p` 요소에 할당된 `onclick` 핸들러가 동작한다.
2. `div` 요소에 할당된 `onclick` 핸들러가 동작한다.
3. `form` 요소에 할당된 `onclick` 핸들러가 동작한다.

- 즉, `p` 요소를 클릭하면 `p`, `div`, `form` 순서로 3개의 alert 창이 뜬다.
- 모든 이벤트가 버블링되는 것은 아니다. `focus` 이벤트와 같이 버블링되지 않은 이벤트도 있지만, 거의 모든 이벤트가 버블링된다.

#### event.target

- 부모 요소의 핸들러는 이벤트가 정확히 어디서 발생했는지 등에 대한 정보를 이벤트 객체의 `target` 프로퍼티를 통해 얻을 수 있다.
- 이벤트가 발생한 가장 안쪽의 요소를 `target`이라고 불리고, 이벤트 객체의 `target` 속성으로 접근할 수 있다.
- 버블링이 진행되어도 `event.target`은 변하지 않는다.
- cf. `event.currentTarget`: 실행 중인 핸들러가 할당된 요소를 참조한다.

```html
<body>
  <form id="form">
    FORM
    <div>
      DIV
      <p>P</p>
    </div>
  </form>
  <script src="script.js"></script>
</body>
```

```js
// script.js
const form = document.querySelector("form");
form.addEventListener("click", function (e) {
  console.log("target", e.target.tagName);
  console.log("currentTarget", e.currentTarget.tagName);
});
// form을 클릭했을 때: target - FORM, currentTarget - FORM
// div를 클릭했을 때: target - DIV, currentTarget - FORM
// p를 클릭했을 때: target - P, currentTarget - FORM
```

#### 버블링 중단하기

- 이벤트 객체의 메서드인 `event.stopPropagation()`을 사용하면 된다.

### 이벤트 캡처링

> **표준 DOM 이벤트에서 정의한 이벤트 흐름**
>
> 1. 캡처링 단계: 이벤트가 하위 요소로 전파되는 단계
> 2. 타깃 단계: 이벤트가 실제 타깃 요소에 전달되는 단계
> 3. 버블링 단계: 이벤트가 상위 요소로 전파되는 단계

- 이벤트 캡처링은 **이벤트가 최상위 조상에서 시작해 실제 타깃 요소까지 전파되는 것**을 말한다.
- `on<event>` 프로퍼티나 HTML 속성, `addEventListener` 메서드를 이용해 할당된 핸들러는 캡처링에 대해 전혀 알 수 없다. 두 번째 혹은 세번째 단계의 이벤트 흐름에 대해서만 동작한다.
- 캡처링 단계에서 이벤트를 잡아내려먼 `addEventListener` 메서드의 `capture` 옵션을 `true`로 설정해야 한다.

```js
elem.addEventListener(..., {capture: true});
// false (default): 핸들러는 타깃 단계와 버블링 단계에서 동작
// true: 핸들러는 캡처링 단계와 타깃 단계에서 동작
```

**Example**

```html
<!DOCTYPE html>
<body>
  <form>
    FORM
    <div>
      DIV
      <p>P</p>
    </div>
  </form>

  <script>
    for (let elem of document.querySelectorAll("*")) {
      elem.addEventListener(
        "click",
        (e) => alert(`캡쳐링: ${elem.tagName}`),
        true
      );
      elem.addEventListener("click", (e) => alert(`버블링: ${elem.tagName}`));
    }
  </script>
</body>
```

`p` 요소를 클릭하면...

1.  캡처링 단계 (첫번째 리스너): `HTML` -> `BODY` -> `FORM` -> `DIV`
2.  타깃 단계: `P` (첫번째 리스너의 타깃 단계와 두번째 리스너의 타깃 단계, 총 두 번)
3.  버블링 단계 (두번째 리스너): `DIV` -> `FORM` -> `BODY` -> `HTML`

- `event.eventPhase` : 현재 이벤트 흐름 단계 (캡처링 = 1, 타깃 = 2, 버블링 = 3)

> 참고: [Event Bubbling and Capturing](https://ko.javascript.info/bubbling-and-capturing)

### 이벤트 위임

> 참고: [Event Delegation](https://ko.javascript.info/event-delegation)

- 캡처링과 버블링을 활용하면 이벤트 핸들링 패턴인 이벤트 위임(event delegation)을 구현할 수 있다.
- 이벤트 위임을 사용하면 **요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소에 대한 이벤트를 한꺼번에 다룰 수 있다.**
  - 공통 조상에 할당한 핸들러에서 `event.target`를 이용하면 실제 어느 요소에서 이벤트가 발생했는지 알 수 있기 때문이다.
- 많은 핸들러를 할당하지 않아도 되기 때문에 코드가 간결해지고, 메모리가 절약된다.
- 하지만, 이벤트 위임을 구현하기 위해서는 이벤트가 반드시 버블링되어야 한다.
  - 하지만, 모든 이벤트가 버블링 되는 것은 아니다.
  - `event.stopPropagation()`을 사용하는데 유의해야 한다.

**Example 1**

```html
<!DOCTYPE html>
<html>
  <body>
    <table id="bagua-table">
      <tr>
        <th colspan="3">
          <em>Bagua</em> Chart: Direction, Element, Color, Meaning
        </th>
      </tr>
      <tr>
        <td class="nw">
          <strong>Northwest</strong> <br />Metal <br />Silver <br />Elders
        </td>
        <td class="n">
          <strong>North</strong> <br />Water <br />Blue <br />Change
        </td>
        <td class="ne">
          <strong>Northeast</strong> <br />Earth <br />Yellow <br />Direction
        </td>
      </tr>
      <tr>
        <td class="w">
          <strong>West</strong> <br />Metal <br />Gold <br />Youth
        </td>
        <td class="c">
          <strong>Center</strong> <br />All <br />Purple <br />Harmony
        </td>
        <td class="e">
          <strong>East</strong> <br />Wood <br />Blue <br />Future
        </td>
      </tr>
      <tr>
        <td class="sw">
          <strong>Southwest</strong> <br />Earth <br />Brown <br />Tranquility
        </td>
        <td class="s">
          <strong>South</strong> <br />Fire <br />Orange <br />Fame
        </td>
        <td class="se">
          <strong>Southeast</strong> <br />Wood <br />Green <br />Romance
        </td>
      </tr>
    </table>

    <script>
      const table = document.getElementById("bagua-table");

      let selectedTd;
      table.addEventListener("click", function (event) {
        const target = event.target;
        while (target !== this) {
          // this === event.currentTarget (화살표 함수 X)
          if (target.tagName === "TD") {
            highlight(target);
            return;
          }
          target = target.parentNode;
        }
      });
      function highlight(node) {
        if (selectedTd) {
          selectedTd.classList.remove("highlight");
        }
        selectedTd = node;
        selectedTd.classList.add("highlight");
      }
    </script>
  </body>
</html>
```

**Example 2**

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="messages.css" />
    <meta charset="utf-8" />
  </head>

  <body>
    <div id="container">
      <div class="pane">
        <h3>Horse</h3>
        <p>
          The horse is one of two extant subspecies of Equus ferus. It is an
          odd-toed ungulate mammal belonging to the taxonomic family Equidae.
          The horse has evolved over the past 45 to 55 million years from a
          small multi-toed creature, Eohippus, into the large, single-toed
          animal of today.
        </p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
        <h3>Donkey</h3>
        <p>
          The donkey or ass (Equus africanus asinus) is a domesticated member of
          the horse family, Equidae. The wild ancestor of the donkey is the
          African wild ass, E. africanus. The donkey has been used as a working
          animal for at least 5000 years.
        </p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
        <h3>Cat</h3>
        <p>
          The domestic cat (Latin: Felis catus) is a small, typically furry,
          carnivorous mammal. They are often called house cats when kept as
          indoor pets or simply cats when there is no need to distinguish them
          from other felids and felines. Cats are often valued by humans for
          companionship and for their ability to hunt vermin.
        </p>
        <button class="remove-button">[x]</button>
      </div>
    </div>

    <script>
      const container = document.querySelector("#container");
      container.addEventListener("click", function (e) {
        if (e.target.className !== "remove-button") return;
        container.removeChild(e.target.parentNode);
      });
    </script>
  </body>
</html>
```

**Example 3**

```html
<!DOCTYPE html>
<body>
  <div id="menu">
    <button data-action="save">저장하기</button>
    <button data-action="load">불러오기</button>
    <button data-action="search">검색하기</button>
  </div>

  <script>
    class MenuHandler {
      save() {
        alert("저장하기");
      }

      load() {
        alert("불러오기");
      }

      search() {
        alert("검색하기");
      }

      handleEvent(event) {
        switch (event.type) {
          case "click":
            const action = event.target.dataset.action;
            if (action) {
              this[action]();
            }
            break;
          default:
            break;
        }
      }
    }
    const menu = document.querySelector("#menu");
    const handler = new MenuHandler();
    menu.addEventListener("click", handler);
  </script>
</body>
```

**Example 4**

```html
<!DOCTYPE html>
<body>
  첫 번째 카운터:
  <input type="button" value="1" data-counter />
  두 번째 카운터:
  <input type="button" value="2" data-counter />

  <script>
    document.addEventListener("click", function (event) {
      if (event.target.dataset.counter != undefined) {
        event.target.value++;
      }
    });
  </script>
</body>
```

**Example 5**

```html
<!DOCTYPE html>
<body>
  <button data-toggle-id="subscribe-mail">구독 폼 보여주기</button>
  <form id="subscribe-mail" hidden>메일 주소: <input type="email" /></form>

  <script>
    document.addEventListener("click", function (event) {
      const id = event.target.dataset.toggleId;
      if (!id) return;
      const elem = document.getElementById(id);
      elem.hidden = !elem.hidden;
    });
  </script>
</body>
```

> 1. 공통 조상에 하나의 핸들러를 할당한다.
> 2. 핸들러 내에서 `event.target`를 사용해 이벤트가 발생한 요소가 어디인지 알아낸다.
> 3. 요소에 따라 다르게 이벤트를 처리한다.

### 브라우저의 기본동작

> 참고: [Default Browser Action](https://ko.javascript.info/default-browser-action)

- 상당수의 이벤트는 발생 즉시 브라우저에 의해 특정 동작이 자동으로 실행된다.
  - 링크를 클릭하면 해당 URL로 이동한다.
  - 폼 전송 버튼을 클릭하면 서버에 폼이 전송된다.
  - 마우스 버튼을 누른 채로 글자 위에서 커서를 움직이면 글자가 선택된다.
- 하지만, 이런 브라우저 기본 동작 대신 자바스크립트를 이용해 직접 동작을 구현해야 하는 경우가 있다.
- 이벤트 객체의 메서드인 `event.preventDefault()` 를 사용하여 브라우저의 기본동작을 막을 수 있다.
- 또한, 이벤트 핸들러에서 `false`를 반환하는 방법도 있다. 하지만, 이 방법은 `on<event>` 속성을 통해 할당된 핸들러에서만 가능하다.
- 브라우저의 기본동작을 막은 경우, `event.defaultPrevented` 값이 `true`이고, 아니라면 `false`이다.
- `addEventListener` 메서드의 `passive: true` 옵션은 브라우저에게 기본동작을 막지 않을 것이라는 정보를 전달한다.
  - 모바일 기기에서는 사용자가 스크린에 손가락을 대고 움직일 때 발생하는 `touchmove`와 `touchstart` 이벤트가 있다. 이런 이벤트는 기본적으로 스크롤링을 발생시킨다.
  - 브라우저는 `preventDefault`가 어디에서도 호출되지 않았다고 판단되면, 그제서야 스크를링을 진행한다. 이 과정에서 불필요한 지연이 발생한다.
  - `passive: true` 옵션을 이용하면 브라우저는 자연스럽게 스크롤링을 발생시킬 것이다.
  - 몇몇 브라우저에서 `touchstart`와 `touchmove` 이벤트의 `passive`의 기본값은 `true`이다.
