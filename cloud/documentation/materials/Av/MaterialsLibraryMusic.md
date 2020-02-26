# MaterialsLibraryMusic
```text
elements/materials/Av/MaterialsLibraryMusic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLibraryMusic icon](../../../icons/materials/Av/MaterialsLibraryMusic.png) | ![MaterialsLibraryMusic element](MaterialsLibraryMusic.element.png) | ![MaterialsLibraryMusic card](MaterialsLibraryMusic.card.png) |
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

' loads the MaterialsLibraryMusic element
include('elements/materials/Av/MaterialsLibraryMusic')
MaterialsLibraryMusic('element', 'Library Music', 'an optional tech field')
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

' loads the MaterialsLibraryMusic element
include('elements/materials/Av/MaterialsLibraryMusic')
MaterialsLibraryMusic('element', 'Library Music', 'an optional tech field')
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

' loads the MaterialsLibraryMusic card
include('elements/materials/Av/MaterialsLibraryMusic')
MaterialsLibraryMusicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLibraryMusic card
include('elements/materials/Av/MaterialsLibraryMusic')
MaterialsLibraryMusicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
