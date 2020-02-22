# MaterialsSignalWifi3Bar
```text
elements/materials/Device/MaterialsSignalWifi3Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi3Bar icon](../../../icons/materials/Device/MaterialsSignalWifi3Bar.png) | ![MaterialsSignalWifi3Bar element](MaterialsSignalWifi3Bar.element.png) | ![MaterialsSignalWifi3Bar card](MaterialsSignalWifi3Bar.card.png) |
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

' loads the MaterialsSignalWifi3Bar element
include('elements/materials/Device/MaterialsSignalWifi3Bar')
MaterialsSignalWifi3Bar('element', 'Signal Wifi3 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi3Bar element
include('elements/materials/Device/MaterialsSignalWifi3Bar')
MaterialsSignalWifi3Bar('element', 'Signal Wifi3 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi3Bar card
include('elements/materials/Device/MaterialsSignalWifi3Bar')
MaterialsSignalWifi3BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi3Bar card
include('elements/materials/Device/MaterialsSignalWifi3Bar')
MaterialsSignalWifi3BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
