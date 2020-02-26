# MaterialsAlarmOn
```text
elements/materials/Action/MaterialsAlarmOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAlarmOn icon](../../../icons/materials/Action/MaterialsAlarmOn.png) | ![MaterialsAlarmOn element](MaterialsAlarmOn.element.png) | ![MaterialsAlarmOn card](MaterialsAlarmOn.card.png) |
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

' loads the MaterialsAlarmOn element
include('elements/materials/Action/MaterialsAlarmOn')
MaterialsAlarmOn('element', 'Alarm On', 'an optional tech field')
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

' loads the MaterialsAlarmOn element
include('elements/materials/Action/MaterialsAlarmOn')
MaterialsAlarmOn('element', 'Alarm On', 'an optional tech field')
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

' loads the MaterialsAlarmOn card
include('elements/materials/Action/MaterialsAlarmOn')
MaterialsAlarmOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAlarmOn card
include('elements/materials/Action/MaterialsAlarmOn')
MaterialsAlarmOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
