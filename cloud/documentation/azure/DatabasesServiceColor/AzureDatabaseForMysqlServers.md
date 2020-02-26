# AzureDatabaseForMysqlServers
```text
elements/azure/DatabasesServiceColor/AzureDatabaseForMysqlServers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDatabaseForMysqlServers icon](../../../icons/azure/DatabasesServiceColor/AzureDatabaseForMysqlServers.png) | ![AzureDatabaseForMysqlServers element](AzureDatabaseForMysqlServers.element.png) | ![AzureDatabaseForMysqlServers card](AzureDatabaseForMysqlServers.card.png) |
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

' loads the AzureDatabaseForMysqlServers element
include('elements/azure/DatabasesServiceColor/AzureDatabaseForMysqlServers')
AzureDatabaseForMysqlServers('element', 'Database For Mysql Servers', 'an optional tech field')
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

' loads the AzureDatabaseForMysqlServers element
include('elements/azure/DatabasesServiceColor/AzureDatabaseForMysqlServers')
AzureDatabaseForMysqlServers('element', 'Database For Mysql Servers', 'an optional tech field')
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

' loads the AzureDatabaseForMysqlServers card
include('elements/azure/DatabasesServiceColor/AzureDatabaseForMysqlServers')
AzureDatabaseForMysqlServersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDatabaseForMysqlServers card
include('elements/azure/DatabasesServiceColor/AzureDatabaseForMysqlServers')
AzureDatabaseForMysqlServersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
