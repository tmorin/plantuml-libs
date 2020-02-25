# BrandGroupSwarm
| Example | Resource |
| :-: | --- |
| ![BrandGroupSwarm group](BrandGroupSwarm.group.png) | `groups/brand/BrandGroupSwarm` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="feat/perso/add-library"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the BrandGroupSwarm group
include('groups/brand/BrandGroupSwarm')
BrandGroupSwarm('element', 'Swarm', 'an optional tech field')
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

' loads the BrandGroupSwarm group
include('groups/brand/BrandGroupSwarm')
BrandGroupSwarm('element', 'Swarm', 'an optional tech field')
@enduml
```
