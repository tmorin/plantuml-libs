# MaterialsBatteryAlert
```text
elements/materials/Device/MaterialsBatteryAlert
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryAlert icon](../../../icons/materials/Device/MaterialsBatteryAlert.png) | ![MaterialsBatteryAlert element](MaterialsBatteryAlert.element.png) | ![MaterialsBatteryAlert card](MaterialsBatteryAlert.card.png) |
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

' loads the MaterialsBatteryAlert element
include('elements/materials/Device/MaterialsBatteryAlert')
MaterialsBatteryAlert('element', 'Battery Alert', 'an optional tech field')
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

' loads the MaterialsBatteryAlert element
include('elements/materials/Device/MaterialsBatteryAlert')
MaterialsBatteryAlert('element', 'Battery Alert', 'an optional tech field')
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

' loads the MaterialsBatteryAlert card
include('elements/materials/Device/MaterialsBatteryAlert')
MaterialsBatteryAlertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryAlert card
include('elements/materials/Device/MaterialsBatteryAlert')
MaterialsBatteryAlertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
