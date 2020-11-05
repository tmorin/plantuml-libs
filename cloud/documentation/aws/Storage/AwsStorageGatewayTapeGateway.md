# AwsStorageGatewayTapeGateway
```text
elements/aws/Storage/AwsStorageGatewayTapeGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStorageGatewayTapeGateway icon](../../../icons/aws/Storage/AwsStorageGatewayTapeGateway.png) | ![AwsStorageGatewayTapeGateway element](AwsStorageGatewayTapeGateway.element.png) | ![AwsStorageGatewayTapeGateway card](AwsStorageGatewayTapeGateway.card.png) |
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

' loads the AwsStorageGatewayTapeGateway element
include('elements/aws/Storage/AwsStorageGatewayTapeGateway')
AwsStorageGatewayTapeGateway('element', 'Storage Gateway Tape Gateway', 'an optional tech field')
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

' loads the AwsStorageGatewayTapeGateway element
include('elements/aws/Storage/AwsStorageGatewayTapeGateway')
AwsStorageGatewayTapeGateway('element', 'Storage Gateway Tape Gateway', 'an optional tech field')
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

' loads the AwsStorageGatewayTapeGateway card
include('elements/aws/Storage/AwsStorageGatewayTapeGateway')
AwsStorageGatewayTapeGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStorageGatewayTapeGateway card
include('elements/aws/Storage/AwsStorageGatewayTapeGateway')
AwsStorageGatewayTapeGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```