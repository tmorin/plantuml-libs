# AzureStorsimpleDataManagers
```text
elements/azure/StorageServiceColor/AzureStorsimpleDataManagers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStorsimpleDataManagers icon](../../../icons/azure/StorageServiceColor/AzureStorsimpleDataManagers.png) | ![AzureStorsimpleDataManagers element](AzureStorsimpleDataManagers.element.png) | ![AzureStorsimpleDataManagers card](AzureStorsimpleDataManagers.card.png) |
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

' loads the AzureStorsimpleDataManagers element
include('elements/azure/StorageServiceColor/AzureStorsimpleDataManagers')
AzureStorsimpleDataManagers('element', 'Storsimple Data Managers', 'an optional tech field')
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

' loads the AzureStorsimpleDataManagers element
include('elements/azure/StorageServiceColor/AzureStorsimpleDataManagers')
AzureStorsimpleDataManagers('element', 'Storsimple Data Managers', 'an optional tech field')
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

' loads the AzureStorsimpleDataManagers card
include('elements/azure/StorageServiceColor/AzureStorsimpleDataManagers')
AzureStorsimpleDataManagersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureStorsimpleDataManagers card
include('elements/azure/StorageServiceColor/AzureStorsimpleDataManagers')
AzureStorsimpleDataManagersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
