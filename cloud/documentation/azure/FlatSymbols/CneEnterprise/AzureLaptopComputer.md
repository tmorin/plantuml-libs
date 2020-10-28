# AzureLaptopComputer
```text
elements/azure/FlatSymbols/CneEnterprise/AzureLaptopComputer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLaptopComputer icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureLaptopComputer.png) | ![AzureLaptopComputer element](AzureLaptopComputer.element.png) | ![AzureLaptopComputer card](AzureLaptopComputer.card.png) |
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

' loads the AzureLaptopComputer element
include('elements/azure/FlatSymbols/CneEnterprise/AzureLaptopComputer')
AzureLaptopComputer('element', 'Laptop Computer', 'an optional tech field')
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

' loads the AzureLaptopComputer element
include('elements/azure/FlatSymbols/CneEnterprise/AzureLaptopComputer')
AzureLaptopComputer('element', 'Laptop Computer', 'an optional tech field')
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

' loads the AzureLaptopComputer card
include('elements/azure/FlatSymbols/CneEnterprise/AzureLaptopComputer')
AzureLaptopComputerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLaptopComputer card
include('elements/azure/FlatSymbols/CneEnterprise/AzureLaptopComputer')
AzureLaptopComputerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
