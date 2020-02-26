# AwsDynamodbItems
```text
elements/aws/Database/AwsDynamodbItems
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDynamodbItems icon](../../../icons/aws/Database/AwsDynamodbItems.png) | ![AwsDynamodbItems element](AwsDynamodbItems.element.png) | ![AwsDynamodbItems card](AwsDynamodbItems.card.png) |
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

' loads the AwsDynamodbItems element
include('elements/aws/Database/AwsDynamodbItems')
AwsDynamodbItems('element', 'Dynamodb Items', 'an optional tech field')
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

' loads the AwsDynamodbItems element
include('elements/aws/Database/AwsDynamodbItems')
AwsDynamodbItems('element', 'Dynamodb Items', 'an optional tech field')
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

' loads the AwsDynamodbItems card
include('elements/aws/Database/AwsDynamodbItems')
AwsDynamodbItemsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDynamodbItems card
include('elements/aws/Database/AwsDynamodbItems')
AwsDynamodbItemsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
