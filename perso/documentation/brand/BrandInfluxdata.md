# BrandInfluxdata
```text
elements/brand/BrandInfluxdata
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![BrandInfluxdata icon](../../icons/brand/BrandInfluxdata.png) | ![BrandInfluxdata element](BrandInfluxdata.element.png) | ![BrandInfluxdata card](BrandInfluxdata.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the BrandInfluxdata element
include('elements/brand/BrandInfluxdata')
BrandInfluxdata('element', 'Influxdata', 'an optional tech field')
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

' loads the BrandInfluxdata element
include('elements/brand/BrandInfluxdata')
BrandInfluxdata('element', 'Influxdata', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the BrandInfluxdata card
include('elements/brand/BrandInfluxdata')
BrandInfluxdataCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the BrandInfluxdata card
include('elements/brand/BrandInfluxdata')
BrandInfluxdataCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
