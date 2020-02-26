# AwsEc2HighMemoryInstance
```text
elements/aws/Compute/Instance/AwsEc2HighMemoryInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2HighMemoryInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2HighMemoryInstance.png) | ![AwsEc2HighMemoryInstance element](AwsEc2HighMemoryInstance.element.png) | ![AwsEc2HighMemoryInstance card](AwsEc2HighMemoryInstance.card.png) |
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

' loads the AwsEc2HighMemoryInstance element
include('elements/aws/Compute/Instance/AwsEc2HighMemoryInstance')
AwsEc2HighMemoryInstance('element', 'Ec2 High Memory Instance', 'an optional tech field')
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

' loads the AwsEc2HighMemoryInstance element
include('elements/aws/Compute/Instance/AwsEc2HighMemoryInstance')
AwsEc2HighMemoryInstance('element', 'Ec2 High Memory Instance', 'an optional tech field')
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

' loads the AwsEc2HighMemoryInstance card
include('elements/aws/Compute/Instance/AwsEc2HighMemoryInstance')
AwsEc2HighMemoryInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2HighMemoryInstance card
include('elements/aws/Compute/Instance/AwsEc2HighMemoryInstance')
AwsEc2HighMemoryInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
