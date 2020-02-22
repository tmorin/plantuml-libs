# AwsQuantumLedgerDatabaseQldb
```text
elements/aws/Database/AwsQuantumLedgerDatabaseQldb
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsQuantumLedgerDatabaseQldb icon](../../../icons/aws/Database/AwsQuantumLedgerDatabaseQldb.png) | ![AwsQuantumLedgerDatabaseQldb element](AwsQuantumLedgerDatabaseQldb.element.png) | ![AwsQuantumLedgerDatabaseQldb card](AwsQuantumLedgerDatabaseQldb.card.png) |
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

' loads the AwsQuantumLedgerDatabaseQldb element
include('elements/aws/Database/AwsQuantumLedgerDatabaseQldb')
AwsQuantumLedgerDatabaseQldb('element', 'Quantum Ledger Database Qldb', 'an optional tech field')
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

' loads the AwsQuantumLedgerDatabaseQldb element
include('elements/aws/Database/AwsQuantumLedgerDatabaseQldb')
AwsQuantumLedgerDatabaseQldb('element', 'Quantum Ledger Database Qldb', 'an optional tech field')
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

' loads the AwsQuantumLedgerDatabaseQldb card
include('elements/aws/Database/AwsQuantumLedgerDatabaseQldb')
AwsQuantumLedgerDatabaseQldbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsQuantumLedgerDatabaseQldb card
include('elements/aws/Database/AwsQuantumLedgerDatabaseQldb')
AwsQuantumLedgerDatabaseQldbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
