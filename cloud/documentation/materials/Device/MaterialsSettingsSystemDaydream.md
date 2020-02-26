# MaterialsSettingsSystemDaydream
```text
elements/materials/Device/MaterialsSettingsSystemDaydream
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsSystemDaydream icon](../../../icons/materials/Device/MaterialsSettingsSystemDaydream.png) | ![MaterialsSettingsSystemDaydream element](MaterialsSettingsSystemDaydream.element.png) | ![MaterialsSettingsSystemDaydream card](MaterialsSettingsSystemDaydream.card.png) |
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

' loads the MaterialsSettingsSystemDaydream element
include('elements/materials/Device/MaterialsSettingsSystemDaydream')
MaterialsSettingsSystemDaydream('element', 'Settings System Daydream', 'an optional tech field')
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

' loads the MaterialsSettingsSystemDaydream element
include('elements/materials/Device/MaterialsSettingsSystemDaydream')
MaterialsSettingsSystemDaydream('element', 'Settings System Daydream', 'an optional tech field')
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

' loads the MaterialsSettingsSystemDaydream card
include('elements/materials/Device/MaterialsSettingsSystemDaydream')
MaterialsSettingsSystemDaydreamCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsSystemDaydream card
include('elements/materials/Device/MaterialsSettingsSystemDaydream')
MaterialsSettingsSystemDaydreamCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
