# AwsKinesisDataAnalytics
```text
elements/aws/Analytics/AwsKinesisDataAnalytics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsKinesisDataAnalytics icon](../../../icons/aws/Analytics/AwsKinesisDataAnalytics.png) | ![AwsKinesisDataAnalytics element](AwsKinesisDataAnalytics.element.png) | ![AwsKinesisDataAnalytics card](AwsKinesisDataAnalytics.card.png) |
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

' loads the AwsKinesisDataAnalytics element
include('elements/aws/Analytics/AwsKinesisDataAnalytics')
AwsKinesisDataAnalytics('element', 'Kinesis Data Analytics', 'an optional tech field')
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

' loads the AwsKinesisDataAnalytics element
include('elements/aws/Analytics/AwsKinesisDataAnalytics')
AwsKinesisDataAnalytics('element', 'Kinesis Data Analytics', 'an optional tech field')
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

' loads the AwsKinesisDataAnalytics card
include('elements/aws/Analytics/AwsKinesisDataAnalytics')
AwsKinesisDataAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsKinesisDataAnalytics card
include('elements/aws/Analytics/AwsKinesisDataAnalytics')
AwsKinesisDataAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
