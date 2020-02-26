# MaterialsPermCameraMic
```text
elements/materials/Action/MaterialsPermCameraMic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPermCameraMic icon](../../../icons/materials/Action/MaterialsPermCameraMic.png) | ![MaterialsPermCameraMic element](MaterialsPermCameraMic.element.png) | ![MaterialsPermCameraMic card](MaterialsPermCameraMic.card.png) |
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

' loads the MaterialsPermCameraMic element
include('elements/materials/Action/MaterialsPermCameraMic')
MaterialsPermCameraMic('element', 'Perm Camera Mic', 'an optional tech field')
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

' loads the MaterialsPermCameraMic element
include('elements/materials/Action/MaterialsPermCameraMic')
MaterialsPermCameraMic('element', 'Perm Camera Mic', 'an optional tech field')
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

' loads the MaterialsPermCameraMic card
include('elements/materials/Action/MaterialsPermCameraMic')
MaterialsPermCameraMicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPermCameraMic card
include('elements/materials/Action/MaterialsPermCameraMic')
MaterialsPermCameraMicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
