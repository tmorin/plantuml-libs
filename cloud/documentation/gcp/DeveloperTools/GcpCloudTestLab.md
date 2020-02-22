# GcpCloudTestLab
```text
elements/gcp/DeveloperTools/GcpCloudTestLab
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudTestLab icon](../../../icons/gcp/DeveloperTools/GcpCloudTestLab.png) | ![GcpCloudTestLab element](GcpCloudTestLab.element.png) | ![GcpCloudTestLab card](GcpCloudTestLab.card.png) |
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

' loads the GcpCloudTestLab element
include('elements/gcp/DeveloperTools/GcpCloudTestLab')
GcpCloudTestLab('element', 'Cloud Test Lab', 'an optional tech field')
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

' loads the GcpCloudTestLab element
include('elements/gcp/DeveloperTools/GcpCloudTestLab')
GcpCloudTestLab('element', 'Cloud Test Lab', 'an optional tech field')
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

' loads the GcpCloudTestLab card
include('elements/gcp/DeveloperTools/GcpCloudTestLab')
GcpCloudTestLabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudTestLab card
include('elements/gcp/DeveloperTools/GcpCloudTestLab')
GcpCloudTestLabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
