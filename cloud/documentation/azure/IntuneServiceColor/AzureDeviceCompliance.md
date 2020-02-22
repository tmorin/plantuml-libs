# AzureDeviceCompliance
```text
elements/azure/IntuneServiceColor/AzureDeviceCompliance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDeviceCompliance icon](../../../icons/azure/IntuneServiceColor/AzureDeviceCompliance.png) | ![AzureDeviceCompliance element](AzureDeviceCompliance.element.png) | ![AzureDeviceCompliance card](AzureDeviceCompliance.card.png) |
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

' loads the AzureDeviceCompliance element
include('elements/azure/IntuneServiceColor/AzureDeviceCompliance')
AzureDeviceCompliance('element', 'Device Compliance', 'an optional tech field')
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

' loads the AzureDeviceCompliance element
include('elements/azure/IntuneServiceColor/AzureDeviceCompliance')
AzureDeviceCompliance('element', 'Device Compliance', 'an optional tech field')
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

' loads the AzureDeviceCompliance card
include('elements/azure/IntuneServiceColor/AzureDeviceCompliance')
AzureDeviceComplianceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDeviceCompliance card
include('elements/azure/IntuneServiceColor/AzureDeviceCompliance')
AzureDeviceComplianceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
