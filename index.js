// - JSX란 무엇인가요?
// JavaScript의 확장 문법(JavaScipt Syntax Extension)으로, HTML에 자바스크립트의 변수들을 바로 사용 가능할 수 있는 일종의 템플릿 언어이다. 
// JSX는 표현식이기 때문에 컴파일이 끝나면 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식된다.

// - React란 무엇인가요?
// 웹 프레임워크로, 자바스크립트 라이브러리의 하나이다.

// - React를 사용하는 이유는 무엇인가요?
// 사용자와 상호작용할 수 있는 동적인 UI를 쉽게 만들 수 있기 때문에, 그리고 가상 DOM을 만들어 그곳에서 모든 연산을 수행한 후, 실제 DOM을 갱신하여 리플로우/리페인트의 연산을 최소화한다.

// - CRA란 무엇인가요?
// 'create-react-app node module'의 약자로 리액트 프로젝트를 쉽게 만들 수 있게 도와주는 도구이다.

// - 컴포넌트란 무엇인가요?
// UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다.
// 자바스크립트의 함수와 비슷하며, 함수 컴포넌트와 클래스 컴포넌트가 있다.

// - React Sass란 무엇인가요? 사용하는 이유는 무엇인가요?
// css의 확장 언어로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐 만 아니라, 코드의 가독성을 높여주어 유지보수를 쉽게 해준다.

// - React Router란 무엇인가요? 사용하는 이유는 무엇인가요?
// 리액트는 SPA(페이지가 하나인 어플리케이션)이기 때문에 페이지 이동이 불가능하다. 일반 웹 사이트처럼 URL에 따른 페이지 이동을 할 수 있게 해주는 기능이 React Router이다.

// - 라이브러리와 프레임워크의 차이점은 무엇인가요?
// flow에 대한 제어 권한이 어디에 있느냐의 차이이다.
// 프레임워크: 전체적인 흐름을 자체적으로 가지고 있으며, 프로그래머가 그 안에 필요한 코드를 작성
// 라이브러리: 사용자가 플로우에 대해 제어를 하며 필요한 상황(도구)을 가져다 씀

// - mock data를 사용하는 이유는 무엇인가요?
// API가 아직 준비중일 경우 필요하고, mock data를 사용하면 key-value값을 미리 맞춰볼 수 있어서 backend와의 소통이 효율적으로 이루어질 수 잇다.

// - SPA란 무엇인가요?
// single page application, 페이지가 하나인 어플리케이션

// - 생명주기(lifecycle) 메소드는 무엇인가요?
// 마운트: 컨스트럭터 -> 렌더 -> 컴디마
// 업데이트: 렌더 -> 컴디업
// 해제: 컴윌언마

// - state와 props의 차이는 무엇인가요?
// state: 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용, 컴포넌트 안에서 데이터를 변경할 수 있다. 즉, 한 컴포넌트의 상태를 나타낸다.
// props: 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터(자식 컴포넌트에서는 변경 불가)

// - React의 특징(으로 시작해서 연계 질문 계속 가능)

// - map 함수가 무엇인지 설명해주세요.
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

// - 버튼을 클릭했을 때 alert 창을 띄우고 싶습니다. 리액트에서 어떻게 구현할까요?
// <button onClick={()=>{alert('짜잔!')}} />

// - Virtual DOM이란 무엇인가요?
// 하나의 노드를 수정 했을 때, 모든 노드에 대한 레이아웃 재계산과 리렌더링을 초래하는 것을 막기 위해 변화가 일어나면 그것을 가상 돔에 적용시키고, 
// 가상 돔에서 연산이 끝나면 최종적인 변화를 실제 DOM으로 보낸다.

// - 리액트에서 단방향 데이터 흐름이란 무엇인가요?
// 양방향 데이터 바인딩의 경우는 두 개의 watcher가 사용되고, 데이터가 많아지게 되면 이 데이터의 동기화를 위해 수많은 watcher가 생성되므로 성능 저하가 발생할 수 있다. 
// 이런 문제들 때문에 리액트에서는 단방향 데이터 바인딩을 사용한다.
// 단방향 데이터 바인딩은 단 하나의 watcher가 자바스크립트의 데이터 갱신을 감지하여 사용자의 UI데이터를 갱신한다. 
// 사용자가 UI를 통해 자바스크립트의 데이터를 갱신할 때는 이벤트를 통해 갱신하게 된다.
// 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 “아래”에 있는 컴포넌트에만 영향을 미친다.

// fetch 함수는 무엇인가요?
// - API를 사용하여 백엔드 서버와 **비동기 요청**을 하는 방식 중 하나
// - 비동기 방식으로 요청하기 때문에 API 호출하는 과정이 끝나지 않더라도 자동적으로 다음 코드로 넘어감.
// - 호출 과정에서 필요한 정보를 사용할 땐 .then() 함수 이용

// 코드리뷰란 무엇인가요? 코드리뷰는 필요한가요? 왜 필요한가요?
// - 서로의 코드를 리뷰, 개발자만의 문화
// - 더 나은 퀄리티의 코드로 거듭나는 것 뿐 아니라, 새로운 기술적인 지식을 얻을 수도 있고 혹은 내가 해결해야 하는 문제에 대해 새로운 관점을 습득 할 수도 있습니다.

// 리액트에서 json이란 무엇인가요?
// - **네트워크를 통해 데이터를 주고받는 데 자주 사용되는 경량 데이터 형식**
// - 데이터 저장
// - **변화하는 데이터를 넣음으로서 웹페이지가 항상 같은 내용이 아닌 변화되는 데이터에 따라 달라지는 동적 변화가 일어나는 웹사이트를 만들수 있다.**

// json 목 데이터와 javascript 변수로 만든 목 데이터의 차이에 대해 설명해주세요.
// `myData.json` 을 불러올 때 데이터의 주소를 확인해보세요. 자신 로컬 서버에서 바로 데이터를 불러오는 것을 확인할 수 있습니다. `fetch` 를 사용하기 때문에 `GET` method를 사용해 실제 API주소에서 데이터를 받아오는 것처럼 코드를 작성합니다. / api 호출 try
// 오늘 배울 방법은 `.js` 파일로 데이터를 분리하는 방법입니다. 배열 데이터를 변수에 담고 필요한 컴포넌트에서 `import` 해서 사용합니다.`.js` 파일은 데이터를 `import` 하는 컴포넌트 바로 옆으로 접근하기 쉬운 곳에 생성합니다. /key값맞춰보기

// 인증 인가 흐름에 대해서 설명해주세요.

// ### :: 로그인 절차

// 1. 유저 아이디와 비번 생성
// 2. 유저 비번 암호화 해서 DB에 저장 (회원가입)
// 3. 유저 로그인 -> 아이디와 비밀번호 입력
// 4. 유저가 입력한 비밀번호 암호화 한후 암호화되서 DB에 저정된 유저 비밀번호와 비교.
// 5. 일치하면 로그인 성공
// 6. 로그인 성공하면 `access token`을 클라이언트에게 전송.
// 7. 유저는 로그인 성공후 다음부터는 `access token`을 첨부해서 request를 서버에 전송함으로서 매번 로그인 해도 되지 않도록 한다.

// ### Authorization 절차

// 1. Authentication 절차를 통해 `access token`을 생성한다. `access token`에는 유저 정보를 확인할 수 있는 정보가 들어가 있어야 한다 (예를 들어 user id).
// 2. 유저가 request를 보낼때 `access token`을 첨부해서 보낸다.
// 3. 서버에서는 유저가 보낸 `access token`을 복호화 한다.
// 4. 복호화된 데이터를 통해 user id를 얻는다.
// 5. user id를 사용해서 database에서 해당 유저의 권한(permission)을 확인하다.
// 6. 유저가 충분한 권한을 가지고 있으면 해당 요청을 처리한다.
// 7. 유저가 권한을 가지고 있지 않으면 Unauthorized Response(401) 혹은 다른 에러 코드를 보낸다.