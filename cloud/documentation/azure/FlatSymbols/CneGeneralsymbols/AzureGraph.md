# AzureGraph
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureGraph
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGraph icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureGraph.png) | ![AzureGraph element](AzureGraph.element.png) | ![AzureGraph card](AzureGraph.card.png) |
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

' loads the AzureGraph element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGraph')
AzureGraph('element', 'Graph', 'an optional tech field')
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

' loads the AzureGraph element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGraph')
AzureGraph('element', 'Graph', 'an optional tech field')
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

' loads the AzureGraph card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGraph')
AzureGraphCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGraph card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGraph')
AzureGraphCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
