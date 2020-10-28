# MaterialsViewWeek
```text
elements/materials/Action/MaterialsViewWeek
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewWeek icon](../../../icons/materials/Action/MaterialsViewWeek.png) | ![MaterialsViewWeek element](MaterialsViewWeek.element.png) | ![MaterialsViewWeek card](MaterialsViewWeek.card.png) |
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

' loads the MaterialsViewWeek element
include('elements/materials/Action/MaterialsViewWeek')
MaterialsViewWeek('element', 'View Week', 'an optional tech field')
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

' loads the MaterialsViewWeek element
include('elements/materials/Action/MaterialsViewWeek')
MaterialsViewWeek('element', 'View Week', 'an optional tech field')
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

' loads the MaterialsViewWeek card
include('elements/materials/Action/MaterialsViewWeek')
MaterialsViewWeekCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewWeek card
include('elements/materials/Action/MaterialsViewWeek')
MaterialsViewWeekCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
