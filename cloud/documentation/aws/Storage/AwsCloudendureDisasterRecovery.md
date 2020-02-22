# AwsCloudendureDisasterRecovery
```text
elements/aws/Storage/AwsCloudendureDisasterRecovery
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudendureDisasterRecovery icon](../../../icons/aws/Storage/AwsCloudendureDisasterRecovery.png) | ![AwsCloudendureDisasterRecovery element](AwsCloudendureDisasterRecovery.element.png) | ![AwsCloudendureDisasterRecovery card](AwsCloudendureDisasterRecovery.card.png) |
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

' loads the AwsCloudendureDisasterRecovery element
include('elements/aws/Storage/AwsCloudendureDisasterRecovery')
AwsCloudendureDisasterRecovery('element', 'Cloudendure Disaster Recovery', 'an optional tech field')
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

' loads the AwsCloudendureDisasterRecovery element
include('elements/aws/Storage/AwsCloudendureDisasterRecovery')
AwsCloudendureDisasterRecovery('element', 'Cloudendure Disaster Recovery', 'an optional tech field')
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

' loads the AwsCloudendureDisasterRecovery card
include('elements/aws/Storage/AwsCloudendureDisasterRecovery')
AwsCloudendureDisasterRecoveryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudendureDisasterRecovery card
include('elements/aws/Storage/AwsCloudendureDisasterRecovery')
AwsCloudendureDisasterRecoveryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
