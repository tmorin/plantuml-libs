# AzureGroupPlainDashed
| Example | Resource |
| :-: | --- |
| ![AzureGroupPlainDashed group](AzureGroupPlainDashed.group.png) | `groups/azure/AzureGroupPlainDashed` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureGroupPlainDashed group
include('groups/azure/AzureGroupPlainDashed')
AzureGroupPlainDashed('element', 'Plain Dashed', 'an optional tech field')
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

' loads the AzureGroupPlainDashed group
include('groups/azure/AzureGroupPlainDashed')
AzureGroupPlainDashed('element', 'Plain Dashed', 'an optional tech field')
@enduml
```
