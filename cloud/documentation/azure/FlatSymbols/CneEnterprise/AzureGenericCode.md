# AzureGenericCode
```text
elements/azure/FlatSymbols/CneEnterprise/AzureGenericCode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGenericCode icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureGenericCode.png) | ![AzureGenericCode element](AzureGenericCode.element.png) | ![AzureGenericCode card](AzureGenericCode.card.png) |
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

' loads the AzureGenericCode element
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericCode')
AzureGenericCode('element', 'Generic Code', 'an optional tech field')
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

' loads the AzureGenericCode element
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericCode')
AzureGenericCode('element', 'Generic Code', 'an optional tech field')
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

' loads the AzureGenericCode card
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericCode')
AzureGenericCodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGenericCode card
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericCode')
AzureGenericCodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
