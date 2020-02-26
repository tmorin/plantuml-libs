# MaterialsBatteryCharging20
```text
elements/materials/Device/MaterialsBatteryCharging20
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryCharging20 icon](../../../icons/materials/Device/MaterialsBatteryCharging20.png) | ![MaterialsBatteryCharging20 element](MaterialsBatteryCharging20.element.png) | ![MaterialsBatteryCharging20 card](MaterialsBatteryCharging20.card.png) |
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

' loads the MaterialsBatteryCharging20 element
include('elements/materials/Device/MaterialsBatteryCharging20')
MaterialsBatteryCharging20('element', 'Battery Charging20', 'an optional tech field')
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

' loads the MaterialsBatteryCharging20 element
include('elements/materials/Device/MaterialsBatteryCharging20')
MaterialsBatteryCharging20('element', 'Battery Charging20', 'an optional tech field')
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

' loads the MaterialsBatteryCharging20 card
include('elements/materials/Device/MaterialsBatteryCharging20')
MaterialsBatteryCharging20Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryCharging20 card
include('elements/materials/Device/MaterialsBatteryCharging20')
MaterialsBatteryCharging20Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
