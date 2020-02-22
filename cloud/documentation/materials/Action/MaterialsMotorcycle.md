# MaterialsMotorcycle
```text
elements/materials/Action/MaterialsMotorcycle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMotorcycle icon](../../../icons/materials/Action/MaterialsMotorcycle.png) | ![MaterialsMotorcycle element](MaterialsMotorcycle.element.png) | ![MaterialsMotorcycle card](MaterialsMotorcycle.card.png) |
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

' loads the MaterialsMotorcycle element
include('elements/materials/Action/MaterialsMotorcycle')
MaterialsMotorcycle('element', 'Motorcycle', 'an optional tech field')
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

' loads the MaterialsMotorcycle element
include('elements/materials/Action/MaterialsMotorcycle')
MaterialsMotorcycle('element', 'Motorcycle', 'an optional tech field')
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

' loads the MaterialsMotorcycle card
include('elements/materials/Action/MaterialsMotorcycle')
MaterialsMotorcycleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMotorcycle card
include('elements/materials/Action/MaterialsMotorcycle')
MaterialsMotorcycleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
