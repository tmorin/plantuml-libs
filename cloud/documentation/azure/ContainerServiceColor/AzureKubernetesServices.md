# AzureKubernetesServices
```text
elements/azure/ContainerServiceColor/AzureKubernetesServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureKubernetesServices icon](../../../icons/azure/ContainerServiceColor/AzureKubernetesServices.png) | ![AzureKubernetesServices element](AzureKubernetesServices.element.png) | ![AzureKubernetesServices card](AzureKubernetesServices.card.png) |
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

' loads the AzureKubernetesServices element
include('elements/azure/ContainerServiceColor/AzureKubernetesServices')
AzureKubernetesServices('element', 'Kubernetes Services', 'an optional tech field')
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

' loads the AzureKubernetesServices element
include('elements/azure/ContainerServiceColor/AzureKubernetesServices')
AzureKubernetesServices('element', 'Kubernetes Services', 'an optional tech field')
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

' loads the AzureKubernetesServices card
include('elements/azure/ContainerServiceColor/AzureKubernetesServices')
AzureKubernetesServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureKubernetesServices card
include('elements/azure/ContainerServiceColor/AzureKubernetesServices')
AzureKubernetesServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
