# MaterialsDonutLarge
```text
elements/materials/Action/MaterialsDonutLarge
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDonutLarge icon](../../../icons/materials/Action/MaterialsDonutLarge.png) | ![MaterialsDonutLarge element](MaterialsDonutLarge.element.png) | ![MaterialsDonutLarge card](MaterialsDonutLarge.card.png) |
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

' loads the MaterialsDonutLarge element
include('elements/materials/Action/MaterialsDonutLarge')
MaterialsDonutLarge('element', 'Donut Large', 'an optional tech field')
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

' loads the MaterialsDonutLarge element
include('elements/materials/Action/MaterialsDonutLarge')
MaterialsDonutLarge('element', 'Donut Large', 'an optional tech field')
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

' loads the MaterialsDonutLarge card
include('elements/materials/Action/MaterialsDonutLarge')
MaterialsDonutLargeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDonutLarge card
include('elements/materials/Action/MaterialsDonutLarge')
MaterialsDonutLargeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
