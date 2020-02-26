# MaterialsChevronRight
```text
elements/materials/Navigation/MaterialsChevronRight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChevronRight icon](../../../icons/materials/Navigation/MaterialsChevronRight.png) | ![MaterialsChevronRight element](MaterialsChevronRight.element.png) | ![MaterialsChevronRight card](MaterialsChevronRight.card.png) |
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

' loads the MaterialsChevronRight element
include('elements/materials/Navigation/MaterialsChevronRight')
MaterialsChevronRight('element', 'Chevron Right', 'an optional tech field')
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

' loads the MaterialsChevronRight element
include('elements/materials/Navigation/MaterialsChevronRight')
MaterialsChevronRight('element', 'Chevron Right', 'an optional tech field')
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

' loads the MaterialsChevronRight card
include('elements/materials/Navigation/MaterialsChevronRight')
MaterialsChevronRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChevronRight card
include('elements/materials/Navigation/MaterialsChevronRight')
MaterialsChevronRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
