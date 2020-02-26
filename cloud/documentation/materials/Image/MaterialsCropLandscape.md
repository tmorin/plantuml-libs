# MaterialsCropLandscape
```text
elements/materials/Image/MaterialsCropLandscape
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCropLandscape icon](../../../icons/materials/Image/MaterialsCropLandscape.png) | ![MaterialsCropLandscape element](MaterialsCropLandscape.element.png) | ![MaterialsCropLandscape card](MaterialsCropLandscape.card.png) |
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

' loads the MaterialsCropLandscape element
include('elements/materials/Image/MaterialsCropLandscape')
MaterialsCropLandscape('element', 'Crop Landscape', 'an optional tech field')
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

' loads the MaterialsCropLandscape element
include('elements/materials/Image/MaterialsCropLandscape')
MaterialsCropLandscape('element', 'Crop Landscape', 'an optional tech field')
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

' loads the MaterialsCropLandscape card
include('elements/materials/Image/MaterialsCropLandscape')
MaterialsCropLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCropLandscape card
include('elements/materials/Image/MaterialsCropLandscape')
MaterialsCropLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
