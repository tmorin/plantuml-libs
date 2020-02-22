# AwsTraditionalServer
```text
elements/aws/General/AwsTraditionalServer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsTraditionalServer icon](../../../icons/aws/General/AwsTraditionalServer.png) | ![AwsTraditionalServer element](AwsTraditionalServer.element.png) | ![AwsTraditionalServer card](AwsTraditionalServer.card.png) |
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

' loads the AwsTraditionalServer element
include('elements/aws/General/AwsTraditionalServer')
AwsTraditionalServer('element', 'Traditional Server', 'an optional tech field')
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

' loads the AwsTraditionalServer element
include('elements/aws/General/AwsTraditionalServer')
AwsTraditionalServer('element', 'Traditional Server', 'an optional tech field')
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

' loads the AwsTraditionalServer card
include('elements/aws/General/AwsTraditionalServer')
AwsTraditionalServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsTraditionalServer card
include('elements/aws/General/AwsTraditionalServer')
AwsTraditionalServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
