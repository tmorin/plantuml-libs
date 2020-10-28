# AwsIotFireTv
```text
elements/aws/InternetOfThings/AwsIotFireTv
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotFireTv icon](../../../icons/aws/InternetOfThings/AwsIotFireTv.png) | ![AwsIotFireTv element](AwsIotFireTv.element.png) | ![AwsIotFireTv card](AwsIotFireTv.card.png) |
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

' loads the AwsIotFireTv element
include('elements/aws/InternetOfThings/AwsIotFireTv')
AwsIotFireTv('element', 'Iot Fire Tv', 'an optional tech field')
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

' loads the AwsIotFireTv element
include('elements/aws/InternetOfThings/AwsIotFireTv')
AwsIotFireTv('element', 'Iot Fire Tv', 'an optional tech field')
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

' loads the AwsIotFireTv card
include('elements/aws/InternetOfThings/AwsIotFireTv')
AwsIotFireTvCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotFireTv card
include('elements/aws/InternetOfThings/AwsIotFireTv')
AwsIotFireTvCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
