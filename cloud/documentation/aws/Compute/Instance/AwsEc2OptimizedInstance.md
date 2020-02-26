# AwsEc2OptimizedInstance
```text
elements/aws/Compute/Instance/AwsEc2OptimizedInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2OptimizedInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2OptimizedInstance.png) | ![AwsEc2OptimizedInstance element](AwsEc2OptimizedInstance.element.png) | ![AwsEc2OptimizedInstance card](AwsEc2OptimizedInstance.card.png) |
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

' loads the AwsEc2OptimizedInstance element
include('elements/aws/Compute/Instance/AwsEc2OptimizedInstance')
AwsEc2OptimizedInstance('element', 'Ec2 Optimized Instance', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/aws')

' loads the AwsEc2OptimizedInstance element
include('elements/aws/Compute/Instance/AwsEc2OptimizedInstance')
AwsEc2OptimizedInstance('element', 'Ec2 Optimized Instance', 'an optional tech field')
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

' loads the AwsEc2OptimizedInstance card
include('elements/aws/Compute/Instance/AwsEc2OptimizedInstance')
AwsEc2OptimizedInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/aws')

' loads the AwsEc2OptimizedInstance card
include('elements/aws/Compute/Instance/AwsEc2OptimizedInstance')
AwsEc2OptimizedInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
