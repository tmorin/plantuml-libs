# MaterialsFilterCenterFocus
```text
elements/materials/Image/MaterialsFilterCenterFocus
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilterCenterFocus icon](../../../icons/materials/Image/MaterialsFilterCenterFocus.png) | ![MaterialsFilterCenterFocus element](MaterialsFilterCenterFocus.element.png) | ![MaterialsFilterCenterFocus card](MaterialsFilterCenterFocus.card.png) |
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

' loads the MaterialsFilterCenterFocus element
include('elements/materials/Image/MaterialsFilterCenterFocus')
MaterialsFilterCenterFocus('element', 'Filter Center Focus', 'an optional tech field')
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

' loads the MaterialsFilterCenterFocus element
include('elements/materials/Image/MaterialsFilterCenterFocus')
MaterialsFilterCenterFocus('element', 'Filter Center Focus', 'an optional tech field')
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

' loads the MaterialsFilterCenterFocus card
include('elements/materials/Image/MaterialsFilterCenterFocus')
MaterialsFilterCenterFocusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilterCenterFocus card
include('elements/materials/Image/MaterialsFilterCenterFocus')
MaterialsFilterCenterFocusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
