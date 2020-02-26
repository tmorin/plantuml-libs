# MaterialsStoreMallDirectory
```text
elements/materials/Maps/MaterialsStoreMallDirectory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStoreMallDirectory icon](../../../icons/materials/Maps/MaterialsStoreMallDirectory.png) | ![MaterialsStoreMallDirectory element](MaterialsStoreMallDirectory.element.png) | ![MaterialsStoreMallDirectory card](MaterialsStoreMallDirectory.card.png) |
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

' loads the MaterialsStoreMallDirectory element
include('elements/materials/Maps/MaterialsStoreMallDirectory')
MaterialsStoreMallDirectory('element', 'Store Mall Directory', 'an optional tech field')
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

' loads the MaterialsStoreMallDirectory element
include('elements/materials/Maps/MaterialsStoreMallDirectory')
MaterialsStoreMallDirectory('element', 'Store Mall Directory', 'an optional tech field')
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

' loads the MaterialsStoreMallDirectory card
include('elements/materials/Maps/MaterialsStoreMallDirectory')
MaterialsStoreMallDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStoreMallDirectory card
include('elements/materials/Maps/MaterialsStoreMallDirectory')
MaterialsStoreMallDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
