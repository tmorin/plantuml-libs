# AwsCloudendureMigration
```text
elements/aws/MigrationTransfer/AwsCloudendureMigration
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudendureMigration icon](../../../icons/aws/MigrationTransfer/AwsCloudendureMigration.png) | ![AwsCloudendureMigration element](AwsCloudendureMigration.element.png) | ![AwsCloudendureMigration card](AwsCloudendureMigration.card.png) |
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

' loads the AwsCloudendureMigration element
include('elements/aws/MigrationTransfer/AwsCloudendureMigration')
AwsCloudendureMigration('element', 'Cloudendure Migration', 'an optional tech field')
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

' loads the AwsCloudendureMigration element
include('elements/aws/MigrationTransfer/AwsCloudendureMigration')
AwsCloudendureMigration('element', 'Cloudendure Migration', 'an optional tech field')
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

' loads the AwsCloudendureMigration card
include('elements/aws/MigrationTransfer/AwsCloudendureMigration')
AwsCloudendureMigrationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudendureMigration card
include('elements/aws/MigrationTransfer/AwsCloudendureMigration')
AwsCloudendureMigrationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
