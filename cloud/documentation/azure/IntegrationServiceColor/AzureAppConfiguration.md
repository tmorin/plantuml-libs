# AzureAppConfiguration
```text
elements/azure/IntegrationServiceColor/AzureAppConfiguration
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAppConfiguration icon](../../../icons/azure/IntegrationServiceColor/AzureAppConfiguration.png) | ![AzureAppConfiguration element](AzureAppConfiguration.element.png) | ![AzureAppConfiguration card](AzureAppConfiguration.card.png) |
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

' loads the AzureAppConfiguration element
include('elements/azure/IntegrationServiceColor/AzureAppConfiguration')
AzureAppConfiguration('element', 'App Configuration', 'an optional tech field')
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

' loads the AzureAppConfiguration element
include('elements/azure/IntegrationServiceColor/AzureAppConfiguration')
AzureAppConfiguration('element', 'App Configuration', 'an optional tech field')
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

' loads the AzureAppConfiguration card
include('elements/azure/IntegrationServiceColor/AzureAppConfiguration')
AzureAppConfigurationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAppConfiguration card
include('elements/azure/IntegrationServiceColor/AzureAppConfiguration')
AzureAppConfigurationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
