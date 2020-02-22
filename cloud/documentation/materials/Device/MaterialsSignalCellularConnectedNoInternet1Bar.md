# MaterialsSignalCellularConnectedNoInternet1Bar
```text
elements/materials/Device/MaterialsSignalCellularConnectedNoInternet1Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellularConnectedNoInternet1Bar icon](../../../icons/materials/Device/MaterialsSignalCellularConnectedNoInternet1Bar.png) | ![MaterialsSignalCellularConnectedNoInternet1Bar element](MaterialsSignalCellularConnectedNoInternet1Bar.element.png) | ![MaterialsSignalCellularConnectedNoInternet1Bar card](MaterialsSignalCellularConnectedNoInternet1Bar.card.png) |
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

' loads the MaterialsSignalCellularConnectedNoInternet1Bar element
include('elements/materials/Device/MaterialsSignalCellularConnectedNoInternet1Bar')
MaterialsSignalCellularConnectedNoInternet1Bar('element', 'Signal Cellular Connected No Internet1 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellularConnectedNoInternet1Bar element
include('elements/materials/Device/MaterialsSignalCellularConnectedNoInternet1Bar')
MaterialsSignalCellularConnectedNoInternet1Bar('element', 'Signal Cellular Connected No Internet1 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellularConnectedNoInternet1Bar card
include('elements/materials/Device/MaterialsSignalCellularConnectedNoInternet1Bar')
MaterialsSignalCellularConnectedNoInternet1BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellularConnectedNoInternet1Bar card
include('elements/materials/Device/MaterialsSignalCellularConnectedNoInternet1Bar')
MaterialsSignalCellularConnectedNoInternet1BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
