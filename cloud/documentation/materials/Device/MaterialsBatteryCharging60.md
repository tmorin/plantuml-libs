# MaterialsBatteryCharging60
```text
elements/materials/Device/MaterialsBatteryCharging60
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryCharging60 icon](../../../icons/materials/Device/MaterialsBatteryCharging60.png) | ![MaterialsBatteryCharging60 element](MaterialsBatteryCharging60.element.png) | ![MaterialsBatteryCharging60 card](MaterialsBatteryCharging60.card.png) |
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

' loads the MaterialsBatteryCharging60 element
include('elements/materials/Device/MaterialsBatteryCharging60')
MaterialsBatteryCharging60('element', 'Battery Charging60', 'an optional tech field')
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

' loads the MaterialsBatteryCharging60 element
include('elements/materials/Device/MaterialsBatteryCharging60')
MaterialsBatteryCharging60('element', 'Battery Charging60', 'an optional tech field')
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

' loads the MaterialsBatteryCharging60 card
include('elements/materials/Device/MaterialsBatteryCharging60')
MaterialsBatteryCharging60Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryCharging60 card
include('elements/materials/Device/MaterialsBatteryCharging60')
MaterialsBatteryCharging60Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
