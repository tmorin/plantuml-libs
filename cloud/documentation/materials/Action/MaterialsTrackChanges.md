# MaterialsTrackChanges
```text
elements/materials/Action/MaterialsTrackChanges
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTrackChanges icon](../../../icons/materials/Action/MaterialsTrackChanges.png) | ![MaterialsTrackChanges element](MaterialsTrackChanges.element.png) | ![MaterialsTrackChanges card](MaterialsTrackChanges.card.png) |
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

' loads the MaterialsTrackChanges element
include('elements/materials/Action/MaterialsTrackChanges')
MaterialsTrackChanges('element', 'Track Changes', 'an optional tech field')
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

' loads the MaterialsTrackChanges element
include('elements/materials/Action/MaterialsTrackChanges')
MaterialsTrackChanges('element', 'Track Changes', 'an optional tech field')
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

' loads the MaterialsTrackChanges card
include('elements/materials/Action/MaterialsTrackChanges')
MaterialsTrackChangesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTrackChanges card
include('elements/materials/Action/MaterialsTrackChanges')
MaterialsTrackChangesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
