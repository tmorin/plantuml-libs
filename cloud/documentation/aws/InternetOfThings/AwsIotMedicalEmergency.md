# AwsIotMedicalEmergency
```text
elements/aws/InternetOfThings/AwsIotMedicalEmergency
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotMedicalEmergency icon](../../../icons/aws/InternetOfThings/AwsIotMedicalEmergency.png) | ![AwsIotMedicalEmergency element](AwsIotMedicalEmergency.element.png) | ![AwsIotMedicalEmergency card](AwsIotMedicalEmergency.card.png) |
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

' loads the AwsIotMedicalEmergency element
include('elements/aws/InternetOfThings/AwsIotMedicalEmergency')
AwsIotMedicalEmergency('element', 'Iot Medical Emergency', 'an optional tech field')
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

' loads the AwsIotMedicalEmergency element
include('elements/aws/InternetOfThings/AwsIotMedicalEmergency')
AwsIotMedicalEmergency('element', 'Iot Medical Emergency', 'an optional tech field')
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

' loads the AwsIotMedicalEmergency card
include('elements/aws/InternetOfThings/AwsIotMedicalEmergency')
AwsIotMedicalEmergencyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotMedicalEmergency card
include('elements/aws/InternetOfThings/AwsIotMedicalEmergency')
AwsIotMedicalEmergencyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
