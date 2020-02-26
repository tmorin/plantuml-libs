# AzureCertificateCompliance
```text
elements/azure/FlatSymbols/CneIntune/AzureCertificateCompliance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCertificateCompliance icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureCertificateCompliance.png) | ![AzureCertificateCompliance element](AzureCertificateCompliance.element.png) | ![AzureCertificateCompliance card](AzureCertificateCompliance.card.png) |
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

' loads the AzureCertificateCompliance element
include('elements/azure/FlatSymbols/CneIntune/AzureCertificateCompliance')
AzureCertificateCompliance('element', 'Certificate Compliance', 'an optional tech field')
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

' loads the AzureCertificateCompliance element
include('elements/azure/FlatSymbols/CneIntune/AzureCertificateCompliance')
AzureCertificateCompliance('element', 'Certificate Compliance', 'an optional tech field')
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

' loads the AzureCertificateCompliance card
include('elements/azure/FlatSymbols/CneIntune/AzureCertificateCompliance')
AzureCertificateComplianceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCertificateCompliance card
include('elements/azure/FlatSymbols/CneIntune/AzureCertificateCompliance')
AzureCertificateComplianceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
