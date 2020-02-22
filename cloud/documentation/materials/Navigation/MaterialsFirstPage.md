# MaterialsFirstPage
```text
elements/materials/Navigation/MaterialsFirstPage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFirstPage icon](../../../icons/materials/Navigation/MaterialsFirstPage.png) | ![MaterialsFirstPage element](MaterialsFirstPage.element.png) | ![MaterialsFirstPage card](MaterialsFirstPage.card.png) |
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

' loads the MaterialsFirstPage element
include('elements/materials/Navigation/MaterialsFirstPage')
MaterialsFirstPage('element', 'First Page', 'an optional tech field')
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

' loads the MaterialsFirstPage element
include('elements/materials/Navigation/MaterialsFirstPage')
MaterialsFirstPage('element', 'First Page', 'an optional tech field')
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

' loads the MaterialsFirstPage card
include('elements/materials/Navigation/MaterialsFirstPage')
MaterialsFirstPageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFirstPage card
include('elements/materials/Navigation/MaterialsFirstPage')
MaterialsFirstPageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
