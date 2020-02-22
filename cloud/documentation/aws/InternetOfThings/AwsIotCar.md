# AwsIotCar
```text
elements/aws/InternetOfThings/AwsIotCar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotCar icon](../../../icons/aws/InternetOfThings/AwsIotCar.png) | ![AwsIotCar element](AwsIotCar.element.png) | ![AwsIotCar card](AwsIotCar.card.png) |
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

' loads the AwsIotCar element
include('elements/aws/InternetOfThings/AwsIotCar')
AwsIotCar('element', 'Iot Car', 'an optional tech field')
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

' loads the AwsIotCar element
include('elements/aws/InternetOfThings/AwsIotCar')
AwsIotCar('element', 'Iot Car', 'an optional tech field')
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

' loads the AwsIotCar card
include('elements/aws/InternetOfThings/AwsIotCar')
AwsIotCarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotCar card
include('elements/aws/InternetOfThings/AwsIotCar')
AwsIotCarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
