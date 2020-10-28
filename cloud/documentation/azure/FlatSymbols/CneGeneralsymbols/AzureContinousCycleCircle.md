# AzureContinousCycleCircle
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureContinousCycleCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureContinousCycleCircle icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureContinousCycleCircle.png) | ![AzureContinousCycleCircle element](AzureContinousCycleCircle.element.png) | ![AzureContinousCycleCircle card](AzureContinousCycleCircle.card.png) |
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

' loads the AzureContinousCycleCircle element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureContinousCycleCircle')
AzureContinousCycleCircle('element', 'Continous Cycle Circle', 'an optional tech field')
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

' loads the AzureContinousCycleCircle element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureContinousCycleCircle')
AzureContinousCycleCircle('element', 'Continous Cycle Circle', 'an optional tech field')
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

' loads the AzureContinousCycleCircle card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureContinousCycleCircle')
AzureContinousCycleCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureContinousCycleCircle card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureContinousCycleCircle')
AzureContinousCycleCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
