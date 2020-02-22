# AzureSharedFolder
```text
elements/azure/FlatSymbols/CneEnterprise/AzureSharedFolder
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSharedFolder icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureSharedFolder.png) | ![AzureSharedFolder element](AzureSharedFolder.element.png) | ![AzureSharedFolder card](AzureSharedFolder.card.png) |
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

' loads the AzureSharedFolder element
include('elements/azure/FlatSymbols/CneEnterprise/AzureSharedFolder')
AzureSharedFolder('element', 'Shared Folder', 'an optional tech field')
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

' loads the AzureSharedFolder element
include('elements/azure/FlatSymbols/CneEnterprise/AzureSharedFolder')
AzureSharedFolder('element', 'Shared Folder', 'an optional tech field')
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

' loads the AzureSharedFolder card
include('elements/azure/FlatSymbols/CneEnterprise/AzureSharedFolder')
AzureSharedFolderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSharedFolder card
include('elements/azure/FlatSymbols/CneEnterprise/AzureSharedFolder')
AzureSharedFolderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
