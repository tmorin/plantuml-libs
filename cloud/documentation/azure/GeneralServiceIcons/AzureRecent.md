# AzureRecent
```text
elements/azure/GeneralServiceIcons/AzureRecent
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRecent icon](../../../icons/azure/GeneralServiceIcons/AzureRecent.png) | ![AzureRecent element](AzureRecent.element.png) | ![AzureRecent card](AzureRecent.card.png) |
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

' loads the AzureRecent element
include('elements/azure/GeneralServiceIcons/AzureRecent')
AzureRecent('element', 'Recent', 'an optional tech field')
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

' loads the AzureRecent element
include('elements/azure/GeneralServiceIcons/AzureRecent')
AzureRecent('element', 'Recent', 'an optional tech field')
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

' loads the AzureRecent card
include('elements/azure/GeneralServiceIcons/AzureRecent')
AzureRecentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRecent card
include('elements/azure/GeneralServiceIcons/AzureRecent')
AzureRecentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
