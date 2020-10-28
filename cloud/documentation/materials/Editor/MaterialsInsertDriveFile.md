# MaterialsInsertDriveFile
```text
elements/materials/Editor/MaterialsInsertDriveFile
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsInsertDriveFile icon](../../../icons/materials/Editor/MaterialsInsertDriveFile.png) | ![MaterialsInsertDriveFile element](MaterialsInsertDriveFile.element.png) | ![MaterialsInsertDriveFile card](MaterialsInsertDriveFile.card.png) |
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

' loads the MaterialsInsertDriveFile element
include('elements/materials/Editor/MaterialsInsertDriveFile')
MaterialsInsertDriveFile('element', 'Insert Drive File', 'an optional tech field')
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

' loads the MaterialsInsertDriveFile element
include('elements/materials/Editor/MaterialsInsertDriveFile')
MaterialsInsertDriveFile('element', 'Insert Drive File', 'an optional tech field')
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

' loads the MaterialsInsertDriveFile card
include('elements/materials/Editor/MaterialsInsertDriveFile')
MaterialsInsertDriveFileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsInsertDriveFile card
include('elements/materials/Editor/MaterialsInsertDriveFile')
MaterialsInsertDriveFileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
