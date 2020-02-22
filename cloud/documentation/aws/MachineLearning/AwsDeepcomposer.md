# AwsDeepcomposer
```text
elements/aws/MachineLearning/AwsDeepcomposer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDeepcomposer icon](../../../icons/aws/MachineLearning/AwsDeepcomposer.png) | ![AwsDeepcomposer element](AwsDeepcomposer.element.png) | ![AwsDeepcomposer card](AwsDeepcomposer.card.png) |
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

' loads the AwsDeepcomposer element
include('elements/aws/MachineLearning/AwsDeepcomposer')
AwsDeepcomposer('element', 'Deepcomposer', 'an optional tech field')
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

' loads the AwsDeepcomposer element
include('elements/aws/MachineLearning/AwsDeepcomposer')
AwsDeepcomposer('element', 'Deepcomposer', 'an optional tech field')
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

' loads the AwsDeepcomposer card
include('elements/aws/MachineLearning/AwsDeepcomposer')
AwsDeepcomposerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDeepcomposer card
include('elements/aws/MachineLearning/AwsDeepcomposer')
AwsDeepcomposerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
