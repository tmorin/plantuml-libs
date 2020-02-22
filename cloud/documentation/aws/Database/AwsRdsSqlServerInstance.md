# AwsRdsSqlServerInstance
```text
elements/aws/Database/AwsRdsSqlServerInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsSqlServerInstance icon](../../../icons/aws/Database/AwsRdsSqlServerInstance.png) | ![AwsRdsSqlServerInstance element](AwsRdsSqlServerInstance.element.png) | ![AwsRdsSqlServerInstance card](AwsRdsSqlServerInstance.card.png) |
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

' loads the AwsRdsSqlServerInstance element
include('elements/aws/Database/AwsRdsSqlServerInstance')
AwsRdsSqlServerInstance('element', 'Rds Sql Server Instance', 'an optional tech field')
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

' loads the AwsRdsSqlServerInstance element
include('elements/aws/Database/AwsRdsSqlServerInstance')
AwsRdsSqlServerInstance('element', 'Rds Sql Server Instance', 'an optional tech field')
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

' loads the AwsRdsSqlServerInstance card
include('elements/aws/Database/AwsRdsSqlServerInstance')
AwsRdsSqlServerInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsSqlServerInstance card
include('elements/aws/Database/AwsRdsSqlServerInstance')
AwsRdsSqlServerInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
