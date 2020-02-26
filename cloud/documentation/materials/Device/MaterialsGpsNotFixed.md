# MaterialsGpsNotFixed
```text
elements/materials/Device/MaterialsGpsNotFixed
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGpsNotFixed icon](../../../icons/materials/Device/MaterialsGpsNotFixed.png) | ![MaterialsGpsNotFixed element](MaterialsGpsNotFixed.element.png) | ![MaterialsGpsNotFixed card](MaterialsGpsNotFixed.card.png) |
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

' loads the MaterialsGpsNotFixed element
include('elements/materials/Device/MaterialsGpsNotFixed')
MaterialsGpsNotFixed('element', 'Gps Not Fixed', 'an optional tech field')
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

' loads the MaterialsGpsNotFixed element
include('elements/materials/Device/MaterialsGpsNotFixed')
MaterialsGpsNotFixed('element', 'Gps Not Fixed', 'an optional tech field')
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

' loads the MaterialsGpsNotFixed card
include('elements/materials/Device/MaterialsGpsNotFixed')
MaterialsGpsNotFixedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGpsNotFixed card
include('elements/materials/Device/MaterialsGpsNotFixed')
MaterialsGpsNotFixedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
