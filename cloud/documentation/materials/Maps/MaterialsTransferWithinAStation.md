# MaterialsTransferWithinAStation
```text
elements/materials/Maps/MaterialsTransferWithinAStation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTransferWithinAStation icon](../../../icons/materials/Maps/MaterialsTransferWithinAStation.png) | ![MaterialsTransferWithinAStation element](MaterialsTransferWithinAStation.element.png) | ![MaterialsTransferWithinAStation card](MaterialsTransferWithinAStation.card.png) |
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

' loads the MaterialsTransferWithinAStation element
include('elements/materials/Maps/MaterialsTransferWithinAStation')
MaterialsTransferWithinAStation('element', 'Transfer Within A Station', 'an optional tech field')
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

' loads the MaterialsTransferWithinAStation element
include('elements/materials/Maps/MaterialsTransferWithinAStation')
MaterialsTransferWithinAStation('element', 'Transfer Within A Station', 'an optional tech field')
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

' loads the MaterialsTransferWithinAStation card
include('elements/materials/Maps/MaterialsTransferWithinAStation')
MaterialsTransferWithinAStationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTransferWithinAStation card
include('elements/materials/Maps/MaterialsTransferWithinAStation')
MaterialsTransferWithinAStationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
