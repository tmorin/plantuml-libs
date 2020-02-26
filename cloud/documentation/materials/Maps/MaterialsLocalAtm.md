# MaterialsLocalAtm
```text
elements/materials/Maps/MaterialsLocalAtm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalAtm icon](../../../icons/materials/Maps/MaterialsLocalAtm.png) | ![MaterialsLocalAtm element](MaterialsLocalAtm.element.png) | ![MaterialsLocalAtm card](MaterialsLocalAtm.card.png) |
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

' loads the MaterialsLocalAtm element
include('elements/materials/Maps/MaterialsLocalAtm')
MaterialsLocalAtm('element', 'Local Atm', 'an optional tech field')
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

' loads the MaterialsLocalAtm element
include('elements/materials/Maps/MaterialsLocalAtm')
MaterialsLocalAtm('element', 'Local Atm', 'an optional tech field')
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

' loads the MaterialsLocalAtm card
include('elements/materials/Maps/MaterialsLocalAtm')
MaterialsLocalAtmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalAtm card
include('elements/materials/Maps/MaterialsLocalAtm')
MaterialsLocalAtmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
