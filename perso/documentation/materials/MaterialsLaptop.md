# MaterialsLaptop
```text
elements/materials/MaterialsLaptop
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLaptop icon](../../icons/materials/MaterialsLaptop.png) | ![MaterialsLaptop element](MaterialsLaptop.element.png) | ![MaterialsLaptop card](MaterialsLaptop.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="feat/perso/add-library"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsLaptop element
include('elements/materials/MaterialsLaptop')
MaterialsLaptop('element', 'Laptop', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsLaptop element
include('elements/materials/MaterialsLaptop')
MaterialsLaptop('element', 'Laptop', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="feat/perso/add-library"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsLaptop card
include('elements/materials/MaterialsLaptop')
MaterialsLaptopCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsLaptop card
include('elements/materials/MaterialsLaptop')
MaterialsLaptopCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
