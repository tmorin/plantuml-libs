# MaterialsOndemandVideo
```text
elements/materials/Notification/MaterialsOndemandVideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsOndemandVideo icon](../../../icons/materials/Notification/MaterialsOndemandVideo.png) | ![MaterialsOndemandVideo element](MaterialsOndemandVideo.element.png) | ![MaterialsOndemandVideo card](MaterialsOndemandVideo.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsOndemandVideo element
include('elements/materials/Notification/MaterialsOndemandVideo')
MaterialsOndemandVideo('element', 'Ondemand Video', 'an optional tech field')
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

' loads the MaterialsOndemandVideo element
include('elements/materials/Notification/MaterialsOndemandVideo')
MaterialsOndemandVideo('element', 'Ondemand Video', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsOndemandVideo card
include('elements/materials/Notification/MaterialsOndemandVideo')
MaterialsOndemandVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsOndemandVideo card
include('elements/materials/Notification/MaterialsOndemandVideo')
MaterialsOndemandVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
