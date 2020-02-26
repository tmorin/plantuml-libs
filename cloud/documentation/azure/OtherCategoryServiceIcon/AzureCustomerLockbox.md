# AzureCustomerLockbox
```text
elements/azure/OtherCategoryServiceIcon/AzureCustomerLockbox
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCustomerLockbox icon](../../../icons/azure/OtherCategoryServiceIcon/AzureCustomerLockbox.png) | ![AzureCustomerLockbox element](AzureCustomerLockbox.element.png) | ![AzureCustomerLockbox card](AzureCustomerLockbox.card.png) |
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

' loads the AzureCustomerLockbox element
include('elements/azure/OtherCategoryServiceIcon/AzureCustomerLockbox')
AzureCustomerLockbox('element', 'Customer Lockbox', 'an optional tech field')
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

' loads the AzureCustomerLockbox element
include('elements/azure/OtherCategoryServiceIcon/AzureCustomerLockbox')
AzureCustomerLockbox('element', 'Customer Lockbox', 'an optional tech field')
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

' loads the AzureCustomerLockbox card
include('elements/azure/OtherCategoryServiceIcon/AzureCustomerLockbox')
AzureCustomerLockboxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCustomerLockbox card
include('elements/azure/OtherCategoryServiceIcon/AzureCustomerLockbox')
AzureCustomerLockboxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
