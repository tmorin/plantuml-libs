# MaterialsAlbum
```text
elements/materials/Av/MaterialsAlbum
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAlbum icon](../../../icons/materials/Av/MaterialsAlbum.png) | ![MaterialsAlbum element](MaterialsAlbum.element.png) | ![MaterialsAlbum card](MaterialsAlbum.card.png) |
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

' loads the MaterialsAlbum element
include('elements/materials/Av/MaterialsAlbum')
MaterialsAlbum('element', 'Album', 'an optional tech field')
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

' loads the MaterialsAlbum element
include('elements/materials/Av/MaterialsAlbum')
MaterialsAlbum('element', 'Album', 'an optional tech field')
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

' loads the MaterialsAlbum card
include('elements/materials/Av/MaterialsAlbum')
MaterialsAlbumCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAlbum card
include('elements/materials/Av/MaterialsAlbum')
MaterialsAlbumCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
