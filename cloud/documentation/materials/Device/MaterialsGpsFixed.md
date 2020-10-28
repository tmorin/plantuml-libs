# MaterialsGpsFixed
```text
elements/materials/Device/MaterialsGpsFixed
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGpsFixed icon](../../../icons/materials/Device/MaterialsGpsFixed.png) | ![MaterialsGpsFixed element](MaterialsGpsFixed.element.png) | ![MaterialsGpsFixed card](MaterialsGpsFixed.card.png) |
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

' loads the MaterialsGpsFixed element
include('elements/materials/Device/MaterialsGpsFixed')
MaterialsGpsFixed('element', 'Gps Fixed', 'an optional tech field')
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

' loads the MaterialsGpsFixed element
include('elements/materials/Device/MaterialsGpsFixed')
MaterialsGpsFixed('element', 'Gps Fixed', 'an optional tech field')
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

' loads the MaterialsGpsFixed card
include('elements/materials/Device/MaterialsGpsFixed')
MaterialsGpsFixedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGpsFixed card
include('elements/materials/Device/MaterialsGpsFixed')
MaterialsGpsFixedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
