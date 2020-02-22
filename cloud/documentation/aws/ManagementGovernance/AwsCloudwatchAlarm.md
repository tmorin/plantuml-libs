# AwsCloudwatchAlarm
```text
elements/aws/ManagementGovernance/AwsCloudwatchAlarm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudwatchAlarm icon](../../../icons/aws/ManagementGovernance/AwsCloudwatchAlarm.png) | ![AwsCloudwatchAlarm element](AwsCloudwatchAlarm.element.png) | ![AwsCloudwatchAlarm card](AwsCloudwatchAlarm.card.png) |
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

' loads the AwsCloudwatchAlarm element
include('elements/aws/ManagementGovernance/AwsCloudwatchAlarm')
AwsCloudwatchAlarm('element', 'Cloudwatch Alarm', 'an optional tech field')
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

' loads the AwsCloudwatchAlarm element
include('elements/aws/ManagementGovernance/AwsCloudwatchAlarm')
AwsCloudwatchAlarm('element', 'Cloudwatch Alarm', 'an optional tech field')
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

' loads the AwsCloudwatchAlarm card
include('elements/aws/ManagementGovernance/AwsCloudwatchAlarm')
AwsCloudwatchAlarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudwatchAlarm card
include('elements/aws/ManagementGovernance/AwsCloudwatchAlarm')
AwsCloudwatchAlarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
