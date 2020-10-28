# MaterialsCrop169
```text
elements/materials/Image/MaterialsCrop169
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCrop169 icon](../../../icons/materials/Image/MaterialsCrop169.png) | ![MaterialsCrop169 element](MaterialsCrop169.element.png) | ![MaterialsCrop169 card](MaterialsCrop169.card.png) |
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
include('styles/materials')

' loads the MaterialsCrop169 element
include('elements/materials/Image/MaterialsCrop169')
MaterialsCrop169('element', 'Crop169', 'an optional tech field')
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

' loads the MaterialsCrop169 element
include('elements/materials/Image/MaterialsCrop169')
MaterialsCrop169('element', 'Crop169', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsCrop169 card
include('elements/materials/Image/MaterialsCrop169')
MaterialsCrop169Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCrop169 card
include('elements/materials/Image/MaterialsCrop169')
MaterialsCrop169Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
