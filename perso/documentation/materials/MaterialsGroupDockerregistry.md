# MaterialsGroupDockerregistry
| Example | Resource |
| :-: | --- |
| ![MaterialsGroupDockerregistry group](MaterialsGroupDockerregistry.group.png) | `groups/materials/MaterialsGroupDockerregistry` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsGroupDockerregistry group
include('groups/materials/MaterialsGroupDockerregistry')
MaterialsGroupDockerregistry('element', 'DockerRegistry', 'an optional tech field')
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

' loads the MaterialsGroupDockerregistry group
include('groups/materials/MaterialsGroupDockerregistry')
MaterialsGroupDockerregistry('element', 'DockerRegistry', 'an optional tech field')
@enduml
```
