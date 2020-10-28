# AzureWebServer
```text
elements/azure/FlatSymbols/CneEnterprise/AzureWebServer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWebServer icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureWebServer.png) | ![AzureWebServer element](AzureWebServer.element.png) | ![AzureWebServer card](AzureWebServer.card.png) |
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

' loads the AzureWebServer element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWebServer')
AzureWebServer('element', 'Web Server', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureWebServer element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWebServer')
AzureWebServer('element', 'Web Server', 'an optional tech field')
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

' loads the AzureWebServer card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWebServer')
AzureWebServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureWebServer card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWebServer')
AzureWebServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
