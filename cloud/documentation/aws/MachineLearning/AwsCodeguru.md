# AwsCodeguru
```text
elements/aws/MachineLearning/AwsCodeguru
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCodeguru icon](../../../icons/aws/MachineLearning/AwsCodeguru.png) | ![AwsCodeguru element](AwsCodeguru.element.png) | ![AwsCodeguru card](AwsCodeguru.card.png) |
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

' loads the AwsCodeguru element
include('elements/aws/MachineLearning/AwsCodeguru')
AwsCodeguru('element', 'Codeguru', 'an optional tech field')
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

' loads the AwsCodeguru element
include('elements/aws/MachineLearning/AwsCodeguru')
AwsCodeguru('element', 'Codeguru', 'an optional tech field')
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

' loads the AwsCodeguru card
include('elements/aws/MachineLearning/AwsCodeguru')
AwsCodeguruCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCodeguru card
include('elements/aws/MachineLearning/AwsCodeguru')
AwsCodeguruCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
