# AzureDeviceGroup
```text
elements/azure/FlatSymbols/CneIntune/AzureDeviceGroup
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDeviceGroup icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureDeviceGroup.png) | ![AzureDeviceGroup element](AzureDeviceGroup.element.png) | ![AzureDeviceGroup card](AzureDeviceGroup.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureDeviceGroup element
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceGroup')
AzureDeviceGroup('element', 'Device Group', 'an optional tech field')
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

' loads the AzureDeviceGroup element
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceGroup')
AzureDeviceGroup('element', 'Device Group', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureDeviceGroup card
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceGroup')
AzureDeviceGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDeviceGroup card
include('elements/azure/FlatSymbols/CneIntune/AzureDeviceGroup')
AzureDeviceGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
