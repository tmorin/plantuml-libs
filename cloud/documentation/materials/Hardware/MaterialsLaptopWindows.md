# MaterialsLaptopWindows
```text
elements/materials/Hardware/MaterialsLaptopWindows
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLaptopWindows icon](../../../icons/materials/Hardware/MaterialsLaptopWindows.png) | ![MaterialsLaptopWindows element](MaterialsLaptopWindows.element.png) | ![MaterialsLaptopWindows card](MaterialsLaptopWindows.card.png) |
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

' loads the MaterialsLaptopWindows element
include('elements/materials/Hardware/MaterialsLaptopWindows')
MaterialsLaptopWindows('element', 'Laptop Windows', 'an optional tech field')
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

' loads the MaterialsLaptopWindows element
include('elements/materials/Hardware/MaterialsLaptopWindows')
MaterialsLaptopWindows('element', 'Laptop Windows', 'an optional tech field')
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

' loads the MaterialsLaptopWindows card
include('elements/materials/Hardware/MaterialsLaptopWindows')
MaterialsLaptopWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLaptopWindows card
include('elements/materials/Hardware/MaterialsLaptopWindows')
MaterialsLaptopWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
