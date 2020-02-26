# MaterialsViewCarousel
```text
elements/materials/Action/MaterialsViewCarousel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewCarousel icon](../../../icons/materials/Action/MaterialsViewCarousel.png) | ![MaterialsViewCarousel element](MaterialsViewCarousel.element.png) | ![MaterialsViewCarousel card](MaterialsViewCarousel.card.png) |
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

' loads the MaterialsViewCarousel element
include('elements/materials/Action/MaterialsViewCarousel')
MaterialsViewCarousel('element', 'View Carousel', 'an optional tech field')
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

' loads the MaterialsViewCarousel element
include('elements/materials/Action/MaterialsViewCarousel')
MaterialsViewCarousel('element', 'View Carousel', 'an optional tech field')
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

' loads the MaterialsViewCarousel card
include('elements/materials/Action/MaterialsViewCarousel')
MaterialsViewCarouselCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewCarousel card
include('elements/materials/Action/MaterialsViewCarousel')
MaterialsViewCarouselCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
