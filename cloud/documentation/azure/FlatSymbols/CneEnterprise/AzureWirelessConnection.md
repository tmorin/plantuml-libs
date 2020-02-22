# AzureWirelessConnection
```text
elements/azure/FlatSymbols/CneEnterprise/AzureWirelessConnection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWirelessConnection icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureWirelessConnection.png) | ![AzureWirelessConnection element](AzureWirelessConnection.element.png) | ![AzureWirelessConnection card](AzureWirelessConnection.card.png) |
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

' loads the AzureWirelessConnection element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWirelessConnection')
AzureWirelessConnection('element', 'Wireless Connection', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureWirelessConnection element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWirelessConnection')
AzureWirelessConnection('element', 'Wireless Connection', 'an optional tech field')
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

' loads the AzureWirelessConnection card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWirelessConnection')
AzureWirelessConnectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureWirelessConnection card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWirelessConnection')
AzureWirelessConnectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
