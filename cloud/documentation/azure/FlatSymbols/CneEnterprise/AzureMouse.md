# AzureMouse
```text
elements/azure/FlatSymbols/CneEnterprise/AzureMouse
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMouse icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureMouse.png) | ![AzureMouse element](AzureMouse.element.png) | ![AzureMouse card](AzureMouse.card.png) |
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

' loads the AzureMouse element
include('elements/azure/FlatSymbols/CneEnterprise/AzureMouse')
AzureMouse('element', 'Mouse', 'an optional tech field')
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

' loads the AzureMouse element
include('elements/azure/FlatSymbols/CneEnterprise/AzureMouse')
AzureMouse('element', 'Mouse', 'an optional tech field')
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

' loads the AzureMouse card
include('elements/azure/FlatSymbols/CneEnterprise/AzureMouse')
AzureMouseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMouse card
include('elements/azure/FlatSymbols/CneEnterprise/AzureMouse')
AzureMouseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
