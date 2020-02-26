# AwsIotThermostat
```text
elements/aws/InternetOfThings/AwsIotThermostat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotThermostat icon](../../../icons/aws/InternetOfThings/AwsIotThermostat.png) | ![AwsIotThermostat element](AwsIotThermostat.element.png) | ![AwsIotThermostat card](AwsIotThermostat.card.png) |
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

' loads the AwsIotThermostat element
include('elements/aws/InternetOfThings/AwsIotThermostat')
AwsIotThermostat('element', 'Iot Thermostat', 'an optional tech field')
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

' loads the AwsIotThermostat element
include('elements/aws/InternetOfThings/AwsIotThermostat')
AwsIotThermostat('element', 'Iot Thermostat', 'an optional tech field')
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

' loads the AwsIotThermostat card
include('elements/aws/InternetOfThings/AwsIotThermostat')
AwsIotThermostatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotThermostat card
include('elements/aws/InternetOfThings/AwsIotThermostat')
AwsIotThermostatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
