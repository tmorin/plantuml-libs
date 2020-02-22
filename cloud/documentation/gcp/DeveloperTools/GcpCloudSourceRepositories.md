# GcpCloudSourceRepositories
```text
elements/gcp/DeveloperTools/GcpCloudSourceRepositories
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudSourceRepositories icon](../../../icons/gcp/DeveloperTools/GcpCloudSourceRepositories.png) | ![GcpCloudSourceRepositories element](GcpCloudSourceRepositories.element.png) | ![GcpCloudSourceRepositories card](GcpCloudSourceRepositories.card.png) |
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

' loads the GcpCloudSourceRepositories element
include('elements/gcp/DeveloperTools/GcpCloudSourceRepositories')
GcpCloudSourceRepositories('element', 'Cloud Source Repositories', 'an optional tech field')
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

' loads the GcpCloudSourceRepositories element
include('elements/gcp/DeveloperTools/GcpCloudSourceRepositories')
GcpCloudSourceRepositories('element', 'Cloud Source Repositories', 'an optional tech field')
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

' loads the GcpCloudSourceRepositories card
include('elements/gcp/DeveloperTools/GcpCloudSourceRepositories')
GcpCloudSourceRepositoriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudSourceRepositories card
include('elements/gcp/DeveloperTools/GcpCloudSourceRepositories')
GcpCloudSourceRepositoriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
