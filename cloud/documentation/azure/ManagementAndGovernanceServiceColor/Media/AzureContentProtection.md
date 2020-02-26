# AzureContentProtection
```text
elements/azure/ManagementAndGovernanceServiceColor/Media/AzureContentProtection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureContentProtection icon](../../../../icons/azure/ManagementAndGovernanceServiceColor/Media/AzureContentProtection.png) | ![AzureContentProtection element](AzureContentProtection.element.png) | ![AzureContentProtection card](AzureContentProtection.card.png) |
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

' loads the AzureContentProtection element
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureContentProtection')
AzureContentProtection('element', 'Content Protection', 'an optional tech field')
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

' loads the AzureContentProtection element
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureContentProtection')
AzureContentProtection('element', 'Content Protection', 'an optional tech field')
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

' loads the AzureContentProtection card
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureContentProtection')
AzureContentProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureContentProtection card
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureContentProtection')
AzureContentProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
