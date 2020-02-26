# MaterialsSettingsBrightness
```text
elements/materials/Action/MaterialsSettingsBrightness
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsBrightness icon](../../../icons/materials/Action/MaterialsSettingsBrightness.png) | ![MaterialsSettingsBrightness element](MaterialsSettingsBrightness.element.png) | ![MaterialsSettingsBrightness card](MaterialsSettingsBrightness.card.png) |
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

' loads the MaterialsSettingsBrightness element
include('elements/materials/Action/MaterialsSettingsBrightness')
MaterialsSettingsBrightness('element', 'Settings Brightness', 'an optional tech field')
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

' loads the MaterialsSettingsBrightness element
include('elements/materials/Action/MaterialsSettingsBrightness')
MaterialsSettingsBrightness('element', 'Settings Brightness', 'an optional tech field')
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

' loads the MaterialsSettingsBrightness card
include('elements/materials/Action/MaterialsSettingsBrightness')
MaterialsSettingsBrightnessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsBrightness card
include('elements/materials/Action/MaterialsSettingsBrightness')
MaterialsSettingsBrightnessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
