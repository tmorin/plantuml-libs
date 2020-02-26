# AwsTrustedAdvisor
```text
elements/aws/ManagementGovernance/AwsTrustedAdvisor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsTrustedAdvisor icon](../../../icons/aws/ManagementGovernance/AwsTrustedAdvisor.png) | ![AwsTrustedAdvisor element](AwsTrustedAdvisor.element.png) | ![AwsTrustedAdvisor card](AwsTrustedAdvisor.card.png) |
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
include('styles/aws')

' loads the AwsTrustedAdvisor element
include('elements/aws/ManagementGovernance/AwsTrustedAdvisor')
AwsTrustedAdvisor('element', 'Trusted Advisor', 'an optional tech field')
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
include('styles/aws')

' loads the AwsTrustedAdvisor element
include('elements/aws/ManagementGovernance/AwsTrustedAdvisor')
AwsTrustedAdvisor('element', 'Trusted Advisor', 'an optional tech field')
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
include('styles/aws')

' loads the AwsTrustedAdvisor card
include('elements/aws/ManagementGovernance/AwsTrustedAdvisor')
AwsTrustedAdvisorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsTrustedAdvisor card
include('elements/aws/ManagementGovernance/AwsTrustedAdvisor')
AwsTrustedAdvisorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
