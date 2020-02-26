# AzureSharedDashboard
```text
elements/azure/GeneralServiceIcons/AzureSharedDashboard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSharedDashboard icon](../../../icons/azure/GeneralServiceIcons/AzureSharedDashboard.png) | ![AzureSharedDashboard element](AzureSharedDashboard.element.png) | ![AzureSharedDashboard card](AzureSharedDashboard.card.png) |
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

' loads the AzureSharedDashboard element
include('elements/azure/GeneralServiceIcons/AzureSharedDashboard')
AzureSharedDashboard('element', 'Shared Dashboard', 'an optional tech field')
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

' loads the AzureSharedDashboard element
include('elements/azure/GeneralServiceIcons/AzureSharedDashboard')
AzureSharedDashboard('element', 'Shared Dashboard', 'an optional tech field')
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

' loads the AzureSharedDashboard card
include('elements/azure/GeneralServiceIcons/AzureSharedDashboard')
AzureSharedDashboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSharedDashboard card
include('elements/azure/GeneralServiceIcons/AzureSharedDashboard')
AzureSharedDashboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
