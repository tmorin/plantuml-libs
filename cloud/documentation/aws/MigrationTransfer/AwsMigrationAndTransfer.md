# AwsMigrationAndTransfer
```text
elements/aws/MigrationTransfer/AwsMigrationAndTransfer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsMigrationAndTransfer icon](../../../icons/aws/MigrationTransfer/AwsMigrationAndTransfer.png) | ![AwsMigrationAndTransfer element](AwsMigrationAndTransfer.element.png) | ![AwsMigrationAndTransfer card](AwsMigrationAndTransfer.card.png) |
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

' loads the AwsMigrationAndTransfer element
include('elements/aws/MigrationTransfer/AwsMigrationAndTransfer')
AwsMigrationAndTransfer('element', 'Migration And Transfer', 'an optional tech field')
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

' loads the AwsMigrationAndTransfer element
include('elements/aws/MigrationTransfer/AwsMigrationAndTransfer')
AwsMigrationAndTransfer('element', 'Migration And Transfer', 'an optional tech field')
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

' loads the AwsMigrationAndTransfer card
include('elements/aws/MigrationTransfer/AwsMigrationAndTransfer')
AwsMigrationAndTransferCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsMigrationAndTransfer card
include('elements/aws/MigrationTransfer/AwsMigrationAndTransfer')
AwsMigrationAndTransferCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
