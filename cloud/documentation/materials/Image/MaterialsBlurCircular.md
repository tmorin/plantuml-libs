# MaterialsBlurCircular
```text
elements/materials/Image/MaterialsBlurCircular
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBlurCircular icon](../../../icons/materials/Image/MaterialsBlurCircular.png) | ![MaterialsBlurCircular element](MaterialsBlurCircular.element.png) | ![MaterialsBlurCircular card](MaterialsBlurCircular.card.png) |
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

' loads the MaterialsBlurCircular element
include('elements/materials/Image/MaterialsBlurCircular')
MaterialsBlurCircular('element', 'Blur Circular', 'an optional tech field')
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

' loads the MaterialsBlurCircular element
include('elements/materials/Image/MaterialsBlurCircular')
MaterialsBlurCircular('element', 'Blur Circular', 'an optional tech field')
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

' loads the MaterialsBlurCircular card
include('elements/materials/Image/MaterialsBlurCircular')
MaterialsBlurCircularCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBlurCircular card
include('elements/materials/Image/MaterialsBlurCircular')
MaterialsBlurCircularCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
