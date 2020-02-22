# AzureProtection
```text
elements/azure/FlatSymbols/CneIntune/AzureProtection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureProtection icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureProtection.png) | ![AzureProtection element](AzureProtection.element.png) | ![AzureProtection card](AzureProtection.card.png) |
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

' loads the AzureProtection element
include('elements/azure/FlatSymbols/CneIntune/AzureProtection')
AzureProtection('element', 'Protection', 'an optional tech field')
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

' loads the AzureProtection element
include('elements/azure/FlatSymbols/CneIntune/AzureProtection')
AzureProtection('element', 'Protection', 'an optional tech field')
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

' loads the AzureProtection card
include('elements/azure/FlatSymbols/CneIntune/AzureProtection')
AzureProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureProtection card
include('elements/azure/FlatSymbols/CneIntune/AzureProtection')
AzureProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
