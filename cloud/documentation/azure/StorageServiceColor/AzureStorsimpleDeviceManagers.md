# AzureStorsimpleDeviceManagers
```text
elements/azure/StorageServiceColor/AzureStorsimpleDeviceManagers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStorsimpleDeviceManagers icon](../../../icons/azure/StorageServiceColor/AzureStorsimpleDeviceManagers.png) | ![AzureStorsimpleDeviceManagers element](AzureStorsimpleDeviceManagers.element.png) | ![AzureStorsimpleDeviceManagers card](AzureStorsimpleDeviceManagers.card.png) |
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

' loads the AzureStorsimpleDeviceManagers element
include('elements/azure/StorageServiceColor/AzureStorsimpleDeviceManagers')
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

' loads the AWS style
include('styles/aws')

' loads the AzureStorsimpleDeviceManagers element
include('elements/azure/StorageServiceColor/AzureStorsimpleDeviceManagers')
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

' loads the AWS style
include('styles/gcp')

' loads the AzureStorsimpleDeviceManagers card
include('elements/azure/StorageServiceColor/AzureStorsimpleDeviceManagers')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureStorsimpleDeviceManagers card
include('elements/azure/StorageServiceColor/AzureStorsimpleDeviceManagers')
AzureStorsimpleDeviceManagersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
