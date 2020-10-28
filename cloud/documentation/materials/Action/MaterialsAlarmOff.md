# MaterialsAlarmOff
```text
elements/materials/Action/MaterialsAlarmOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAlarmOff icon](../../../icons/materials/Action/MaterialsAlarmOff.png) | ![MaterialsAlarmOff element](MaterialsAlarmOff.element.png) | ![MaterialsAlarmOff card](MaterialsAlarmOff.card.png) |
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

' loads the MaterialsAlarmOff element
include('elements/materials/Action/MaterialsAlarmOff')
MaterialsAlarmOff('element', 'Alarm Off', 'an optional tech field')
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

' loads the MaterialsAlarmOff element
include('elements/materials/Action/MaterialsAlarmOff')
MaterialsAlarmOff('element', 'Alarm Off', 'an optional tech field')
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

' loads the MaterialsAlarmOff card
include('elements/materials/Action/MaterialsAlarmOff')
MaterialsAlarmOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAlarmOff card
include('elements/materials/Action/MaterialsAlarmOff')
MaterialsAlarmOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
