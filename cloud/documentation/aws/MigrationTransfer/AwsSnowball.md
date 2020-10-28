# AwsSnowball
```text
elements/aws/MigrationTransfer/AwsSnowball
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSnowball icon](../../../icons/aws/MigrationTransfer/AwsSnowball.png) | ![AwsSnowball element](AwsSnowball.element.png) | ![AwsSnowball card](AwsSnowball.card.png) |
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

' loads the AwsSnowball element
include('elements/aws/MigrationTransfer/AwsSnowball')
AwsSnowball('element', 'Snowball', 'an optional tech field')
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

' loads the AwsSnowball element
include('elements/aws/MigrationTransfer/AwsSnowball')
AwsSnowball('element', 'Snowball', 'an optional tech field')
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

' loads the AwsSnowball card
include('elements/aws/MigrationTransfer/AwsSnowball')
AwsSnowballCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSnowball card
include('elements/aws/MigrationTransfer/AwsSnowball')
AwsSnowballCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
