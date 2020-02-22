# AwsIotFireTvStick
```text
elements/aws/InternetOfThings/AwsIotFireTvStick
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotFireTvStick icon](../../../icons/aws/InternetOfThings/AwsIotFireTvStick.png) | ![AwsIotFireTvStick element](AwsIotFireTvStick.element.png) | ![AwsIotFireTvStick card](AwsIotFireTvStick.card.png) |
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

' loads the AwsIotFireTvStick element
include('elements/aws/InternetOfThings/AwsIotFireTvStick')
AwsIotFireTvStick('element', 'Iot Fire Tv Stick', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsIotFireTvStick element
include('elements/aws/InternetOfThings/AwsIotFireTvStick')
AwsIotFireTvStick('element', 'Iot Fire Tv Stick', 'an optional tech field')
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

' loads the AwsIotFireTvStick card
include('elements/aws/InternetOfThings/AwsIotFireTvStick')
AwsIotFireTvStickCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AwsIotFireTvStick card
include('elements/aws/InternetOfThings/AwsIotFireTvStick')
AwsIotFireTvStickCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
