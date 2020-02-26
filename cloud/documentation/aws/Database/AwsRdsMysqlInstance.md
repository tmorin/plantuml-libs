# AwsRdsMysqlInstance
```text
elements/aws/Database/AwsRdsMysqlInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsMysqlInstance icon](../../../icons/aws/Database/AwsRdsMysqlInstance.png) | ![AwsRdsMysqlInstance element](AwsRdsMysqlInstance.element.png) | ![AwsRdsMysqlInstance card](AwsRdsMysqlInstance.card.png) |
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

' loads the AwsRdsMysqlInstance element
include('elements/aws/Database/AwsRdsMysqlInstance')
AwsRdsMysqlInstance('element', 'Rds Mysql Instance', 'an optional tech field')
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

' loads the AwsRdsMysqlInstance element
include('elements/aws/Database/AwsRdsMysqlInstance')
AwsRdsMysqlInstance('element', 'Rds Mysql Instance', 'an optional tech field')
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

' loads the AwsRdsMysqlInstance card
include('elements/aws/Database/AwsRdsMysqlInstance')
AwsRdsMysqlInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsMysqlInstance card
include('elements/aws/Database/AwsRdsMysqlInstance')
AwsRdsMysqlInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
