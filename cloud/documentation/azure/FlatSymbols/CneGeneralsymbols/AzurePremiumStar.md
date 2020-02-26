# AzurePremiumStar
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzurePremiumStar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePremiumStar icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzurePremiumStar.png) | ![AzurePremiumStar element](AzurePremiumStar.element.png) | ![AzurePremiumStar card](AzurePremiumStar.card.png) |
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

' loads the AzurePremiumStar element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzurePremiumStar')
AzurePremiumStar('element', 'Premium Star', 'an optional tech field')
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

' loads the AzurePremiumStar element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzurePremiumStar')
AzurePremiumStar('element', 'Premium Star', 'an optional tech field')
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

' loads the AzurePremiumStar card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzurePremiumStar')
AzurePremiumStarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePremiumStar card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzurePremiumStar')
AzurePremiumStarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
