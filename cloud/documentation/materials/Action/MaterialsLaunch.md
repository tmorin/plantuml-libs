# MaterialsLaunch
```text
elements/materials/Action/MaterialsLaunch
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLaunch icon](../../../icons/materials/Action/MaterialsLaunch.png) | ![MaterialsLaunch element](MaterialsLaunch.element.png) | ![MaterialsLaunch card](MaterialsLaunch.card.png) |
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

' loads the MaterialsLaunch element
include('elements/materials/Action/MaterialsLaunch')
MaterialsLaunch('element', 'Launch', 'an optional tech field')
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

' loads the MaterialsLaunch element
include('elements/materials/Action/MaterialsLaunch')
MaterialsLaunch('element', 'Launch', 'an optional tech field')
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

' loads the MaterialsLaunch card
include('elements/materials/Action/MaterialsLaunch')
MaterialsLaunchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLaunch card
include('elements/materials/Action/MaterialsLaunch')
MaterialsLaunchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
