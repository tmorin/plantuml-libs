# AzureKeyPermissions
```text
elements/azure/FlatSymbols/CneEnterprise/AzureKeyPermissions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureKeyPermissions icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureKeyPermissions.png) | ![AzureKeyPermissions element](AzureKeyPermissions.element.png) | ![AzureKeyPermissions card](AzureKeyPermissions.card.png) |
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

' loads the AzureKeyPermissions element
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyPermissions')
AzureKeyPermissions('element', 'Key Permissions', 'an optional tech field')
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

' loads the AzureKeyPermissions element
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyPermissions')
AzureKeyPermissions('element', 'Key Permissions', 'an optional tech field')
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

' loads the AzureKeyPermissions card
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyPermissions')
AzureKeyPermissionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureKeyPermissions card
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyPermissions')
AzureKeyPermissionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
