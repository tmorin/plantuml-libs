# AzureDirectAccess
```text
elements/azure/FlatSymbols/CneEnterprise/AzureDirectAccess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDirectAccess icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureDirectAccess.png) | ![AzureDirectAccess element](AzureDirectAccess.element.png) | ![AzureDirectAccess card](AzureDirectAccess.card.png) |
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

' loads the AzureDirectAccess element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDirectAccess')
AzureDirectAccess('element', 'Direct Access', 'an optional tech field')
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

' loads the AzureDirectAccess element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDirectAccess')
AzureDirectAccess('element', 'Direct Access', 'an optional tech field')
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

' loads the AzureDirectAccess card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDirectAccess')
AzureDirectAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDirectAccess card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDirectAccess')
AzureDirectAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
