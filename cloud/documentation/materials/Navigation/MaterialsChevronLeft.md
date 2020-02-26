# MaterialsChevronLeft
```text
elements/materials/Navigation/MaterialsChevronLeft
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChevronLeft icon](../../../icons/materials/Navigation/MaterialsChevronLeft.png) | ![MaterialsChevronLeft element](MaterialsChevronLeft.element.png) | ![MaterialsChevronLeft card](MaterialsChevronLeft.card.png) |
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

' loads the MaterialsChevronLeft element
include('elements/materials/Navigation/MaterialsChevronLeft')
MaterialsChevronLeft('element', 'Chevron Left', 'an optional tech field')
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

' loads the MaterialsChevronLeft element
include('elements/materials/Navigation/MaterialsChevronLeft')
MaterialsChevronLeft('element', 'Chevron Left', 'an optional tech field')
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

' loads the MaterialsChevronLeft card
include('elements/materials/Navigation/MaterialsChevronLeft')
MaterialsChevronLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChevronLeft card
include('elements/materials/Navigation/MaterialsChevronLeft')
MaterialsChevronLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
