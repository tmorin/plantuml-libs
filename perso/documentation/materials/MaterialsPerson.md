# MaterialsPerson
```text
elements/materials/MaterialsPerson
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPerson icon](../../icons/materials/MaterialsPerson.png) | ![MaterialsPerson element](MaterialsPerson.element.png) | ![MaterialsPerson card](MaterialsPerson.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsPerson element
include('elements/materials/MaterialsPerson')
MaterialsPerson('element', 'Person', 'an optional tech field')
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

' loads the MaterialsPerson element
include('elements/materials/MaterialsPerson')
MaterialsPerson('element', 'Person', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsPerson card
include('elements/materials/MaterialsPerson')
MaterialsPersonCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPerson card
include('elements/materials/MaterialsPerson')
MaterialsPersonCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
