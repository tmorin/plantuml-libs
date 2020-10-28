# MaterialsBatteryCharging50
```text
elements/materials/Device/MaterialsBatteryCharging50
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryCharging50 icon](../../../icons/materials/Device/MaterialsBatteryCharging50.png) | ![MaterialsBatteryCharging50 element](MaterialsBatteryCharging50.element.png) | ![MaterialsBatteryCharging50 card](MaterialsBatteryCharging50.card.png) |
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

' loads the MaterialsBatteryCharging50 element
include('elements/materials/Device/MaterialsBatteryCharging50')
MaterialsBatteryCharging50('element', 'Battery Charging50', 'an optional tech field')
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

' loads the MaterialsBatteryCharging50 element
include('elements/materials/Device/MaterialsBatteryCharging50')
MaterialsBatteryCharging50('element', 'Battery Charging50', 'an optional tech field')
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

' loads the MaterialsBatteryCharging50 card
include('elements/materials/Device/MaterialsBatteryCharging50')
MaterialsBatteryCharging50Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryCharging50 card
include('elements/materials/Device/MaterialsBatteryCharging50')
MaterialsBatteryCharging50Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
