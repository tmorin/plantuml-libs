# MaterialsWidgets
```text
elements/materials/Device/MaterialsWidgets
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWidgets icon](../../../icons/materials/Device/MaterialsWidgets.png) | ![MaterialsWidgets element](MaterialsWidgets.element.png) | ![MaterialsWidgets card](MaterialsWidgets.card.png) |
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

' loads the MaterialsWidgets element
include('elements/materials/Device/MaterialsWidgets')
MaterialsWidgets('element', 'Widgets', 'an optional tech field')
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

' loads the MaterialsWidgets element
include('elements/materials/Device/MaterialsWidgets')
MaterialsWidgets('element', 'Widgets', 'an optional tech field')
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

' loads the MaterialsWidgets card
include('elements/materials/Device/MaterialsWidgets')
MaterialsWidgetsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWidgets card
include('elements/materials/Device/MaterialsWidgets')
MaterialsWidgetsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
