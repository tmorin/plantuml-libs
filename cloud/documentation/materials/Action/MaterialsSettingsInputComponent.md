# MaterialsSettingsInputComponent
```text
elements/materials/Action/MaterialsSettingsInputComponent
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsInputComponent icon](../../../icons/materials/Action/MaterialsSettingsInputComponent.png) | ![MaterialsSettingsInputComponent element](MaterialsSettingsInputComponent.element.png) | ![MaterialsSettingsInputComponent card](MaterialsSettingsInputComponent.card.png) |
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

' loads the MaterialsSettingsInputComponent element
include('elements/materials/Action/MaterialsSettingsInputComponent')
MaterialsSettingsInputComponent('element', 'Settings Input Component', 'an optional tech field')
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

' loads the MaterialsSettingsInputComponent element
include('elements/materials/Action/MaterialsSettingsInputComponent')
MaterialsSettingsInputComponent('element', 'Settings Input Component', 'an optional tech field')
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

' loads the MaterialsSettingsInputComponent card
include('elements/materials/Action/MaterialsSettingsInputComponent')
MaterialsSettingsInputComponentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsInputComponent card
include('elements/materials/Action/MaterialsSettingsInputComponent')
MaterialsSettingsInputComponentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
