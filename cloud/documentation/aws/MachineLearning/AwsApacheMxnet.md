# AwsApacheMxnet
```text
elements/aws/MachineLearning/AwsApacheMxnet
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsApacheMxnet icon](../../../icons/aws/MachineLearning/AwsApacheMxnet.png) | ![AwsApacheMxnet element](AwsApacheMxnet.element.png) | ![AwsApacheMxnet card](AwsApacheMxnet.card.png) |
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

' loads the AwsApacheMxnet element
include('elements/aws/MachineLearning/AwsApacheMxnet')
AwsApacheMxnet('element', 'Apache Mxnet', 'an optional tech field')
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

' loads the AwsApacheMxnet element
include('elements/aws/MachineLearning/AwsApacheMxnet')
AwsApacheMxnet('element', 'Apache Mxnet', 'an optional tech field')
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

' loads the AwsApacheMxnet card
include('elements/aws/MachineLearning/AwsApacheMxnet')
AwsApacheMxnetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsApacheMxnet card
include('elements/aws/MachineLearning/AwsApacheMxnet')
AwsApacheMxnetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
