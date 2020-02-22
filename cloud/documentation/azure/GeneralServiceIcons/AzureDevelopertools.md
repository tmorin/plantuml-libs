# AzureDevelopertools
```text
elements/azure/GeneralServiceIcons/AzureDevelopertools
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDevelopertools icon](../../../icons/azure/GeneralServiceIcons/AzureDevelopertools.png) | ![AzureDevelopertools element](AzureDevelopertools.element.png) | ![AzureDevelopertools card](AzureDevelopertools.card.png) |
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

' loads the AzureDevelopertools element
include('elements/azure/GeneralServiceIcons/AzureDevelopertools')
AzureDevelopertools('element', 'Developertools', 'an optional tech field')
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

' loads the AzureDevelopertools element
include('elements/azure/GeneralServiceIcons/AzureDevelopertools')
AzureDevelopertools('element', 'Developertools', 'an optional tech field')
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

' loads the AzureDevelopertools card
include('elements/azure/GeneralServiceIcons/AzureDevelopertools')
AzureDevelopertoolsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDevelopertools card
include('elements/azure/GeneralServiceIcons/AzureDevelopertools')
AzureDevelopertoolsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
