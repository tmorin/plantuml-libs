# MaterialsVisibility
```text
elements/materials/Action/MaterialsVisibility
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVisibility icon](../../../icons/materials/Action/MaterialsVisibility.png) | ![MaterialsVisibility element](MaterialsVisibility.element.png) | ![MaterialsVisibility card](MaterialsVisibility.card.png) |
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

' loads the MaterialsVisibility element
include('elements/materials/Action/MaterialsVisibility')
MaterialsVisibility('element', 'Visibility', 'an optional tech field')
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

' loads the MaterialsVisibility element
include('elements/materials/Action/MaterialsVisibility')
MaterialsVisibility('element', 'Visibility', 'an optional tech field')
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

' loads the MaterialsVisibility card
include('elements/materials/Action/MaterialsVisibility')
MaterialsVisibilityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVisibility card
include('elements/materials/Action/MaterialsVisibility')
MaterialsVisibilityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
