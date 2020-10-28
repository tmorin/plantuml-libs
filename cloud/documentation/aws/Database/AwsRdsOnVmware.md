# AwsRdsOnVmware
```text
elements/aws/Database/AwsRdsOnVmware
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsOnVmware icon](../../../icons/aws/Database/AwsRdsOnVmware.png) | ![AwsRdsOnVmware element](AwsRdsOnVmware.element.png) | ![AwsRdsOnVmware card](AwsRdsOnVmware.card.png) |
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

' loads the AwsRdsOnVmware element
include('elements/aws/Database/AwsRdsOnVmware')
AwsRdsOnVmware('element', 'Rds On Vmware', 'an optional tech field')
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

' loads the AwsRdsOnVmware element
include('elements/aws/Database/AwsRdsOnVmware')
AwsRdsOnVmware('element', 'Rds On Vmware', 'an optional tech field')
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

' loads the AwsRdsOnVmware card
include('elements/aws/Database/AwsRdsOnVmware')
AwsRdsOnVmwareCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsOnVmware card
include('elements/aws/Database/AwsRdsOnVmware')
AwsRdsOnVmwareCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
