# AwsIotServo
```text
elements/aws/InternetOfThings/AwsIotServo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotServo icon](../../../icons/aws/InternetOfThings/AwsIotServo.png) | ![AwsIotServo element](AwsIotServo.element.png) | ![AwsIotServo card](AwsIotServo.card.png) |
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

' loads the AwsIotServo element
include('elements/aws/InternetOfThings/AwsIotServo')
AwsIotServo('element', 'Iot Servo', 'an optional tech field')
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

' loads the AwsIotServo element
include('elements/aws/InternetOfThings/AwsIotServo')
AwsIotServo('element', 'Iot Servo', 'an optional tech field')
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

' loads the AwsIotServo card
include('elements/aws/InternetOfThings/AwsIotServo')
AwsIotServoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotServo card
include('elements/aws/InternetOfThings/AwsIotServo')
AwsIotServoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
