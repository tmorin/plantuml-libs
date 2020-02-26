# MaterialsSatellite
```text
elements/materials/Maps/MaterialsSatellite
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSatellite icon](../../../icons/materials/Maps/MaterialsSatellite.png) | ![MaterialsSatellite element](MaterialsSatellite.element.png) | ![MaterialsSatellite card](MaterialsSatellite.card.png) |
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

' loads the MaterialsSatellite element
include('elements/materials/Maps/MaterialsSatellite')
MaterialsSatellite('element', 'Satellite', 'an optional tech field')
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

' loads the MaterialsSatellite element
include('elements/materials/Maps/MaterialsSatellite')
MaterialsSatellite('element', 'Satellite', 'an optional tech field')
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

' loads the MaterialsSatellite card
include('elements/materials/Maps/MaterialsSatellite')
MaterialsSatelliteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSatellite card
include('elements/materials/Maps/MaterialsSatellite')
MaterialsSatelliteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
