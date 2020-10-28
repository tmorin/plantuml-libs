# AwsAnalytics
```text
elements/aws/Analytics/AwsAnalytics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsAnalytics icon](../../../icons/aws/Analytics/AwsAnalytics.png) | ![AwsAnalytics element](AwsAnalytics.element.png) | ![AwsAnalytics card](AwsAnalytics.card.png) |
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

' loads the AwsAnalytics element
include('elements/aws/Analytics/AwsAnalytics')
AwsAnalytics('element', 'Analytics', 'an optional tech field')
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

' loads the AwsAnalytics element
include('elements/aws/Analytics/AwsAnalytics')
AwsAnalytics('element', 'Analytics', 'an optional tech field')
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

' loads the AwsAnalytics card
include('elements/aws/Analytics/AwsAnalytics')
AwsAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsAnalytics card
include('elements/aws/Analytics/AwsAnalytics')
AwsAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
