# MaterialsTerrain
```text
elements/materials/Maps/MaterialsTerrain
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTerrain icon](../../../icons/materials/Maps/MaterialsTerrain.png) | ![MaterialsTerrain element](MaterialsTerrain.element.png) | ![MaterialsTerrain card](MaterialsTerrain.card.png) |
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

' loads the MaterialsTerrain element
include('elements/materials/Maps/MaterialsTerrain')
MaterialsTerrain('element', 'Terrain', 'an optional tech field')
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

' loads the MaterialsTerrain element
include('elements/materials/Maps/MaterialsTerrain')
MaterialsTerrain('element', 'Terrain', 'an optional tech field')
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

' loads the MaterialsTerrain card
include('elements/materials/Maps/MaterialsTerrain')
MaterialsTerrainCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTerrain card
include('elements/materials/Maps/MaterialsTerrain')
MaterialsTerrainCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
