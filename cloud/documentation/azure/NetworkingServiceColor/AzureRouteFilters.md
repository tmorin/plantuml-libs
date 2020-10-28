# AzureRouteFilters
```text
elements/azure/NetworkingServiceColor/AzureRouteFilters
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRouteFilters icon](../../../icons/azure/NetworkingServiceColor/AzureRouteFilters.png) | ![AzureRouteFilters element](AzureRouteFilters.element.png) | ![AzureRouteFilters card](AzureRouteFilters.card.png) |
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

' loads the AzureRouteFilters element
include('elements/azure/NetworkingServiceColor/AzureRouteFilters')
AzureRouteFilters('element', 'Route Filters', 'an optional tech field')
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

' loads the AzureRouteFilters element
include('elements/azure/NetworkingServiceColor/AzureRouteFilters')
AzureRouteFilters('element', 'Route Filters', 'an optional tech field')
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

' loads the AzureRouteFilters card
include('elements/azure/NetworkingServiceColor/AzureRouteFilters')
AzureRouteFiltersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRouteFilters card
include('elements/azure/NetworkingServiceColor/AzureRouteFilters')
AzureRouteFiltersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
