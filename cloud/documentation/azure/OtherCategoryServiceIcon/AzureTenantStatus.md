# AzureTenantStatus
```text
elements/azure/OtherCategoryServiceIcon/AzureTenantStatus
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTenantStatus icon](../../../icons/azure/OtherCategoryServiceIcon/AzureTenantStatus.png) | ![AzureTenantStatus element](AzureTenantStatus.element.png) | ![AzureTenantStatus card](AzureTenantStatus.card.png) |
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

' loads the AzureTenantStatus element
include('elements/azure/OtherCategoryServiceIcon/AzureTenantStatus')
AzureTenantStatus('element', 'Tenant Status', 'an optional tech field')
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

' loads the AzureTenantStatus element
include('elements/azure/OtherCategoryServiceIcon/AzureTenantStatus')
AzureTenantStatus('element', 'Tenant Status', 'an optional tech field')
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

' loads the AzureTenantStatus card
include('elements/azure/OtherCategoryServiceIcon/AzureTenantStatus')
AzureTenantStatusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTenantStatus card
include('elements/azure/OtherCategoryServiceIcon/AzureTenantStatus')
AzureTenantStatusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
