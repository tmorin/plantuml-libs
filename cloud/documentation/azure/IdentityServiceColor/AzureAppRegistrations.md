# AzureAppRegistrations
```text
elements/azure/IdentityServiceColor/AzureAppRegistrations
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAppRegistrations icon](../../../icons/azure/IdentityServiceColor/AzureAppRegistrations.png) | ![AzureAppRegistrations element](AzureAppRegistrations.element.png) | ![AzureAppRegistrations card](AzureAppRegistrations.card.png) |
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

' loads the AzureAppRegistrations element
include('elements/azure/IdentityServiceColor/AzureAppRegistrations')
AzureAppRegistrations('element', 'App Registrations', 'an optional tech field')
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

' loads the AzureAppRegistrations element
include('elements/azure/IdentityServiceColor/AzureAppRegistrations')
AzureAppRegistrations('element', 'App Registrations', 'an optional tech field')
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

' loads the AzureAppRegistrations card
include('elements/azure/IdentityServiceColor/AzureAppRegistrations')
AzureAppRegistrationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAppRegistrations card
include('elements/azure/IdentityServiceColor/AzureAppRegistrations')
AzureAppRegistrationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
