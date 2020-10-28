# AwsApiGateway
```text
elements/aws/NetworkingContentDelivery/AwsApiGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsApiGateway icon](../../../icons/aws/NetworkingContentDelivery/AwsApiGateway.png) | ![AwsApiGateway element](AwsApiGateway.element.png) | ![AwsApiGateway card](AwsApiGateway.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsApiGateway element
include('elements/aws/NetworkingContentDelivery/AwsApiGateway')
AwsApiGateway('element', 'Api Gateway', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsApiGateway element
include('elements/aws/NetworkingContentDelivery/AwsApiGateway')
AwsApiGateway('element', 'Api Gateway', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsApiGateway card
include('elements/aws/NetworkingContentDelivery/AwsApiGateway')
AwsApiGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/aws')

' loads the AwsApiGateway card
include('elements/aws/NetworkingContentDelivery/AwsApiGateway')
AwsApiGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
