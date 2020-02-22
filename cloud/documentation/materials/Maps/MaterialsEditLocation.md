# MaterialsEditLocation
```text
elements/materials/Maps/MaterialsEditLocation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsEditLocation icon](../../../icons/materials/Maps/MaterialsEditLocation.png) | ![MaterialsEditLocation element](MaterialsEditLocation.element.png) | ![MaterialsEditLocation card](MaterialsEditLocation.card.png) |
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

' loads the MaterialsEditLocation element
include('elements/materials/Maps/MaterialsEditLocation')
MaterialsEditLocation('element', 'Edit Location', 'an optional tech field')
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

' loads the MaterialsEditLocation element
include('elements/materials/Maps/MaterialsEditLocation')
MaterialsEditLocation('element', 'Edit Location', 'an optional tech field')
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

' loads the MaterialsEditLocation card
include('elements/materials/Maps/MaterialsEditLocation')
MaterialsEditLocationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsEditLocation card
include('elements/materials/Maps/MaterialsEditLocation')
MaterialsEditLocationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
