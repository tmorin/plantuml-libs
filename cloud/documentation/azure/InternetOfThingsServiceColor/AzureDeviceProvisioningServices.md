# AzureDeviceProvisioningServices
```text
elements/azure/InternetOfThingsServiceColor/AzureDeviceProvisioningServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDeviceProvisioningServices icon](../../../icons/azure/InternetOfThingsServiceColor/AzureDeviceProvisioningServices.png) | ![AzureDeviceProvisioningServices element](AzureDeviceProvisioningServices.element.png) | ![AzureDeviceProvisioningServices card](AzureDeviceProvisioningServices.card.png) |
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

' loads the AzureDeviceProvisioningServices element
include('elements/azure/InternetOfThingsServiceColor/AzureDeviceProvisioningServices')
AzureDeviceProvisioningServices('element', 'Device Provisioning Services', 'an optional tech field')
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

' loads the AzureDeviceProvisioningServices element
include('elements/azure/InternetOfThingsServiceColor/AzureDeviceProvisioningServices')
AzureDeviceProvisioningServices('element', 'Device Provisioning Services', 'an optional tech field')
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

' loads the AzureDeviceProvisioningServices card
include('elements/azure/InternetOfThingsServiceColor/AzureDeviceProvisioningServices')
AzureDeviceProvisioningServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDeviceProvisioningServices card
include('elements/azure/InternetOfThingsServiceColor/AzureDeviceProvisioningServices')
AzureDeviceProvisioningServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
