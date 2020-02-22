# AzureIotHub
```text
elements/azure/InternetOfThingsServiceColor/AzureIotHub
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIotHub icon](../../../icons/azure/InternetOfThingsServiceColor/AzureIotHub.png) | ![AzureIotHub element](AzureIotHub.element.png) | ![AzureIotHub card](AzureIotHub.card.png) |
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

' loads the AzureIotHub element
include('elements/azure/InternetOfThingsServiceColor/AzureIotHub')
AzureIotHub('element', 'Iot Hub', 'an optional tech field')
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

' loads the AzureIotHub element
include('elements/azure/InternetOfThingsServiceColor/AzureIotHub')
AzureIotHub('element', 'Iot Hub', 'an optional tech field')
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

' loads the AzureIotHub card
include('elements/azure/InternetOfThingsServiceColor/AzureIotHub')
AzureIotHubCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIotHub card
include('elements/azure/InternetOfThingsServiceColor/AzureIotHub')
AzureIotHubCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
