# MaterialsStayCurrentLandscape
```text
elements/materials/Communication/MaterialsStayCurrentLandscape
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStayCurrentLandscape icon](../../../icons/materials/Communication/MaterialsStayCurrentLandscape.png) | ![MaterialsStayCurrentLandscape element](MaterialsStayCurrentLandscape.element.png) | ![MaterialsStayCurrentLandscape card](MaterialsStayCurrentLandscape.card.png) |
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

' loads the MaterialsStayCurrentLandscape element
include('elements/materials/Communication/MaterialsStayCurrentLandscape')
MaterialsStayCurrentLandscape('element', 'Stay Current Landscape', 'an optional tech field')
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

' loads the MaterialsStayCurrentLandscape element
include('elements/materials/Communication/MaterialsStayCurrentLandscape')
MaterialsStayCurrentLandscape('element', 'Stay Current Landscape', 'an optional tech field')
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

' loads the MaterialsStayCurrentLandscape card
include('elements/materials/Communication/MaterialsStayCurrentLandscape')
MaterialsStayCurrentLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStayCurrentLandscape card
include('elements/materials/Communication/MaterialsStayCurrentLandscape')
MaterialsStayCurrentLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
