# AwsCodedeploy
```text
elements/aws/DeveloperTools/AwsCodedeploy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCodedeploy icon](../../../icons/aws/DeveloperTools/AwsCodedeploy.png) | ![AwsCodedeploy element](AwsCodedeploy.element.png) | ![AwsCodedeploy card](AwsCodedeploy.card.png) |
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

' loads the AwsCodedeploy element
include('elements/aws/DeveloperTools/AwsCodedeploy')
AwsCodedeploy('element', 'Codedeploy', 'an optional tech field')
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

' loads the AwsCodedeploy element
include('elements/aws/DeveloperTools/AwsCodedeploy')
AwsCodedeploy('element', 'Codedeploy', 'an optional tech field')
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

' loads the AwsCodedeploy card
include('elements/aws/DeveloperTools/AwsCodedeploy')
AwsCodedeployCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCodedeploy card
include('elements/aws/DeveloperTools/AwsCodedeploy')
AwsCodedeployCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
