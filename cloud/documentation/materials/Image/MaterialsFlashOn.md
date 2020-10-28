# MaterialsFlashOn
```text
elements/materials/Image/MaterialsFlashOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFlashOn icon](../../../icons/materials/Image/MaterialsFlashOn.png) | ![MaterialsFlashOn element](MaterialsFlashOn.element.png) | ![MaterialsFlashOn card](MaterialsFlashOn.card.png) |
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

' loads the MaterialsFlashOn element
include('elements/materials/Image/MaterialsFlashOn')
MaterialsFlashOn('element', 'Flash On', 'an optional tech field')
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

' loads the MaterialsFlashOn element
include('elements/materials/Image/MaterialsFlashOn')
MaterialsFlashOn('element', 'Flash On', 'an optional tech field')
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

' loads the MaterialsFlashOn card
include('elements/materials/Image/MaterialsFlashOn')
MaterialsFlashOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFlashOn card
include('elements/materials/Image/MaterialsFlashOn')
MaterialsFlashOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
