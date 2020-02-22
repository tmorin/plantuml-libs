# AwsIotBank
```text
elements/aws/InternetOfThings/AwsIotBank
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotBank icon](../../../icons/aws/InternetOfThings/AwsIotBank.png) | ![AwsIotBank element](AwsIotBank.element.png) | ![AwsIotBank card](AwsIotBank.card.png) |
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

' loads the AwsIotBank element
include('elements/aws/InternetOfThings/AwsIotBank')
AwsIotBank('element', 'Iot Bank', 'an optional tech field')
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

' loads the AwsIotBank element
include('elements/aws/InternetOfThings/AwsIotBank')
AwsIotBank('element', 'Iot Bank', 'an optional tech field')
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

' loads the AwsIotBank card
include('elements/aws/InternetOfThings/AwsIotBank')
AwsIotBankCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotBank card
include('elements/aws/InternetOfThings/AwsIotBank')
AwsIotBankCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
