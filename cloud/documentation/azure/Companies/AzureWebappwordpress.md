# AzureWebappwordpress
```text
elements/azure/Companies/AzureWebappwordpress
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWebappwordpress icon](../../../icons/azure/Companies/AzureWebappwordpress.png) | ![AzureWebappwordpress element](AzureWebappwordpress.element.png) | ![AzureWebappwordpress card](AzureWebappwordpress.card.png) |
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

' loads the AzureWebappwordpress element
include('elements/azure/Companies/AzureWebappwordpress')
AzureWebappwordpress('element', 'Webappwordpress', 'an optional tech field')
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

' loads the AzureWebappwordpress element
include('elements/azure/Companies/AzureWebappwordpress')
AzureWebappwordpress('element', 'Webappwordpress', 'an optional tech field')
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

' loads the AzureWebappwordpress card
include('elements/azure/Companies/AzureWebappwordpress')
AzureWebappwordpressCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureWebappwordpress card
include('elements/azure/Companies/AzureWebappwordpress')
AzureWebappwordpressCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
