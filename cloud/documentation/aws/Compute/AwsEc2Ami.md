# AwsEc2Ami
```text
elements/aws/Compute/AwsEc2Ami
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2Ami icon](../../../icons/aws/Compute/AwsEc2Ami.png) | ![AwsEc2Ami element](AwsEc2Ami.element.png) | ![AwsEc2Ami card](AwsEc2Ami.card.png) |
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

' loads the AwsEc2Ami element
include('elements/aws/Compute/AwsEc2Ami')
AwsEc2Ami('element', 'Ec2 Ami', 'an optional tech field')
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

' loads the AwsEc2Ami element
include('elements/aws/Compute/AwsEc2Ami')
AwsEc2Ami('element', 'Ec2 Ami', 'an optional tech field')
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

' loads the AwsEc2Ami card
include('elements/aws/Compute/AwsEc2Ami')
AwsEc2AmiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2Ami card
include('elements/aws/Compute/AwsEc2Ami')
AwsEc2AmiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
