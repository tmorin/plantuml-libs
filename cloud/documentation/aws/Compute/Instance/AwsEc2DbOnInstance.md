# AwsEc2DbOnInstance
```text
elements/aws/Compute/Instance/AwsEc2DbOnInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2DbOnInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2DbOnInstance.png) | ![AwsEc2DbOnInstance element](AwsEc2DbOnInstance.element.png) | ![AwsEc2DbOnInstance card](AwsEc2DbOnInstance.card.png) |
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

' loads the AwsEc2DbOnInstance element
include('elements/aws/Compute/Instance/AwsEc2DbOnInstance')
AwsEc2DbOnInstance('element', 'Ec2 Db On Instance', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsEc2DbOnInstance element
include('elements/aws/Compute/Instance/AwsEc2DbOnInstance')
AwsEc2DbOnInstance('element', 'Ec2 Db On Instance', 'an optional tech field')
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

' loads the AwsEc2DbOnInstance card
include('elements/aws/Compute/Instance/AwsEc2DbOnInstance')
AwsEc2DbOnInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AwsEc2DbOnInstance card
include('elements/aws/Compute/Instance/AwsEc2DbOnInstance')
AwsEc2DbOnInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
