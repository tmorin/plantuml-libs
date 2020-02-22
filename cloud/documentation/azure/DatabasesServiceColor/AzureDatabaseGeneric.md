# AzureDatabaseGeneric
```text
elements/azure/DatabasesServiceColor/AzureDatabaseGeneric
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDatabaseGeneric icon](../../../icons/azure/DatabasesServiceColor/AzureDatabaseGeneric.png) | ![AzureDatabaseGeneric element](AzureDatabaseGeneric.element.png) | ![AzureDatabaseGeneric card](AzureDatabaseGeneric.card.png) |
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

' loads the AzureDatabaseGeneric element
include('elements/azure/DatabasesServiceColor/AzureDatabaseGeneric')
AzureDatabaseGeneric('element', 'Database Generic', 'an optional tech field')
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

' loads the AzureDatabaseGeneric element
include('elements/azure/DatabasesServiceColor/AzureDatabaseGeneric')
AzureDatabaseGeneric('element', 'Database Generic', 'an optional tech field')
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

' loads the AzureDatabaseGeneric card
include('elements/azure/DatabasesServiceColor/AzureDatabaseGeneric')
AzureDatabaseGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDatabaseGeneric card
include('elements/azure/DatabasesServiceColor/AzureDatabaseGeneric')
AzureDatabaseGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
