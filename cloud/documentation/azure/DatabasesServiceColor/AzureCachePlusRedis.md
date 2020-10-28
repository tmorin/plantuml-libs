# AzureCachePlusRedis
```text
elements/azure/DatabasesServiceColor/AzureCachePlusRedis
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCachePlusRedis icon](../../../icons/azure/DatabasesServiceColor/AzureCachePlusRedis.png) | ![AzureCachePlusRedis element](AzureCachePlusRedis.element.png) | ![AzureCachePlusRedis card](AzureCachePlusRedis.card.png) |
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

' loads the AzureCachePlusRedis element
include('elements/azure/DatabasesServiceColor/AzureCachePlusRedis')
AzureCachePlusRedis('element', 'Cache Plus Redis', 'an optional tech field')
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

' loads the AzureCachePlusRedis element
include('elements/azure/DatabasesServiceColor/AzureCachePlusRedis')
AzureCachePlusRedis('element', 'Cache Plus Redis', 'an optional tech field')
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

' loads the AzureCachePlusRedis card
include('elements/azure/DatabasesServiceColor/AzureCachePlusRedis')
AzureCachePlusRedisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCachePlusRedis card
include('elements/azure/DatabasesServiceColor/AzureCachePlusRedis')
AzureCachePlusRedisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
