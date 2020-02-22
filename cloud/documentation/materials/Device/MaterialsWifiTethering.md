# MaterialsWifiTethering
```text
elements/materials/Device/MaterialsWifiTethering
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWifiTethering icon](../../../icons/materials/Device/MaterialsWifiTethering.png) | ![MaterialsWifiTethering element](MaterialsWifiTethering.element.png) | ![MaterialsWifiTethering card](MaterialsWifiTethering.card.png) |
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

' loads the MaterialsWifiTethering element
include('elements/materials/Device/MaterialsWifiTethering')
MaterialsWifiTethering('element', 'Wifi Tethering', 'an optional tech field')
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

' loads the MaterialsWifiTethering element
include('elements/materials/Device/MaterialsWifiTethering')
MaterialsWifiTethering('element', 'Wifi Tethering', 'an optional tech field')
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

' loads the MaterialsWifiTethering card
include('elements/materials/Device/MaterialsWifiTethering')
MaterialsWifiTetheringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWifiTethering card
include('elements/materials/Device/MaterialsWifiTethering')
MaterialsWifiTetheringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
