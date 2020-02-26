# MaterialsSettingsPower
```text
elements/materials/Action/MaterialsSettingsPower
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsPower icon](../../../icons/materials/Action/MaterialsSettingsPower.png) | ![MaterialsSettingsPower element](MaterialsSettingsPower.element.png) | ![MaterialsSettingsPower card](MaterialsSettingsPower.card.png) |
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

' loads the MaterialsSettingsPower element
include('elements/materials/Action/MaterialsSettingsPower')
MaterialsSettingsPower('element', 'Settings Power', 'an optional tech field')
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

' loads the MaterialsSettingsPower element
include('elements/materials/Action/MaterialsSettingsPower')
MaterialsSettingsPower('element', 'Settings Power', 'an optional tech field')
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

' loads the MaterialsSettingsPower card
include('elements/materials/Action/MaterialsSettingsPower')
MaterialsSettingsPowerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsPower card
include('elements/materials/Action/MaterialsSettingsPower')
MaterialsSettingsPowerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
