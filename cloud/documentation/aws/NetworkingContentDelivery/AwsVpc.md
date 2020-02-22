# AwsVpc
```text
elements/aws/NetworkingContentDelivery/AwsVpc
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpc icon](../../../icons/aws/NetworkingContentDelivery/AwsVpc.png) | ![AwsVpc element](AwsVpc.element.png) | ![AwsVpc card](AwsVpc.card.png) |
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

' loads the AwsVpc element
include('elements/aws/NetworkingContentDelivery/AwsVpc')
AwsVpc('element', 'Vpc', 'an optional tech field')
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

' loads the AwsVpc element
include('elements/aws/NetworkingContentDelivery/AwsVpc')
AwsVpc('element', 'Vpc', 'an optional tech field')
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

' loads the AwsVpc card
include('elements/aws/NetworkingContentDelivery/AwsVpc')
AwsVpcCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpc card
include('elements/aws/NetworkingContentDelivery/AwsVpc')
AwsVpcCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
