### Recoil의 기본
* RecoilRoot

Recoil State를 사용하는 Component는 부모 트리 어딘가에 나타나는 RecoilRoot가 필요합니다. App Component가 RecoilRoot를 넣기 가장 좋은 Component입니다.

 

* Atom

atom은 상태( State )의 일부를 나타냅니다. atom은 어떤 Component에서나 읽고 쓸 수 있습니다. atom의 값을 읽는 Component들은 암묵적으로 atom을 구독합니다. 그래서 atom에 어떤 변화가 생기면 그 atom을 구독하고 있는 모든 Component들이 재 렌더링 되는 결과가 발생합니다.

 

* useRecoilState

Component가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 사용해야 합니다. [ 사용법은 useState()와 비슷합니다. ]

 

* Selector

selector는 파생된 상태( Derived State )의 일부를 나타냅니다. 파생된 상태는 상태의 변화입니다. 파생된 상태를 어떤 방법으로 주어진 상태를 수정하는 순수 함수에 전달된 상태의 결과물로 생각 할 수 있습니다.

 

* useRecoilValue

useRecoilValue()을 사용해서 결과물의 값을 읽을 수 있습니다.

 

* persistAtom

persistAtom을 사용해서 localStorage에 저장 할 수있습니다.