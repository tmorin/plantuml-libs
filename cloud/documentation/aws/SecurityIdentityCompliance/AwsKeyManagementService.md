# AwsKeyManagementService
```text
elements/aws/SecurityIdentityCompliance/AwsKeyManagementService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsKeyManagementService icon](../../../icons/aws/SecurityIdentityCompliance/AwsKeyManagementService.png) | ![AwsKeyManagementService element](AwsKeyManagementService.element.png) | ![AwsKeyManagementService card](AwsKeyManagementService.card.png) |
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

' loads the AwsKeyManagementService element
include('elements/aws/SecurityIdentityCompliance/AwsKeyManagementService')
AwsKeyManagementService('element', 'Key Management Service', 'an optional tech field')
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

' loads the AwsKeyManagementService element
include('elements/aws/SecurityIdentityCompliance/AwsKeyManagementService')
AwsKeyManagementService('element', 'Key Management Service', 'an optional tech field')
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

' loads the AwsKeyManagementService card
include('elements/aws/SecurityIdentityCompliance/AwsKeyManagementService')
AwsKeyManagementServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsKeyManagementService card
include('elements/aws/SecurityIdentityCompliance/AwsKeyManagementService')
AwsKeyManagementServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
