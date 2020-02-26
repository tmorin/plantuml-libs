# AwsServerMigrationService
```text
elements/aws/MigrationTransfer/AwsServerMigrationService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsServerMigrationService icon](../../../icons/aws/MigrationTransfer/AwsServerMigrationService.png) | ![AwsServerMigrationService element](AwsServerMigrationService.element.png) | ![AwsServerMigrationService card](AwsServerMigrationService.card.png) |
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

' loads the AwsServerMigrationService element
include('elements/aws/MigrationTransfer/AwsServerMigrationService')
AwsServerMigrationService('element', 'Server Migration Service', 'an optional tech field')
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

' loads the AwsServerMigrationService element
include('elements/aws/MigrationTransfer/AwsServerMigrationService')
AwsServerMigrationService('element', 'Server Migration Service', 'an optional tech field')
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

' loads the AwsServerMigrationService card
include('elements/aws/MigrationTransfer/AwsServerMigrationService')
AwsServerMigrationServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsServerMigrationService card
include('elements/aws/MigrationTransfer/AwsServerMigrationService')
AwsServerMigrationServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
