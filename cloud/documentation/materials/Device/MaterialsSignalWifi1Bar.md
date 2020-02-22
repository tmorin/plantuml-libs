# MaterialsSignalWifi1Bar
```text
elements/materials/Device/MaterialsSignalWifi1Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi1Bar icon](../../../icons/materials/Device/MaterialsSignalWifi1Bar.png) | ![MaterialsSignalWifi1Bar element](MaterialsSignalWifi1Bar.element.png) | ![MaterialsSignalWifi1Bar card](MaterialsSignalWifi1Bar.card.png) |
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

' loads the MaterialsSignalWifi1Bar element
include('elements/materials/Device/MaterialsSignalWifi1Bar')
MaterialsSignalWifi1Bar('element', 'Signal Wifi1 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi1Bar element
include('elements/materials/Device/MaterialsSignalWifi1Bar')
MaterialsSignalWifi1Bar('element', 'Signal Wifi1 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi1Bar card
include('elements/materials/Device/MaterialsSignalWifi1Bar')
MaterialsSignalWifi1BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi1Bar card
include('elements/materials/Device/MaterialsSignalWifi1Bar')
MaterialsSignalWifi1BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
