# MaterialsNotifications
```text
elements/materials/Social/MaterialsNotifications
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNotifications icon](../../../icons/materials/Social/MaterialsNotifications.png) | ![MaterialsNotifications element](MaterialsNotifications.element.png) | ![MaterialsNotifications card](MaterialsNotifications.card.png) |
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

' loads the MaterialsNotifications element
include('elements/materials/Social/MaterialsNotifications')
MaterialsNotifications('element', 'Notifications', 'an optional tech field')
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

' loads the MaterialsNotifications element
include('elements/materials/Social/MaterialsNotifications')
MaterialsNotifications('element', 'Notifications', 'an optional tech field')
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

' loads the MaterialsNotifications card
include('elements/materials/Social/MaterialsNotifications')
MaterialsNotificationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNotifications card
include('elements/materials/Social/MaterialsNotifications')
MaterialsNotificationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
