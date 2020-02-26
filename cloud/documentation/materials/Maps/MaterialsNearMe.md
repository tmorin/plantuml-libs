# MaterialsNearMe
```text
elements/materials/Maps/MaterialsNearMe
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNearMe icon](../../../icons/materials/Maps/MaterialsNearMe.png) | ![MaterialsNearMe element](MaterialsNearMe.element.png) | ![MaterialsNearMe card](MaterialsNearMe.card.png) |
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

' loads the MaterialsNearMe element
include('elements/materials/Maps/MaterialsNearMe')
MaterialsNearMe('element', 'Near Me', 'an optional tech field')
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

' loads the MaterialsNearMe element
include('elements/materials/Maps/MaterialsNearMe')
MaterialsNearMe('element', 'Near Me', 'an optional tech field')
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

' loads the MaterialsNearMe card
include('elements/materials/Maps/MaterialsNearMe')
MaterialsNearMeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNearMe card
include('elements/materials/Maps/MaterialsNearMe')
MaterialsNearMeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
