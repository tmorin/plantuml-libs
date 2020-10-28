# AwsIotDeviceGateway
```text
elements/aws/InternetOfThings/AwsIotDeviceGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotDeviceGateway icon](../../../icons/aws/InternetOfThings/AwsIotDeviceGateway.png) | ![AwsIotDeviceGateway element](AwsIotDeviceGateway.element.png) | ![AwsIotDeviceGateway card](AwsIotDeviceGateway.card.png) |
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

' loads the AwsIotDeviceGateway element
include('elements/aws/InternetOfThings/AwsIotDeviceGateway')
AwsIotDeviceGateway('element', 'Iot Device Gateway', 'an optional tech field')
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

' loads the AwsIotDeviceGateway element
include('elements/aws/InternetOfThings/AwsIotDeviceGateway')
AwsIotDeviceGateway('element', 'Iot Device Gateway', 'an optional tech field')
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

' loads the AwsIotDeviceGateway card
include('elements/aws/InternetOfThings/AwsIotDeviceGateway')
AwsIotDeviceGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotDeviceGateway card
include('elements/aws/InternetOfThings/AwsIotDeviceGateway')
AwsIotDeviceGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
