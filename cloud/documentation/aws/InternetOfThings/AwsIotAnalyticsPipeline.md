# AwsIotAnalyticsPipeline
```text
elements/aws/InternetOfThings/AwsIotAnalyticsPipeline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotAnalyticsPipeline icon](../../../icons/aws/InternetOfThings/AwsIotAnalyticsPipeline.png) | ![AwsIotAnalyticsPipeline element](AwsIotAnalyticsPipeline.element.png) | ![AwsIotAnalyticsPipeline card](AwsIotAnalyticsPipeline.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsIotAnalyticsPipeline element
include('elements/aws/InternetOfThings/AwsIotAnalyticsPipeline')
AwsIotAnalyticsPipeline('element', 'Iot Analytics Pipeline', 'an optional tech field')
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

' loads the AwsIotAnalyticsPipeline element
include('elements/aws/InternetOfThings/AwsIotAnalyticsPipeline')
AwsIotAnalyticsPipeline('element', 'Iot Analytics Pipeline', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsIotAnalyticsPipeline card
include('elements/aws/InternetOfThings/AwsIotAnalyticsPipeline')
AwsIotAnalyticsPipelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotAnalyticsPipeline card
include('elements/aws/InternetOfThings/AwsIotAnalyticsPipeline')
AwsIotAnalyticsPipelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
