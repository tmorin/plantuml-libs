# AwsRdsPostgresqlInstanceAlt
```text
elements/aws/Database/AwsRdsPostgresqlInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsPostgresqlInstanceAlt icon](../../../icons/aws/Database/AwsRdsPostgresqlInstanceAlt.png) | ![AwsRdsPostgresqlInstanceAlt element](AwsRdsPostgresqlInstanceAlt.element.png) | ![AwsRdsPostgresqlInstanceAlt card](AwsRdsPostgresqlInstanceAlt.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsRdsPostgresqlInstanceAlt element
include('elements/aws/Database/AwsRdsPostgresqlInstanceAlt')
AwsRdsPostgresqlInstanceAlt('element', 'Rds Postgresql Instance Alt', 'an optional tech field')
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

' loads the AwsRdsPostgresqlInstanceAlt element
include('elements/aws/Database/AwsRdsPostgresqlInstanceAlt')
AwsRdsPostgresqlInstanceAlt('element', 'Rds Postgresql Instance Alt', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsRdsPostgresqlInstanceAlt card
include('elements/aws/Database/AwsRdsPostgresqlInstanceAlt')
AwsRdsPostgresqlInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsPostgresqlInstanceAlt card
include('elements/aws/Database/AwsRdsPostgresqlInstanceAlt')
AwsRdsPostgresqlInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
