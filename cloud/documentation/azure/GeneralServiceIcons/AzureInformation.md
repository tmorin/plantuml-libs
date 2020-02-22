# AzureInformation
```text
elements/azure/GeneralServiceIcons/AzureInformation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureInformation icon](../../../icons/azure/GeneralServiceIcons/AzureInformation.png) | ![AzureInformation element](AzureInformation.element.png) | ![AzureInformation card](AzureInformation.card.png) |
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

' loads the AzureInformation element
include('elements/azure/GeneralServiceIcons/AzureInformation')
AzureInformation('element', 'Information', 'an optional tech field')
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

' loads the AzureInformation element
include('elements/azure/GeneralServiceIcons/AzureInformation')
AzureInformation('element', 'Information', 'an optional tech field')
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

' loads the AzureInformation card
include('elements/azure/GeneralServiceIcons/AzureInformation')
AzureInformationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureInformation card
include('elements/azure/GeneralServiceIcons/AzureInformation')
AzureInformationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
