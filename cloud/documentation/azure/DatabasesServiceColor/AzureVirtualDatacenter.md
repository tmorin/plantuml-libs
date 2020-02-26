# AzureVirtualDatacenter
```text
elements/azure/DatabasesServiceColor/AzureVirtualDatacenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVirtualDatacenter icon](../../../icons/azure/DatabasesServiceColor/AzureVirtualDatacenter.png) | ![AzureVirtualDatacenter element](AzureVirtualDatacenter.element.png) | ![AzureVirtualDatacenter card](AzureVirtualDatacenter.card.png) |
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

' loads the AzureVirtualDatacenter element
include('elements/azure/DatabasesServiceColor/AzureVirtualDatacenter')
AzureVirtualDatacenter('element', 'Virtual Datacenter', 'an optional tech field')
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

' loads the AzureVirtualDatacenter element
include('elements/azure/DatabasesServiceColor/AzureVirtualDatacenter')
AzureVirtualDatacenter('element', 'Virtual Datacenter', 'an optional tech field')
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

' loads the AzureVirtualDatacenter card
include('elements/azure/DatabasesServiceColor/AzureVirtualDatacenter')
AzureVirtualDatacenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVirtualDatacenter card
include('elements/azure/DatabasesServiceColor/AzureVirtualDatacenter')
AzureVirtualDatacenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
