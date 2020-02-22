# AzureEnrollment
```text
elements/azure/IntuneServiceColor/AzureEnrollment
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEnrollment icon](../../../icons/azure/IntuneServiceColor/AzureEnrollment.png) | ![AzureEnrollment element](AzureEnrollment.element.png) | ![AzureEnrollment card](AzureEnrollment.card.png) |
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

' loads the AzureEnrollment element
include('elements/azure/IntuneServiceColor/AzureEnrollment')
AzureEnrollment('element', 'Enrollment', 'an optional tech field')
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

' loads the AzureEnrollment element
include('elements/azure/IntuneServiceColor/AzureEnrollment')
AzureEnrollment('element', 'Enrollment', 'an optional tech field')
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

' loads the AzureEnrollment card
include('elements/azure/IntuneServiceColor/AzureEnrollment')
AzureEnrollmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEnrollment card
include('elements/azure/IntuneServiceColor/AzureEnrollment')
AzureEnrollmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
