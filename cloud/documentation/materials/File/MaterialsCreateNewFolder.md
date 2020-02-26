# MaterialsCreateNewFolder
```text
elements/materials/File/MaterialsCreateNewFolder
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCreateNewFolder icon](../../../icons/materials/File/MaterialsCreateNewFolder.png) | ![MaterialsCreateNewFolder element](MaterialsCreateNewFolder.element.png) | ![MaterialsCreateNewFolder card](MaterialsCreateNewFolder.card.png) |
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

' loads the MaterialsCreateNewFolder element
include('elements/materials/File/MaterialsCreateNewFolder')
MaterialsCreateNewFolder('element', 'Create New Folder', 'an optional tech field')
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

' loads the MaterialsCreateNewFolder element
include('elements/materials/File/MaterialsCreateNewFolder')
MaterialsCreateNewFolder('element', 'Create New Folder', 'an optional tech field')
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

' loads the MaterialsCreateNewFolder card
include('elements/materials/File/MaterialsCreateNewFolder')
MaterialsCreateNewFolderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCreateNewFolder card
include('elements/materials/File/MaterialsCreateNewFolder')
MaterialsCreateNewFolderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
