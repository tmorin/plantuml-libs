# MaterialsLocationOn
```text
elements/materials/Communication/MaterialsLocationOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocationOn icon](../../../icons/materials/Communication/MaterialsLocationOn.png) | ![MaterialsLocationOn element](MaterialsLocationOn.element.png) | ![MaterialsLocationOn card](MaterialsLocationOn.card.png) |
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

' loads the MaterialsLocationOn element
include('elements/materials/Communication/MaterialsLocationOn')
MaterialsLocationOn('element', 'Location On', 'an optional tech field')
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

' loads the MaterialsLocationOn element
include('elements/materials/Communication/MaterialsLocationOn')
MaterialsLocationOn('element', 'Location On', 'an optional tech field')
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

' loads the MaterialsLocationOn card
include('elements/materials/Communication/MaterialsLocationOn')
MaterialsLocationOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocationOn card
include('elements/materials/Communication/MaterialsLocationOn')
MaterialsLocationOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
