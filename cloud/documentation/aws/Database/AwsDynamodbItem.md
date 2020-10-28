# AwsDynamodbItem
```text
elements/aws/Database/AwsDynamodbItem
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDynamodbItem icon](../../../icons/aws/Database/AwsDynamodbItem.png) | ![AwsDynamodbItem element](AwsDynamodbItem.element.png) | ![AwsDynamodbItem card](AwsDynamodbItem.card.png) |
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

' loads the AwsDynamodbItem element
include('elements/aws/Database/AwsDynamodbItem')
AwsDynamodbItem('element', 'Dynamodb Item', 'an optional tech field')
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

' loads the AwsDynamodbItem element
include('elements/aws/Database/AwsDynamodbItem')
AwsDynamodbItem('element', 'Dynamodb Item', 'an optional tech field')
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

' loads the AwsDynamodbItem card
include('elements/aws/Database/AwsDynamodbItem')
AwsDynamodbItemCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDynamodbItem card
include('elements/aws/Database/AwsDynamodbItem')
AwsDynamodbItemCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
