# AzureKeyVaults
```text
elements/azure/SecurityServiceColor/AzureKeyVaults
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureKeyVaults icon](../../../icons/azure/SecurityServiceColor/AzureKeyVaults.png) | ![AzureKeyVaults element](AzureKeyVaults.element.png) | ![AzureKeyVaults card](AzureKeyVaults.card.png) |
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

' loads the AzureKeyVaults element
include('elements/azure/SecurityServiceColor/AzureKeyVaults')
AzureKeyVaults('element', 'Key Vaults', 'an optional tech field')
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

' loads the AzureKeyVaults element
include('elements/azure/SecurityServiceColor/AzureKeyVaults')
AzureKeyVaults('element', 'Key Vaults', 'an optional tech field')
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

' loads the AzureKeyVaults card
include('elements/azure/SecurityServiceColor/AzureKeyVaults')
AzureKeyVaultsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureKeyVaults card
include('elements/azure/SecurityServiceColor/AzureKeyVaults')
AzureKeyVaultsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
