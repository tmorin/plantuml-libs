# AwsManagedApacheCassandraService
```text
elements/aws/Database/AwsManagedApacheCassandraService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsManagedApacheCassandraService icon](../../../icons/aws/Database/AwsManagedApacheCassandraService.png) | ![AwsManagedApacheCassandraService element](AwsManagedApacheCassandraService.element.png) | ![AwsManagedApacheCassandraService card](AwsManagedApacheCassandraService.card.png) |
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

' loads the AwsManagedApacheCassandraService element
include('elements/aws/Database/AwsManagedApacheCassandraService')
AwsManagedApacheCassandraService('element', 'Managed Apache Cassandra Service', 'an optional tech field')
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

' loads the AwsManagedApacheCassandraService element
include('elements/aws/Database/AwsManagedApacheCassandraService')
AwsManagedApacheCassandraService('element', 'Managed Apache Cassandra Service', 'an optional tech field')
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

' loads the AwsManagedApacheCassandraService card
include('elements/aws/Database/AwsManagedApacheCassandraService')
AwsManagedApacheCassandraServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsManagedApacheCassandraService card
include('elements/aws/Database/AwsManagedApacheCassandraService')
AwsManagedApacheCassandraServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
