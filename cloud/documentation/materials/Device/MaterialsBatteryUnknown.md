# MaterialsBatteryUnknown
```text
elements/materials/Device/MaterialsBatteryUnknown
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBatteryUnknown icon](../../../icons/materials/Device/MaterialsBatteryUnknown.png) | ![MaterialsBatteryUnknown element](MaterialsBatteryUnknown.element.png) | ![MaterialsBatteryUnknown card](MaterialsBatteryUnknown.card.png) |
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

' loads the MaterialsBatteryUnknown element
include('elements/materials/Device/MaterialsBatteryUnknown')
MaterialsBatteryUnknown('element', 'Battery Unknown', 'an optional tech field')
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

' loads the MaterialsBatteryUnknown element
include('elements/materials/Device/MaterialsBatteryUnknown')
MaterialsBatteryUnknown('element', 'Battery Unknown', 'an optional tech field')
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

' loads the MaterialsBatteryUnknown card
include('elements/materials/Device/MaterialsBatteryUnknown')
MaterialsBatteryUnknownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBatteryUnknown card
include('elements/materials/Device/MaterialsBatteryUnknown')
MaterialsBatteryUnknownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
