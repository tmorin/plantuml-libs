# AzurePerformanceMonitor
```text
elements/azure/FlatSymbols/CneEnterprise/AzurePerformanceMonitor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePerformanceMonitor icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzurePerformanceMonitor.png) | ![AzurePerformanceMonitor element](AzurePerformanceMonitor.element.png) | ![AzurePerformanceMonitor card](AzurePerformanceMonitor.card.png) |
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

' loads the AzurePerformanceMonitor element
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformanceMonitor')
AzurePerformanceMonitor('element', 'Performance Monitor', 'an optional tech field')
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

' loads the AzurePerformanceMonitor element
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformanceMonitor')
AzurePerformanceMonitor('element', 'Performance Monitor', 'an optional tech field')
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

' loads the AzurePerformanceMonitor card
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformanceMonitor')
AzurePerformanceMonitorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePerformanceMonitor card
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformanceMonitor')
AzurePerformanceMonitorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
