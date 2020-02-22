# AzureTrafficManagerProfiles
```text
elements/azure/NetworkingServiceColor/AzureTrafficManagerProfiles
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTrafficManagerProfiles icon](../../../icons/azure/NetworkingServiceColor/AzureTrafficManagerProfiles.png) | ![AzureTrafficManagerProfiles element](AzureTrafficManagerProfiles.element.png) | ![AzureTrafficManagerProfiles card](AzureTrafficManagerProfiles.card.png) |
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

' loads the AzureTrafficManagerProfiles element
include('elements/azure/NetworkingServiceColor/AzureTrafficManagerProfiles')
AzureTrafficManagerProfiles('element', 'Traffic Manager Profiles', 'an optional tech field')
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

' loads the AzureTrafficManagerProfiles element
include('elements/azure/NetworkingServiceColor/AzureTrafficManagerProfiles')
AzureTrafficManagerProfiles('element', 'Traffic Manager Profiles', 'an optional tech field')
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

' loads the AzureTrafficManagerProfiles card
include('elements/azure/NetworkingServiceColor/AzureTrafficManagerProfiles')
AzureTrafficManagerProfilesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTrafficManagerProfiles card
include('elements/azure/NetworkingServiceColor/AzureTrafficManagerProfiles')
AzureTrafficManagerProfilesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
