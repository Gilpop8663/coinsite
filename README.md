# React 를 연습하면서 배우게 된 것

Routing
State Management
Data Fetching
Animations
Typescript


React Query
React Router
Apex Charts


암호화폐 시세 트래커
이 프로젝트에서는 React Query 를 이용하여 Crypto Price API 의 데이터를 가져오는 것을 배웁니다. 또한 Styled Components 를 이용해 확장 가능한 디자인 시스템 그리고 다크모드 등을 만드는 방법을 배웁니다. 마지막으로 Apex Charts 를 활용하여 암호화폐 시세 변화 데이터를 시각화 하는 방법을 배울 겁니다.

## 만들면서 어려웠던 점

const {isloading,data} = useQuery() 를 이용해 data를 얻은 후 data를 가지고 data.map(function(V)) 와 같이 map 을 사용할 때 데이터 구조에 대해서 헷갈린 점이 많았다. ApexChart에서 [{x:,y:}]를 필요로 했었는데 배열안의 오브젝트 값을 넣어 리턴하는 부분에서 많이 해맸었다.

## 스크린샷

<img src="https://user-images.githubusercontent.com/80146176/143953310-a73e5f60-fcc4-4398-a44e-5a8eec043007.png" width="auto" />

## 배포 사이트

https://gilpop8663.github.io/coinsite/
