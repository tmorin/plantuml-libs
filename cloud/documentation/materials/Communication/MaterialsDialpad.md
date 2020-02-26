# MaterialsDialpad
```text
elements/materials/Communication/MaterialsDialpad
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDialpad icon](../../../icons/materials/Communication/MaterialsDialpad.png) | ![MaterialsDialpad element](MaterialsDialpad.element.png) | ![MaterialsDialpad card](MaterialsDialpad.card.png) |
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

' loads the MaterialsDialpad element
include('elements/materials/Communication/MaterialsDialpad')
MaterialsDialpad('element', 'Dialpad', 'an optional tech field')
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

' loads the MaterialsDialpad element
include('elements/materials/Communication/MaterialsDialpad')
MaterialsDialpad('element', 'Dialpad', 'an optional tech field')
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

' loads the MaterialsDialpad card
include('elements/materials/Communication/MaterialsDialpad')
MaterialsDialpadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDialpad card
include('elements/materials/Communication/MaterialsDialpad')
MaterialsDialpadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
