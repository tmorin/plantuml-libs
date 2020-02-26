# AzureGroupNetwork
| Example | Resource |
| :-: | --- |
| ![AzureGroupNetwork group](AzureGroupNetwork.group.png) | `groups/azure/AzureGroupNetwork` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureGroupNetwork group
include('groups/azure/AzureGroupNetwork')
AzureGroupNetwork('element', 'Network', 'an optional tech field')
@enduml
```
## Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the style
include('styles/azure')

' loads the AzureGroupNetwork group
include('groups/azure/AzureGroupNetwork')
AzureGroupNetwork('element', 'Network', 'an optional tech field')
@enduml
```
