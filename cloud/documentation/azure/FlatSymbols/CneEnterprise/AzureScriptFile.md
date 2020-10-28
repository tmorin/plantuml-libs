# AzureScriptFile
```text
elements/azure/FlatSymbols/CneEnterprise/AzureScriptFile
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureScriptFile icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureScriptFile.png) | ![AzureScriptFile element](AzureScriptFile.element.png) | ![AzureScriptFile card](AzureScriptFile.card.png) |
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

' loads the AzureScriptFile element
include('elements/azure/FlatSymbols/CneEnterprise/AzureScriptFile')
AzureScriptFile('element', 'Script File', 'an optional tech field')
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

' loads the AzureScriptFile element
include('elements/azure/FlatSymbols/CneEnterprise/AzureScriptFile')
AzureScriptFile('element', 'Script File', 'an optional tech field')
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

' loads the AzureScriptFile card
include('elements/azure/FlatSymbols/CneEnterprise/AzureScriptFile')
AzureScriptFileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureScriptFile card
include('elements/azure/FlatSymbols/CneEnterprise/AzureScriptFile')
AzureScriptFileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
