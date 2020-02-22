# AwsDirectoryService
```text
elements/aws/SecurityIdentityCompliance/AwsDirectoryService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDirectoryService icon](../../../icons/aws/SecurityIdentityCompliance/AwsDirectoryService.png) | ![AwsDirectoryService element](AwsDirectoryService.element.png) | ![AwsDirectoryService card](AwsDirectoryService.card.png) |
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

' loads the AwsDirectoryService element
include('elements/aws/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryService('element', 'Directory Service', 'an optional tech field')
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

' loads the AwsDirectoryService element
include('elements/aws/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryService('element', 'Directory Service', 'an optional tech field')
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

' loads the AwsDirectoryService card
include('elements/aws/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDirectoryService card
include('elements/aws/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
