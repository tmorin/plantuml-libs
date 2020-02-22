# AzureMigrationProjects
```text
elements/azure/MigrateServiceColor/AzureMigrationProjects
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMigrationProjects icon](../../../icons/azure/MigrateServiceColor/AzureMigrationProjects.png) | ![AzureMigrationProjects element](AzureMigrationProjects.element.png) | ![AzureMigrationProjects card](AzureMigrationProjects.card.png) |
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

' loads the AzureMigrationProjects element
include('elements/azure/MigrateServiceColor/AzureMigrationProjects')
AzureMigrationProjects('element', 'Migration Projects', 'an optional tech field')
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

' loads the AzureMigrationProjects element
include('elements/azure/MigrateServiceColor/AzureMigrationProjects')
AzureMigrationProjects('element', 'Migration Projects', 'an optional tech field')
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

' loads the AzureMigrationProjects card
include('elements/azure/MigrateServiceColor/AzureMigrationProjects')
AzureMigrationProjectsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMigrationProjects card
include('elements/azure/MigrateServiceColor/AzureMigrationProjects')
AzureMigrationProjectsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
