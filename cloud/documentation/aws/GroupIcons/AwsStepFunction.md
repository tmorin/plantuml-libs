# AwsStepFunction
```text
elements/aws/GroupIcons/AwsStepFunction
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStepFunction icon](../../../icons/aws/GroupIcons/AwsStepFunction.png) | ![AwsStepFunction element](AwsStepFunction.element.png) | ![AwsStepFunction card](AwsStepFunction.card.png) |
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

' loads the AwsStepFunction element
include('elements/aws/GroupIcons/AwsStepFunction')
AwsStepFunction('element', 'Step Function', 'an optional tech field')
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

' loads the AwsStepFunction element
include('elements/aws/GroupIcons/AwsStepFunction')
AwsStepFunction('element', 'Step Function', 'an optional tech field')
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

' loads the AwsStepFunction card
include('elements/aws/GroupIcons/AwsStepFunction')
AwsStepFunctionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStepFunction card
include('elements/aws/GroupIcons/AwsStepFunction')
AwsStepFunctionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
