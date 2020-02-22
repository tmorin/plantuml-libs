# MaterialsLocalActivity
```text
elements/materials/Maps/MaterialsLocalActivity
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalActivity icon](../../../icons/materials/Maps/MaterialsLocalActivity.png) | ![MaterialsLocalActivity element](MaterialsLocalActivity.element.png) | ![MaterialsLocalActivity card](MaterialsLocalActivity.card.png) |
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

' loads the MaterialsLocalActivity element
include('elements/materials/Maps/MaterialsLocalActivity')
MaterialsLocalActivity('element', 'Local Activity', 'an optional tech field')
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

' loads the MaterialsLocalActivity element
include('elements/materials/Maps/MaterialsLocalActivity')
MaterialsLocalActivity('element', 'Local Activity', 'an optional tech field')
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

' loads the MaterialsLocalActivity card
include('elements/materials/Maps/MaterialsLocalActivity')
MaterialsLocalActivityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalActivity card
include('elements/materials/Maps/MaterialsLocalActivity')
MaterialsLocalActivityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
