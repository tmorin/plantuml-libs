# MaterialsStayPrimaryPortrait
```text
elements/materials/Communication/MaterialsStayPrimaryPortrait
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStayPrimaryPortrait icon](../../../icons/materials/Communication/MaterialsStayPrimaryPortrait.png) | ![MaterialsStayPrimaryPortrait element](MaterialsStayPrimaryPortrait.element.png) | ![MaterialsStayPrimaryPortrait card](MaterialsStayPrimaryPortrait.card.png) |
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

' loads the MaterialsStayPrimaryPortrait element
include('elements/materials/Communication/MaterialsStayPrimaryPortrait')
MaterialsStayPrimaryPortrait('element', 'Stay Primary Portrait', 'an optional tech field')
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

' loads the MaterialsStayPrimaryPortrait element
include('elements/materials/Communication/MaterialsStayPrimaryPortrait')
MaterialsStayPrimaryPortrait('element', 'Stay Primary Portrait', 'an optional tech field')
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

' loads the MaterialsStayPrimaryPortrait card
include('elements/materials/Communication/MaterialsStayPrimaryPortrait')
MaterialsStayPrimaryPortraitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStayPrimaryPortrait card
include('elements/materials/Communication/MaterialsStayPrimaryPortrait')
MaterialsStayPrimaryPortraitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
