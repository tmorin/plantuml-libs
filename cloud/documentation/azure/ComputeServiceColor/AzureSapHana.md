# AzureSapHana
```text
elements/azure/ComputeServiceColor/AzureSapHana
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSapHana icon](../../../icons/azure/ComputeServiceColor/AzureSapHana.png) | ![AzureSapHana element](AzureSapHana.element.png) | ![AzureSapHana card](AzureSapHana.card.png) |
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

' loads the AzureSapHana element
include('elements/azure/ComputeServiceColor/AzureSapHana')
AzureSapHana('element', 'Sap Hana', 'an optional tech field')
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

' loads the AzureSapHana element
include('elements/azure/ComputeServiceColor/AzureSapHana')
AzureSapHana('element', 'Sap Hana', 'an optional tech field')
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

' loads the AzureSapHana card
include('elements/azure/ComputeServiceColor/AzureSapHana')
AzureSapHanaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSapHana card
include('elements/azure/ComputeServiceColor/AzureSapHana')
AzureSapHanaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
