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

### 렌더링 최적화 이슈  
  
이번 프로젝트를 진행하며 달성하려 했던 우선적인 목표는 인터랙션 동작 간 Reflow / Repaint 현상 축소였습니다. 지난 프로젝트들을 진행하며 인터랙션 동작에서 렌더링 성능이 크게 떨어지는 현상을 발견했습니다. 자료조사와 코드를 통해 알아낸 해당 성능 저하의 원인은 아래와 같습니다.  
  
- React 프레임 워크 사용으로 인한 성능 이슈
- 런타임 간 styled-components의 성능 이슈
- 스크롤 시 화면 밖 인터랙션 요소 연산으로 인한 자원 낭비
- 필요 이상으로 큰 이미지 사이즈
- 요소 left / width 값 변경을 통한 Reflow / Repaint 현상 발생  
  
프레임워크 사용으로 인한 성능 저하는 필연적입니다. <Results for js web frameworks benchmark - official run>에 따르면 React의 경우 바닐라 JS보다 2배정도 하락된 성능을 보입니다. 가시성과 협업 측면에서 컴포넌트 단위 React 코딩이 편하지만, 성능과의 trade-off 관계에 있습니다. 유지보수 측면에서 웹 표준을 따르는 웹 컴포넌트가 유리합니다. 어느 한 생태계가 절대 우위를 가져갈 수 없고, 웹 컴포넌트 가이드에서 또한 프레임워크와 일정부분 호환시켜 사용하는 것을 권고하기에 추가적인 웹 컴포넌트 학습을 진행할 예정입니다.  
  
css와 styled-components 역시 바닐라 JS와 프레임워크와 비슷하게, 절대 우위가 아닌 각자의 장점이 있습니다. styled-components의 경우 프레임워크 개발 환경에서 CSS-in-JS를 가능케 하기에 VueJS와 비슷한 개발 환경에서 한번에 편하게 작업이 가능하다는 장점이 있습니다. 하지만 별도 라이브러리 설치에 따른 비용이 들기에 서비스 용도에 맞게 사용해야합니다. 인터랙션 요소가 많은 해당 프로젝트에서는 성능적 측면을 고려하여 scss를 사용하였습니다.  
  
이번 프로젝트는 스크롤 값에 의존하는 컴포넌트가 많은 프로젝트였고, 때문에 최대한 화면에 컴포넌트 요소들이 렌더링될 때 연산이 진행되도록 scope를 지정해주었습니다. Original 사이트에 이미지 에셋들의 크기가 실제 화면에 렌더링되는 크기와 차이가 별로 없음을 확인했습니다. 차후 프로젝트에선 모바일, 데스크탑 각각의 환경에 맞도록 이미지 최적화를 진행할 예정입니다.  
  
Reflow / Repaint 현상은 이전 프로젝트들이 가진 문제점입니다. 해당 현상을 최소화하기 위해 인터랙션 애니메이션 구현을 위해 transform과 opacity를 최대한 사용하도록 하였습니다. 실제 이를 적용한 해당 프로젝트에서 Reflow / Repaint 발생 현상은 크게 축소되었으며, 대부분의 인터랙션에서 60fps에 가까운 값을 유지할 수 있게 되었습니다. 기존 사이트의 인터랙션과의 성능 비교 결과는 상단에 첨부합니다.  
  
기존 사이트와 클론 프로젝트에서 서로 대응하는 개별 인터랙션들에 대해 렌더링과 페인팅에 드는 시간비용이 서로 비슷해졌습니다. 하지만 브라우저가 코드를 읽어들이는 데 있어 클론 프로젝트에 훨씬 많은 시간이 드는 것을 확인할 수 있었습니다. React 프레임워크를 사용해서 컴파일/빌드 과정에서 최적화되지 않은 코드가 들어갈 수 있다는 점, 스타일링 과정에서 상속 이외 중복되는 코드를 사용했거나, html 마크업에서 필요 이상의 태그가 들어갔을 가능성이 있습니다.   
  
스타일 최적화 방식중 또 하나로 will-change를 통해 브라우저에 미리 요소의 스타일 값 변경을 알려주는 방법이 있습니다. 해당 방식은 몇 가지 제약이 있으므로, 추가 학습이 필요.  
