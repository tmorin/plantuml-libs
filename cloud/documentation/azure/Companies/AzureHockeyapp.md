# AzureHockeyapp
```text
elements/azure/Companies/AzureHockeyapp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHockeyapp icon](../../../icons/azure/Companies/AzureHockeyapp.png) | ![AzureHockeyapp element](AzureHockeyapp.element.png) | ![AzureHockeyapp card](AzureHockeyapp.card.png) |
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

' loads the AzureHockeyapp element
include('elements/azure/Companies/AzureHockeyapp')
AzureHockeyapp('element', 'Hockeyapp', 'an optional tech field')
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

' loads the AzureHockeyapp element
include('elements/azure/Companies/AzureHockeyapp')
AzureHockeyapp('element', 'Hockeyapp', 'an optional tech field')
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

' loads the AzureHockeyapp card
include('elements/azure/Companies/AzureHockeyapp')
AzureHockeyappCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHockeyapp card
include('elements/azure/Companies/AzureHockeyapp')
AzureHockeyappCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
