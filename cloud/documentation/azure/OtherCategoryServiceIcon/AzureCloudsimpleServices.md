# AzureCloudsimpleServices
```text
elements/azure/OtherCategoryServiceIcon/AzureCloudsimpleServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCloudsimpleServices icon](../../../icons/azure/OtherCategoryServiceIcon/AzureCloudsimpleServices.png) | ![AzureCloudsimpleServices element](AzureCloudsimpleServices.element.png) | ![AzureCloudsimpleServices card](AzureCloudsimpleServices.card.png) |
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

' loads the AzureCloudsimpleServices element
include('elements/azure/OtherCategoryServiceIcon/AzureCloudsimpleServices')
AzureCloudsimpleServices('element', 'Cloudsimple Services', 'an optional tech field')
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

' loads the AzureCloudsimpleServices element
include('elements/azure/OtherCategoryServiceIcon/AzureCloudsimpleServices')
AzureCloudsimpleServices('element', 'Cloudsimple Services', 'an optional tech field')
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

' loads the AzureCloudsimpleServices card
include('elements/azure/OtherCategoryServiceIcon/AzureCloudsimpleServices')
AzureCloudsimpleServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCloudsimpleServices card
include('elements/azure/OtherCategoryServiceIcon/AzureCloudsimpleServices')
AzureCloudsimpleServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
