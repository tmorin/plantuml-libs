# MaterialsPartyMode
```text
elements/materials/Social/MaterialsPartyMode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPartyMode icon](../../../icons/materials/Social/MaterialsPartyMode.png) | ![MaterialsPartyMode element](MaterialsPartyMode.element.png) | ![MaterialsPartyMode card](MaterialsPartyMode.card.png) |
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

' loads the MaterialsPartyMode element
include('elements/materials/Social/MaterialsPartyMode')
MaterialsPartyMode('element', 'Party Mode', 'an optional tech field')
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

' loads the MaterialsPartyMode element
include('elements/materials/Social/MaterialsPartyMode')
MaterialsPartyMode('element', 'Party Mode', 'an optional tech field')
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

' loads the MaterialsPartyMode card
include('elements/materials/Social/MaterialsPartyMode')
MaterialsPartyModeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPartyMode card
include('elements/materials/Social/MaterialsPartyMode')
MaterialsPartyModeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
