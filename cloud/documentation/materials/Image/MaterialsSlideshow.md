# MaterialsSlideshow
```text
elements/materials/Image/MaterialsSlideshow
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSlideshow icon](../../../icons/materials/Image/MaterialsSlideshow.png) | ![MaterialsSlideshow element](MaterialsSlideshow.element.png) | ![MaterialsSlideshow card](MaterialsSlideshow.card.png) |
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

' loads the MaterialsSlideshow element
include('elements/materials/Image/MaterialsSlideshow')
MaterialsSlideshow('element', 'Slideshow', 'an optional tech field')
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

' loads the MaterialsSlideshow element
include('elements/materials/Image/MaterialsSlideshow')
MaterialsSlideshow('element', 'Slideshow', 'an optional tech field')
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

' loads the MaterialsSlideshow card
include('elements/materials/Image/MaterialsSlideshow')
MaterialsSlideshowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSlideshow card
include('elements/materials/Image/MaterialsSlideshow')
MaterialsSlideshowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
