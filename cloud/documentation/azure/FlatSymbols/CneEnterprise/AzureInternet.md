# AzureInternet
```text
elements/azure/FlatSymbols/CneEnterprise/AzureInternet
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureInternet icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureInternet.png) | ![AzureInternet element](AzureInternet.element.png) | ![AzureInternet card](AzureInternet.card.png) |
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

' loads the AzureInternet element
include('elements/azure/FlatSymbols/CneEnterprise/AzureInternet')
AzureInternet('element', 'Internet', 'an optional tech field')
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

' loads the AzureInternet element
include('elements/azure/FlatSymbols/CneEnterprise/AzureInternet')
AzureInternet('element', 'Internet', 'an optional tech field')
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

' loads the AzureInternet card
include('elements/azure/FlatSymbols/CneEnterprise/AzureInternet')
AzureInternetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureInternet card
include('elements/azure/FlatSymbols/CneEnterprise/AzureInternet')
AzureInternetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
