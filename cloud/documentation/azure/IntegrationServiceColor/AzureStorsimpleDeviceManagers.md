# AzureStorsimpleDeviceManagers
```text
elements/azure/IntegrationServiceColor/AzureStorsimpleDeviceManagers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStorsimpleDeviceManagers icon](../../../icons/azure/IntegrationServiceColor/AzureStorsimpleDeviceManagers.png) | ![AzureStorsimpleDeviceManagers element](AzureStorsimpleDeviceManagers.element.png) | ![AzureStorsimpleDeviceManagers card](AzureStorsimpleDeviceManagers.card.png) |
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

' loads the AzureStorsimpleDeviceManagers element
include('elements/azure/IntegrationServiceColor/AzureStorsimpleDeviceManagers')
AzureStorsimpleDeviceManagers('element', 'Storsimple Device Managers', 'an optional tech field')
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

' loads the AzureStorsimpleDeviceManagers element
include('elements/azure/IntegrationServiceColor/AzureStorsimpleDeviceManagers')
AzureStorsimpleDeviceManagers('element', 'Storsimple Device Managers', 'an optional tech field')
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

' loads the AzureStorsimpleDeviceManagers card
include('elements/azure/IntegrationServiceColor/AzureStorsimpleDeviceManagers')
AzureStorsimpleDeviceManagersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureStorsimpleDeviceManagers card
include('elements/azure/IntegrationServiceColor/AzureStorsimpleDeviceManagers')
AzureStorsimpleDeviceManagersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
