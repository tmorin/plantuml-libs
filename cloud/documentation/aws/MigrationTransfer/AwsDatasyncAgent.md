# AwsDatasyncAgent
```text
elements/aws/MigrationTransfer/AwsDatasyncAgent
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDatasyncAgent icon](../../../icons/aws/MigrationTransfer/AwsDatasyncAgent.png) | ![AwsDatasyncAgent element](AwsDatasyncAgent.element.png) | ![AwsDatasyncAgent card](AwsDatasyncAgent.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsDatasyncAgent element
include('elements/aws/MigrationTransfer/AwsDatasyncAgent')
AwsDatasyncAgent('element', 'Datasync Agent', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsDatasyncAgent element
include('elements/aws/MigrationTransfer/AwsDatasyncAgent')
AwsDatasyncAgent('element', 'Datasync Agent', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsDatasyncAgent card
include('elements/aws/MigrationTransfer/AwsDatasyncAgent')
AwsDatasyncAgentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/aws')

' loads the AwsDatasyncAgent card
include('elements/aws/MigrationTransfer/AwsDatasyncAgent')
AwsDatasyncAgentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
