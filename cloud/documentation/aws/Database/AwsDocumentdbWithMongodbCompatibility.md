# AwsDocumentdbWithMongodbCompatibility
```text
elements/aws/Database/AwsDocumentdbWithMongodbCompatibility
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDocumentdbWithMongodbCompatibility icon](../../../icons/aws/Database/AwsDocumentdbWithMongodbCompatibility.png) | ![AwsDocumentdbWithMongodbCompatibility element](AwsDocumentdbWithMongodbCompatibility.element.png) | ![AwsDocumentdbWithMongodbCompatibility card](AwsDocumentdbWithMongodbCompatibility.card.png) |
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

' loads the AwsDocumentdbWithMongodbCompatibility element
include('elements/aws/Database/AwsDocumentdbWithMongodbCompatibility')
AwsDocumentdbWithMongodbCompatibility('element', 'Documentdb With Mongodb Compatibility', 'an optional tech field')
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

' loads the AwsDocumentdbWithMongodbCompatibility element
include('elements/aws/Database/AwsDocumentdbWithMongodbCompatibility')
AwsDocumentdbWithMongodbCompatibility('element', 'Documentdb With Mongodb Compatibility', 'an optional tech field')
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

' loads the AwsDocumentdbWithMongodbCompatibility card
include('elements/aws/Database/AwsDocumentdbWithMongodbCompatibility')
AwsDocumentdbWithMongodbCompatibilityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDocumentdbWithMongodbCompatibility card
include('elements/aws/Database/AwsDocumentdbWithMongodbCompatibility')
AwsDocumentdbWithMongodbCompatibilityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
