# MaterialsMusicVideo
```text
elements/materials/Av/MaterialsMusicVideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMusicVideo icon](../../../icons/materials/Av/MaterialsMusicVideo.png) | ![MaterialsMusicVideo element](MaterialsMusicVideo.element.png) | ![MaterialsMusicVideo card](MaterialsMusicVideo.card.png) |
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

' loads the MaterialsMusicVideo element
include('elements/materials/Av/MaterialsMusicVideo')
MaterialsMusicVideo('element', 'Music Video', 'an optional tech field')
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

' loads the MaterialsMusicVideo element
include('elements/materials/Av/MaterialsMusicVideo')
MaterialsMusicVideo('element', 'Music Video', 'an optional tech field')
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

' loads the MaterialsMusicVideo card
include('elements/materials/Av/MaterialsMusicVideo')
MaterialsMusicVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMusicVideo card
include('elements/materials/Av/MaterialsMusicVideo')
MaterialsMusicVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
