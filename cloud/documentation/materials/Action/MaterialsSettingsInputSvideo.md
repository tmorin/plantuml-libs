# MaterialsSettingsInputSvideo
```text
elements/materials/Action/MaterialsSettingsInputSvideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsInputSvideo icon](../../../icons/materials/Action/MaterialsSettingsInputSvideo.png) | ![MaterialsSettingsInputSvideo element](MaterialsSettingsInputSvideo.element.png) | ![MaterialsSettingsInputSvideo card](MaterialsSettingsInputSvideo.card.png) |
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

' loads the MaterialsSettingsInputSvideo element
include('elements/materials/Action/MaterialsSettingsInputSvideo')
MaterialsSettingsInputSvideo('element', 'Settings Input Svideo', 'an optional tech field')
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

' loads the MaterialsSettingsInputSvideo element
include('elements/materials/Action/MaterialsSettingsInputSvideo')
MaterialsSettingsInputSvideo('element', 'Settings Input Svideo', 'an optional tech field')
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

' loads the MaterialsSettingsInputSvideo card
include('elements/materials/Action/MaterialsSettingsInputSvideo')
MaterialsSettingsInputSvideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsInputSvideo card
include('elements/materials/Action/MaterialsSettingsInputSvideo')
MaterialsSettingsInputSvideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
