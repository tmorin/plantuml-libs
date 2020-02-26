# MaterialsDialerSip
```text
elements/materials/Communication/MaterialsDialerSip
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDialerSip icon](../../../icons/materials/Communication/MaterialsDialerSip.png) | ![MaterialsDialerSip element](MaterialsDialerSip.element.png) | ![MaterialsDialerSip card](MaterialsDialerSip.card.png) |
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
include('styles/materials')

' loads the MaterialsDialerSip element
include('elements/materials/Communication/MaterialsDialerSip')
MaterialsDialerSip('element', 'Dialer Sip', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsDialerSip element
include('elements/materials/Communication/MaterialsDialerSip')
MaterialsDialerSip('element', 'Dialer Sip', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsDialerSip card
include('elements/materials/Communication/MaterialsDialerSip')
MaterialsDialerSipCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsDialerSip card
include('elements/materials/Communication/MaterialsDialerSip')
MaterialsDialerSipCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
