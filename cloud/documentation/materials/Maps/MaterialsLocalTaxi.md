# MaterialsLocalTaxi
```text
elements/materials/Maps/MaterialsLocalTaxi
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalTaxi icon](../../../icons/materials/Maps/MaterialsLocalTaxi.png) | ![MaterialsLocalTaxi element](MaterialsLocalTaxi.element.png) | ![MaterialsLocalTaxi card](MaterialsLocalTaxi.card.png) |
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

' loads the MaterialsLocalTaxi element
include('elements/materials/Maps/MaterialsLocalTaxi')
MaterialsLocalTaxi('element', 'Local Taxi', 'an optional tech field')
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

' loads the MaterialsLocalTaxi element
include('elements/materials/Maps/MaterialsLocalTaxi')
MaterialsLocalTaxi('element', 'Local Taxi', 'an optional tech field')
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

' loads the MaterialsLocalTaxi card
include('elements/materials/Maps/MaterialsLocalTaxi')
MaterialsLocalTaxiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalTaxi card
include('elements/materials/Maps/MaterialsLocalTaxi')
MaterialsLocalTaxiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
