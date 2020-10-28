# MaterialsGroupNetwork
| Example | Resource |
| :-: | --- |
| ![MaterialsGroupNetwork group](MaterialsGroupNetwork.group.png) | `groups/materials/MaterialsGroupNetwork` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsGroupNetwork group
include('groups/materials/MaterialsGroupNetwork')
MaterialsGroupNetwork('element', 'Network', 'an optional tech field')
@enduml
```
## Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsGroupNetwork group
include('groups/materials/MaterialsGroupNetwork')
MaterialsGroupNetwork('element', 'Network', 'an optional tech field')
@enduml
```
