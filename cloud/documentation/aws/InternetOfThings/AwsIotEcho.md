# AwsIotEcho
```text
elements/aws/InternetOfThings/AwsIotEcho
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotEcho icon](../../../icons/aws/InternetOfThings/AwsIotEcho.png) | ![AwsIotEcho element](AwsIotEcho.element.png) | ![AwsIotEcho card](AwsIotEcho.card.png) |
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

' loads the AwsIotEcho element
include('elements/aws/InternetOfThings/AwsIotEcho')
AwsIotEcho('element', 'Iot Echo', 'an optional tech field')
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

' loads the AwsIotEcho element
include('elements/aws/InternetOfThings/AwsIotEcho')
AwsIotEcho('element', 'Iot Echo', 'an optional tech field')
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

' loads the AwsIotEcho card
include('elements/aws/InternetOfThings/AwsIotEcho')
AwsIotEchoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotEcho card
include('elements/aws/InternetOfThings/AwsIotEcho')
AwsIotEchoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
