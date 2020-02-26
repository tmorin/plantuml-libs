# AzureServerBlade
```text
elements/azure/FlatSymbols/CneEnterprise/AzureServerBlade
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServerBlade icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureServerBlade.png) | ![AzureServerBlade element](AzureServerBlade.element.png) | ![AzureServerBlade card](AzureServerBlade.card.png) |
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

' loads the AzureServerBlade element
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerBlade')
AzureServerBlade('element', 'Server Blade', 'an optional tech field')
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

' loads the AzureServerBlade element
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerBlade')
AzureServerBlade('element', 'Server Blade', 'an optional tech field')
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

' loads the AzureServerBlade card
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerBlade')
AzureServerBladeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureServerBlade card
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerBlade')
AzureServerBladeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
