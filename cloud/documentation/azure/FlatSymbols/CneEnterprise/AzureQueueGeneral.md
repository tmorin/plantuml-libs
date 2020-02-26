# AzureQueueGeneral
```text
elements/azure/FlatSymbols/CneEnterprise/AzureQueueGeneral
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureQueueGeneral icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureQueueGeneral.png) | ![AzureQueueGeneral element](AzureQueueGeneral.element.png) | ![AzureQueueGeneral card](AzureQueueGeneral.card.png) |
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

' loads the AzureQueueGeneral element
include('elements/azure/FlatSymbols/CneEnterprise/AzureQueueGeneral')
AzureQueueGeneral('element', 'Queue General', 'an optional tech field')
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

' loads the AzureQueueGeneral element
include('elements/azure/FlatSymbols/CneEnterprise/AzureQueueGeneral')
AzureQueueGeneral('element', 'Queue General', 'an optional tech field')
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

' loads the AzureQueueGeneral card
include('elements/azure/FlatSymbols/CneEnterprise/AzureQueueGeneral')
AzureQueueGeneralCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureQueueGeneral card
include('elements/azure/FlatSymbols/CneEnterprise/AzureQueueGeneral')
AzureQueueGeneralCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
