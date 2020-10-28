# AwsIotDeviceDefender
```text
elements/aws/InternetOfThings/AwsIotDeviceDefender
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotDeviceDefender icon](../../../icons/aws/InternetOfThings/AwsIotDeviceDefender.png) | ![AwsIotDeviceDefender element](AwsIotDeviceDefender.element.png) | ![AwsIotDeviceDefender card](AwsIotDeviceDefender.card.png) |
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

' loads the AwsIotDeviceDefender element
include('elements/aws/InternetOfThings/AwsIotDeviceDefender')
AwsIotDeviceDefender('element', 'Iot Device Defender', 'an optional tech field')
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

' loads the AwsIotDeviceDefender element
include('elements/aws/InternetOfThings/AwsIotDeviceDefender')
AwsIotDeviceDefender('element', 'Iot Device Defender', 'an optional tech field')
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

' loads the AwsIotDeviceDefender card
include('elements/aws/InternetOfThings/AwsIotDeviceDefender')
AwsIotDeviceDefenderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotDeviceDefender card
include('elements/aws/InternetOfThings/AwsIotDeviceDefender')
AwsIotDeviceDefenderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
