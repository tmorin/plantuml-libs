# AzureCacheForRedis
```text
elements/azure/DatabasesServiceColor/AzureCacheForRedis
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCacheForRedis icon](../../../icons/azure/DatabasesServiceColor/AzureCacheForRedis.png) | ![AzureCacheForRedis element](AzureCacheForRedis.element.png) | ![AzureCacheForRedis card](AzureCacheForRedis.card.png) |
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

' loads the AzureCacheForRedis element
include('elements/azure/DatabasesServiceColor/AzureCacheForRedis')
AzureCacheForRedis('element', 'Cache For Redis', 'an optional tech field')
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

' loads the AzureCacheForRedis element
include('elements/azure/DatabasesServiceColor/AzureCacheForRedis')
AzureCacheForRedis('element', 'Cache For Redis', 'an optional tech field')
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

' loads the AzureCacheForRedis card
include('elements/azure/DatabasesServiceColor/AzureCacheForRedis')
AzureCacheForRedisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCacheForRedis card
include('elements/azure/DatabasesServiceColor/AzureCacheForRedis')
AzureCacheForRedisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
