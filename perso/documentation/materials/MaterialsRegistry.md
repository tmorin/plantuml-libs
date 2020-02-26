# MaterialsRegistry
```text
elements/materials/MaterialsRegistry
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRegistry icon](../../icons/materials/MaterialsRegistry.png) | ![MaterialsRegistry element](MaterialsRegistry.element.png) | ![MaterialsRegistry card](MaterialsRegistry.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsRegistry element
include('elements/materials/MaterialsRegistry')
MaterialsRegistry('element', 'Registry', 'an optional tech field')
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

' loads the MaterialsRegistry element
include('elements/materials/MaterialsRegistry')
MaterialsRegistry('element', 'Registry', 'an optional tech field')
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

' loads the MaterialsRegistry card
include('elements/materials/MaterialsRegistry')
MaterialsRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRegistry card
include('elements/materials/MaterialsRegistry')
MaterialsRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
