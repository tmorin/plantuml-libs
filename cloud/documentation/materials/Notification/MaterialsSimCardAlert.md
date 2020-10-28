# MaterialsSimCardAlert
```text
elements/materials/Notification/MaterialsSimCardAlert
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSimCardAlert icon](../../../icons/materials/Notification/MaterialsSimCardAlert.png) | ![MaterialsSimCardAlert element](MaterialsSimCardAlert.element.png) | ![MaterialsSimCardAlert card](MaterialsSimCardAlert.card.png) |
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

' loads the MaterialsSimCardAlert element
include('elements/materials/Notification/MaterialsSimCardAlert')
MaterialsSimCardAlert('element', 'Sim Card Alert', 'an optional tech field')
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

' loads the MaterialsSimCardAlert element
include('elements/materials/Notification/MaterialsSimCardAlert')
MaterialsSimCardAlert('element', 'Sim Card Alert', 'an optional tech field')
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

' loads the MaterialsSimCardAlert card
include('elements/materials/Notification/MaterialsSimCardAlert')
MaterialsSimCardAlertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSimCardAlert card
include('elements/materials/Notification/MaterialsSimCardAlert')
MaterialsSimCardAlertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
