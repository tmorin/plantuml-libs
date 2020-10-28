# AzureLicenseGroup
```text
elements/azure/FlatSymbols/CneIntune/AzureLicenseGroup
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLicenseGroup icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureLicenseGroup.png) | ![AzureLicenseGroup element](AzureLicenseGroup.element.png) | ![AzureLicenseGroup card](AzureLicenseGroup.card.png) |
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

' loads the AzureLicenseGroup element
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseGroup')
AzureLicenseGroup('element', 'License Group', 'an optional tech field')
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

' loads the AzureLicenseGroup element
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseGroup')
AzureLicenseGroup('element', 'License Group', 'an optional tech field')
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

' loads the AzureLicenseGroup card
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseGroup')
AzureLicenseGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLicenseGroup card
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseGroup')
AzureLicenseGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
