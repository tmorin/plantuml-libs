# AzureDistributionPoint
```text
elements/azure/FlatSymbols/CneSystemCenter/AzureDistributionPoint
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDistributionPoint icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzureDistributionPoint.png) | ![AzureDistributionPoint element](AzureDistributionPoint.element.png) | ![AzureDistributionPoint card](AzureDistributionPoint.card.png) |
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

' loads the AzureDistributionPoint element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureDistributionPoint')
AzureDistributionPoint('element', 'Distribution Point', 'an optional tech field')
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

' loads the AzureDistributionPoint element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureDistributionPoint')
AzureDistributionPoint('element', 'Distribution Point', 'an optional tech field')
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

' loads the AzureDistributionPoint card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureDistributionPoint')
AzureDistributionPointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDistributionPoint card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureDistributionPoint')
AzureDistributionPointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
