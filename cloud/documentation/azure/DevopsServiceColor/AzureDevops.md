# AzureDevops
```text
elements/azure/DevopsServiceColor/AzureDevops
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDevops icon](../../../icons/azure/DevopsServiceColor/AzureDevops.png) | ![AzureDevops element](AzureDevops.element.png) | ![AzureDevops card](AzureDevops.card.png) |
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

' loads the AzureDevops element
include('elements/azure/DevopsServiceColor/AzureDevops')
AzureDevops('element', 'Devops', 'an optional tech field')
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

' loads the AzureDevops element
include('elements/azure/DevopsServiceColor/AzureDevops')
AzureDevops('element', 'Devops', 'an optional tech field')
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

' loads the AzureDevops card
include('elements/azure/DevopsServiceColor/AzureDevops')
AzureDevopsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDevops card
include('elements/azure/DevopsServiceColor/AzureDevops')
AzureDevopsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
