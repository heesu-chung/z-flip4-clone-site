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
  
  
### ScrollToTop 버튼 애니메이션 구현    
![clone_000](https://user-images.githubusercontent.com/68191058/198890891-3b086de2-adb2-44e8-8d2c-4e8324b212d8.gif)  
  
  
  
### 비디오 모달 및 버튼 구현(iframe - youtube)    
![clone_00](https://user-images.githubusercontent.com/68191058/198264294-1655eb05-38ca-44ff-878b-729f0924b23d.gif)  
  
  
  
### 스크롤 위치에 대한 텍스트 인터랙션 구현    
![clone_01](https://user-images.githubusercontent.com/68191058/198293456-59f7032e-42f4-4f75-ab61-4fbecda0fcdd.gif)  
  
  
  
### 스크롤 위치에 대한 비디오 재생 구현    
![clone_02](https://user-images.githubusercontent.com/68191058/198293463-8060cb9c-0ee2-4bff-aff0-29bc635838f2.gif)  
  
  
  
### 스크롤 네비게이션 구현    
![clone_03](https://user-images.githubusercontent.com/68191058/198293467-419748bb-0e11-4e6b-af8d-f7d001cac79a.gif)  
  
  
  
### 버튼 입력에 대한 이미지 변환 구현    
![clone_04](https://user-images.githubusercontent.com/68191058/198293472-e79da29e-32ba-42c8-9930-1f2e7c566216.gif)  
  
  
  
### 이미지 슬라이드 인터랙션 구현    
![clone_05](https://user-images.githubusercontent.com/68191058/198293479-ff6ac174-1855-4f88-bf94-e4f1e596de0c.gif)  
  
  
  
### Parallax 스크롤 이미지 인터랙션 구현    
![clone_06](https://user-images.githubusercontent.com/68191058/198293492-da998448-6069-4ab4-8a0b-117c5c6d1521.gif)  
  
  
  
### 애니메이션 구현(setTimeout)    
![clone_07](https://user-images.githubusercontent.com/68191058/198293518-79210a92-c5d9-4a31-9f01-c30bdb959deb.gif)  
  
  
  
### 이미지 스케일, Parallax 인터랙션 구현    
![clone_08](https://user-images.githubusercontent.com/68191058/198293522-fadd4064-07e9-4bbd-bc7a-04c9a9afa62c.gif)  
  
  
  
### 텍스트 투명도 변환    
![clone_09](https://user-images.githubusercontent.com/68191058/198293555-4bb7a24a-65d9-4a8f-8e9e-1cbbf2a9416d.gif)  
  
  
  
### 이미지, 텍스트 인터랙션 구현    
![clone_10](https://user-images.githubusercontent.com/68191058/198293564-210d89d2-c9d4-412b-b9e5-2aa4d92f3b1c.gif)  
  
  
  
### 마스크 이미지 인터랙션 구현    
![clone_11](https://user-images.githubusercontent.com/68191058/198293576-5c7dab4f-0184-4630-9e76-9376a2a1fb8a.gif)  
  
  
  
### 스크롤 위치에 대한 비디오 재생 구현    
![clone_12](https://user-images.githubusercontent.com/68191058/198293585-9e22c947-b94d-4475-a611-b61efee3e627.gif)  
  
  
  
### 이미지 위치 변환 인터랙션    
![clone_13](https://user-images.githubusercontent.com/68191058/198293596-d3c89b1e-245c-44fe-a72e-3fba08ea1bfe.gif)  
  
  
  
### Parallax 스크롤 이미지, 모달 구현  
![clone_14](https://user-images.githubusercontent.com/68191058/198293614-7309d9d1-b56f-4072-9902-717af9263aea.gif)  
  
  
  
### Sticky 이미지    
![clone_15](https://user-images.githubusercontent.com/68191058/198293632-dca802a7-10b3-4ec4-ac95-697d52b2d6ec.gif)  
  
  
  
### 텍스트 인터랙션 및 네비게이션 구현    
![clone_16](https://user-images.githubusercontent.com/68191058/198293677-cd34abae-2ec6-40cc-89e5-b58381808433.gif)  
  
  
  
  
  
  
  
## 성능 비교표
  
클론 사이트 구현 간 대표적인 인터랙션 구현사항들에 대하여 성능을 비교한 표를 첨부합니다.  
클론 사이트는 오리지널 사이트와 달리 React 프레임워크를 사용하며, 여러 환경적 변수들이 있습니다.
다만 지표들을 통해 인터랙션 동작에 있어 repaint / reflow 현상을 축소시킨다는 목표를 일정 달성했습니다.

![comparision](https://user-images.githubusercontent.com/68191058/197410522-5170b341-356f-4568-ad17-eb14d2988d1a.jpg)  
  
  
## 회고

