# AwsRdsMysqlInstanceAlt
```text
elements/aws/Database/AwsRdsMysqlInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsMysqlInstanceAlt icon](../../../icons/aws/Database/AwsRdsMysqlInstanceAlt.png) | ![AwsRdsMysqlInstanceAlt element](AwsRdsMysqlInstanceAlt.element.png) | ![AwsRdsMysqlInstanceAlt card](AwsRdsMysqlInstanceAlt.card.png) |
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

' loads the AwsRdsMysqlInstanceAlt element
include('elements/aws/Database/AwsRdsMysqlInstanceAlt')
AwsRdsMysqlInstanceAlt('element', 'Rds Mysql Instance Alt', 'an optional tech field')
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

' loads the AwsRdsMysqlInstanceAlt element
include('elements/aws/Database/AwsRdsMysqlInstanceAlt')
AwsRdsMysqlInstanceAlt('element', 'Rds Mysql Instance Alt', 'an optional tech field')
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

' loads the AwsRdsMysqlInstanceAlt card
include('elements/aws/Database/AwsRdsMysqlInstanceAlt')
AwsRdsMysqlInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsMysqlInstanceAlt card
include('elements/aws/Database/AwsRdsMysqlInstanceAlt')
AwsRdsMysqlInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
