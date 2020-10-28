# AwsIotThingsGraph
```text
elements/aws/InternetOfThings/AwsIotThingsGraph
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotThingsGraph icon](../../../icons/aws/InternetOfThings/AwsIotThingsGraph.png) | ![AwsIotThingsGraph element](AwsIotThingsGraph.element.png) | ![AwsIotThingsGraph card](AwsIotThingsGraph.card.png) |
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

' loads the AwsIotThingsGraph element
include('elements/aws/InternetOfThings/AwsIotThingsGraph')
AwsIotThingsGraph('element', 'Iot Things Graph', 'an optional tech field')
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

' loads the AwsIotThingsGraph element
include('elements/aws/InternetOfThings/AwsIotThingsGraph')
AwsIotThingsGraph('element', 'Iot Things Graph', 'an optional tech field')
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

' loads the AwsIotThingsGraph card
include('elements/aws/InternetOfThings/AwsIotThingsGraph')
AwsIotThingsGraphCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotThingsGraph card
include('elements/aws/InternetOfThings/AwsIotThingsGraph')
AwsIotThingsGraphCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
