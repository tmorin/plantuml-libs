# AzureDevicesGroups
```text
elements/azure/IntuneServiceColor/AzureDevicesGroups
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDevicesGroups icon](../../../icons/azure/IntuneServiceColor/AzureDevicesGroups.png) | ![AzureDevicesGroups element](AzureDevicesGroups.element.png) | ![AzureDevicesGroups card](AzureDevicesGroups.card.png) |
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

' loads the AzureDevicesGroups element
include('elements/azure/IntuneServiceColor/AzureDevicesGroups')
AzureDevicesGroups('element', 'Devices Groups', 'an optional tech field')
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

' loads the AzureDevicesGroups element
include('elements/azure/IntuneServiceColor/AzureDevicesGroups')
AzureDevicesGroups('element', 'Devices Groups', 'an optional tech field')
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

' loads the AzureDevicesGroups card
include('elements/azure/IntuneServiceColor/AzureDevicesGroups')
AzureDevicesGroupsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDevicesGroups card
include('elements/azure/IntuneServiceColor/AzureDevicesGroups')
AzureDevicesGroupsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
