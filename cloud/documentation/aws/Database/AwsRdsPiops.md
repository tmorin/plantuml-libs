# AwsRdsPiops
```text
elements/aws/Database/AwsRdsPiops
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRdsPiops icon](../../../icons/aws/Database/AwsRdsPiops.png) | ![AwsRdsPiops element](AwsRdsPiops.element.png) | ![AwsRdsPiops card](AwsRdsPiops.card.png) |
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

' loads the AwsRdsPiops element
include('elements/aws/Database/AwsRdsPiops')
AwsRdsPiops('element', 'Rds Piops', 'an optional tech field')
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

' loads the AwsRdsPiops element
include('elements/aws/Database/AwsRdsPiops')
AwsRdsPiops('element', 'Rds Piops', 'an optional tech field')
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

' loads the AwsRdsPiops card
include('elements/aws/Database/AwsRdsPiops')
AwsRdsPiopsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRdsPiops card
include('elements/aws/Database/AwsRdsPiops')
AwsRdsPiopsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
