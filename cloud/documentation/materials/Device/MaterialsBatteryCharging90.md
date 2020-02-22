# MaterialsBatteryCharging90
```text
elements/materials/Device/MaterialsBatteryCharging90
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryCharging90 icon](../../../icons/materials/Device/MaterialsBatteryCharging90.png) | ![MaterialsBatteryCharging90 element](MaterialsBatteryCharging90.element.png) | ![MaterialsBatteryCharging90 card](MaterialsBatteryCharging90.card.png) |
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

' loads the MaterialsBatteryCharging90 element
include('elements/materials/Device/MaterialsBatteryCharging90')
MaterialsBatteryCharging90('element', 'Battery Charging90', 'an optional tech field')
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

' loads the MaterialsBatteryCharging90 element
include('elements/materials/Device/MaterialsBatteryCharging90')
MaterialsBatteryCharging90('element', 'Battery Charging90', 'an optional tech field')
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

' loads the MaterialsBatteryCharging90 card
include('elements/materials/Device/MaterialsBatteryCharging90')
MaterialsBatteryCharging90Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryCharging90 card
include('elements/materials/Device/MaterialsBatteryCharging90')
MaterialsBatteryCharging90Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
