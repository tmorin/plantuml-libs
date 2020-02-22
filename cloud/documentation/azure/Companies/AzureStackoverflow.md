# AzureStackoverflow
```text
elements/azure/Companies/AzureStackoverflow
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStackoverflow icon](../../../icons/azure/Companies/AzureStackoverflow.png) | ![AzureStackoverflow element](AzureStackoverflow.element.png) | ![AzureStackoverflow card](AzureStackoverflow.card.png) |
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

' loads the AzureStackoverflow element
include('elements/azure/Companies/AzureStackoverflow')
AzureStackoverflow('element', 'Stackoverflow', 'an optional tech field')
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

' loads the AzureStackoverflow element
include('elements/azure/Companies/AzureStackoverflow')
AzureStackoverflow('element', 'Stackoverflow', 'an optional tech field')
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

' loads the AzureStackoverflow card
include('elements/azure/Companies/AzureStackoverflow')
AzureStackoverflowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureStackoverflow card
include('elements/azure/Companies/AzureStackoverflow')
AzureStackoverflowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
