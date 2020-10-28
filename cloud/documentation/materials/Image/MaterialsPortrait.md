# MaterialsPortrait
```text
elements/materials/Image/MaterialsPortrait
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPortrait icon](../../../icons/materials/Image/MaterialsPortrait.png) | ![MaterialsPortrait element](MaterialsPortrait.element.png) | ![MaterialsPortrait card](MaterialsPortrait.card.png) |
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

' loads the MaterialsPortrait element
include('elements/materials/Image/MaterialsPortrait')
MaterialsPortrait('element', 'Portrait', 'an optional tech field')
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

' loads the MaterialsPortrait element
include('elements/materials/Image/MaterialsPortrait')
MaterialsPortrait('element', 'Portrait', 'an optional tech field')
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

' loads the MaterialsPortrait card
include('elements/materials/Image/MaterialsPortrait')
MaterialsPortraitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPortrait card
include('elements/materials/Image/MaterialsPortrait')
MaterialsPortraitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
