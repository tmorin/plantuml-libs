# MaterialsChildCare
```text
elements/materials/Places/MaterialsChildCare
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChildCare icon](../../../icons/materials/Places/MaterialsChildCare.png) | ![MaterialsChildCare element](MaterialsChildCare.element.png) | ![MaterialsChildCare card](MaterialsChildCare.card.png) |
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

' loads the MaterialsChildCare element
include('elements/materials/Places/MaterialsChildCare')
MaterialsChildCare('element', 'Child Care', 'an optional tech field')
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

' loads the MaterialsChildCare element
include('elements/materials/Places/MaterialsChildCare')
MaterialsChildCare('element', 'Child Care', 'an optional tech field')
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

' loads the MaterialsChildCare card
include('elements/materials/Places/MaterialsChildCare')
MaterialsChildCareCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChildCare card
include('elements/materials/Places/MaterialsChildCare')
MaterialsChildCareCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
