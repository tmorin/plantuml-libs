# MaterialsCenterFocusStrong
```text
elements/materials/Image/MaterialsCenterFocusStrong
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCenterFocusStrong icon](../../../icons/materials/Image/MaterialsCenterFocusStrong.png) | ![MaterialsCenterFocusStrong element](MaterialsCenterFocusStrong.element.png) | ![MaterialsCenterFocusStrong card](MaterialsCenterFocusStrong.card.png) |
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

' loads the MaterialsCenterFocusStrong element
include('elements/materials/Image/MaterialsCenterFocusStrong')
MaterialsCenterFocusStrong('element', 'Center Focus Strong', 'an optional tech field')
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

' loads the MaterialsCenterFocusStrong element
include('elements/materials/Image/MaterialsCenterFocusStrong')
MaterialsCenterFocusStrong('element', 'Center Focus Strong', 'an optional tech field')
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

' loads the MaterialsCenterFocusStrong card
include('elements/materials/Image/MaterialsCenterFocusStrong')
MaterialsCenterFocusStrongCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCenterFocusStrong card
include('elements/materials/Image/MaterialsCenterFocusStrong')
MaterialsCenterFocusStrongCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
