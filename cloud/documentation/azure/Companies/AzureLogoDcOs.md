# AzureLogoDcOs
```text
elements/azure/Companies/AzureLogoDcOs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLogoDcOs icon](../../../icons/azure/Companies/AzureLogoDcOs.png) | ![AzureLogoDcOs element](AzureLogoDcOs.element.png) | ![AzureLogoDcOs card](AzureLogoDcOs.card.png) |
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

' loads the AzureLogoDcOs element
include('elements/azure/Companies/AzureLogoDcOs')
AzureLogoDcOs('element', 'Logo Dc Os', 'an optional tech field')
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

' loads the AzureLogoDcOs element
include('elements/azure/Companies/AzureLogoDcOs')
AzureLogoDcOs('element', 'Logo Dc Os', 'an optional tech field')
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

' loads the AzureLogoDcOs card
include('elements/azure/Companies/AzureLogoDcOs')
AzureLogoDcOsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLogoDcOs card
include('elements/azure/Companies/AzureLogoDcOs')
AzureLogoDcOsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
