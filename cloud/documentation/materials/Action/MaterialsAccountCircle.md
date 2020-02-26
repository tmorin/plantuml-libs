# MaterialsAccountCircle
```text
elements/materials/Action/MaterialsAccountCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAccountCircle icon](../../../icons/materials/Action/MaterialsAccountCircle.png) | ![MaterialsAccountCircle element](MaterialsAccountCircle.element.png) | ![MaterialsAccountCircle card](MaterialsAccountCircle.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsAccountCircle element
include('elements/materials/Action/MaterialsAccountCircle')
MaterialsAccountCircle('element', 'Account Circle', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsAccountCircle element
include('elements/materials/Action/MaterialsAccountCircle')
MaterialsAccountCircle('element', 'Account Circle', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsAccountCircle card
include('elements/materials/Action/MaterialsAccountCircle')
MaterialsAccountCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsAccountCircle card
include('elements/materials/Action/MaterialsAccountCircle')
MaterialsAccountCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
