# MaterialsArtTrack
```text
elements/materials/Av/MaterialsArtTrack
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsArtTrack icon](../../../icons/materials/Av/MaterialsArtTrack.png) | ![MaterialsArtTrack element](MaterialsArtTrack.element.png) | ![MaterialsArtTrack card](MaterialsArtTrack.card.png) |
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

' loads the MaterialsArtTrack element
include('elements/materials/Av/MaterialsArtTrack')
MaterialsArtTrack('element', 'Art Track', 'an optional tech field')
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

' loads the MaterialsArtTrack element
include('elements/materials/Av/MaterialsArtTrack')
MaterialsArtTrack('element', 'Art Track', 'an optional tech field')
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

' loads the MaterialsArtTrack card
include('elements/materials/Av/MaterialsArtTrack')
MaterialsArtTrackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsArtTrack card
include('elements/materials/Av/MaterialsArtTrack')
MaterialsArtTrackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
