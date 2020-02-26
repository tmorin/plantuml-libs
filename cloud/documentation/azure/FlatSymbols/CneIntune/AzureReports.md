# AzureReports
```text
elements/azure/FlatSymbols/CneIntune/AzureReports
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureReports icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureReports.png) | ![AzureReports element](AzureReports.element.png) | ![AzureReports card](AzureReports.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureReports element
include('elements/azure/FlatSymbols/CneIntune/AzureReports')
AzureReports('element', 'Reports', 'an optional tech field')
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

' loads the AzureReports element
include('elements/azure/FlatSymbols/CneIntune/AzureReports')
AzureReports('element', 'Reports', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureReports card
include('elements/azure/FlatSymbols/CneIntune/AzureReports')
AzureReportsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureReports card
include('elements/azure/FlatSymbols/CneIntune/AzureReports')
AzureReportsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
