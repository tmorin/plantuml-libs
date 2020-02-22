# AzureDevtestLabs
```text
elements/azure/DevopsServiceColor/AzureDevtestLabs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDevtestLabs icon](../../../icons/azure/DevopsServiceColor/AzureDevtestLabs.png) | ![AzureDevtestLabs element](AzureDevtestLabs.element.png) | ![AzureDevtestLabs card](AzureDevtestLabs.card.png) |
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

' loads the AzureDevtestLabs element
include('elements/azure/DevopsServiceColor/AzureDevtestLabs')
AzureDevtestLabs('element', 'Devtest Labs', 'an optional tech field')
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

' loads the AzureDevtestLabs element
include('elements/azure/DevopsServiceColor/AzureDevtestLabs')
AzureDevtestLabs('element', 'Devtest Labs', 'an optional tech field')
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

' loads the AzureDevtestLabs card
include('elements/azure/DevopsServiceColor/AzureDevtestLabs')
AzureDevtestLabsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDevtestLabs card
include('elements/azure/DevopsServiceColor/AzureDevtestLabs')
AzureDevtestLabsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
