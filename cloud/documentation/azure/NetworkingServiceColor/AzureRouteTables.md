# AzureRouteTables
```text
elements/azure/NetworkingServiceColor/AzureRouteTables
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRouteTables icon](../../../icons/azure/NetworkingServiceColor/AzureRouteTables.png) | ![AzureRouteTables element](AzureRouteTables.element.png) | ![AzureRouteTables card](AzureRouteTables.card.png) |
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

' loads the AzureRouteTables element
include('elements/azure/NetworkingServiceColor/AzureRouteTables')
AzureRouteTables('element', 'Route Tables', 'an optional tech field')
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

' loads the AzureRouteTables element
include('elements/azure/NetworkingServiceColor/AzureRouteTables')
AzureRouteTables('element', 'Route Tables', 'an optional tech field')
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

' loads the AzureRouteTables card
include('elements/azure/NetworkingServiceColor/AzureRouteTables')
AzureRouteTablesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRouteTables card
include('elements/azure/NetworkingServiceColor/AzureRouteTables')
AzureRouteTablesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
