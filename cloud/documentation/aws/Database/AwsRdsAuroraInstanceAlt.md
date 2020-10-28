# AwsRdsAuroraInstanceAlt
```text
elements/aws/Database/AwsRdsAuroraInstanceAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsAuroraInstanceAlt icon](../../../icons/aws/Database/AwsRdsAuroraInstanceAlt.png) | ![AwsRdsAuroraInstanceAlt element](AwsRdsAuroraInstanceAlt.element.png) | ![AwsRdsAuroraInstanceAlt card](AwsRdsAuroraInstanceAlt.card.png) |
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

' loads the AwsRdsAuroraInstanceAlt element
include('elements/aws/Database/AwsRdsAuroraInstanceAlt')
AwsRdsAuroraInstanceAlt('element', 'Rds Aurora Instance Alt', 'an optional tech field')
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

' loads the AwsRdsAuroraInstanceAlt element
include('elements/aws/Database/AwsRdsAuroraInstanceAlt')
AwsRdsAuroraInstanceAlt('element', 'Rds Aurora Instance Alt', 'an optional tech field')
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

' loads the AwsRdsAuroraInstanceAlt card
include('elements/aws/Database/AwsRdsAuroraInstanceAlt')
AwsRdsAuroraInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsAuroraInstanceAlt card
include('elements/aws/Database/AwsRdsAuroraInstanceAlt')
AwsRdsAuroraInstanceAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
