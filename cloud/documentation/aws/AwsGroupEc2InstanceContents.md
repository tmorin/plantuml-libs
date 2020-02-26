# AwsGroupEc2InstanceContents
| Example | Resource |
| :-: | --- |
| ![AwsGroupEc2InstanceContents group](AwsGroupEc2InstanceContents.group.png) | `groups/aws/AwsGroupEc2InstanceContents` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsGroupEc2InstanceContents group
include('groups/aws/AwsGroupEc2InstanceContents')
AwsGroupEc2InstanceContents('element', 'EC2 Instance Contents', 'an optional tech field')
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
include('styles/aws')

' loads the AwsGroupEc2InstanceContents group
include('groups/aws/AwsGroupEc2InstanceContents')
AwsGroupEc2InstanceContents('element', 'EC2 Instance Contents', 'an optional tech field')
@enduml
```
