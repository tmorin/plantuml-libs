# AzureGears
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureGears
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGears icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureGears.png) | ![AzureGears element](AzureGears.element.png) | ![AzureGears card](AzureGears.card.png) |
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

' loads the AzureGears element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGears')
AzureGears('element', 'Gears', 'an optional tech field')
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

' loads the AzureGears element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGears')
AzureGears('element', 'Gears', 'an optional tech field')
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

' loads the AzureGears card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGears')
AzureGearsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGears card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureGears')
AzureGearsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
