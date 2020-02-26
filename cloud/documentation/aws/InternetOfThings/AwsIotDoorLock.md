# AwsIotDoorLock
```text
elements/aws/InternetOfThings/AwsIotDoorLock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotDoorLock icon](../../../icons/aws/InternetOfThings/AwsIotDoorLock.png) | ![AwsIotDoorLock element](AwsIotDoorLock.element.png) | ![AwsIotDoorLock card](AwsIotDoorLock.card.png) |
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

' loads the AwsIotDoorLock element
include('elements/aws/InternetOfThings/AwsIotDoorLock')
AwsIotDoorLock('element', 'Iot Door Lock', 'an optional tech field')
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

' loads the AwsIotDoorLock element
include('elements/aws/InternetOfThings/AwsIotDoorLock')
AwsIotDoorLock('element', 'Iot Door Lock', 'an optional tech field')
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

' loads the AwsIotDoorLock card
include('elements/aws/InternetOfThings/AwsIotDoorLock')
AwsIotDoorLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotDoorLock card
include('elements/aws/InternetOfThings/AwsIotDoorLock')
AwsIotDoorLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
