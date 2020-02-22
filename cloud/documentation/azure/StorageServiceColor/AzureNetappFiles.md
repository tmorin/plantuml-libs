# AzureNetappFiles
```text
elements/azure/StorageServiceColor/AzureNetappFiles
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNetappFiles icon](../../../icons/azure/StorageServiceColor/AzureNetappFiles.png) | ![AzureNetappFiles element](AzureNetappFiles.element.png) | ![AzureNetappFiles card](AzureNetappFiles.card.png) |
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

' loads the AzureNetappFiles element
include('elements/azure/StorageServiceColor/AzureNetappFiles')
AzureNetappFiles('element', 'Netapp Files', 'an optional tech field')
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

' loads the AzureNetappFiles element
include('elements/azure/StorageServiceColor/AzureNetappFiles')
AzureNetappFiles('element', 'Netapp Files', 'an optional tech field')
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

' loads the AzureNetappFiles card
include('elements/azure/StorageServiceColor/AzureNetappFiles')
AzureNetappFilesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNetappFiles card
include('elements/azure/StorageServiceColor/AzureNetappFiles')
AzureNetappFilesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
