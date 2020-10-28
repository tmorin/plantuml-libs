# MaterialsSettingsInputAntenna
```text
elements/materials/Action/MaterialsSettingsInputAntenna
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsInputAntenna icon](../../../icons/materials/Action/MaterialsSettingsInputAntenna.png) | ![MaterialsSettingsInputAntenna element](MaterialsSettingsInputAntenna.element.png) | ![MaterialsSettingsInputAntenna card](MaterialsSettingsInputAntenna.card.png) |
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

' loads the MaterialsSettingsInputAntenna element
include('elements/materials/Action/MaterialsSettingsInputAntenna')
MaterialsSettingsInputAntenna('element', 'Settings Input Antenna', 'an optional tech field')
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

' loads the MaterialsSettingsInputAntenna element
include('elements/materials/Action/MaterialsSettingsInputAntenna')
MaterialsSettingsInputAntenna('element', 'Settings Input Antenna', 'an optional tech field')
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

' loads the MaterialsSettingsInputAntenna card
include('elements/materials/Action/MaterialsSettingsInputAntenna')
MaterialsSettingsInputAntennaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsInputAntenna card
include('elements/materials/Action/MaterialsSettingsInputAntenna')
MaterialsSettingsInputAntennaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
