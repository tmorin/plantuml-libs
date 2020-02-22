# MaterialsBatteryCharging80
```text
elements/materials/Device/MaterialsBatteryCharging80
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryCharging80 icon](../../../icons/materials/Device/MaterialsBatteryCharging80.png) | ![MaterialsBatteryCharging80 element](MaterialsBatteryCharging80.element.png) | ![MaterialsBatteryCharging80 card](MaterialsBatteryCharging80.card.png) |
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

' loads the MaterialsBatteryCharging80 element
include('elements/materials/Device/MaterialsBatteryCharging80')
MaterialsBatteryCharging80('element', 'Battery Charging80', 'an optional tech field')
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

' loads the MaterialsBatteryCharging80 element
include('elements/materials/Device/MaterialsBatteryCharging80')
MaterialsBatteryCharging80('element', 'Battery Charging80', 'an optional tech field')
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

' loads the MaterialsBatteryCharging80 card
include('elements/materials/Device/MaterialsBatteryCharging80')
MaterialsBatteryCharging80Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryCharging80 card
include('elements/materials/Device/MaterialsBatteryCharging80')
MaterialsBatteryCharging80Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
