# MaterialsShuffle
```text
elements/materials/Av/MaterialsShuffle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsShuffle icon](../../../icons/materials/Av/MaterialsShuffle.png) | ![MaterialsShuffle element](MaterialsShuffle.element.png) | ![MaterialsShuffle card](MaterialsShuffle.card.png) |
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

' loads the MaterialsShuffle element
include('elements/materials/Av/MaterialsShuffle')
MaterialsShuffle('element', 'Shuffle', 'an optional tech field')
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

' loads the MaterialsShuffle element
include('elements/materials/Av/MaterialsShuffle')
MaterialsShuffle('element', 'Shuffle', 'an optional tech field')
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

' loads the MaterialsShuffle card
include('elements/materials/Av/MaterialsShuffle')
MaterialsShuffleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsShuffle card
include('elements/materials/Av/MaterialsShuffle')
MaterialsShuffleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
