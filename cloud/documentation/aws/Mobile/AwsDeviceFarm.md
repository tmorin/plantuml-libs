# AwsDeviceFarm
```text
elements/aws/Mobile/AwsDeviceFarm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDeviceFarm icon](../../../icons/aws/Mobile/AwsDeviceFarm.png) | ![AwsDeviceFarm element](AwsDeviceFarm.element.png) | ![AwsDeviceFarm card](AwsDeviceFarm.card.png) |
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

' loads the AwsDeviceFarm element
include('elements/aws/Mobile/AwsDeviceFarm')
AwsDeviceFarm('element', 'Device Farm', 'an optional tech field')
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

' loads the AwsDeviceFarm element
include('elements/aws/Mobile/AwsDeviceFarm')
AwsDeviceFarm('element', 'Device Farm', 'an optional tech field')
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

' loads the AwsDeviceFarm card
include('elements/aws/Mobile/AwsDeviceFarm')
AwsDeviceFarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDeviceFarm card
include('elements/aws/Mobile/AwsDeviceFarm')
AwsDeviceFarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
