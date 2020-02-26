# MaterialsAccessAlarm
```text
elements/materials/Device/MaterialsAccessAlarm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAccessAlarm icon](../../../icons/materials/Device/MaterialsAccessAlarm.png) | ![MaterialsAccessAlarm element](MaterialsAccessAlarm.element.png) | ![MaterialsAccessAlarm card](MaterialsAccessAlarm.card.png) |
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

' loads the MaterialsAccessAlarm element
include('elements/materials/Device/MaterialsAccessAlarm')
MaterialsAccessAlarm('element', 'Access Alarm', 'an optional tech field')
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

' loads the MaterialsAccessAlarm element
include('elements/materials/Device/MaterialsAccessAlarm')
MaterialsAccessAlarm('element', 'Access Alarm', 'an optional tech field')
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

' loads the MaterialsAccessAlarm card
include('elements/materials/Device/MaterialsAccessAlarm')
MaterialsAccessAlarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAccessAlarm card
include('elements/materials/Device/MaterialsAccessAlarm')
MaterialsAccessAlarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
