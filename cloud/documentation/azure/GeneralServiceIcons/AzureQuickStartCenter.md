# AzureQuickStartCenter
```text
elements/azure/GeneralServiceIcons/AzureQuickStartCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureQuickStartCenter icon](../../../icons/azure/GeneralServiceIcons/AzureQuickStartCenter.png) | ![AzureQuickStartCenter element](AzureQuickStartCenter.element.png) | ![AzureQuickStartCenter card](AzureQuickStartCenter.card.png) |
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

' loads the AzureQuickStartCenter element
include('elements/azure/GeneralServiceIcons/AzureQuickStartCenter')
AzureQuickStartCenter('element', 'Quick Start Center', 'an optional tech field')
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

' loads the AzureQuickStartCenter element
include('elements/azure/GeneralServiceIcons/AzureQuickStartCenter')
AzureQuickStartCenter('element', 'Quick Start Center', 'an optional tech field')
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

' loads the AzureQuickStartCenter card
include('elements/azure/GeneralServiceIcons/AzureQuickStartCenter')
AzureQuickStartCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureQuickStartCenter card
include('elements/azure/GeneralServiceIcons/AzureQuickStartCenter')
AzureQuickStartCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
