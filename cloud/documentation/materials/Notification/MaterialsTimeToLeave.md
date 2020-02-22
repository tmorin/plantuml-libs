# MaterialsTimeToLeave
```text
elements/materials/Notification/MaterialsTimeToLeave
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTimeToLeave icon](../../../icons/materials/Notification/MaterialsTimeToLeave.png) | ![MaterialsTimeToLeave element](MaterialsTimeToLeave.element.png) | ![MaterialsTimeToLeave card](MaterialsTimeToLeave.card.png) |
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

' loads the MaterialsTimeToLeave element
include('elements/materials/Notification/MaterialsTimeToLeave')
MaterialsTimeToLeave('element', 'Time To Leave', 'an optional tech field')
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

' loads the MaterialsTimeToLeave element
include('elements/materials/Notification/MaterialsTimeToLeave')
MaterialsTimeToLeave('element', 'Time To Leave', 'an optional tech field')
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

' loads the MaterialsTimeToLeave card
include('elements/materials/Notification/MaterialsTimeToLeave')
MaterialsTimeToLeaveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTimeToLeave card
include('elements/materials/Notification/MaterialsTimeToLeave')
MaterialsTimeToLeaveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
