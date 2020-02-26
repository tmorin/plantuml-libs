# AwsRdsSqlServerInstanceAlt
```text
elements/aws/Database/AwsRdsSqlServerInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsSqlServerInstanceAlt icon](../../../icons/aws/Database/AwsRdsSqlServerInstanceAlt.png) | ![AwsRdsSqlServerInstanceAlt element](AwsRdsSqlServerInstanceAlt.element.png) | ![AwsRdsSqlServerInstanceAlt card](AwsRdsSqlServerInstanceAlt.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsRdsSqlServerInstanceAlt element
include('elements/aws/Database/AwsRdsSqlServerInstanceAlt')
AwsRdsSqlServerInstanceAlt('element', 'Rds Sql Server Instance Alt', 'an optional tech field')
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

' loads the AwsRdsSqlServerInstanceAlt element
include('elements/aws/Database/AwsRdsSqlServerInstanceAlt')
AwsRdsSqlServerInstanceAlt('element', 'Rds Sql Server Instance Alt', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsRdsSqlServerInstanceAlt card
include('elements/aws/Database/AwsRdsSqlServerInstanceAlt')
AwsRdsSqlServerInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsSqlServerInstanceAlt card
include('elements/aws/Database/AwsRdsSqlServerInstanceAlt')
AwsRdsSqlServerInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
