# HTML

## `<!DOCTYPE html>`

- DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에게 알려주는 역할을 하는 선언문이다. HTML 파일의 최상단에 위치해야 한다.
- DOCTYPE 선언이 필요한 이유

  - HTML 버전에는 HTML5, HTML4 이하 및 XHTML이 있다. HTML 버전마다 지원되는 태그가 다르다. 그래서 DOCTYPE 타입 선언을 통해 브라우저에게 HTML 버전을 알리고, 웹 브라우저가 내용을 올바르게 표시할 수 있도록 한다.
  - [Quirks Mode and Standards Mode](https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

## html 요소의 lang 속성

- html 요소의 lang 속성은 접근성 (accessbility)와 연관이 있다. lang 속성에 따라 스크린 리더가 음성 표현에 사용할 언어를 선택한다.
- lang 속성은 HTML 문서의 주요 언어를 나타내야 한다. 아무런 값도 지정하지 않을 시 보통 운영체제의 언어 설정을 따라가므로, 잘못된 언어를 사용할 수 있습니다.
- lang 속성을 올바르게 지정해야 `<title>`과 같은 `<head>` 내부의 중요한 메타데이터를 정확한 발음으로 표현할 수 있다.

> [MDN Web Docs - Accessibility concerns](https://developer.mozilla.org/ko/docs/Web/HTML/Element/html#%EC%A0%91%EA%B7%BC%EC%84%B1_%EA%B3%A0%EB%A0%A4%EC%82%AC%ED%95%AD)

## Meta tag

- 문서의 저자 및 설명을 meta 태그로 정의할 수 있다. 특히, Description Meta Tag를 이용해 검색엔진에게 페이지 내용을 요약하여 제공할 수 있다.
  - [예시](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%EC%A0%80%EC%9E%90%EC%99%80_%EC%84%A4%EB%AA%85%EC%9D%84_%EC%B6%94%EA%B0%80)
- [Open Graph Meta Tag](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#other_types_of_metadata)
- [Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

## Semantic Tag

- `Semantic`은 '의미의', '의미론적인'라는 뜻을 가진다. 따라서 시맨틱 태그란 의미가 있는 태그를 말한다. `div`나 `span`과 같이 의미가 없는 태그는 태그 이름만 보고는 어떤 내용이 있는지 전혀 유추할 수 없지만, `form`, `table`, `article` 등 시맨틱 태그들은 어떤 내용이 있는지 명확하게 정의한다.
- Semantic Tag 사용의 장점
  - 검색엔진은 태그를 기반으로 페이지 내 콘텐츠들을 이해하고 수집한다. 검색엔진이 사이트의 콘텐츠를 쉽게 이해할 수 있도록 제목은 h1 ~ h6 태그를 사용하여 나타내는 등 의미에 맞는 올바른 태그를 사용하는 것이 중요하다.
  - 사용자가 스크린 리더를 사용하여 페이지를 탐색할 때 도움이 된다.
  - W3C에 따르면 "시맨틱 웹을 사용하면 애플리케이션, 기업 및 커뮤니티에서 데이터를 공유하고 재사용할 수 있다"고 한다. (시맨틱 태그는 개발자 모두에게 명확한 의미를 전달한다.)
- [HTML5 Semantic Tag](https://www.w3schools.com/html/html5_semantic_elements.asp)

<br/>

# CSS

## CSS Reset

- 모든 브라우저에서 동일한 화면을 볼 수 있도록 브라우저마다 다른 기본 스타일 (User-Agent Style) 을 초기화하는 것을 말한다.
- 참고: [CSS Reset가 필요한 이유 및 코드 소개](https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0)

## Box Model

![image](https://user-images.githubusercontent.com/89760088/227769085-f20fc22d-ade0-41c9-87e9-85165c4a6df5.png)

- Content 영역: 요소의 내용을 포함하는 영역
- Border 영역: content 영역을 감싸는 테두리 선
- Padding 영역: content 영역과 테두리 사이의 여백
- Margin 영역: border 바깥쪽의 영역. border 영역을 다른 요소와 구별하기 위해 쓰이는 빈 영역. 주변 요소와의 여백(간격)을 margin을 이용해 지정할 수 있다.
  - [마진 겹침 현상](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- Padding vs Margin
  | | + | - | auto | 단위 |
  |--|--|--|:--:|--|
  | margin | O | O | O | px, %, rem, em 등|
  | padding | O | X | X | px, %, rem, em 등|
  - margin과 padding 값을 % 단위로 사용할 때, 상하좌우의 방향에 관계없이 모두 요소의 width 값을 기준으로 값이 결정된다.
- [Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) 속성은 요소의 너비와 높이를 어떻게 계산할지 정의하는 속성이다. (`content-box`, `border-box`)

## Position

## Flex, Grid

## vw, vh, vmin, vmax, em, rem 단위

- CSS 작업을 할 때 다양한 단위를 사용할 수 있다. 대표적으로 고정단위인 px이 있다. 하지만 px 대신 유동단위를 사용하면 더 유연하게 스타일을 적용할 수 있다.

### vw / vh

- 1vw = viewport 너비의 1%
  - 500px 너비: 1vw = 5px
- 1vh = viewport 높이의 1%
  - 800px 높이: 1vh = 8px
- 요소를 뷰포트 영역 전체를 차지하게 하거나, 그 일부분만 차지하기 하는데 유용하게 쓸 수 있다.
  - 100vw = 뷰포트의 전체 너비
  - 100vh = 뷰포트의 전체 높이

### vmin / vmax

- vmin과 vmax도 viewport를 기준으로 하는 단위이다.
- vmin는 너비와 높이 중 더 작은 값을 적용하고, vmax는 더 큰 값을 적용한다.
  - ex. 너비 600px, 높이 1200px => vmin = 6px / vmax = 12px
- 언제든 화면에 보이는 요소를 쉽게 만들 수 있다.
  - 요소 : 80vw x 80vw
    - 만약 viewport가 1000px x 500px라면 요소의 크기는 800px x 800px가 되므로 잘려서 보이게 된다.
  - 요소 : 80vmin x 80vmin
    - viewport가 1000px x 500px라면 요소의 크기는 400px x 400px가 되어 화면에 요소 전체가 잘 보인다.

### em / rem

- em = 부모의 폰트 크기에 비례하는 단위
  - 1em = 부모의 폰트 크기
  - 2em = 부모의 폰트 크기 \* 2
- 1rem = 최상위 요소인 html의 폰트 크기에 비례하는 단위
  - 1rem = html의 폰트 크기
  - 2rem = html의 폰트 크기 \* 2
  - 대부분 브라우저에서 폰트 크기의 default 값은 16px이다.
- html의 font size만 분기점마다 변경하여 요소들의 font size들을 쉽게 변경할 수 있다.
- 자식 요소에 em 단위를 이용하여 폰트 크기를 지정하면 부모 폰트 크기에 따라 자식 요소의 폰트 사이즈도 바뀐다.
- 만약 부모 요소의 폰트 사이즈를 rem 단위로 지정했다면 html 폰트 사이즈에 따라 부모 요소의 폰트 사이즈가 변경된다.
- 분기점마다 html의 폰트 크기만 변경하면 하위 요소들의 폰트 크기를 따로 변경하지 않아도 된다.

### Media Query
