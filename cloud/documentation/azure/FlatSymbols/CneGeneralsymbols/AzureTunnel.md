# AzureTunnel
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureTunnel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTunnel icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureTunnel.png) | ![AzureTunnel element](AzureTunnel.element.png) | ![AzureTunnel card](AzureTunnel.card.png) |
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

' loads the AzureTunnel element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureTunnel')
AzureTunnel('element', 'Tunnel', 'an optional tech field')
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

' loads the AzureTunnel element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureTunnel')
AzureTunnel('element', 'Tunnel', 'an optional tech field')
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

' loads the AzureTunnel card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureTunnel')
AzureTunnelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTunnel card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureTunnel')
AzureTunnelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
