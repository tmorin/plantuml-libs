# MaterialsReplay30
```text
elements/materials/Av/MaterialsReplay30
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsReplay30 icon](../../../icons/materials/Av/MaterialsReplay30.png) | ![MaterialsReplay30 element](MaterialsReplay30.element.png) | ![MaterialsReplay30 card](MaterialsReplay30.card.png) |
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

' loads the MaterialsReplay30 element
include('elements/materials/Av/MaterialsReplay30')
MaterialsReplay30('element', 'Replay30', 'an optional tech field')
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

' loads the MaterialsReplay30 element
include('elements/materials/Av/MaterialsReplay30')
MaterialsReplay30('element', 'Replay30', 'an optional tech field')
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

' loads the MaterialsReplay30 card
include('elements/materials/Av/MaterialsReplay30')
MaterialsReplay30Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsReplay30 card
include('elements/materials/Av/MaterialsReplay30')
MaterialsReplay30Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
