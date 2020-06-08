# AwsTransferFamily
```text
elements/aws/MigrationTransfer/AwsTransferFamily
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsTransferFamily icon](../../../icons/aws/MigrationTransfer/AwsTransferFamily.png) | ![AwsTransferFamily element](AwsTransferFamily.element.png) | ![AwsTransferFamily card](AwsTransferFamily.card.png) |
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

' loads the AwsTransferFamily element
include('elements/aws/MigrationTransfer/AwsTransferFamily')
AwsTransferFamily('element', 'Transfer Family', 'an optional tech field')
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

' loads the AwsTransferFamily element
include('elements/aws/MigrationTransfer/AwsTransferFamily')
AwsTransferFamily('element', 'Transfer Family', 'an optional tech field')
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

' loads the AwsTransferFamily card
include('elements/aws/MigrationTransfer/AwsTransferFamily')
AwsTransferFamilyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsTransferFamily card
include('elements/aws/MigrationTransfer/AwsTransferFamily')
AwsTransferFamilyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
