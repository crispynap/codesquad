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
			- Now that the ReactBrowserEventEmitter handles local event attachment, it can otherwise be confusing what the `isListening` variable describes.
		- Put listening in the correct spot....
			- This commit adds a `node` argument to ReactBrowserEventEmitter that
			enables it to make decisions about what events should be attached
			directly to a node vs the document.
			...
			Additionally:
			Reconcile local events into BrowserEventEmitter
			Moves all media events to the BrowserEventEmitter. This module now
			controls whether or not an event is attached locally or on the window.
			Notes:
			This is not ready. Tests still fail. A lot of them.
	- jquery의 [커밋 메시지1](https://github.com/jquery/jquery/pull/1525/commits)
		- Added missing spaces inside parens in the ajax native datatype tests.
		- Removed the extra space after colon in line 94. Added the required ex…
	- jquery의 [커밋 메시지2](https://github.com/jquery/jquery/pull/3501/commits)
		- added a list that maintains removed animations by .finish and .stop. …
			- …Handled repeated execution of animation in first tick. Fixes #3497.
			corrected syntax error
			Fixes #3497
			Fixed. #3497
	- jquery의 [커밋 메시지: master branch](https://github.com/jquery/jquery/commits/master)
		- Build: Update to Babel 7, use for-of plugin instead of preset-es2015 
			- Closes gh-3786
		- Dimensions: Improve offsetWidth/offsetHeight fallback
			- Fixes gh-3698
			Fixes gh-3602
			Closes gh-3738
	- 분석
		- 

### 마무리: 