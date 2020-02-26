# AwsStorageGateway
```text
elements/aws/Storage/AwsStorageGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStorageGateway icon](../../../icons/aws/Storage/AwsStorageGateway.png) | ![AwsStorageGateway element](AwsStorageGateway.element.png) | ![AwsStorageGateway card](AwsStorageGateway.card.png) |
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

' loads the AwsStorageGateway element
include('elements/aws/Storage/AwsStorageGateway')
AwsStorageGateway('element', 'Storage Gateway', 'an optional tech field')
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

' loads the AwsStorageGateway element
include('elements/aws/Storage/AwsStorageGateway')
AwsStorageGateway('element', 'Storage Gateway', 'an optional tech field')
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

' loads the AwsStorageGateway card
include('elements/aws/Storage/AwsStorageGateway')
AwsStorageGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStorageGateway card
include('elements/aws/Storage/AwsStorageGateway')
AwsStorageGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
