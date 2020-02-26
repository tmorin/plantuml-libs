# MaterialsViewModule
```text
elements/materials/Action/MaterialsViewModule
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewModule icon](../../../icons/materials/Action/MaterialsViewModule.png) | ![MaterialsViewModule element](MaterialsViewModule.element.png) | ![MaterialsViewModule card](MaterialsViewModule.card.png) |
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

' loads the MaterialsViewModule element
include('elements/materials/Action/MaterialsViewModule')
MaterialsViewModule('element', 'View Module', 'an optional tech field')
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

' loads the MaterialsViewModule element
include('elements/materials/Action/MaterialsViewModule')
MaterialsViewModule('element', 'View Module', 'an optional tech field')
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

' loads the MaterialsViewModule card
include('elements/materials/Action/MaterialsViewModule')
MaterialsViewModuleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewModule card
include('elements/materials/Action/MaterialsViewModule')
MaterialsViewModuleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
