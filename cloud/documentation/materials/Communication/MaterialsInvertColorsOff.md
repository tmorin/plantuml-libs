# MaterialsInvertColorsOff
```text
elements/materials/Communication/MaterialsInvertColorsOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsInvertColorsOff icon](../../../icons/materials/Communication/MaterialsInvertColorsOff.png) | ![MaterialsInvertColorsOff element](MaterialsInvertColorsOff.element.png) | ![MaterialsInvertColorsOff card](MaterialsInvertColorsOff.card.png) |
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

' loads the MaterialsInvertColorsOff element
include('elements/materials/Communication/MaterialsInvertColorsOff')
MaterialsInvertColorsOff('element', 'Invert Colors Off', 'an optional tech field')
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

' loads the MaterialsInvertColorsOff element
include('elements/materials/Communication/MaterialsInvertColorsOff')
MaterialsInvertColorsOff('element', 'Invert Colors Off', 'an optional tech field')
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

' loads the MaterialsInvertColorsOff card
include('elements/materials/Communication/MaterialsInvertColorsOff')
MaterialsInvertColorsOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsInvertColorsOff card
include('elements/materials/Communication/MaterialsInvertColorsOff')
MaterialsInvertColorsOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
