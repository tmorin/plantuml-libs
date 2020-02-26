# MaterialsNextWeek
```text
elements/materials/Content/MaterialsNextWeek
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNextWeek icon](../../../icons/materials/Content/MaterialsNextWeek.png) | ![MaterialsNextWeek element](MaterialsNextWeek.element.png) | ![MaterialsNextWeek card](MaterialsNextWeek.card.png) |
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

' loads the MaterialsNextWeek element
include('elements/materials/Content/MaterialsNextWeek')
MaterialsNextWeek('element', 'Next Week', 'an optional tech field')
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

' loads the MaterialsNextWeek element
include('elements/materials/Content/MaterialsNextWeek')
MaterialsNextWeek('element', 'Next Week', 'an optional tech field')
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

' loads the MaterialsNextWeek card
include('elements/materials/Content/MaterialsNextWeek')
MaterialsNextWeekCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNextWeek card
include('elements/materials/Content/MaterialsNextWeek')
MaterialsNextWeekCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
