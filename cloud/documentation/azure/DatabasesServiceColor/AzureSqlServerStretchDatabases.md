# AzureSqlServerStretchDatabases
```text
elements/azure/DatabasesServiceColor/AzureSqlServerStretchDatabases
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSqlServerStretchDatabases icon](../../../icons/azure/DatabasesServiceColor/AzureSqlServerStretchDatabases.png) | ![AzureSqlServerStretchDatabases element](AzureSqlServerStretchDatabases.element.png) | ![AzureSqlServerStretchDatabases card](AzureSqlServerStretchDatabases.card.png) |
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
include('styles/azure')

' loads the AzureSqlServerStretchDatabases element
include('elements/azure/DatabasesServiceColor/AzureSqlServerStretchDatabases')
AzureSqlServerStretchDatabases('element', 'Sql Server Stretch Databases', 'an optional tech field')
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

' loads the AzureSqlServerStretchDatabases element
include('elements/azure/DatabasesServiceColor/AzureSqlServerStretchDatabases')
AzureSqlServerStretchDatabases('element', 'Sql Server Stretch Databases', 'an optional tech field')
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
include('styles/azure')

' loads the AzureSqlServerStretchDatabases card
include('elements/azure/DatabasesServiceColor/AzureSqlServerStretchDatabases')
AzureSqlServerStretchDatabasesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSqlServerStretchDatabases card
include('elements/azure/DatabasesServiceColor/AzureSqlServerStretchDatabases')
AzureSqlServerStretchDatabasesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
