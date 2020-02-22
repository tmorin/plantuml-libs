# AwsCodepipeline
```text
elements/aws/DeveloperTools/AwsCodepipeline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCodepipeline icon](../../../icons/aws/DeveloperTools/AwsCodepipeline.png) | ![AwsCodepipeline element](AwsCodepipeline.element.png) | ![AwsCodepipeline card](AwsCodepipeline.card.png) |
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

' loads the AwsCodepipeline element
include('elements/aws/DeveloperTools/AwsCodepipeline')
AwsCodepipeline('element', 'Codepipeline', 'an optional tech field')
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

' loads the AwsCodepipeline element
include('elements/aws/DeveloperTools/AwsCodepipeline')
AwsCodepipeline('element', 'Codepipeline', 'an optional tech field')
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

' loads the AwsCodepipeline card
include('elements/aws/DeveloperTools/AwsCodepipeline')
AwsCodepipelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCodepipeline card
include('elements/aws/DeveloperTools/AwsCodepipeline')
AwsCodepipelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
