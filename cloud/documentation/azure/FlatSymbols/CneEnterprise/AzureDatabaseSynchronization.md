# AzureDatabaseSynchronization
```text
elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseSynchronization
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDatabaseSynchronization icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureDatabaseSynchronization.png) | ![AzureDatabaseSynchronization element](AzureDatabaseSynchronization.element.png) | ![AzureDatabaseSynchronization card](AzureDatabaseSynchronization.card.png) |
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

' loads the AzureDatabaseSynchronization element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseSynchronization')
AzureDatabaseSynchronization('element', 'Database Synchronization', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureDatabaseSynchronization element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseSynchronization')
AzureDatabaseSynchronization('element', 'Database Synchronization', 'an optional tech field')
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

' loads the AzureDatabaseSynchronization card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseSynchronization')
AzureDatabaseSynchronizationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureDatabaseSynchronization card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseSynchronization')
AzureDatabaseSynchronizationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
