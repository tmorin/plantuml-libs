# MaterialsBatteryStd
```text
elements/materials/Device/MaterialsBatteryStd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryStd icon](../../../icons/materials/Device/MaterialsBatteryStd.png) | ![MaterialsBatteryStd element](MaterialsBatteryStd.element.png) | ![MaterialsBatteryStd card](MaterialsBatteryStd.card.png) |
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

' loads the MaterialsBatteryStd element
include('elements/materials/Device/MaterialsBatteryStd')
MaterialsBatteryStd('element', 'Battery Std', 'an optional tech field')
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

' loads the MaterialsBatteryStd element
include('elements/materials/Device/MaterialsBatteryStd')
MaterialsBatteryStd('element', 'Battery Std', 'an optional tech field')
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

' loads the MaterialsBatteryStd card
include('elements/materials/Device/MaterialsBatteryStd')
MaterialsBatteryStdCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryStd card
include('elements/materials/Device/MaterialsBatteryStd')
MaterialsBatteryStdCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
