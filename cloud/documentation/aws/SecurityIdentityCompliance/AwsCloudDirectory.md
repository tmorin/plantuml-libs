# AwsCloudDirectory
```text
elements/aws/SecurityIdentityCompliance/AwsCloudDirectory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudDirectory icon](../../../icons/aws/SecurityIdentityCompliance/AwsCloudDirectory.png) | ![AwsCloudDirectory element](AwsCloudDirectory.element.png) | ![AwsCloudDirectory card](AwsCloudDirectory.card.png) |
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

' loads the AwsCloudDirectory element
include('elements/aws/SecurityIdentityCompliance/AwsCloudDirectory')
AwsCloudDirectory('element', 'Cloud Directory', 'an optional tech field')
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

' loads the AwsCloudDirectory element
include('elements/aws/SecurityIdentityCompliance/AwsCloudDirectory')
AwsCloudDirectory('element', 'Cloud Directory', 'an optional tech field')
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

' loads the AwsCloudDirectory card
include('elements/aws/SecurityIdentityCompliance/AwsCloudDirectory')
AwsCloudDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudDirectory card
include('elements/aws/SecurityIdentityCompliance/AwsCloudDirectory')
AwsCloudDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
