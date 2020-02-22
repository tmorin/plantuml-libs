# AwsIotReportedState
```text
elements/aws/InternetOfThings/AwsIotReportedState
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotReportedState icon](../../../icons/aws/InternetOfThings/AwsIotReportedState.png) | ![AwsIotReportedState element](AwsIotReportedState.element.png) | ![AwsIotReportedState card](AwsIotReportedState.card.png) |
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

' loads the AwsIotReportedState element
include('elements/aws/InternetOfThings/AwsIotReportedState')
AwsIotReportedState('element', 'Iot Reported State', 'an optional tech field')
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

' loads the AwsIotReportedState element
include('elements/aws/InternetOfThings/AwsIotReportedState')
AwsIotReportedState('element', 'Iot Reported State', 'an optional tech field')
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

' loads the AwsIotReportedState card
include('elements/aws/InternetOfThings/AwsIotReportedState')
AwsIotReportedStateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotReportedState card
include('elements/aws/InternetOfThings/AwsIotReportedState')
AwsIotReportedStateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
