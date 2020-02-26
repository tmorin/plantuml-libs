# MaterialsSlowMotionVideo
```text
elements/materials/Av/MaterialsSlowMotionVideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSlowMotionVideo icon](../../../icons/materials/Av/MaterialsSlowMotionVideo.png) | ![MaterialsSlowMotionVideo element](MaterialsSlowMotionVideo.element.png) | ![MaterialsSlowMotionVideo card](MaterialsSlowMotionVideo.card.png) |
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

' loads the MaterialsSlowMotionVideo element
include('elements/materials/Av/MaterialsSlowMotionVideo')
MaterialsSlowMotionVideo('element', 'Slow Motion Video', 'an optional tech field')
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

' loads the MaterialsSlowMotionVideo element
include('elements/materials/Av/MaterialsSlowMotionVideo')
MaterialsSlowMotionVideo('element', 'Slow Motion Video', 'an optional tech field')
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

' loads the MaterialsSlowMotionVideo card
include('elements/materials/Av/MaterialsSlowMotionVideo')
MaterialsSlowMotionVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSlowMotionVideo card
include('elements/materials/Av/MaterialsSlowMotionVideo')
MaterialsSlowMotionVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
