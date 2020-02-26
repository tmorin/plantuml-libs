# AwsRdsRdsInstanceAlt
```text
elements/aws/Database/AwsRdsRdsInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsRdsInstanceAlt icon](../../../icons/aws/Database/AwsRdsRdsInstanceAlt.png) | ![AwsRdsRdsInstanceAlt element](AwsRdsRdsInstanceAlt.element.png) | ![AwsRdsRdsInstanceAlt card](AwsRdsRdsInstanceAlt.card.png) |
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

' loads the AwsRdsRdsInstanceAlt element
include('elements/aws/Database/AwsRdsRdsInstanceAlt')
AwsRdsRdsInstanceAlt('element', 'Rds Rds Instance Alt', 'an optional tech field')
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

' loads the AwsRdsRdsInstanceAlt element
include('elements/aws/Database/AwsRdsRdsInstanceAlt')
AwsRdsRdsInstanceAlt('element', 'Rds Rds Instance Alt', 'an optional tech field')
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

' loads the AwsRdsRdsInstanceAlt card
include('elements/aws/Database/AwsRdsRdsInstanceAlt')
AwsRdsRdsInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsRdsInstanceAlt card
include('elements/aws/Database/AwsRdsRdsInstanceAlt')
AwsRdsRdsInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
