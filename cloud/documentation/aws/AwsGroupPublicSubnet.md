# AwsGroupPublicSubnet
| Example | Resource |
| :-: | --- |
| ![AwsGroupPublicSubnet group](AwsGroupPublicSubnet.group.png) | `groups/aws/AwsGroupPublicSubnet` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsGroupPublicSubnet group
include('groups/aws/AwsGroupPublicSubnet')
AwsGroupPublicSubnet('element', 'Public Subnet', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsGroupPublicSubnet group
include('groups/aws/AwsGroupPublicSubnet')
AwsGroupPublicSubnet('element', 'Public Subnet', 'an optional tech field')
@enduml
```
