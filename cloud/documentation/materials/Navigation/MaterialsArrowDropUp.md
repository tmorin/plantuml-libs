# MaterialsArrowDropUp
```text
elements/materials/Navigation/MaterialsArrowDropUp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsArrowDropUp icon](../../../icons/materials/Navigation/MaterialsArrowDropUp.png) | ![MaterialsArrowDropUp element](MaterialsArrowDropUp.element.png) | ![MaterialsArrowDropUp card](MaterialsArrowDropUp.card.png) |
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

' loads the MaterialsArrowDropUp element
include('elements/materials/Navigation/MaterialsArrowDropUp')
MaterialsArrowDropUp('element', 'Arrow Drop Up', 'an optional tech field')
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

' loads the MaterialsArrowDropUp element
include('elements/materials/Navigation/MaterialsArrowDropUp')
MaterialsArrowDropUp('element', 'Arrow Drop Up', 'an optional tech field')
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

' loads the MaterialsArrowDropUp card
include('elements/materials/Navigation/MaterialsArrowDropUp')
MaterialsArrowDropUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsArrowDropUp card
include('elements/materials/Navigation/MaterialsArrowDropUp')
MaterialsArrowDropUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
