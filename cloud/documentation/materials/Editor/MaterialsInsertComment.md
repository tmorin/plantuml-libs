# MaterialsInsertComment
```text
elements/materials/Editor/MaterialsInsertComment
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsInsertComment icon](../../../icons/materials/Editor/MaterialsInsertComment.png) | ![MaterialsInsertComment element](MaterialsInsertComment.element.png) | ![MaterialsInsertComment card](MaterialsInsertComment.card.png) |
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

' loads the MaterialsInsertComment element
include('elements/materials/Editor/MaterialsInsertComment')
MaterialsInsertComment('element', 'Insert Comment', 'an optional tech field')
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

' loads the MaterialsInsertComment element
include('elements/materials/Editor/MaterialsInsertComment')
MaterialsInsertComment('element', 'Insert Comment', 'an optional tech field')
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

' loads the MaterialsInsertComment card
include('elements/materials/Editor/MaterialsInsertComment')
MaterialsInsertCommentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsInsertComment card
include('elements/materials/Editor/MaterialsInsertComment')
MaterialsInsertCommentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
