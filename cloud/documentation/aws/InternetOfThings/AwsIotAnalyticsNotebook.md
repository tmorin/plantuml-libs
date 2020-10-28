# AwsIotAnalyticsNotebook
```text
elements/aws/InternetOfThings/AwsIotAnalyticsNotebook
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotAnalyticsNotebook icon](../../../icons/aws/InternetOfThings/AwsIotAnalyticsNotebook.png) | ![AwsIotAnalyticsNotebook element](AwsIotAnalyticsNotebook.element.png) | ![AwsIotAnalyticsNotebook card](AwsIotAnalyticsNotebook.card.png) |
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

' loads the AwsIotAnalyticsNotebook element
include('elements/aws/InternetOfThings/AwsIotAnalyticsNotebook')
AwsIotAnalyticsNotebook('element', 'Iot Analytics Notebook', 'an optional tech field')
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

' loads the AwsIotAnalyticsNotebook element
include('elements/aws/InternetOfThings/AwsIotAnalyticsNotebook')
AwsIotAnalyticsNotebook('element', 'Iot Analytics Notebook', 'an optional tech field')
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

' loads the AwsIotAnalyticsNotebook card
include('elements/aws/InternetOfThings/AwsIotAnalyticsNotebook')
AwsIotAnalyticsNotebookCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotAnalyticsNotebook card
include('elements/aws/InternetOfThings/AwsIotAnalyticsNotebook')
AwsIotAnalyticsNotebookCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
