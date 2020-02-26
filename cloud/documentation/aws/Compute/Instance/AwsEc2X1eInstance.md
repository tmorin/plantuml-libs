# AwsEc2X1eInstance
```text
elements/aws/Compute/Instance/AwsEc2X1eInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2X1eInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2X1eInstance.png) | ![AwsEc2X1eInstance element](AwsEc2X1eInstance.element.png) | ![AwsEc2X1eInstance card](AwsEc2X1eInstance.card.png) |
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

' loads the AwsEc2X1eInstance element
include('elements/aws/Compute/Instance/AwsEc2X1eInstance')
AwsEc2X1eInstance('element', 'Ec2 X1e Instance', 'an optional tech field')
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

' loads the AwsEc2X1eInstance element
include('elements/aws/Compute/Instance/AwsEc2X1eInstance')
AwsEc2X1eInstance('element', 'Ec2 X1e Instance', 'an optional tech field')
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

' loads the AwsEc2X1eInstance card
include('elements/aws/Compute/Instance/AwsEc2X1eInstance')
AwsEc2X1eInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2X1eInstance card
include('elements/aws/Compute/Instance/AwsEc2X1eInstance')
AwsEc2X1eInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
