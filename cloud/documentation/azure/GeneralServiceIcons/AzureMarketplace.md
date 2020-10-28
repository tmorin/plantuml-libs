# AzureMarketplace
```text
elements/azure/GeneralServiceIcons/AzureMarketplace
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMarketplace icon](../../../icons/azure/GeneralServiceIcons/AzureMarketplace.png) | ![AzureMarketplace element](AzureMarketplace.element.png) | ![AzureMarketplace card](AzureMarketplace.card.png) |
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

' loads the AzureMarketplace element
include('elements/azure/GeneralServiceIcons/AzureMarketplace')
AzureMarketplace('element', 'Marketplace', 'an optional tech field')
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

' loads the AzureMarketplace element
include('elements/azure/GeneralServiceIcons/AzureMarketplace')
AzureMarketplace('element', 'Marketplace', 'an optional tech field')
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

' loads the AzureMarketplace card
include('elements/azure/GeneralServiceIcons/AzureMarketplace')
AzureMarketplaceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMarketplace card
include('elements/azure/GeneralServiceIcons/AzureMarketplace')
AzureMarketplaceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
