# MaterialsReplyAll
```text
elements/materials/Content/MaterialsReplyAll
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsReplyAll icon](../../../icons/materials/Content/MaterialsReplyAll.png) | ![MaterialsReplyAll element](MaterialsReplyAll.element.png) | ![MaterialsReplyAll card](MaterialsReplyAll.card.png) |
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

' loads the MaterialsReplyAll element
include('elements/materials/Content/MaterialsReplyAll')
MaterialsReplyAll('element', 'Reply All', 'an optional tech field')
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

' loads the MaterialsReplyAll element
include('elements/materials/Content/MaterialsReplyAll')
MaterialsReplyAll('element', 'Reply All', 'an optional tech field')
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

' loads the MaterialsReplyAll card
include('elements/materials/Content/MaterialsReplyAll')
MaterialsReplyAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsReplyAll card
include('elements/materials/Content/MaterialsReplyAll')
MaterialsReplyAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
