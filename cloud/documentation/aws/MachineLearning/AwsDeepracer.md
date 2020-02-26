# AwsDeepracer
```text
elements/aws/MachineLearning/AwsDeepracer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDeepracer icon](../../../icons/aws/MachineLearning/AwsDeepracer.png) | ![AwsDeepracer element](AwsDeepracer.element.png) | ![AwsDeepracer card](AwsDeepracer.card.png) |
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

' loads the AwsDeepracer element
include('elements/aws/MachineLearning/AwsDeepracer')
AwsDeepracer('element', 'Deepracer', 'an optional tech field')
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

' loads the AwsDeepracer element
include('elements/aws/MachineLearning/AwsDeepracer')
AwsDeepracer('element', 'Deepracer', 'an optional tech field')
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

' loads the AwsDeepracer card
include('elements/aws/MachineLearning/AwsDeepracer')
AwsDeepracerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDeepracer card
include('elements/aws/MachineLearning/AwsDeepracer')
AwsDeepracerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
