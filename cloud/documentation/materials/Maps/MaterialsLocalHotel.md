# MaterialsLocalHotel
```text
elements/materials/Maps/MaterialsLocalHotel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalHotel icon](../../../icons/materials/Maps/MaterialsLocalHotel.png) | ![MaterialsLocalHotel element](MaterialsLocalHotel.element.png) | ![MaterialsLocalHotel card](MaterialsLocalHotel.card.png) |
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

' loads the MaterialsLocalHotel element
include('elements/materials/Maps/MaterialsLocalHotel')
MaterialsLocalHotel('element', 'Local Hotel', 'an optional tech field')
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

' loads the MaterialsLocalHotel element
include('elements/materials/Maps/MaterialsLocalHotel')
MaterialsLocalHotel('element', 'Local Hotel', 'an optional tech field')
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

' loads the MaterialsLocalHotel card
include('elements/materials/Maps/MaterialsLocalHotel')
MaterialsLocalHotelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalHotel card
include('elements/materials/Maps/MaterialsLocalHotel')
MaterialsLocalHotelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
