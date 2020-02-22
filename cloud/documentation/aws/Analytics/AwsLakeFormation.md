# AwsLakeFormation
```text
elements/aws/Analytics/AwsLakeFormation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsLakeFormation icon](../../../icons/aws/Analytics/AwsLakeFormation.png) | ![AwsLakeFormation element](AwsLakeFormation.element.png) | ![AwsLakeFormation card](AwsLakeFormation.card.png) |
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

' loads the AwsLakeFormation element
include('elements/aws/Analytics/AwsLakeFormation')
AwsLakeFormation('element', 'Lake Formation', 'an optional tech field')
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

' loads the AwsLakeFormation element
include('elements/aws/Analytics/AwsLakeFormation')
AwsLakeFormation('element', 'Lake Formation', 'an optional tech field')
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

' loads the AwsLakeFormation card
include('elements/aws/Analytics/AwsLakeFormation')
AwsLakeFormationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsLakeFormation card
include('elements/aws/Analytics/AwsLakeFormation')
AwsLakeFormationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
