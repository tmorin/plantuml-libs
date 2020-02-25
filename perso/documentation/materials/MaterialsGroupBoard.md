# MaterialsGroupBoard
| Example | Resource |
| :-: | --- |
| ![MaterialsGroupBoard group](MaterialsGroupBoard.group.png) | `groups/materials/MaterialsGroupBoard` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="feat/perso/add-library"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsGroupBoard group
include('groups/materials/MaterialsGroupBoard')
MaterialsGroupBoard('element', 'Board', 'an optional tech field')
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

' loads the MaterialsGroupBoard group
include('groups/materials/MaterialsGroupBoard')
MaterialsGroupBoard('element', 'Board', 'an optional tech field')
@enduml
```
