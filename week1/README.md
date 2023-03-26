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

## Display

- `display` 속성은 요소를 `block` 요소 혹은 `inline` 요소로 처리할지 아니면 `grid`나 `flex` 처럼 자식 요소를 배치할 때 사용할 레이아웃을 결정한다.
- 기본적으로 HTML 요소는 Block 레벨 요소와 Inline 레벨 요소로 나뉜다.
  - 블록 레벨 요소 (Block): div, h1 ~ h6, p, ul, li, table...
    - 부모 요소의 가로 영역에 맞게 꽉 채워져 표현되는 요소
    - 양옆으로 다른 요소가 배치되지 않게 박스를 생성하므로 박스의 위아래로 줄 바꿈이 생김.
    - 블록 레벨 요소는 일반적인 모든 요소(블록, 인라인 레벨 등)를 포함할 수 있다.
    - [Block-level elements - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
  - 인라인 레벨 요소 (Inline): span, i, img, em, strong, a ...
    - 하나의 라인 안에서 자신의 내용만큼의 박스를 만드는 요소
    - 자신의 내용만큼만 공간을 차지하는 요소
    - 라인의 흐름을 끊지 않고 요소 기준으로 줄 바꿈이 되지 않아 양옆으로 다른 인라인 요소들이 자리할 수 있다.
    - 인라인 레벨 요소는 블록 레벨 요소를 포함할 수 없다.
      - 예외: HTML5에서 `<a>`는 인라인 레벨 요소지만 자손으로 블록 레벨 요소를 가질 수 있다.
    - [Inline elements - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
- display와 box model의 관계
  | display | width | height | margin | padding | border |
  | :-------: | :-----: | :------: | :------: | :-------: | :------: |
  | block | O | O | O | O | O |
  | inline | X | X | 좌/우 | O | O |
- 만약 display 속성을 flex나 grid로 지정하면, 자식 요소들은 자동으로 block 요소로 치리된다.

## Position

- position 속성은 요소를 배치하는 방법을 지정한다. top, right, bottom, left 속성이 요소를 배치할 최종 위치를 결정한다.
- `static`: 기본값으로, 일반적인 문서의 흐름에 따라 요소를 배치한다.
  - top, right, button, left 속성을 무시한다.
- `relative`: 요소를 일반적인 문서 흐름에 따라 배치하고, 자신을 기준으로 top, right, button, left 속성값에 따라 위치를 정한다.
- `absolute`: position 속성값이 static이 아닌 조상 요소를 기준으로 top, right, button, left 속성값에 따라 위치를 정한다. 요소를 일반적인 문서 흐름에서 제거한다. 만약 position 속성값이 static이 아닌 조상 요소가 없다면, 최상위 요소인 html 요소를 기준으로 위치를 결정한다.
- `fixed`: 뷰포트(브라우저의 창)를 기준으로 top, right, button, left 속성값에 따라 배치된다. 요소를 일반적인 문서 흐름에서 제거한다. 화면 스크롤 관계없이 항상 정해진 위치에 요소가 나타난다.
- 참고: [Position - CSS](https://developer.mozilla.org/ko/docs/Web/CSS/position)

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

## Media Query

- 미디어 매체에 따라 다른 스타일을 적용할 수 있게 한다.
- 동일한 웹 페이지를 다양한 환경의 사용자들에게 최적화된 경험을 제공할 수 있게 해준다.
- 반응형 웹 사이트 제작에 반드시 필요한 기술이다.

```
@media mediaqueries { /_ style rules _/}
```

- 미디어 타입: all, braille, embossed, handheld, print, projection, screen, speech, tty, tv
  - 화면을 출력하는 디스플레이가 있는 미디어들은 대부분 screen에 속한다.
  - print: 인쇄
  - all : 모든 미디어 타입
- 미디어 특성 : width, height, device-width, device-height, orientation, aspect-ratio, device-aspect-ratio, color, color-index, monochrome, resolution, scan, grid
  - width : 뷰포트의 너비 (브라우저 창의 너비)
  - orientation: 세로모드 (portrait) / 가로모드 (landscape)

**Example**

```css
/* 미디어 타입이 screen이면 적용 */
@media screen {
}

/* 미디어 타입이 screen이고 width가 768px 이상이면 적용. */
@media screen and (min-width: 768px) {
}

/* width가 768px 이상이고 1024px 이하이면 적용
   and는 연결된 모든 표현식이 참이면 적용된다. */
@media (min-width: 768px) and (max-width: 1024px) {
}

/* 쉼표로 연결된 미디어 쿼리 중 하나라도 참이면 적용된다. */
@media screen and (min-width: 768px), screen and (orientation: portrait), ... {
}

/* not 키워드는 하나의 media_query 전체를 부정합니다.  
  → not (screen and (min-width: 768px)) */
@media not screen and (min-width: 768px) {
}

/* 첫 번째 미디어 쿼리에만 not 키워드가 적용되며, 
두 번째 미디어 쿼리(print)에는 영향이 없다. */
@media not screen and (min-width: 768px), print {
}
```

### 모바일과 데스크탑, 누가 먼저? 🤔

- 미디어 쿼리의 분기점으로 대부분 width 값을 사용하는데, 이때 min을 쓸지 max를 쓸지 고민될 때가 있다.

**Mobile First**

```css
.title {
  font-size: 12px;
}

@media (min-width: 640px) {
  .title {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 18px;
  }
}
```

**Desktop First**

```css
.title {
  font-size: 18px;
}

@media (max-width: 1023px) {
  .title {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .title {
    font-size: 14px;
  }
}

@media (max-width: 639px) {
  .title {
    font-size: 12px;
  }
}
```
