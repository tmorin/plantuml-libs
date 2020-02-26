# AzureDataLake
```text
elements/azure/DatabasesServiceColor/AzureDataLake
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDataLake icon](../../../icons/azure/DatabasesServiceColor/AzureDataLake.png) | ![AzureDataLake element](AzureDataLake.element.png) | ![AzureDataLake card](AzureDataLake.card.png) |
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

' loads the AzureDataLake element
include('elements/azure/DatabasesServiceColor/AzureDataLake')
AzureDataLake('element', 'Data Lake', 'an optional tech field')
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

' loads the AzureDataLake element
include('elements/azure/DatabasesServiceColor/AzureDataLake')
AzureDataLake('element', 'Data Lake', 'an optional tech field')
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

' loads the AzureDataLake card
include('elements/azure/DatabasesServiceColor/AzureDataLake')
AzureDataLakeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDataLake card
include('elements/azure/DatabasesServiceColor/AzureDataLake')
AzureDataLakeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
