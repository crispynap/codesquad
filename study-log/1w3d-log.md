# 1주 3일차 학습 내용 정리
### 공지: git 사용에 대한 피드백
- 커밋메시지좀 신경쓰세요. 
- prefix 를 사용하는 걸 해보세요. feature, fix, update, change
### 계획: 오늘 공부할 것
- git 사용 심화
	- prefix 등 심화 기능
	- 제이쿼리와 리액트의 커밋 메시지를 참고해보자
- 디버거 공부(vs code 활용)
### 현황: 
- 커밋 메시지 참고해보기
	- react의 [커밋 메시지](https://github.com/facebook/react/pull/9333/commits)
		- Add test fixture for scrolling
		- Rename isListener to isDocListener in ReactBrowserEventEmitter
			- Now that the ReactBrowserEventEmitter handles local event attachment, 
			- it can otherwise be confusing what the `isListening` variable describes.
		- Put listening in the correct spot....
			- This commit adds a `node` argument to ReactBrowserEventEmitter that
			- enables it to make decisions about what events should be attached
			- directly to a node vs the document.
			- ...
			- Additionally:
			- Reconcile local events into BrowserEventEmitter
			- Moves all media events to the BrowserEventEmitter. This module now
			- controls whether or not an event is attached locally or on the window.
			- Notes:
			- This is not ready. Tests still fail. A lot of them.
	- jquery의 [커밋 메시지1](https://github.com/jquery/jquery/pull/1525/commits)
		- Added missing spaces inside parens in the ajax native datatype tests.
		- Removed the extra space after colon in line 94. Added the required ex…
	- jquery의 [커밋 메시지2](https://github.com/jquery/jquery/pull/3501/commits)
		- added a list that maintains removed animations by .finish and .stop. …
			- …Handled repeated execution of animation in first tick. Fixes #3497.
			- corrected syntax error
			- Fixes #3497
			- Fixed. #3497
	- jquery의 [커밋 메시지: master branch](https://github.com/jquery/jquery/commits/master)
		- Build: Update to Babel 7, use for-of plugin instead of preset-es2015 
			- Closes gh-3786
		- Dimensions: Improve offsetWidth/offsetHeight fallback
			- Fixes gh-3698
			- Fixes gh-3602
			- Closes gh-3738
	- 분석
		- 제목: 동사가 처음에 위치하여 무엇을 하는지 먼저 명확히 한다.
			- 한글의 어순에 적합한 메시지 방식을 생각하든가 영어로 쓰든가 해얄 거 같다.
		- 제목: 약 6~70글자 이상이면 ...으로 표시된다. 대개 두 문장 이상일 경우나 의미적으로 두 가지 이상의 커밋을 담고 있을 경우 발생한다.
			- 그러므로 커밋 메시지는 한 문장으로. 그러기 위해선 의미적으로도 한 커밋에 한 단위 수정만을 담아야 할 것 같다.
		- 제목: jquery의 경우 마스터 브랜치에서는 제목 앞머리에 Build:, Dimensions: 등의 카테고리를 붙인다.
			- 프로젝트가 일정 크기를 넘어가면 혼자 하는 프로젝트라고 해도 일목요연하게 보기에 유용할 듯하다.
		- 본문: 보기 좋게 하기 위해 대략 7~80글자마다 강제 줄바꿈을 해주는 것으로 보인다.
		- 본문: 짧은 설명이 필요한 경우는 몇 줄로 넘어가고 그게 넘어가면 additional:, note: 식으로 소제목을 붙여주는 듯.
		- 본문: jquery의 경우 관련 이슈에 대한 링크를 달아둔다. Fixes#000, Closes #000

### 마무리: 