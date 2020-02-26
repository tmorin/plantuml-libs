# AwsIotTravel
```text
elements/aws/InternetOfThings/AwsIotTravel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotTravel icon](../../../icons/aws/InternetOfThings/AwsIotTravel.png) | ![AwsIotTravel element](AwsIotTravel.element.png) | ![AwsIotTravel card](AwsIotTravel.card.png) |
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

' loads the AwsIotTravel element
include('elements/aws/InternetOfThings/AwsIotTravel')
AwsIotTravel('element', 'Iot Travel', 'an optional tech field')
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

' loads the AwsIotTravel element
include('elements/aws/InternetOfThings/AwsIotTravel')
AwsIotTravel('element', 'Iot Travel', 'an optional tech field')
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

' loads the AwsIotTravel card
include('elements/aws/InternetOfThings/AwsIotTravel')
AwsIotTravelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotTravel card
include('elements/aws/InternetOfThings/AwsIotTravel')
AwsIotTravelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
