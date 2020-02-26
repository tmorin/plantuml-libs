# AzureCloudCycle
```text
elements/azure/Companies/AzureCloudCycle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCloudCycle icon](../../../icons/azure/Companies/AzureCloudCycle.png) | ![AzureCloudCycle element](AzureCloudCycle.element.png) | ![AzureCloudCycle card](AzureCloudCycle.card.png) |
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

' loads the AzureCloudCycle element
include('elements/azure/Companies/AzureCloudCycle')
AzureCloudCycle('element', 'Cloud Cycle', 'an optional tech field')
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

' loads the AzureCloudCycle element
include('elements/azure/Companies/AzureCloudCycle')
AzureCloudCycle('element', 'Cloud Cycle', 'an optional tech field')
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

' loads the AzureCloudCycle card
include('elements/azure/Companies/AzureCloudCycle')
AzureCloudCycleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCloudCycle card
include('elements/azure/Companies/AzureCloudCycle')
AzureCloudCycleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
