# MaterialsGroupLock
| Example | Resource |
| :-: | --- |
| ![MaterialsGroupLock group](MaterialsGroupLock.group.png) | `groups/materials/MaterialsGroupLock` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsGroupLock group
include('groups/materials/MaterialsGroupLock')
MaterialsGroupLock('element', 'Lock', 'an optional tech field')
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

' loads the MaterialsGroupLock group
include('groups/materials/MaterialsGroupLock')
MaterialsGroupLock('element', 'Lock', 'an optional tech field')
@enduml
```
