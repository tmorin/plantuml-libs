# AwsRdsMariadbInstanceAlt
```text
elements/aws/Database/AwsRdsMariadbInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsMariadbInstanceAlt icon](../../../icons/aws/Database/AwsRdsMariadbInstanceAlt.png) | ![AwsRdsMariadbInstanceAlt element](AwsRdsMariadbInstanceAlt.element.png) | ![AwsRdsMariadbInstanceAlt card](AwsRdsMariadbInstanceAlt.card.png) |
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

' loads the AwsRdsMariadbInstanceAlt element
include('elements/aws/Database/AwsRdsMariadbInstanceAlt')
AwsRdsMariadbInstanceAlt('element', 'Rds Mariadb Instance Alt', 'an optional tech field')
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

' loads the AwsRdsMariadbInstanceAlt element
include('elements/aws/Database/AwsRdsMariadbInstanceAlt')
AwsRdsMariadbInstanceAlt('element', 'Rds Mariadb Instance Alt', 'an optional tech field')
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

' loads the AwsRdsMariadbInstanceAlt card
include('elements/aws/Database/AwsRdsMariadbInstanceAlt')
AwsRdsMariadbInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsMariadbInstanceAlt card
include('elements/aws/Database/AwsRdsMariadbInstanceAlt')
AwsRdsMariadbInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
