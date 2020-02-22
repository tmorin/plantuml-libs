# AwsIotFactory
```text
elements/aws/InternetOfThings/AwsIotFactory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotFactory icon](../../../icons/aws/InternetOfThings/AwsIotFactory.png) | ![AwsIotFactory element](AwsIotFactory.element.png) | ![AwsIotFactory card](AwsIotFactory.card.png) |
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

' loads the AwsIotFactory element
include('elements/aws/InternetOfThings/AwsIotFactory')
AwsIotFactory('element', 'Iot Factory', 'an optional tech field')
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

' loads the AwsIotFactory element
include('elements/aws/InternetOfThings/AwsIotFactory')
AwsIotFactory('element', 'Iot Factory', 'an optional tech field')
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

' loads the AwsIotFactory card
include('elements/aws/InternetOfThings/AwsIotFactory')
AwsIotFactoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotFactory card
include('elements/aws/InternetOfThings/AwsIotFactory')
AwsIotFactoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
