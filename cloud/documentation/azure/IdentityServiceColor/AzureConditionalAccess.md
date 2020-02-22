# AzureConditionalAccess
```text
elements/azure/IdentityServiceColor/AzureConditionalAccess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureConditionalAccess icon](../../../icons/azure/IdentityServiceColor/AzureConditionalAccess.png) | ![AzureConditionalAccess element](AzureConditionalAccess.element.png) | ![AzureConditionalAccess card](AzureConditionalAccess.card.png) |
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

' loads the AzureConditionalAccess element
include('elements/azure/IdentityServiceColor/AzureConditionalAccess')
AzureConditionalAccess('element', 'Conditional Access', 'an optional tech field')
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

' loads the AzureConditionalAccess element
include('elements/azure/IdentityServiceColor/AzureConditionalAccess')
AzureConditionalAccess('element', 'Conditional Access', 'an optional tech field')
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

' loads the AzureConditionalAccess card
include('elements/azure/IdentityServiceColor/AzureConditionalAccess')
AzureConditionalAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureConditionalAccess card
include('elements/azure/IdentityServiceColor/AzureConditionalAccess')
AzureConditionalAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
