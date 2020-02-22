# MaterialsAssignment
```text
elements/materials/Action/MaterialsAssignment
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAssignment icon](../../../icons/materials/Action/MaterialsAssignment.png) | ![MaterialsAssignment element](MaterialsAssignment.element.png) | ![MaterialsAssignment card](MaterialsAssignment.card.png) |
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

' loads the MaterialsAssignment element
include('elements/materials/Action/MaterialsAssignment')
MaterialsAssignment('element', 'Assignment', 'an optional tech field')
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

' loads the MaterialsAssignment element
include('elements/materials/Action/MaterialsAssignment')
MaterialsAssignment('element', 'Assignment', 'an optional tech field')
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

' loads the MaterialsAssignment card
include('elements/materials/Action/MaterialsAssignment')
MaterialsAssignmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAssignment card
include('elements/materials/Action/MaterialsAssignment')
MaterialsAssignmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
