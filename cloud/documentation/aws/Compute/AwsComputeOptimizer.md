# AwsComputeOptimizer
```text
elements/aws/Compute/AwsComputeOptimizer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsComputeOptimizer icon](../../../icons/aws/Compute/AwsComputeOptimizer.png) | ![AwsComputeOptimizer element](AwsComputeOptimizer.element.png) | ![AwsComputeOptimizer card](AwsComputeOptimizer.card.png) |
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

' loads the AwsComputeOptimizer element
include('elements/aws/Compute/AwsComputeOptimizer')
AwsComputeOptimizer('element', 'Compute Optimizer', 'an optional tech field')
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

' loads the AwsComputeOptimizer element
include('elements/aws/Compute/AwsComputeOptimizer')
AwsComputeOptimizer('element', 'Compute Optimizer', 'an optional tech field')
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

' loads the AwsComputeOptimizer card
include('elements/aws/Compute/AwsComputeOptimizer')
AwsComputeOptimizerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsComputeOptimizer card
include('elements/aws/Compute/AwsComputeOptimizer')
AwsComputeOptimizerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
