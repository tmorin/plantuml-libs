# AwsIotAnalytics
```text
elements/aws/InternetOfThings/AwsIotAnalytics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotAnalytics icon](../../../icons/aws/InternetOfThings/AwsIotAnalytics.png) | ![AwsIotAnalytics element](AwsIotAnalytics.element.png) | ![AwsIotAnalytics card](AwsIotAnalytics.card.png) |
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

' loads the AwsIotAnalytics element
include('elements/aws/InternetOfThings/AwsIotAnalytics')
AwsIotAnalytics('element', 'Iot Analytics', 'an optional tech field')
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

' loads the AwsIotAnalytics element
include('elements/aws/InternetOfThings/AwsIotAnalytics')
AwsIotAnalytics('element', 'Iot Analytics', 'an optional tech field')
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

' loads the AwsIotAnalytics card
include('elements/aws/InternetOfThings/AwsIotAnalytics')
AwsIotAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotAnalytics card
include('elements/aws/InternetOfThings/AwsIotAnalytics')
AwsIotAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
