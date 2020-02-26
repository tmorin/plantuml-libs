# MaterialsAlarmAdd
```text
elements/materials/Action/MaterialsAlarmAdd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAlarmAdd icon](../../../icons/materials/Action/MaterialsAlarmAdd.png) | ![MaterialsAlarmAdd element](MaterialsAlarmAdd.element.png) | ![MaterialsAlarmAdd card](MaterialsAlarmAdd.card.png) |
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

' loads the MaterialsAlarmAdd element
include('elements/materials/Action/MaterialsAlarmAdd')
MaterialsAlarmAdd('element', 'Alarm Add', 'an optional tech field')
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

' loads the MaterialsAlarmAdd element
include('elements/materials/Action/MaterialsAlarmAdd')
MaterialsAlarmAdd('element', 'Alarm Add', 'an optional tech field')
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

' loads the MaterialsAlarmAdd card
include('elements/materials/Action/MaterialsAlarmAdd')
MaterialsAlarmAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAlarmAdd card
include('elements/materials/Action/MaterialsAlarmAdd')
MaterialsAlarmAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
