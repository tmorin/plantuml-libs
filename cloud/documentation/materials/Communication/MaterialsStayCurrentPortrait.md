# MaterialsStayCurrentPortrait
```text
elements/materials/Communication/MaterialsStayCurrentPortrait
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStayCurrentPortrait icon](../../../icons/materials/Communication/MaterialsStayCurrentPortrait.png) | ![MaterialsStayCurrentPortrait element](MaterialsStayCurrentPortrait.element.png) | ![MaterialsStayCurrentPortrait card](MaterialsStayCurrentPortrait.card.png) |
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

' loads the MaterialsStayCurrentPortrait element
include('elements/materials/Communication/MaterialsStayCurrentPortrait')
MaterialsStayCurrentPortrait('element', 'Stay Current Portrait', 'an optional tech field')
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

' loads the MaterialsStayCurrentPortrait element
include('elements/materials/Communication/MaterialsStayCurrentPortrait')
MaterialsStayCurrentPortrait('element', 'Stay Current Portrait', 'an optional tech field')
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

' loads the MaterialsStayCurrentPortrait card
include('elements/materials/Communication/MaterialsStayCurrentPortrait')
MaterialsStayCurrentPortraitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStayCurrentPortrait card
include('elements/materials/Communication/MaterialsStayCurrentPortrait')
MaterialsStayCurrentPortraitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
