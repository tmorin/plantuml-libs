# AwsStorageGatewayFileGateway
```text
elements/aws/Storage/AwsStorageGatewayFileGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStorageGatewayFileGateway icon](../../../icons/aws/Storage/AwsStorageGatewayFileGateway.png) | ![AwsStorageGatewayFileGateway element](AwsStorageGatewayFileGateway.element.png) | ![AwsStorageGatewayFileGateway card](AwsStorageGatewayFileGateway.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsStorageGatewayFileGateway element
include('elements/aws/Storage/AwsStorageGatewayFileGateway')
AwsStorageGatewayFileGateway('element', 'Storage Gateway File Gateway', 'an optional tech field')
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

' loads the AwsStorageGatewayFileGateway element
include('elements/aws/Storage/AwsStorageGatewayFileGateway')
AwsStorageGatewayFileGateway('element', 'Storage Gateway File Gateway', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsStorageGatewayFileGateway card
include('elements/aws/Storage/AwsStorageGatewayFileGateway')
AwsStorageGatewayFileGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStorageGatewayFileGateway card
include('elements/aws/Storage/AwsStorageGatewayFileGateway')
AwsStorageGatewayFileGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
