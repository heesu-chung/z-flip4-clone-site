## Demo Link
[https://z-flip4-clone.web.app/](https://z-flip4-clone.web.app/)
  
배포시 insecured fonts 이슈가 발생하여 다른 폰트로 대체하였습니다.  
README gif 이미지 및 github 업로드 된 클론 소스코드에는 테스트 용도로 samsung one / samsung sharp sans 폰트를 사용했습니다. 

## 제작 기간
9월 24일 ~ 10월 21일  
1인 개발

## 프로젝트 개요  
  
### Z Flip4 랜딩 페이지 클론 구현  
  
반응형 웹 개발(mobile, laptop, desktop)을 적용한 마크업과 인터랙티브 요소를 구현한 프로젝트입니다.
  
SCSS를 이용한 스타일링과 자바스크립트 내 직접적인 DOM 접근을 통한 스타일링 속성 변경을 통해 인터랙티브 요소를 구현하였고, 프레임워크로는 React를 사용하였습니다. 
  
세부적인 기능 구현들은 다음과 같습니다.

- 스크린 너비에 따른 반응형 마크업
- 네비게이션 버튼 클릭 시 스크롤 값 변경
- 스크롤 위치에 따른 1회성 비디오 재생 메서드
- 버튼 입력에 대한 이미지 변경
- 이미지 슬라이더
- 스크롤 위치에 대한 Parallax Scroll 요소 구현
- setTimeout을 통한 순차적 애니메이션 구현
- 버튼 입력에 대한 모달 구현
- sticky 요소 구현
- 버튼 입력에 대한 텍스트 슬라이드
  
![clone_01](https://user-images.githubusercontent.com/68191058/197408191-21266c1d-841a-4c18-a07e-cc3ef6e5e43f.gif)  
![clone_02](https://user-images.githubusercontent.com/68191058/197408202-e606996f-5964-4d2d-ae73-3c6c23dc5ebc.gif)  
![clone_03](https://user-images.githubusercontent.com/68191058/197408207-9f92cf37-2f20-4a59-b375-7529bd84655b.gif)  
![clone_04](https://user-images.githubusercontent.com/68191058/197408230-ffbdc2c3-edc7-42df-b053-dc57ea79699b.gif)  
![clone_05](https://user-images.githubusercontent.com/68191058/197408249-bde1b534-6669-4e9f-9165-3fc438134c2f.gif)  
![clone_06](https://user-images.githubusercontent.com/68191058/197408259-9a50a1d5-c825-47bf-8835-e61cfee85e86.gif)  
![clone_07](https://user-images.githubusercontent.com/68191058/197408264-4e97a287-5260-4e8c-9838-b9378858ab96.gif)  
![clone_08](https://user-images.githubusercontent.com/68191058/197408275-38496f09-c68f-4780-ab42-f6a20affaacb.gif)  
![clone_09](https://user-images.githubusercontent.com/68191058/197408286-0e1b92fc-3711-4c7d-8929-9a5c1db07474.gif)  
![clone_10](https://user-images.githubusercontent.com/68191058/197408300-b7448d93-a7cd-4bef-ad52-beb8fdfbd164.gif)  
![clone_11](https://user-images.githubusercontent.com/68191058/197408317-047fb577-428f-49ee-a2b2-e69c1690af48.gif)  
![clone_12](https://user-images.githubusercontent.com/68191058/197408324-dc79b5e8-b69f-463c-8cc9-ff16f2b56a4b.gif)  
![clone_13](https://user-images.githubusercontent.com/68191058/197408336-f2c61bee-00c4-4984-a19b-5ccb4076b692.gif)  
![clone_14](https://user-images.githubusercontent.com/68191058/197408340-d57a6c1b-a2ca-4da9-b44a-257dfc1c179f.gif)  
![clone_15](https://user-images.githubusercontent.com/68191058/197408356-26ddbb71-fa43-4306-9b6b-0099f71a8846.gif)  
![clone_16](https://user-images.githubusercontent.com/68191058/197408370-976eed69-b2d9-4c75-9018-4c54aaf6b8a9.gif)  
  
  
  
  
## 성능 비교표
  
클론 사이트 구현 간 대표적인 인터랙션 구현사항들에 대하여 성능을 비교한 표를 첨부합니다.  
클론 사이트는 오리지널 사이트와 달리 React 프레임워크를 사용하며, 여러 환경적 변수들이 있습니다.
다만 지표들을 통해 인터랙션 동작에 있어 repaint / reflow 현상을 축소시킨다는 목표를 어느정도 달성했습니다.

![comparision](https://user-images.githubusercontent.com/68191058/197410522-5170b341-356f-4568-ad17-eb14d2988d1a.jpg)  
  
  
## 회고

