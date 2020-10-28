# AwsRdsOracleInstanceAlt
```text
elements/aws/Database/AwsRdsOracleInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsOracleInstanceAlt icon](../../../icons/aws/Database/AwsRdsOracleInstanceAlt.png) | ![AwsRdsOracleInstanceAlt element](AwsRdsOracleInstanceAlt.element.png) | ![AwsRdsOracleInstanceAlt card](AwsRdsOracleInstanceAlt.card.png) |
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

' loads the AwsRdsOracleInstanceAlt element
include('elements/aws/Database/AwsRdsOracleInstanceAlt')
AwsRdsOracleInstanceAlt('element', 'Rds Oracle Instance Alt', 'an optional tech field')
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

' loads the AwsRdsOracleInstanceAlt element
include('elements/aws/Database/AwsRdsOracleInstanceAlt')
AwsRdsOracleInstanceAlt('element', 'Rds Oracle Instance Alt', 'an optional tech field')
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

' loads the AwsRdsOracleInstanceAlt card
include('elements/aws/Database/AwsRdsOracleInstanceAlt')
AwsRdsOracleInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsOracleInstanceAlt card
include('elements/aws/Database/AwsRdsOracleInstanceAlt')
AwsRdsOracleInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
