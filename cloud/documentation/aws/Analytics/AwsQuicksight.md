# AwsQuicksight
```text
elements/aws/Analytics/AwsQuicksight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsQuicksight icon](../../../icons/aws/Analytics/AwsQuicksight.png) | ![AwsQuicksight element](AwsQuicksight.element.png) | ![AwsQuicksight card](AwsQuicksight.card.png) |
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

' loads the AwsQuicksight element
include('elements/aws/Analytics/AwsQuicksight')
AwsQuicksight('element', 'Quicksight', 'an optional tech field')
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

' loads the AwsQuicksight element
include('elements/aws/Analytics/AwsQuicksight')
AwsQuicksight('element', 'Quicksight', 'an optional tech field')
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

' loads the AwsQuicksight card
include('elements/aws/Analytics/AwsQuicksight')
AwsQuicksightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsQuicksight card
include('elements/aws/Analytics/AwsQuicksight')
AwsQuicksightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
