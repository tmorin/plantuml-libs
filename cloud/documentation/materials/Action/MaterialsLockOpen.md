# MaterialsLockOpen
```text
elements/materials/Action/MaterialsLockOpen
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLockOpen icon](../../../icons/materials/Action/MaterialsLockOpen.png) | ![MaterialsLockOpen element](MaterialsLockOpen.element.png) | ![MaterialsLockOpen card](MaterialsLockOpen.card.png) |
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

' loads the MaterialsLockOpen element
include('elements/materials/Action/MaterialsLockOpen')
MaterialsLockOpen('element', 'Lock Open', 'an optional tech field')
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

' loads the MaterialsLockOpen element
include('elements/materials/Action/MaterialsLockOpen')
MaterialsLockOpen('element', 'Lock Open', 'an optional tech field')
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

' loads the MaterialsLockOpen card
include('elements/materials/Action/MaterialsLockOpen')
MaterialsLockOpenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLockOpen card
include('elements/materials/Action/MaterialsLockOpen')
MaterialsLockOpenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
