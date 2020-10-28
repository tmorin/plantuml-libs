# MaterialsChangeHistory
```text
elements/materials/Action/MaterialsChangeHistory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChangeHistory icon](../../../icons/materials/Action/MaterialsChangeHistory.png) | ![MaterialsChangeHistory element](MaterialsChangeHistory.element.png) | ![MaterialsChangeHistory card](MaterialsChangeHistory.card.png) |
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

' loads the MaterialsChangeHistory element
include('elements/materials/Action/MaterialsChangeHistory')
MaterialsChangeHistory('element', 'Change History', 'an optional tech field')
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

' loads the MaterialsChangeHistory element
include('elements/materials/Action/MaterialsChangeHistory')
MaterialsChangeHistory('element', 'Change History', 'an optional tech field')
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

' loads the MaterialsChangeHistory card
include('elements/materials/Action/MaterialsChangeHistory')
MaterialsChangeHistoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChangeHistory card
include('elements/materials/Action/MaterialsChangeHistory')
MaterialsChangeHistoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
