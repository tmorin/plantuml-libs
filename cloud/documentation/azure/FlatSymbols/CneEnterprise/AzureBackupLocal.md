# AzureBackupLocal
```text
elements/azure/FlatSymbols/CneEnterprise/AzureBackupLocal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureBackupLocal icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureBackupLocal.png) | ![AzureBackupLocal element](AzureBackupLocal.element.png) | ![AzureBackupLocal card](AzureBackupLocal.card.png) |
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

' loads the AzureBackupLocal element
include('elements/azure/FlatSymbols/CneEnterprise/AzureBackupLocal')
AzureBackupLocal('element', 'Backup Local', 'an optional tech field')
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

' loads the AzureBackupLocal element
include('elements/azure/FlatSymbols/CneEnterprise/AzureBackupLocal')
AzureBackupLocal('element', 'Backup Local', 'an optional tech field')
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

' loads the AzureBackupLocal card
include('elements/azure/FlatSymbols/CneEnterprise/AzureBackupLocal')
AzureBackupLocalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureBackupLocal card
include('elements/azure/FlatSymbols/CneEnterprise/AzureBackupLocal')
AzureBackupLocalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
