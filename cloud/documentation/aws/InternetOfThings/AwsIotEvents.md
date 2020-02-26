# AwsIotEvents
```text
elements/aws/InternetOfThings/AwsIotEvents
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotEvents icon](../../../icons/aws/InternetOfThings/AwsIotEvents.png) | ![AwsIotEvents element](AwsIotEvents.element.png) | ![AwsIotEvents card](AwsIotEvents.card.png) |
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

' loads the AwsIotEvents element
include('elements/aws/InternetOfThings/AwsIotEvents')
AwsIotEvents('element', 'Iot Events', 'an optional tech field')
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

' loads the AwsIotEvents element
include('elements/aws/InternetOfThings/AwsIotEvents')
AwsIotEvents('element', 'Iot Events', 'an optional tech field')
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

' loads the AwsIotEvents card
include('elements/aws/InternetOfThings/AwsIotEvents')
AwsIotEventsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotEvents card
include('elements/aws/InternetOfThings/AwsIotEvents')
AwsIotEventsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
