# MaterialsFastRewind
```text
elements/materials/Av/MaterialsFastRewind
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFastRewind icon](../../../icons/materials/Av/MaterialsFastRewind.png) | ![MaterialsFastRewind element](MaterialsFastRewind.element.png) | ![MaterialsFastRewind card](MaterialsFastRewind.card.png) |
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

' loads the MaterialsFastRewind element
include('elements/materials/Av/MaterialsFastRewind')
MaterialsFastRewind('element', 'Fast Rewind', 'an optional tech field')
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

' loads the MaterialsFastRewind element
include('elements/materials/Av/MaterialsFastRewind')
MaterialsFastRewind('element', 'Fast Rewind', 'an optional tech field')
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

' loads the MaterialsFastRewind card
include('elements/materials/Av/MaterialsFastRewind')
MaterialsFastRewindCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFastRewind card
include('elements/materials/Av/MaterialsFastRewind')
MaterialsFastRewindCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
