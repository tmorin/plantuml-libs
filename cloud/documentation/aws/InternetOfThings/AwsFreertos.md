# AwsFreertos
```text
elements/aws/InternetOfThings/AwsFreertos
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsFreertos icon](../../../icons/aws/InternetOfThings/AwsFreertos.png) | ![AwsFreertos element](AwsFreertos.element.png) | ![AwsFreertos card](AwsFreertos.card.png) |
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

' loads the AwsFreertos element
include('elements/aws/InternetOfThings/AwsFreertos')
AwsFreertos('element', 'Freertos', 'an optional tech field')
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

' loads the AwsFreertos element
include('elements/aws/InternetOfThings/AwsFreertos')
AwsFreertos('element', 'Freertos', 'an optional tech field')
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

' loads the AwsFreertos card
include('elements/aws/InternetOfThings/AwsFreertos')
AwsFreertosCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsFreertos card
include('elements/aws/InternetOfThings/AwsFreertos')
AwsFreertosCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
