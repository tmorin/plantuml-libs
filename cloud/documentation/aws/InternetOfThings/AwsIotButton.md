# AwsIotButton
```text
elements/aws/InternetOfThings/AwsIotButton
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotButton icon](../../../icons/aws/InternetOfThings/AwsIotButton.png) | ![AwsIotButton element](AwsIotButton.element.png) | ![AwsIotButton card](AwsIotButton.card.png) |
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

' loads the AwsIotButton element
include('elements/aws/InternetOfThings/AwsIotButton')
AwsIotButton('element', 'Iot Button', 'an optional tech field')
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

' loads the AwsIotButton element
include('elements/aws/InternetOfThings/AwsIotButton')
AwsIotButton('element', 'Iot Button', 'an optional tech field')
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

' loads the AwsIotButton card
include('elements/aws/InternetOfThings/AwsIotButton')
AwsIotButtonCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotButton card
include('elements/aws/InternetOfThings/AwsIotButton')
AwsIotButtonCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
