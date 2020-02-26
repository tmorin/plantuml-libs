# AzureCentralAdministrationSite
```text
elements/azure/FlatSymbols/CneSystemCenter/AzureCentralAdministrationSite
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCentralAdministrationSite icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzureCentralAdministrationSite.png) | ![AzureCentralAdministrationSite element](AzureCentralAdministrationSite.element.png) | ![AzureCentralAdministrationSite card](AzureCentralAdministrationSite.card.png) |
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

' loads the AzureCentralAdministrationSite element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureCentralAdministrationSite')
AzureCentralAdministrationSite('element', 'Central Administration Site', 'an optional tech field')
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

' loads the AzureCentralAdministrationSite element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureCentralAdministrationSite')
AzureCentralAdministrationSite('element', 'Central Administration Site', 'an optional tech field')
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

' loads the AzureCentralAdministrationSite card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureCentralAdministrationSite')
AzureCentralAdministrationSiteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCentralAdministrationSite card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureCentralAdministrationSite')
AzureCentralAdministrationSiteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
