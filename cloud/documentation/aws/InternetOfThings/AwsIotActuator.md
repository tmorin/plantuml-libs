# AwsIotActuator
```text
elements/aws/InternetOfThings/AwsIotActuator
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotActuator icon](../../../icons/aws/InternetOfThings/AwsIotActuator.png) | ![AwsIotActuator element](AwsIotActuator.element.png) | ![AwsIotActuator card](AwsIotActuator.card.png) |
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

' loads the AwsIotActuator element
include('elements/aws/InternetOfThings/AwsIotActuator')
AwsIotActuator('element', 'Iot Actuator', 'an optional tech field')
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

' loads the AwsIotActuator element
include('elements/aws/InternetOfThings/AwsIotActuator')
AwsIotActuator('element', 'Iot Actuator', 'an optional tech field')
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

' loads the AwsIotActuator card
include('elements/aws/InternetOfThings/AwsIotActuator')
AwsIotActuatorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotActuator card
include('elements/aws/InternetOfThings/AwsIotActuator')
AwsIotActuatorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
