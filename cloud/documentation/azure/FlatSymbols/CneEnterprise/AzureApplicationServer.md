# AzureApplicationServer
```text
elements/azure/FlatSymbols/CneEnterprise/AzureApplicationServer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApplicationServer icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureApplicationServer.png) | ![AzureApplicationServer element](AzureApplicationServer.element.png) | ![AzureApplicationServer card](AzureApplicationServer.card.png) |
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

' loads the AzureApplicationServer element
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationServer')
AzureApplicationServer('element', 'Application Server', 'an optional tech field')
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

' loads the AzureApplicationServer element
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationServer')
AzureApplicationServer('element', 'Application Server', 'an optional tech field')
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

' loads the AzureApplicationServer card
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationServer')
AzureApplicationServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApplicationServer card
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationServer')
AzureApplicationServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
