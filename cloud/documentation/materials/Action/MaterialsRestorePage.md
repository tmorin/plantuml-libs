# MaterialsRestorePage
```text
elements/materials/Action/MaterialsRestorePage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRestorePage icon](../../../icons/materials/Action/MaterialsRestorePage.png) | ![MaterialsRestorePage element](MaterialsRestorePage.element.png) | ![MaterialsRestorePage card](MaterialsRestorePage.card.png) |
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

' loads the MaterialsRestorePage element
include('elements/materials/Action/MaterialsRestorePage')
MaterialsRestorePage('element', 'Restore Page', 'an optional tech field')
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

' loads the MaterialsRestorePage element
include('elements/materials/Action/MaterialsRestorePage')
MaterialsRestorePage('element', 'Restore Page', 'an optional tech field')
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

' loads the MaterialsRestorePage card
include('elements/materials/Action/MaterialsRestorePage')
MaterialsRestorePageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRestorePage card
include('elements/materials/Action/MaterialsRestorePage')
MaterialsRestorePageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
