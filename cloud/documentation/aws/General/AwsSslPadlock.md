# AwsSslPadlock
```text
elements/aws/General/AwsSslPadlock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSslPadlock icon](../../../icons/aws/General/AwsSslPadlock.png) | ![AwsSslPadlock element](AwsSslPadlock.element.png) | ![AwsSslPadlock card](AwsSslPadlock.card.png) |
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

' loads the AwsSslPadlock element
include('elements/aws/General/AwsSslPadlock')
AwsSslPadlock('element', 'Ssl Padlock', 'an optional tech field')
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

' loads the AwsSslPadlock element
include('elements/aws/General/AwsSslPadlock')
AwsSslPadlock('element', 'Ssl Padlock', 'an optional tech field')
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

' loads the AwsSslPadlock card
include('elements/aws/General/AwsSslPadlock')
AwsSslPadlockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSslPadlock card
include('elements/aws/General/AwsSslPadlock')
AwsSslPadlockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
