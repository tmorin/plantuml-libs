# AzureChart
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureChart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureChart icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureChart.png) | ![AzureChart element](AzureChart.element.png) | ![AzureChart card](AzureChart.card.png) |
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

' loads the AzureChart element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureChart')
AzureChart('element', 'Chart', 'an optional tech field')
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

' loads the AzureChart element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureChart')
AzureChart('element', 'Chart', 'an optional tech field')
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

' loads the AzureChart card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureChart')
AzureChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureChart card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureChart')
AzureChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
