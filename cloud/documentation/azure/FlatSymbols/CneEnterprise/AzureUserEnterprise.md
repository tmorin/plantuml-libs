# AzureUserEnterprise
```text
elements/azure/FlatSymbols/CneEnterprise/AzureUserEnterprise
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUserEnterprise icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureUserEnterprise.png) | ![AzureUserEnterprise element](AzureUserEnterprise.element.png) | ![AzureUserEnterprise card](AzureUserEnterprise.card.png) |
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

' loads the AzureUserEnterprise element
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserEnterprise')
AzureUserEnterprise('element', 'User Enterprise', 'an optional tech field')
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

' loads the AzureUserEnterprise element
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserEnterprise')
AzureUserEnterprise('element', 'User Enterprise', 'an optional tech field')
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

' loads the AzureUserEnterprise card
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserEnterprise')
AzureUserEnterpriseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureUserEnterprise card
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserEnterprise')
AzureUserEnterpriseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
