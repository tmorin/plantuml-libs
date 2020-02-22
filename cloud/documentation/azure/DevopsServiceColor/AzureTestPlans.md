# AzureTestPlans
```text
elements/azure/DevopsServiceColor/AzureTestPlans
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTestPlans icon](../../../icons/azure/DevopsServiceColor/AzureTestPlans.png) | ![AzureTestPlans element](AzureTestPlans.element.png) | ![AzureTestPlans card](AzureTestPlans.card.png) |
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

' loads the AzureTestPlans element
include('elements/azure/DevopsServiceColor/AzureTestPlans')
AzureTestPlans('element', 'Test Plans', 'an optional tech field')
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

' loads the AzureTestPlans element
include('elements/azure/DevopsServiceColor/AzureTestPlans')
AzureTestPlans('element', 'Test Plans', 'an optional tech field')
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

' loads the AzureTestPlans card
include('elements/azure/DevopsServiceColor/AzureTestPlans')
AzureTestPlansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTestPlans card
include('elements/azure/DevopsServiceColor/AzureTestPlans')
AzureTestPlansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
