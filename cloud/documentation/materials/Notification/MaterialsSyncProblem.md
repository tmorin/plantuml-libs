# MaterialsSyncProblem
```text
elements/materials/Notification/MaterialsSyncProblem
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSyncProblem icon](../../../icons/materials/Notification/MaterialsSyncProblem.png) | ![MaterialsSyncProblem element](MaterialsSyncProblem.element.png) | ![MaterialsSyncProblem card](MaterialsSyncProblem.card.png) |
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

' loads the MaterialsSyncProblem element
include('elements/materials/Notification/MaterialsSyncProblem')
MaterialsSyncProblem('element', 'Sync Problem', 'an optional tech field')
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

' loads the MaterialsSyncProblem element
include('elements/materials/Notification/MaterialsSyncProblem')
MaterialsSyncProblem('element', 'Sync Problem', 'an optional tech field')
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

' loads the MaterialsSyncProblem card
include('elements/materials/Notification/MaterialsSyncProblem')
MaterialsSyncProblemCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSyncProblem card
include('elements/materials/Notification/MaterialsSyncProblem')
MaterialsSyncProblemCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
