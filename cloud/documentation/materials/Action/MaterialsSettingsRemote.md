# MaterialsSettingsRemote
```text
elements/materials/Action/MaterialsSettingsRemote
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsRemote icon](../../../icons/materials/Action/MaterialsSettingsRemote.png) | ![MaterialsSettingsRemote element](MaterialsSettingsRemote.element.png) | ![MaterialsSettingsRemote card](MaterialsSettingsRemote.card.png) |
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

' loads the MaterialsSettingsRemote element
include('elements/materials/Action/MaterialsSettingsRemote')
MaterialsSettingsRemote('element', 'Settings Remote', 'an optional tech field')
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

' loads the MaterialsSettingsRemote element
include('elements/materials/Action/MaterialsSettingsRemote')
MaterialsSettingsRemote('element', 'Settings Remote', 'an optional tech field')
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

' loads the MaterialsSettingsRemote card
include('elements/materials/Action/MaterialsSettingsRemote')
MaterialsSettingsRemoteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsRemote card
include('elements/materials/Action/MaterialsSettingsRemote')
MaterialsSettingsRemoteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
