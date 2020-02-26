# AwsCodestar
```text
elements/aws/DeveloperTools/AwsCodestar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCodestar icon](../../../icons/aws/DeveloperTools/AwsCodestar.png) | ![AwsCodestar element](AwsCodestar.element.png) | ![AwsCodestar card](AwsCodestar.card.png) |
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

' loads the AwsCodestar element
include('elements/aws/DeveloperTools/AwsCodestar')
AwsCodestar('element', 'Codestar', 'an optional tech field')
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

' loads the AwsCodestar element
include('elements/aws/DeveloperTools/AwsCodestar')
AwsCodestar('element', 'Codestar', 'an optional tech field')
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

' loads the AwsCodestar card
include('elements/aws/DeveloperTools/AwsCodestar')
AwsCodestarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCodestar card
include('elements/aws/DeveloperTools/AwsCodestar')
AwsCodestarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
