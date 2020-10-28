# AwsDataPipeline
```text
elements/aws/Analytics/AwsDataPipeline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDataPipeline icon](../../../icons/aws/Analytics/AwsDataPipeline.png) | ![AwsDataPipeline element](AwsDataPipeline.element.png) | ![AwsDataPipeline card](AwsDataPipeline.card.png) |
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

' loads the AwsDataPipeline element
include('elements/aws/Analytics/AwsDataPipeline')
AwsDataPipeline('element', 'Data Pipeline', 'an optional tech field')
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

' loads the AwsDataPipeline element
include('elements/aws/Analytics/AwsDataPipeline')
AwsDataPipeline('element', 'Data Pipeline', 'an optional tech field')
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

' loads the AwsDataPipeline card
include('elements/aws/Analytics/AwsDataPipeline')
AwsDataPipelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDataPipeline card
include('elements/aws/Analytics/AwsDataPipeline')
AwsDataPipelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
