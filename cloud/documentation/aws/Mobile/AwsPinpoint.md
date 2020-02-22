# AwsPinpoint
```text
elements/aws/Mobile/AwsPinpoint
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsPinpoint icon](../../../icons/aws/Mobile/AwsPinpoint.png) | ![AwsPinpoint element](AwsPinpoint.element.png) | ![AwsPinpoint card](AwsPinpoint.card.png) |
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

' loads the AwsPinpoint element
include('elements/aws/Mobile/AwsPinpoint')
AwsPinpoint('element', 'Pinpoint', 'an optional tech field')
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

' loads the AwsPinpoint element
include('elements/aws/Mobile/AwsPinpoint')
AwsPinpoint('element', 'Pinpoint', 'an optional tech field')
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

' loads the AwsPinpoint card
include('elements/aws/Mobile/AwsPinpoint')
AwsPinpointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsPinpoint card
include('elements/aws/Mobile/AwsPinpoint')
AwsPinpointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
