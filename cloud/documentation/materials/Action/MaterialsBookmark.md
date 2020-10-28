# MaterialsBookmark
```text
elements/materials/Action/MaterialsBookmark
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBookmark icon](../../../icons/materials/Action/MaterialsBookmark.png) | ![MaterialsBookmark element](MaterialsBookmark.element.png) | ![MaterialsBookmark card](MaterialsBookmark.card.png) |
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

' loads the MaterialsBookmark element
include('elements/materials/Action/MaterialsBookmark')
MaterialsBookmark('element', 'Bookmark', 'an optional tech field')
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

' loads the MaterialsBookmark element
include('elements/materials/Action/MaterialsBookmark')
MaterialsBookmark('element', 'Bookmark', 'an optional tech field')
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

' loads the MaterialsBookmark card
include('elements/materials/Action/MaterialsBookmark')
MaterialsBookmarkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBookmark card
include('elements/materials/Action/MaterialsBookmark')
MaterialsBookmarkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
