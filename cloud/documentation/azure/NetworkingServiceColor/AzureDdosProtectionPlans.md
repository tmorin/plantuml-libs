# AzureDdosProtectionPlans
```text
elements/azure/NetworkingServiceColor/AzureDdosProtectionPlans
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDdosProtectionPlans icon](../../../icons/azure/NetworkingServiceColor/AzureDdosProtectionPlans.png) | ![AzureDdosProtectionPlans element](AzureDdosProtectionPlans.element.png) | ![AzureDdosProtectionPlans card](AzureDdosProtectionPlans.card.png) |
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

' loads the AzureDdosProtectionPlans element
include('elements/azure/NetworkingServiceColor/AzureDdosProtectionPlans')
AzureDdosProtectionPlans('element', 'Ddos Protection Plans', 'an optional tech field')
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

' loads the AzureDdosProtectionPlans element
include('elements/azure/NetworkingServiceColor/AzureDdosProtectionPlans')
AzureDdosProtectionPlans('element', 'Ddos Protection Plans', 'an optional tech field')
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

' loads the AzureDdosProtectionPlans card
include('elements/azure/NetworkingServiceColor/AzureDdosProtectionPlans')
AzureDdosProtectionPlansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDdosProtectionPlans card
include('elements/azure/NetworkingServiceColor/AzureDdosProtectionPlans')
AzureDdosProtectionPlansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
