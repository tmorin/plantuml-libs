# MaterialsFolderOpen
```text
elements/materials/File/MaterialsFolderOpen
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFolderOpen icon](../../../icons/materials/File/MaterialsFolderOpen.png) | ![MaterialsFolderOpen element](MaterialsFolderOpen.element.png) | ![MaterialsFolderOpen card](MaterialsFolderOpen.card.png) |
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

' loads the MaterialsFolderOpen element
include('elements/materials/File/MaterialsFolderOpen')
MaterialsFolderOpen('element', 'Folder Open', 'an optional tech field')
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

' loads the MaterialsFolderOpen element
include('elements/materials/File/MaterialsFolderOpen')
MaterialsFolderOpen('element', 'Folder Open', 'an optional tech field')
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

' loads the MaterialsFolderOpen card
include('elements/materials/File/MaterialsFolderOpen')
MaterialsFolderOpenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFolderOpen card
include('elements/materials/File/MaterialsFolderOpen')
MaterialsFolderOpenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
