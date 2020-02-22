# AzureInformationProtection
```text
elements/azure/IdentityServiceColor/AzureInformationProtection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureInformationProtection icon](../../../icons/azure/IdentityServiceColor/AzureInformationProtection.png) | ![AzureInformationProtection element](AzureInformationProtection.element.png) | ![AzureInformationProtection card](AzureInformationProtection.card.png) |
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

' loads the AzureInformationProtection element
include('elements/azure/IdentityServiceColor/AzureInformationProtection')
AzureInformationProtection('element', 'Information Protection', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureInformationProtection element
include('elements/azure/IdentityServiceColor/AzureInformationProtection')
AzureInformationProtection('element', 'Information Protection', 'an optional tech field')
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

' loads the AzureInformationProtection card
include('elements/azure/IdentityServiceColor/AzureInformationProtection')
AzureInformationProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureInformationProtection card
include('elements/azure/IdentityServiceColor/AzureInformationProtection')
AzureInformationProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
