# MaterialsStraighten
```text
elements/materials/Image/MaterialsStraighten
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStraighten icon](../../../icons/materials/Image/MaterialsStraighten.png) | ![MaterialsStraighten element](MaterialsStraighten.element.png) | ![MaterialsStraighten card](MaterialsStraighten.card.png) |
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

' loads the MaterialsStraighten element
include('elements/materials/Image/MaterialsStraighten')
MaterialsStraighten('element', 'Straighten', 'an optional tech field')
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

' loads the MaterialsStraighten element
include('elements/materials/Image/MaterialsStraighten')
MaterialsStraighten('element', 'Straighten', 'an optional tech field')
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

' loads the MaterialsStraighten card
include('elements/materials/Image/MaterialsStraighten')
MaterialsStraightenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStraighten card
include('elements/materials/Image/MaterialsStraighten')
MaterialsStraightenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
