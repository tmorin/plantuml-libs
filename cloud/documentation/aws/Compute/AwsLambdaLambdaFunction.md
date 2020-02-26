# AwsLambdaLambdaFunction
```text
elements/aws/Compute/AwsLambdaLambdaFunction
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsLambdaLambdaFunction icon](../../../icons/aws/Compute/AwsLambdaLambdaFunction.png) | ![AwsLambdaLambdaFunction element](AwsLambdaLambdaFunction.element.png) | ![AwsLambdaLambdaFunction card](AwsLambdaLambdaFunction.card.png) |
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

' loads the AwsLambdaLambdaFunction element
include('elements/aws/Compute/AwsLambdaLambdaFunction')
AwsLambdaLambdaFunction('element', 'Lambda Lambda Function', 'an optional tech field')
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

' loads the AwsLambdaLambdaFunction element
include('elements/aws/Compute/AwsLambdaLambdaFunction')
AwsLambdaLambdaFunction('element', 'Lambda Lambda Function', 'an optional tech field')
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

' loads the AwsLambdaLambdaFunction card
include('elements/aws/Compute/AwsLambdaLambdaFunction')
AwsLambdaLambdaFunctionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsLambdaLambdaFunction card
include('elements/aws/Compute/AwsLambdaLambdaFunction')
AwsLambdaLambdaFunctionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
