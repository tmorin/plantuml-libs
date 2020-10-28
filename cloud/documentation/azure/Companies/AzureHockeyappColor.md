# AzureHockeyappColor
```text
elements/azure/Companies/AzureHockeyappColor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHockeyappColor icon](../../../icons/azure/Companies/AzureHockeyappColor.png) | ![AzureHockeyappColor element](AzureHockeyappColor.element.png) | ![AzureHockeyappColor card](AzureHockeyappColor.card.png) |
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

' loads the AzureHockeyappColor element
include('elements/azure/Companies/AzureHockeyappColor')
AzureHockeyappColor('element', 'Hockeyapp Color', 'an optional tech field')
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

' loads the AzureHockeyappColor element
include('elements/azure/Companies/AzureHockeyappColor')
AzureHockeyappColor('element', 'Hockeyapp Color', 'an optional tech field')
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

' loads the AzureHockeyappColor card
include('elements/azure/Companies/AzureHockeyappColor')
AzureHockeyappColorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHockeyappColor card
include('elements/azure/Companies/AzureHockeyappColor')
AzureHockeyappColorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
