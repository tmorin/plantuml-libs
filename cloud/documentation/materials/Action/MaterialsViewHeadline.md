# MaterialsViewHeadline
```text
elements/materials/Action/MaterialsViewHeadline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewHeadline icon](../../../icons/materials/Action/MaterialsViewHeadline.png) | ![MaterialsViewHeadline element](MaterialsViewHeadline.element.png) | ![MaterialsViewHeadline card](MaterialsViewHeadline.card.png) |
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

' loads the MaterialsViewHeadline element
include('elements/materials/Action/MaterialsViewHeadline')
MaterialsViewHeadline('element', 'View Headline', 'an optional tech field')
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

' loads the MaterialsViewHeadline element
include('elements/materials/Action/MaterialsViewHeadline')
MaterialsViewHeadline('element', 'View Headline', 'an optional tech field')
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

' loads the MaterialsViewHeadline card
include('elements/materials/Action/MaterialsViewHeadline')
MaterialsViewHeadlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewHeadline card
include('elements/materials/Action/MaterialsViewHeadline')
MaterialsViewHeadlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
