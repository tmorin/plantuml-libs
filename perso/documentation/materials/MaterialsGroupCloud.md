# MaterialsGroupCloud
| Example | Resource |
| :-: | --- |
| ![MaterialsGroupCloud group](MaterialsGroupCloud.group.png) | `groups/materials/MaterialsGroupCloud` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsGroupCloud group
include('groups/materials/MaterialsGroupCloud')
MaterialsGroupCloud('element', 'Cloud', 'an optional tech field')
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

' loads the MaterialsGroupCloud group
include('groups/materials/MaterialsGroupCloud')
MaterialsGroupCloud('element', 'Cloud', 'an optional tech field')
@enduml
```
