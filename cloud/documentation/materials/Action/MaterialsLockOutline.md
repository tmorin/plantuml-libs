# MaterialsLockOutline
```text
elements/materials/Action/MaterialsLockOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLockOutline icon](../../../icons/materials/Action/MaterialsLockOutline.png) | ![MaterialsLockOutline element](MaterialsLockOutline.element.png) | ![MaterialsLockOutline card](MaterialsLockOutline.card.png) |
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

' loads the MaterialsLockOutline element
include('elements/materials/Action/MaterialsLockOutline')
MaterialsLockOutline('element', 'Lock Outline', 'an optional tech field')
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

' loads the MaterialsLockOutline element
include('elements/materials/Action/MaterialsLockOutline')
MaterialsLockOutline('element', 'Lock Outline', 'an optional tech field')
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

' loads the MaterialsLockOutline card
include('elements/materials/Action/MaterialsLockOutline')
MaterialsLockOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLockOutline card
include('elements/materials/Action/MaterialsLockOutline')
MaterialsLockOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
