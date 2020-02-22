# AwsRdsRdsInstance
```text
elements/aws/Database/AwsRdsRdsInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsRdsInstance icon](../../../icons/aws/Database/AwsRdsRdsInstance.png) | ![AwsRdsRdsInstance element](AwsRdsRdsInstance.element.png) | ![AwsRdsRdsInstance card](AwsRdsRdsInstance.card.png) |
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

' loads the AwsRdsRdsInstance element
include('elements/aws/Database/AwsRdsRdsInstance')
AwsRdsRdsInstance('element', 'Rds Rds Instance', 'an optional tech field')
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

' loads the AwsRdsRdsInstance element
include('elements/aws/Database/AwsRdsRdsInstance')
AwsRdsRdsInstance('element', 'Rds Rds Instance', 'an optional tech field')
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

' loads the AwsRdsRdsInstance card
include('elements/aws/Database/AwsRdsRdsInstance')
AwsRdsRdsInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsRdsInstance card
include('elements/aws/Database/AwsRdsRdsInstance')
AwsRdsRdsInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
