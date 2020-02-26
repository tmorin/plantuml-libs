# AwsEc2C5nInstance
```text
elements/aws/Compute/Instance/AwsEc2C5nInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2C5nInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2C5nInstance.png) | ![AwsEc2C5nInstance element](AwsEc2C5nInstance.element.png) | ![AwsEc2C5nInstance card](AwsEc2C5nInstance.card.png) |
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

' loads the AwsEc2C5nInstance element
include('elements/aws/Compute/Instance/AwsEc2C5nInstance')
AwsEc2C5nInstance('element', 'Ec2 C5n Instance', 'an optional tech field')
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

' loads the AwsEc2C5nInstance element
include('elements/aws/Compute/Instance/AwsEc2C5nInstance')
AwsEc2C5nInstance('element', 'Ec2 C5n Instance', 'an optional tech field')
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

' loads the AwsEc2C5nInstance card
include('elements/aws/Compute/Instance/AwsEc2C5nInstance')
AwsEc2C5nInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2C5nInstance card
include('elements/aws/Compute/Instance/AwsEc2C5nInstance')
AwsEc2C5nInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
