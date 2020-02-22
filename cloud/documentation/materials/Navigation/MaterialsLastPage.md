# MaterialsLastPage
```text
elements/materials/Navigation/MaterialsLastPage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLastPage icon](../../../icons/materials/Navigation/MaterialsLastPage.png) | ![MaterialsLastPage element](MaterialsLastPage.element.png) | ![MaterialsLastPage card](MaterialsLastPage.card.png) |
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

' loads the MaterialsLastPage element
include('elements/materials/Navigation/MaterialsLastPage')
MaterialsLastPage('element', 'Last Page', 'an optional tech field')
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

' loads the MaterialsLastPage element
include('elements/materials/Navigation/MaterialsLastPage')
MaterialsLastPage('element', 'Last Page', 'an optional tech field')
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

' loads the MaterialsLastPage card
include('elements/materials/Navigation/MaterialsLastPage')
MaterialsLastPageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLastPage card
include('elements/materials/Navigation/MaterialsLastPage')
MaterialsLastPageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
