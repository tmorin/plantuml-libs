# AzureWeb
```text
elements/azure/FlatSymbols/CneEnterprise/AzureWeb
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWeb icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureWeb.png) | ![AzureWeb element](AzureWeb.element.png) | ![AzureWeb card](AzureWeb.card.png) |
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

' loads the AzureWeb element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWeb')
AzureWeb('element', 'Web', 'an optional tech field')
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

' loads the AzureWeb element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWeb')
AzureWeb('element', 'Web', 'an optional tech field')
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

' loads the AzureWeb card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWeb')
AzureWebCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureWeb card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWeb')
AzureWebCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
