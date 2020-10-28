# AzureSqlDatabases
```text
elements/azure/DatabasesServiceColor/AzureSqlDatabases
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSqlDatabases icon](../../../icons/azure/DatabasesServiceColor/AzureSqlDatabases.png) | ![AzureSqlDatabases element](AzureSqlDatabases.element.png) | ![AzureSqlDatabases card](AzureSqlDatabases.card.png) |
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
include('styles/azure')

' loads the AzureSqlDatabases element
include('elements/azure/DatabasesServiceColor/AzureSqlDatabases')
AzureSqlDatabases('element', 'Sql Databases', 'an optional tech field')
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
include('styles/azure')

' loads the AzureSqlDatabases element
include('elements/azure/DatabasesServiceColor/AzureSqlDatabases')
AzureSqlDatabases('element', 'Sql Databases', 'an optional tech field')
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
include('styles/azure')

' loads the AzureSqlDatabases card
include('elements/azure/DatabasesServiceColor/AzureSqlDatabases')
AzureSqlDatabasesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureSqlDatabases card
include('elements/azure/DatabasesServiceColor/AzureSqlDatabases')
AzureSqlDatabasesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
