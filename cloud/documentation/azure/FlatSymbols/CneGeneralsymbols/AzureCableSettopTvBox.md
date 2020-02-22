# AzureCableSettopTvBox
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureCableSettopTvBox
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCableSettopTvBox icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureCableSettopTvBox.png) | ![AzureCableSettopTvBox element](AzureCableSettopTvBox.element.png) | ![AzureCableSettopTvBox card](AzureCableSettopTvBox.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureCableSettopTvBox element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCableSettopTvBox')
AzureCableSettopTvBox('element', 'Cable Settop Tv Box', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureCableSettopTvBox element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCableSettopTvBox')
AzureCableSettopTvBox('element', 'Cable Settop Tv Box', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the AzureCableSettopTvBox card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCableSettopTvBox')
AzureCableSettopTvBoxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureCableSettopTvBox card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCableSettopTvBox')
AzureCableSettopTvBoxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
