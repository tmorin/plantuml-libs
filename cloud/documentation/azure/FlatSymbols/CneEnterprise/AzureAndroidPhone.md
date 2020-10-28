# AzureAndroidPhone
```text
elements/azure/FlatSymbols/CneEnterprise/AzureAndroidPhone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAndroidPhone icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureAndroidPhone.png) | ![AzureAndroidPhone element](AzureAndroidPhone.element.png) | ![AzureAndroidPhone card](AzureAndroidPhone.card.png) |
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

' loads the AzureAndroidPhone element
include('elements/azure/FlatSymbols/CneEnterprise/AzureAndroidPhone')
AzureAndroidPhone('element', 'Android Phone', 'an optional tech field')
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

' loads the AzureAndroidPhone element
include('elements/azure/FlatSymbols/CneEnterprise/AzureAndroidPhone')
AzureAndroidPhone('element', 'Android Phone', 'an optional tech field')
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

' loads the AzureAndroidPhone card
include('elements/azure/FlatSymbols/CneEnterprise/AzureAndroidPhone')
AzureAndroidPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAndroidPhone card
include('elements/azure/FlatSymbols/CneEnterprise/AzureAndroidPhone')
AzureAndroidPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
