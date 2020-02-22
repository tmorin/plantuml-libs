# AzureCloud
```text
elements/azure/FlatSymbols/CneEnterprise/AzureCloud
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCloud icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureCloud.png) | ![AzureCloud element](AzureCloud.element.png) | ![AzureCloud card](AzureCloud.card.png) |
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

' loads the AzureCloud element
include('elements/azure/FlatSymbols/CneEnterprise/AzureCloud')
AzureCloud('element', 'Cloud', 'an optional tech field')
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

' loads the AzureCloud element
include('elements/azure/FlatSymbols/CneEnterprise/AzureCloud')
AzureCloud('element', 'Cloud', 'an optional tech field')
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

' loads the AzureCloud card
include('elements/azure/FlatSymbols/CneEnterprise/AzureCloud')
AzureCloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCloud card
include('elements/azure/FlatSymbols/CneEnterprise/AzureCloud')
AzureCloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
