# MaterialsLiveHelp
```text
elements/materials/Communication/MaterialsLiveHelp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLiveHelp icon](../../../icons/materials/Communication/MaterialsLiveHelp.png) | ![MaterialsLiveHelp element](MaterialsLiveHelp.element.png) | ![MaterialsLiveHelp card](MaterialsLiveHelp.card.png) |
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

' loads the MaterialsLiveHelp element
include('elements/materials/Communication/MaterialsLiveHelp')
MaterialsLiveHelp('element', 'Live Help', 'an optional tech field')
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

' loads the MaterialsLiveHelp element
include('elements/materials/Communication/MaterialsLiveHelp')
MaterialsLiveHelp('element', 'Live Help', 'an optional tech field')
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

' loads the MaterialsLiveHelp card
include('elements/materials/Communication/MaterialsLiveHelp')
MaterialsLiveHelpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLiveHelp card
include('elements/materials/Communication/MaterialsLiveHelp')
MaterialsLiveHelpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
