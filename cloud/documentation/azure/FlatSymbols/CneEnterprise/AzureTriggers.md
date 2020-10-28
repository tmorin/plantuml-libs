# AzureTriggers
```text
elements/azure/FlatSymbols/CneEnterprise/AzureTriggers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTriggers icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureTriggers.png) | ![AzureTriggers element](AzureTriggers.element.png) | ![AzureTriggers card](AzureTriggers.card.png) |
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

' loads the AzureTriggers element
include('elements/azure/FlatSymbols/CneEnterprise/AzureTriggers')
AzureTriggers('element', 'Triggers', 'an optional tech field')
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

' loads the AzureTriggers element
include('elements/azure/FlatSymbols/CneEnterprise/AzureTriggers')
AzureTriggers('element', 'Triggers', 'an optional tech field')
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

' loads the AzureTriggers card
include('elements/azure/FlatSymbols/CneEnterprise/AzureTriggers')
AzureTriggersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTriggers card
include('elements/azure/FlatSymbols/CneEnterprise/AzureTriggers')
AzureTriggersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
