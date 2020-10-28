# AwsIotLambdaFunction
```text
elements/aws/InternetOfThings/AwsIotLambdaFunction
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotLambdaFunction icon](../../../icons/aws/InternetOfThings/AwsIotLambdaFunction.png) | ![AwsIotLambdaFunction element](AwsIotLambdaFunction.element.png) | ![AwsIotLambdaFunction card](AwsIotLambdaFunction.card.png) |
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

' loads the AwsIotLambdaFunction element
include('elements/aws/InternetOfThings/AwsIotLambdaFunction')
AwsIotLambdaFunction('element', 'Iot Lambda Function', 'an optional tech field')
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

' loads the AwsIotLambdaFunction element
include('elements/aws/InternetOfThings/AwsIotLambdaFunction')
AwsIotLambdaFunction('element', 'Iot Lambda Function', 'an optional tech field')
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

' loads the AwsIotLambdaFunction card
include('elements/aws/InternetOfThings/AwsIotLambdaFunction')
AwsIotLambdaFunctionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotLambdaFunction card
include('elements/aws/InternetOfThings/AwsIotLambdaFunction')
AwsIotLambdaFunctionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
