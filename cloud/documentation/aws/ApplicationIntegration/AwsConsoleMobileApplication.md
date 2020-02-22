# AwsConsoleMobileApplication
```text
elements/aws/ApplicationIntegration/AwsConsoleMobileApplication
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsConsoleMobileApplication icon](../../../icons/aws/ApplicationIntegration/AwsConsoleMobileApplication.png) | ![AwsConsoleMobileApplication element](AwsConsoleMobileApplication.element.png) | ![AwsConsoleMobileApplication card](AwsConsoleMobileApplication.card.png) |
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

' loads the AwsConsoleMobileApplication element
include('elements/aws/ApplicationIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplication('element', 'Console Mobile Application', 'an optional tech field')
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

' loads the AwsConsoleMobileApplication element
include('elements/aws/ApplicationIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplication('element', 'Console Mobile Application', 'an optional tech field')
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

' loads the AwsConsoleMobileApplication card
include('elements/aws/ApplicationIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplicationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsConsoleMobileApplication card
include('elements/aws/ApplicationIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplicationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
