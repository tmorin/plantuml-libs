# MaterialsPlaylistAdd
```text
elements/materials/Av/MaterialsPlaylistAdd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPlaylistAdd icon](../../../icons/materials/Av/MaterialsPlaylistAdd.png) | ![MaterialsPlaylistAdd element](MaterialsPlaylistAdd.element.png) | ![MaterialsPlaylistAdd card](MaterialsPlaylistAdd.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsPlaylistAdd element
include('elements/materials/Av/MaterialsPlaylistAdd')
MaterialsPlaylistAdd('element', 'Playlist Add', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsPlaylistAdd element
include('elements/materials/Av/MaterialsPlaylistAdd')
MaterialsPlaylistAdd('element', 'Playlist Add', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsPlaylistAdd card
include('elements/materials/Av/MaterialsPlaylistAdd')
MaterialsPlaylistAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsPlaylistAdd card
include('elements/materials/Av/MaterialsPlaylistAdd')
MaterialsPlaylistAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
