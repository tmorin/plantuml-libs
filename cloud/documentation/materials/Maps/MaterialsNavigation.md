# MaterialsNavigation
```text
elements/materials/Maps/MaterialsNavigation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNavigation icon](../../../icons/materials/Maps/MaterialsNavigation.png) | ![MaterialsNavigation element](MaterialsNavigation.element.png) | ![MaterialsNavigation card](MaterialsNavigation.card.png) |
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

' loads the MaterialsNavigation element
include('elements/materials/Maps/MaterialsNavigation')
MaterialsNavigation('element', 'Navigation', 'an optional tech field')
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

' loads the MaterialsNavigation element
include('elements/materials/Maps/MaterialsNavigation')
MaterialsNavigation('element', 'Navigation', 'an optional tech field')
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

' loads the MaterialsNavigation card
include('elements/materials/Maps/MaterialsNavigation')
MaterialsNavigationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNavigation card
include('elements/materials/Maps/MaterialsNavigation')
MaterialsNavigationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
