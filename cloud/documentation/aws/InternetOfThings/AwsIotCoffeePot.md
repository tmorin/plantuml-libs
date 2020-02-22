# AwsIotCoffeePot
```text
elements/aws/InternetOfThings/AwsIotCoffeePot
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotCoffeePot icon](../../../icons/aws/InternetOfThings/AwsIotCoffeePot.png) | ![AwsIotCoffeePot element](AwsIotCoffeePot.element.png) | ![AwsIotCoffeePot card](AwsIotCoffeePot.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsIotCoffeePot element
include('elements/aws/InternetOfThings/AwsIotCoffeePot')
AwsIotCoffeePot('element', 'Iot Coffee Pot', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsIotCoffeePot element
include('elements/aws/InternetOfThings/AwsIotCoffeePot')
AwsIotCoffeePot('element', 'Iot Coffee Pot', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the AwsIotCoffeePot card
include('elements/aws/InternetOfThings/AwsIotCoffeePot')
AwsIotCoffeePotCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AwsIotCoffeePot card
include('elements/aws/InternetOfThings/AwsIotCoffeePot')
AwsIotCoffeePotCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
