# AwsIotAlexaEnabledDevice
```text
elements/aws/InternetOfThings/AwsIotAlexaEnabledDevice
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotAlexaEnabledDevice icon](../../../icons/aws/InternetOfThings/AwsIotAlexaEnabledDevice.png) | ![AwsIotAlexaEnabledDevice element](AwsIotAlexaEnabledDevice.element.png) | ![AwsIotAlexaEnabledDevice card](AwsIotAlexaEnabledDevice.card.png) |
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

' loads the AwsIotAlexaEnabledDevice element
include('elements/aws/InternetOfThings/AwsIotAlexaEnabledDevice')
AwsIotAlexaEnabledDevice('element', 'Iot Alexa Enabled Device', 'an optional tech field')
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

' loads the AwsIotAlexaEnabledDevice element
include('elements/aws/InternetOfThings/AwsIotAlexaEnabledDevice')
AwsIotAlexaEnabledDevice('element', 'Iot Alexa Enabled Device', 'an optional tech field')
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

' loads the AwsIotAlexaEnabledDevice card
include('elements/aws/InternetOfThings/AwsIotAlexaEnabledDevice')
AwsIotAlexaEnabledDeviceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotAlexaEnabledDevice card
include('elements/aws/InternetOfThings/AwsIotAlexaEnabledDevice')
AwsIotAlexaEnabledDeviceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
