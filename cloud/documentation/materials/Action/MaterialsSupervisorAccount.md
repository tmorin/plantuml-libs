# MaterialsSupervisorAccount
```text
elements/materials/Action/MaterialsSupervisorAccount
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSupervisorAccount icon](../../../icons/materials/Action/MaterialsSupervisorAccount.png) | ![MaterialsSupervisorAccount element](MaterialsSupervisorAccount.element.png) | ![MaterialsSupervisorAccount card](MaterialsSupervisorAccount.card.png) |
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

' loads the MaterialsSupervisorAccount element
include('elements/materials/Action/MaterialsSupervisorAccount')
MaterialsSupervisorAccount('element', 'Supervisor Account', 'an optional tech field')
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

' loads the MaterialsSupervisorAccount element
include('elements/materials/Action/MaterialsSupervisorAccount')
MaterialsSupervisorAccount('element', 'Supervisor Account', 'an optional tech field')
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

' loads the MaterialsSupervisorAccount card
include('elements/materials/Action/MaterialsSupervisorAccount')
MaterialsSupervisorAccountCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSupervisorAccount card
include('elements/materials/Action/MaterialsSupervisorAccount')
MaterialsSupervisorAccountCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
