# AzureKubernetes
```text
elements/azure/Companies/AzureKubernetes
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureKubernetes icon](../../../icons/azure/Companies/AzureKubernetes.png) | ![AzureKubernetes element](AzureKubernetes.element.png) | ![AzureKubernetes card](AzureKubernetes.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureKubernetes element
include('elements/azure/Companies/AzureKubernetes')
AzureKubernetes('element', 'Kubernetes', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureKubernetes element
include('elements/azure/Companies/AzureKubernetes')
AzureKubernetes('element', 'Kubernetes', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureKubernetes card
include('elements/azure/Companies/AzureKubernetes')
AzureKubernetesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureKubernetes card
include('elements/azure/Companies/AzureKubernetes')
AzureKubernetesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
