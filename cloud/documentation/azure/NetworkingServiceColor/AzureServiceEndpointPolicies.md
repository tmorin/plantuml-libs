# AzureServiceEndpointPolicies
```text
elements/azure/NetworkingServiceColor/AzureServiceEndpointPolicies
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServiceEndpointPolicies icon](../../../icons/azure/NetworkingServiceColor/AzureServiceEndpointPolicies.png) | ![AzureServiceEndpointPolicies element](AzureServiceEndpointPolicies.element.png) | ![AzureServiceEndpointPolicies card](AzureServiceEndpointPolicies.card.png) |
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

' loads the AzureServiceEndpointPolicies element
include('elements/azure/NetworkingServiceColor/AzureServiceEndpointPolicies')
AzureServiceEndpointPolicies('element', 'Service Endpoint Policies', 'an optional tech field')
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

' loads the AzureServiceEndpointPolicies element
include('elements/azure/NetworkingServiceColor/AzureServiceEndpointPolicies')
AzureServiceEndpointPolicies('element', 'Service Endpoint Policies', 'an optional tech field')
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

' loads the AzureServiceEndpointPolicies card
include('elements/azure/NetworkingServiceColor/AzureServiceEndpointPolicies')
AzureServiceEndpointPoliciesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureServiceEndpointPolicies card
include('elements/azure/NetworkingServiceColor/AzureServiceEndpointPolicies')
AzureServiceEndpointPoliciesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
