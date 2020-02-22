# AwsInternetOfThings
```text
elements/aws/InternetOfThings/AwsInternetOfThings
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsInternetOfThings icon](../../../icons/aws/InternetOfThings/AwsInternetOfThings.png) | ![AwsInternetOfThings element](AwsInternetOfThings.element.png) | ![AwsInternetOfThings card](AwsInternetOfThings.card.png) |
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

' loads the AwsInternetOfThings element
include('elements/aws/InternetOfThings/AwsInternetOfThings')
AwsInternetOfThings('element', 'Internet Of Things', 'an optional tech field')
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

' loads the AwsInternetOfThings element
include('elements/aws/InternetOfThings/AwsInternetOfThings')
AwsInternetOfThings('element', 'Internet Of Things', 'an optional tech field')
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

' loads the AwsInternetOfThings card
include('elements/aws/InternetOfThings/AwsInternetOfThings')
AwsInternetOfThingsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsInternetOfThings card
include('elements/aws/InternetOfThings/AwsInternetOfThings')
AwsInternetOfThingsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
