# MaterialsEventBusy
```text
elements/materials/Notification/MaterialsEventBusy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsEventBusy icon](../../../icons/materials/Notification/MaterialsEventBusy.png) | ![MaterialsEventBusy element](MaterialsEventBusy.element.png) | ![MaterialsEventBusy card](MaterialsEventBusy.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsEventBusy element
include('elements/materials/Notification/MaterialsEventBusy')
MaterialsEventBusy('element', 'Event Busy', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsEventBusy element
include('elements/materials/Notification/MaterialsEventBusy')
MaterialsEventBusy('element', 'Event Busy', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsEventBusy card
include('elements/materials/Notification/MaterialsEventBusy')
MaterialsEventBusyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsEventBusy card
include('elements/materials/Notification/MaterialsEventBusy')
MaterialsEventBusyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
