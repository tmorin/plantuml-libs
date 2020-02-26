# AzureDeviceHealth
```text
elements/azure/FlatSymbols/CneIntune/AzureDeviceHealth
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDeviceHealth icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureDeviceHealth.png) | ![AzureDeviceHealth element](AzureDeviceHealth.element.png) | ![AzureDeviceHealth card](AzureDeviceHealth.card.png) |
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

' loads the AzureDeviceHealth element
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceHealth')
AzureDeviceHealth('element', 'Device Health', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureDeviceHealth element
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceHealth')
AzureDeviceHealth('element', 'Device Health', 'an optional tech field')
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

' loads the AzureDeviceHealth card
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceHealth')
AzureDeviceHealthCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureDeviceHealth card
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceHealth')
AzureDeviceHealthCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
