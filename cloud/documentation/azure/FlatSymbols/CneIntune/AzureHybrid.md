# AzureHybrid
```text
elements/azure/FlatSymbols/CneIntune/AzureHybrid
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHybrid icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureHybrid.png) | ![AzureHybrid element](AzureHybrid.element.png) | ![AzureHybrid card](AzureHybrid.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureHybrid element
include('elements/azure/FlatSymbols/CneIntune/AzureHybrid')
AzureHybrid('element', 'Hybrid', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureHybrid element
include('elements/azure/FlatSymbols/CneIntune/AzureHybrid')
AzureHybrid('element', 'Hybrid', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureHybrid card
include('elements/azure/FlatSymbols/CneIntune/AzureHybrid')
AzureHybridCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureHybrid card
include('elements/azure/FlatSymbols/CneIntune/AzureHybrid')
AzureHybridCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
