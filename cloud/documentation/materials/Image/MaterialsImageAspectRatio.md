# MaterialsImageAspectRatio
```text
elements/materials/Image/MaterialsImageAspectRatio
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsImageAspectRatio icon](../../../icons/materials/Image/MaterialsImageAspectRatio.png) | ![MaterialsImageAspectRatio element](MaterialsImageAspectRatio.element.png) | ![MaterialsImageAspectRatio card](MaterialsImageAspectRatio.card.png) |
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

' loads the MaterialsImageAspectRatio element
include('elements/materials/Image/MaterialsImageAspectRatio')
MaterialsImageAspectRatio('element', 'Image Aspect Ratio', 'an optional tech field')
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

' loads the MaterialsImageAspectRatio element
include('elements/materials/Image/MaterialsImageAspectRatio')
MaterialsImageAspectRatio('element', 'Image Aspect Ratio', 'an optional tech field')
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

' loads the MaterialsImageAspectRatio card
include('elements/materials/Image/MaterialsImageAspectRatio')
MaterialsImageAspectRatioCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsImageAspectRatio card
include('elements/materials/Image/MaterialsImageAspectRatio')
MaterialsImageAspectRatioCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
