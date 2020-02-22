# MaterialsSettingsEthernet
```text
elements/materials/Action/MaterialsSettingsEthernet
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsEthernet icon](../../../icons/materials/Action/MaterialsSettingsEthernet.png) | ![MaterialsSettingsEthernet element](MaterialsSettingsEthernet.element.png) | ![MaterialsSettingsEthernet card](MaterialsSettingsEthernet.card.png) |
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

' loads the MaterialsSettingsEthernet element
include('elements/materials/Action/MaterialsSettingsEthernet')
MaterialsSettingsEthernet('element', 'Settings Ethernet', 'an optional tech field')
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

' loads the MaterialsSettingsEthernet element
include('elements/materials/Action/MaterialsSettingsEthernet')
MaterialsSettingsEthernet('element', 'Settings Ethernet', 'an optional tech field')
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

' loads the MaterialsSettingsEthernet card
include('elements/materials/Action/MaterialsSettingsEthernet')
MaterialsSettingsEthernetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsEthernet card
include('elements/materials/Action/MaterialsSettingsEthernet')
MaterialsSettingsEthernetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
