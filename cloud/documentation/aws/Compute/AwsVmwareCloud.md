# AwsVmwareCloud
```text
elements/aws/Compute/AwsVmwareCloud
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVmwareCloud icon](../../../icons/aws/Compute/AwsVmwareCloud.png) | ![AwsVmwareCloud element](AwsVmwareCloud.element.png) | ![AwsVmwareCloud card](AwsVmwareCloud.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsVmwareCloud element
include('elements/aws/Compute/AwsVmwareCloud')
AwsVmwareCloud('element', 'Vmware Cloud', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsVmwareCloud element
include('elements/aws/Compute/AwsVmwareCloud')
AwsVmwareCloud('element', 'Vmware Cloud', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsVmwareCloud card
include('elements/aws/Compute/AwsVmwareCloud')
AwsVmwareCloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/aws')

' loads the AwsVmwareCloud card
include('elements/aws/Compute/AwsVmwareCloud')
AwsVmwareCloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
