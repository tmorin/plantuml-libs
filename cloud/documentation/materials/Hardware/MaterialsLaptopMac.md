# MaterialsLaptopMac
```text
elements/materials/Hardware/MaterialsLaptopMac
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLaptopMac icon](../../../icons/materials/Hardware/MaterialsLaptopMac.png) | ![MaterialsLaptopMac element](MaterialsLaptopMac.element.png) | ![MaterialsLaptopMac card](MaterialsLaptopMac.card.png) |
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

' loads the MaterialsLaptopMac element
include('elements/materials/Hardware/MaterialsLaptopMac')
MaterialsLaptopMac('element', 'Laptop Mac', 'an optional tech field')
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

' loads the MaterialsLaptopMac element
include('elements/materials/Hardware/MaterialsLaptopMac')
MaterialsLaptopMac('element', 'Laptop Mac', 'an optional tech field')
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

' loads the MaterialsLaptopMac card
include('elements/materials/Hardware/MaterialsLaptopMac')
MaterialsLaptopMacCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLaptopMac card
include('elements/materials/Hardware/MaterialsLaptopMac')
MaterialsLaptopMacCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
