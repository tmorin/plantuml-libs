# AwsIotHardwareBoard
```text
elements/aws/InternetOfThings/AwsIotHardwareBoard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotHardwareBoard icon](../../../icons/aws/InternetOfThings/AwsIotHardwareBoard.png) | ![AwsIotHardwareBoard element](AwsIotHardwareBoard.element.png) | ![AwsIotHardwareBoard card](AwsIotHardwareBoard.card.png) |
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

' loads the AwsIotHardwareBoard element
include('elements/aws/InternetOfThings/AwsIotHardwareBoard')
AwsIotHardwareBoard('element', 'Iot Hardware Board', 'an optional tech field')
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

' loads the AwsIotHardwareBoard element
include('elements/aws/InternetOfThings/AwsIotHardwareBoard')
AwsIotHardwareBoard('element', 'Iot Hardware Board', 'an optional tech field')
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

' loads the AwsIotHardwareBoard card
include('elements/aws/InternetOfThings/AwsIotHardwareBoard')
AwsIotHardwareBoardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotHardwareBoard card
include('elements/aws/InternetOfThings/AwsIotHardwareBoard')
AwsIotHardwareBoardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
