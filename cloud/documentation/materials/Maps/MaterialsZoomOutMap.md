# MaterialsZoomOutMap
```text
elements/materials/Maps/MaterialsZoomOutMap
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsZoomOutMap icon](../../../icons/materials/Maps/MaterialsZoomOutMap.png) | ![MaterialsZoomOutMap element](MaterialsZoomOutMap.element.png) | ![MaterialsZoomOutMap card](MaterialsZoomOutMap.card.png) |
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

' loads the MaterialsZoomOutMap element
include('elements/materials/Maps/MaterialsZoomOutMap')
MaterialsZoomOutMap('element', 'Zoom Out Map', 'an optional tech field')
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

' loads the MaterialsZoomOutMap element
include('elements/materials/Maps/MaterialsZoomOutMap')
MaterialsZoomOutMap('element', 'Zoom Out Map', 'an optional tech field')
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

' loads the MaterialsZoomOutMap card
include('elements/materials/Maps/MaterialsZoomOutMap')
MaterialsZoomOutMapCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsZoomOutMap card
include('elements/materials/Maps/MaterialsZoomOutMap')
MaterialsZoomOutMapCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
