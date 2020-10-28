# MaterialsWbAuto
```text
elements/materials/Image/MaterialsWbAuto
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWbAuto icon](../../../icons/materials/Image/MaterialsWbAuto.png) | ![MaterialsWbAuto element](MaterialsWbAuto.element.png) | ![MaterialsWbAuto card](MaterialsWbAuto.card.png) |
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

' loads the MaterialsWbAuto element
include('elements/materials/Image/MaterialsWbAuto')
MaterialsWbAuto('element', 'Wb Auto', 'an optional tech field')
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

' loads the MaterialsWbAuto element
include('elements/materials/Image/MaterialsWbAuto')
MaterialsWbAuto('element', 'Wb Auto', 'an optional tech field')
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

' loads the MaterialsWbAuto card
include('elements/materials/Image/MaterialsWbAuto')
MaterialsWbAutoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWbAuto card
include('elements/materials/Image/MaterialsWbAuto')
MaterialsWbAutoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
