# AzureHealthyGrey
```text
elements/azure/FlatSymbols/CneEnterprise/AzureHealthyGrey
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHealthyGrey icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureHealthyGrey.png) | ![AzureHealthyGrey element](AzureHealthyGrey.element.png) | ![AzureHealthyGrey card](AzureHealthyGrey.card.png) |
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

' loads the AzureHealthyGrey element
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthyGrey')
AzureHealthyGrey('element', 'Healthy Grey', 'an optional tech field')
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

' loads the AzureHealthyGrey element
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthyGrey')
AzureHealthyGrey('element', 'Healthy Grey', 'an optional tech field')
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

' loads the AzureHealthyGrey card
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthyGrey')
AzureHealthyGreyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHealthyGrey card
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthyGrey')
AzureHealthyGreyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
