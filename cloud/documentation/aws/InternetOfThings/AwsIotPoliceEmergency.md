# AwsIotPoliceEmergency
```text
elements/aws/InternetOfThings/AwsIotPoliceEmergency
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotPoliceEmergency icon](../../../icons/aws/InternetOfThings/AwsIotPoliceEmergency.png) | ![AwsIotPoliceEmergency element](AwsIotPoliceEmergency.element.png) | ![AwsIotPoliceEmergency card](AwsIotPoliceEmergency.card.png) |
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

' loads the AwsIotPoliceEmergency element
include('elements/aws/InternetOfThings/AwsIotPoliceEmergency')
AwsIotPoliceEmergency('element', 'Iot Police Emergency', 'an optional tech field')
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

' loads the AwsIotPoliceEmergency element
include('elements/aws/InternetOfThings/AwsIotPoliceEmergency')
AwsIotPoliceEmergency('element', 'Iot Police Emergency', 'an optional tech field')
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

' loads the AwsIotPoliceEmergency card
include('elements/aws/InternetOfThings/AwsIotPoliceEmergency')
AwsIotPoliceEmergencyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotPoliceEmergency card
include('elements/aws/InternetOfThings/AwsIotPoliceEmergency')
AwsIotPoliceEmergencyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
