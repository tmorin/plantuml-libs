# AwsInternetGateway
```text
elements/aws/General/AwsInternetGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsInternetGateway icon](../../../icons/aws/General/AwsInternetGateway.png) | ![AwsInternetGateway element](AwsInternetGateway.element.png) | ![AwsInternetGateway card](AwsInternetGateway.card.png) |
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

' loads the AwsInternetGateway element
include('elements/aws/General/AwsInternetGateway')
AwsInternetGateway('element', 'Internet Gateway', 'an optional tech field')
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

' loads the AwsInternetGateway element
include('elements/aws/General/AwsInternetGateway')
AwsInternetGateway('element', 'Internet Gateway', 'an optional tech field')
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

' loads the AwsInternetGateway card
include('elements/aws/General/AwsInternetGateway')
AwsInternetGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsInternetGateway card
include('elements/aws/General/AwsInternetGateway')
AwsInternetGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
