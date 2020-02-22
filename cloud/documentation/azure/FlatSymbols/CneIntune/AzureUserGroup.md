# AzureUserGroup
```text
elements/azure/FlatSymbols/CneIntune/AzureUserGroup
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUserGroup icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureUserGroup.png) | ![AzureUserGroup element](AzureUserGroup.element.png) | ![AzureUserGroup card](AzureUserGroup.card.png) |
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

' loads the AzureUserGroup element
include('elements/azure/FlatSymbols/CneIntune/AzureUserGroup')
AzureUserGroup('element', 'User Group', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureUserGroup element
include('elements/azure/FlatSymbols/CneIntune/AzureUserGroup')
AzureUserGroup('element', 'User Group', 'an optional tech field')
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

' loads the AzureUserGroup card
include('elements/azure/FlatSymbols/CneIntune/AzureUserGroup')
AzureUserGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureUserGroup card
include('elements/azure/FlatSymbols/CneIntune/AzureUserGroup')
AzureUserGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
