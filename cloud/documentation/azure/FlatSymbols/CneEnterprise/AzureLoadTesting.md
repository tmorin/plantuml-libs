# AzureLoadTesting
```text
elements/azure/FlatSymbols/CneEnterprise/AzureLoadTesting
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLoadTesting icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureLoadTesting.png) | ![AzureLoadTesting element](AzureLoadTesting.element.png) | ![AzureLoadTesting card](AzureLoadTesting.card.png) |
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

' loads the AzureLoadTesting element
include('elements/azure/FlatSymbols/CneEnterprise/AzureLoadTesting')
AzureLoadTesting('element', 'Load Testing', 'an optional tech field')
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

' loads the AzureLoadTesting element
include('elements/azure/FlatSymbols/CneEnterprise/AzureLoadTesting')
AzureLoadTesting('element', 'Load Testing', 'an optional tech field')
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

' loads the AzureLoadTesting card
include('elements/azure/FlatSymbols/CneEnterprise/AzureLoadTesting')
AzureLoadTestingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLoadTesting card
include('elements/azure/FlatSymbols/CneEnterprise/AzureLoadTesting')
AzureLoadTestingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
