# AwsStorageGatewayVolumeGateway
```text
elements/aws/Storage/AwsStorageGatewayVolumeGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStorageGatewayVolumeGateway icon](../../../icons/aws/Storage/AwsStorageGatewayVolumeGateway.png) | ![AwsStorageGatewayVolumeGateway element](AwsStorageGatewayVolumeGateway.element.png) | ![AwsStorageGatewayVolumeGateway card](AwsStorageGatewayVolumeGateway.card.png) |
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

' loads the AwsStorageGatewayVolumeGateway element
include('elements/aws/Storage/AwsStorageGatewayVolumeGateway')
AwsStorageGatewayVolumeGateway('element', 'Storage Gateway Volume Gateway', 'an optional tech field')
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

' loads the AwsStorageGatewayVolumeGateway element
include('elements/aws/Storage/AwsStorageGatewayVolumeGateway')
AwsStorageGatewayVolumeGateway('element', 'Storage Gateway Volume Gateway', 'an optional tech field')
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

' loads the AwsStorageGatewayVolumeGateway card
include('elements/aws/Storage/AwsStorageGatewayVolumeGateway')
AwsStorageGatewayVolumeGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStorageGatewayVolumeGateway card
include('elements/aws/Storage/AwsStorageGatewayVolumeGateway')
AwsStorageGatewayVolumeGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
