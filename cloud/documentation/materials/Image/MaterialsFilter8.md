# MaterialsFilter8
```text
elements/materials/Image/MaterialsFilter8
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilter8 icon](../../../icons/materials/Image/MaterialsFilter8.png) | ![MaterialsFilter8 element](MaterialsFilter8.element.png) | ![MaterialsFilter8 card](MaterialsFilter8.card.png) |
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

' loads the MaterialsFilter8 element
include('elements/materials/Image/MaterialsFilter8')
MaterialsFilter8('element', 'Filter8', 'an optional tech field')
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

' loads the MaterialsFilter8 element
include('elements/materials/Image/MaterialsFilter8')
MaterialsFilter8('element', 'Filter8', 'an optional tech field')
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

' loads the MaterialsFilter8 card
include('elements/materials/Image/MaterialsFilter8')
MaterialsFilter8Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilter8 card
include('elements/materials/Image/MaterialsFilter8')
MaterialsFilter8Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
