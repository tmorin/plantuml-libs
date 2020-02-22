# MaterialsMenu
```text
elements/materials/Navigation/MaterialsMenu
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMenu icon](../../../icons/materials/Navigation/MaterialsMenu.png) | ![MaterialsMenu element](MaterialsMenu.element.png) | ![MaterialsMenu card](MaterialsMenu.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsMenu element
include('elements/materials/Navigation/MaterialsMenu')
MaterialsMenu('element', 'Menu', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsMenu element
include('elements/materials/Navigation/MaterialsMenu')
MaterialsMenu('element', 'Menu', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsMenu card
include('elements/materials/Navigation/MaterialsMenu')
MaterialsMenuCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsMenu card
include('elements/materials/Navigation/MaterialsMenu')
MaterialsMenuCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
