# AzureNotAllowed
```text
elements/azure/FlatSymbols/CneEnterprise/AzureNotAllowed
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNotAllowed icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureNotAllowed.png) | ![AzureNotAllowed element](AzureNotAllowed.element.png) | ![AzureNotAllowed card](AzureNotAllowed.card.png) |
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

' loads the AzureNotAllowed element
include('elements/azure/FlatSymbols/CneEnterprise/AzureNotAllowed')
AzureNotAllowed('element', 'Not Allowed', 'an optional tech field')
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

' loads the AzureNotAllowed element
include('elements/azure/FlatSymbols/CneEnterprise/AzureNotAllowed')
AzureNotAllowed('element', 'Not Allowed', 'an optional tech field')
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

' loads the AzureNotAllowed card
include('elements/azure/FlatSymbols/CneEnterprise/AzureNotAllowed')
AzureNotAllowedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNotAllowed card
include('elements/azure/FlatSymbols/CneEnterprise/AzureNotAllowed')
AzureNotAllowedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
