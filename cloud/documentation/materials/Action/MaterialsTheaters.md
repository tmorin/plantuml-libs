# MaterialsTheaters
```text
elements/materials/Action/MaterialsTheaters
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTheaters icon](../../../icons/materials/Action/MaterialsTheaters.png) | ![MaterialsTheaters element](MaterialsTheaters.element.png) | ![MaterialsTheaters card](MaterialsTheaters.card.png) |
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

' loads the MaterialsTheaters element
include('elements/materials/Action/MaterialsTheaters')
MaterialsTheaters('element', 'Theaters', 'an optional tech field')
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

' loads the MaterialsTheaters element
include('elements/materials/Action/MaterialsTheaters')
MaterialsTheaters('element', 'Theaters', 'an optional tech field')
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

' loads the MaterialsTheaters card
include('elements/materials/Action/MaterialsTheaters')
MaterialsTheatersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTheaters card
include('elements/materials/Action/MaterialsTheaters')
MaterialsTheatersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
