# MaterialsAddAlert
```text
elements/materials/Alert/MaterialsAddAlert
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAddAlert icon](../../../icons/materials/Alert/MaterialsAddAlert.png) | ![MaterialsAddAlert element](MaterialsAddAlert.element.png) | ![MaterialsAddAlert card](MaterialsAddAlert.card.png) |
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

' loads the MaterialsAddAlert element
include('elements/materials/Alert/MaterialsAddAlert')
MaterialsAddAlert('element', 'Add Alert', 'an optional tech field')
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

' loads the MaterialsAddAlert element
include('elements/materials/Alert/MaterialsAddAlert')
MaterialsAddAlert('element', 'Add Alert', 'an optional tech field')
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

' loads the MaterialsAddAlert card
include('elements/materials/Alert/MaterialsAddAlert')
MaterialsAddAlertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAddAlert card
include('elements/materials/Alert/MaterialsAddAlert')
MaterialsAddAlertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
