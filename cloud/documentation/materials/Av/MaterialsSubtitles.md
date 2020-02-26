# MaterialsSubtitles
```text
elements/materials/Av/MaterialsSubtitles
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSubtitles icon](../../../icons/materials/Av/MaterialsSubtitles.png) | ![MaterialsSubtitles element](MaterialsSubtitles.element.png) | ![MaterialsSubtitles card](MaterialsSubtitles.card.png) |
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

' loads the MaterialsSubtitles element
include('elements/materials/Av/MaterialsSubtitles')
MaterialsSubtitles('element', 'Subtitles', 'an optional tech field')
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

' loads the MaterialsSubtitles element
include('elements/materials/Av/MaterialsSubtitles')
MaterialsSubtitles('element', 'Subtitles', 'an optional tech field')
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

' loads the MaterialsSubtitles card
include('elements/materials/Av/MaterialsSubtitles')
MaterialsSubtitlesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSubtitles card
include('elements/materials/Av/MaterialsSubtitles')
MaterialsSubtitlesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
