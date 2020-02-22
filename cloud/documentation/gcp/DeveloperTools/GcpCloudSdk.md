# GcpCloudSdk
```text
elements/gcp/DeveloperTools/GcpCloudSdk
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudSdk icon](../../../icons/gcp/DeveloperTools/GcpCloudSdk.png) | ![GcpCloudSdk element](GcpCloudSdk.element.png) | ![GcpCloudSdk card](GcpCloudSdk.card.png) |
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

' loads the GcpCloudSdk element
include('elements/gcp/DeveloperTools/GcpCloudSdk')
GcpCloudSdk('element', 'Cloud Sdk', 'an optional tech field')
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

' loads the GcpCloudSdk element
include('elements/gcp/DeveloperTools/GcpCloudSdk')
GcpCloudSdk('element', 'Cloud Sdk', 'an optional tech field')
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

' loads the GcpCloudSdk card
include('elements/gcp/DeveloperTools/GcpCloudSdk')
GcpCloudSdkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudSdk card
include('elements/gcp/DeveloperTools/GcpCloudSdk')
GcpCloudSdkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
