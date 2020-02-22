# AwsSimpleEmailServiceSesEmail
```text
elements/aws/CustomerEngagement/AwsSimpleEmailServiceSesEmail
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleEmailServiceSesEmail icon](../../../icons/aws/CustomerEngagement/AwsSimpleEmailServiceSesEmail.png) | ![AwsSimpleEmailServiceSesEmail element](AwsSimpleEmailServiceSesEmail.element.png) | ![AwsSimpleEmailServiceSesEmail card](AwsSimpleEmailServiceSesEmail.card.png) |
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

' loads the AwsSimpleEmailServiceSesEmail element
include('elements/aws/CustomerEngagement/AwsSimpleEmailServiceSesEmail')
AwsSimpleEmailServiceSesEmail('element', 'Simple Email Service Ses Email', 'an optional tech field')
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

' loads the AwsSimpleEmailServiceSesEmail element
include('elements/aws/CustomerEngagement/AwsSimpleEmailServiceSesEmail')
AwsSimpleEmailServiceSesEmail('element', 'Simple Email Service Ses Email', 'an optional tech field')
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

' loads the AwsSimpleEmailServiceSesEmail card
include('elements/aws/CustomerEngagement/AwsSimpleEmailServiceSesEmail')
AwsSimpleEmailServiceSesEmailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleEmailServiceSesEmail card
include('elements/aws/CustomerEngagement/AwsSimpleEmailServiceSesEmail')
AwsSimpleEmailServiceSesEmailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
