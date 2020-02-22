# AzureContainerInstances
```text
elements/azure/ContainerServiceColor/AzureContainerInstances
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureContainerInstances icon](../../../icons/azure/ContainerServiceColor/AzureContainerInstances.png) | ![AzureContainerInstances element](AzureContainerInstances.element.png) | ![AzureContainerInstances card](AzureContainerInstances.card.png) |
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

' loads the AzureContainerInstances element
include('elements/azure/ContainerServiceColor/AzureContainerInstances')
AzureContainerInstances('element', 'Container Instances', 'an optional tech field')
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

' loads the AzureContainerInstances element
include('elements/azure/ContainerServiceColor/AzureContainerInstances')
AzureContainerInstances('element', 'Container Instances', 'an optional tech field')
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

' loads the AzureContainerInstances card
include('elements/azure/ContainerServiceColor/AzureContainerInstances')
AzureContainerInstancesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureContainerInstances card
include('elements/azure/ContainerServiceColor/AzureContainerInstances')
AzureContainerInstancesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
