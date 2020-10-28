# MaterialsViewDay
```text
elements/materials/Action/MaterialsViewDay
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewDay icon](../../../icons/materials/Action/MaterialsViewDay.png) | ![MaterialsViewDay element](MaterialsViewDay.element.png) | ![MaterialsViewDay card](MaterialsViewDay.card.png) |
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

' loads the MaterialsViewDay element
include('elements/materials/Action/MaterialsViewDay')
MaterialsViewDay('element', 'View Day', 'an optional tech field')
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

' loads the MaterialsViewDay element
include('elements/materials/Action/MaterialsViewDay')
MaterialsViewDay('element', 'View Day', 'an optional tech field')
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

' loads the MaterialsViewDay card
include('elements/materials/Action/MaterialsViewDay')
MaterialsViewDayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewDay card
include('elements/materials/Action/MaterialsViewDay')
MaterialsViewDayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
