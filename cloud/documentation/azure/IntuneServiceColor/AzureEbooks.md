# AzureEbooks
```text
elements/azure/IntuneServiceColor/AzureEbooks
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEbooks icon](../../../icons/azure/IntuneServiceColor/AzureEbooks.png) | ![AzureEbooks element](AzureEbooks.element.png) | ![AzureEbooks card](AzureEbooks.card.png) |
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

' loads the AzureEbooks element
include('elements/azure/IntuneServiceColor/AzureEbooks')
AzureEbooks('element', 'Ebooks', 'an optional tech field')
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

' loads the AzureEbooks element
include('elements/azure/IntuneServiceColor/AzureEbooks')
AzureEbooks('element', 'Ebooks', 'an optional tech field')
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

' loads the AzureEbooks card
include('elements/azure/IntuneServiceColor/AzureEbooks')
AzureEbooksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEbooks card
include('elements/azure/IntuneServiceColor/AzureEbooks')
AzureEbooksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
