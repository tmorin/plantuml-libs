# AzureNoncompliantApps
```text
elements/azure/FlatSymbols/CneIntune/AzureNoncompliantApps
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNoncompliantApps icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureNoncompliantApps.png) | ![AzureNoncompliantApps element](AzureNoncompliantApps.element.png) | ![AzureNoncompliantApps card](AzureNoncompliantApps.card.png) |
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

' loads the AzureNoncompliantApps element
include('elements/azure/FlatSymbols/CneIntune/AzureNoncompliantApps')
AzureNoncompliantApps('element', 'Noncompliant Apps', 'an optional tech field')
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

' loads the AzureNoncompliantApps element
include('elements/azure/FlatSymbols/CneIntune/AzureNoncompliantApps')
AzureNoncompliantApps('element', 'Noncompliant Apps', 'an optional tech field')
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

' loads the AzureNoncompliantApps card
include('elements/azure/FlatSymbols/CneIntune/AzureNoncompliantApps')
AzureNoncompliantAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNoncompliantApps card
include('elements/azure/FlatSymbols/CneIntune/AzureNoncompliantApps')
AzureNoncompliantAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
