# AzureLike
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureLike
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLike icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureLike.png) | ![AzureLike element](AzureLike.element.png) | ![AzureLike card](AzureLike.card.png) |
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

' loads the AzureLike element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureLike')
AzureLike('element', 'Like', 'an optional tech field')
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

' loads the AzureLike element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureLike')
AzureLike('element', 'Like', 'an optional tech field')
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

' loads the AzureLike card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureLike')
AzureLikeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLike card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureLike')
AzureLikeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
