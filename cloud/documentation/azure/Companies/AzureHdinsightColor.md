# AzureHdinsightColor
```text
elements/azure/Companies/AzureHdinsightColor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHdinsightColor icon](../../../icons/azure/Companies/AzureHdinsightColor.png) | ![AzureHdinsightColor element](AzureHdinsightColor.element.png) | ![AzureHdinsightColor card](AzureHdinsightColor.card.png) |
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

' loads the AzureHdinsightColor element
include('elements/azure/Companies/AzureHdinsightColor')
AzureHdinsightColor('element', 'Hdinsight Color', 'an optional tech field')
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

' loads the AzureHdinsightColor element
include('elements/azure/Companies/AzureHdinsightColor')
AzureHdinsightColor('element', 'Hdinsight Color', 'an optional tech field')
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

' loads the AzureHdinsightColor card
include('elements/azure/Companies/AzureHdinsightColor')
AzureHdinsightColorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHdinsightColor card
include('elements/azure/Companies/AzureHdinsightColor')
AzureHdinsightColorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
