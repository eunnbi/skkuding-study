# 2023년 1학기 SKKUDING Frontend 신입부원 스터디

## Week1

### `<!DOCTYPE html>`

- DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에게 알려주는 역할을 하는 선언문이다. HTML 파일의 최상단에 위치해야 한다.
- DOCTYPE 선언이 필요한 이유

  - HTML 버전에는 HTML5, HTML4 이하 및 XHTML이 있다. HTML 버전마다 지원되는 태그가 다르다. 그래서 DOCTYPE 타입 선언을 통해 브라우저에게 HTML 버전을 알리고, 웹 브라우저가 내용을 올바르게 표시할 수 있도록 한다.
  - [Quirks Mode and Standards Mode](https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

<br/>

### html 요소의 lang 속성

- html 요소의 lang 속성은 접근성 (accessbility)와 연관이 있다. lang 속성에 따라 스크린 리더가 음성 표현에 사용할 언어를 선택한다.
- lang 속성은 HTML 문서의 주요 언어를 나타내야 한다. 아무런 값도 지정하지 않을 시 보통 운영체제의 언어 설정을 따라가므로, 잘못된 언어를 사용할 수 있습니다.
- lang 속성을 올바르게 지정해야 `<title>`과 같은 `<head>` 내부의 중요한 메타데이터를 정확한 발음으로 표현할 수 있다.

> [MDN Web Docs - Accessibility concerns](https://developer.mozilla.org/ko/docs/Web/HTML/Element/html#%EC%A0%91%EA%B7%BC%EC%84%B1_%EA%B3%A0%EB%A0%A4%EC%82%AC%ED%95%AD)

<br/>

### meta tag

- 문서의 저자 및 설명을 meta 태그로 정의할 수 있다. 특히, Description Meta Tag를 이용해 검색엔진에게 페이지 내용을 요약하여 제공할 수 있다.
  - [예시](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%EC%A0%80%EC%9E%90%EC%99%80_%EC%84%A4%EB%AA%85%EC%9D%84_%EC%B6%94%EA%B0%80)
- [Open Graph Meta Tag](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#other_types_of_metadata)
- [Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

<br/>

### Semantic Tag

- `Semantic`은 '의미의', '의미론적인'라는 뜻을 가진다. 따라서 시맨틱 태그란 의미가 있는 태그를 말한다. `div`나 `span`과 같이 의미가 없는 태그는 태그 이름만 보고는 어떤 내용이 있는지 전혀 유추할 수 없지만, `form`, `table`, `article` 등 시맨틱 태그들은 어떤 내용이 있는지 명확하게 정의한다.
- Semantic Tag 사용의 장점
  - 검색엔진은 태그를 기반으로 페이지 내 콘텐츠들을 이해하고 수집한다. 검색엔진이 사이트의 콘텐츠를 쉽게 이해할 수 있도록 제목은 h1 ~ h6 태그를 사용하여 나타내는 등 의미에 맞는 올바른 태그를 사용하는 것이 중요하다.
  - 사용자가 스크린 리더를 사용하여 페이지를 탐색할 때 도움이 된다.
  - W3C에 따르면 "시맨틱 웹을 사용하면 애플리케이션, 기업 및 커뮤니티에서 데이터를 공유하고 재사용할 수 있다"고 한다. (시맨틱 태그는 개발자 모두에게 명확한 의미를 전달한다.)
- [HTML5 Semantic Tag](https://www.w3schools.com/html/html5_semantic_elements.asp)

<br/>

### CSS Reset

- 모든 브라우저에서 동일한 화면을 볼 수 있도록 브라우저마다 다른 기본 스타일 (User-Agent Style) 을 초기화하는 것을 말한다.
- 참고: [CSS Reset가 필요한 이유 및 코드 소개](https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0)

<br/>

### Box Model

### Position

### Flex, Grid

### Media Query
