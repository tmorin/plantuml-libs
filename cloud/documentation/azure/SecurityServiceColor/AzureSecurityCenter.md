# AzureSecurityCenter
```text
elements/azure/SecurityServiceColor/AzureSecurityCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSecurityCenter icon](../../../icons/azure/SecurityServiceColor/AzureSecurityCenter.png) | ![AzureSecurityCenter element](AzureSecurityCenter.element.png) | ![AzureSecurityCenter card](AzureSecurityCenter.card.png) |
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

' loads the AzureSecurityCenter element
include('elements/azure/SecurityServiceColor/AzureSecurityCenter')
AzureSecurityCenter('element', 'Security Center', 'an optional tech field')
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

' loads the AzureSecurityCenter element
include('elements/azure/SecurityServiceColor/AzureSecurityCenter')
AzureSecurityCenter('element', 'Security Center', 'an optional tech field')
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

' loads the AzureSecurityCenter card
include('elements/azure/SecurityServiceColor/AzureSecurityCenter')
AzureSecurityCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSecurityCenter card
include('elements/azure/SecurityServiceColor/AzureSecurityCenter')
AzureSecurityCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
