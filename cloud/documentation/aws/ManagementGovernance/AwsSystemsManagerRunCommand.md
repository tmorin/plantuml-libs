# AwsSystemsManagerRunCommand
```text
elements/aws/ManagementGovernance/AwsSystemsManagerRunCommand
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerRunCommand icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerRunCommand.png) | ![AwsSystemsManagerRunCommand element](AwsSystemsManagerRunCommand.element.png) | ![AwsSystemsManagerRunCommand card](AwsSystemsManagerRunCommand.card.png) |
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

' loads the AwsSystemsManagerRunCommand element
include('elements/aws/ManagementGovernance/AwsSystemsManagerRunCommand')
AwsSystemsManagerRunCommand('element', 'Systems Manager Run Command', 'an optional tech field')
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

' loads the AwsSystemsManagerRunCommand element
include('elements/aws/ManagementGovernance/AwsSystemsManagerRunCommand')
AwsSystemsManagerRunCommand('element', 'Systems Manager Run Command', 'an optional tech field')
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

' loads the AwsSystemsManagerRunCommand card
include('elements/aws/ManagementGovernance/AwsSystemsManagerRunCommand')
AwsSystemsManagerRunCommandCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerRunCommand card
include('elements/aws/ManagementGovernance/AwsSystemsManagerRunCommand')
AwsSystemsManagerRunCommandCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
