# MaterialsStayPrimaryLandscape
```text
elements/materials/Communication/MaterialsStayPrimaryLandscape
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStayPrimaryLandscape icon](../../../icons/materials/Communication/MaterialsStayPrimaryLandscape.png) | ![MaterialsStayPrimaryLandscape element](MaterialsStayPrimaryLandscape.element.png) | ![MaterialsStayPrimaryLandscape card](MaterialsStayPrimaryLandscape.card.png) |
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

' loads the MaterialsStayPrimaryLandscape element
include('elements/materials/Communication/MaterialsStayPrimaryLandscape')
MaterialsStayPrimaryLandscape('element', 'Stay Primary Landscape', 'an optional tech field')
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

' loads the MaterialsStayPrimaryLandscape element
include('elements/materials/Communication/MaterialsStayPrimaryLandscape')
MaterialsStayPrimaryLandscape('element', 'Stay Primary Landscape', 'an optional tech field')
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

' loads the MaterialsStayPrimaryLandscape card
include('elements/materials/Communication/MaterialsStayPrimaryLandscape')
MaterialsStayPrimaryLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStayPrimaryLandscape card
include('elements/materials/Communication/MaterialsStayPrimaryLandscape')
MaterialsStayPrimaryLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
