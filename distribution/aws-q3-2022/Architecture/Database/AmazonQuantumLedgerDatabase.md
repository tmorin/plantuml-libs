# AmazonQuantumLedgerDatabase


```text
aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase
```

```text
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')
```



| Illustration | AmazonQuantumLedgerDatabase | AmazonQuantumLedgerDatabaseCard | AmazonQuantumLedgerDatabaseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase.png) | ![illustration for AmazonQuantumLedgerDatabase](../../../aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase.Local.png) | ![illustration for AmazonQuantumLedgerDatabaseCard](../../../aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabaseCard.Local.png) | ![illustration for AmazonQuantumLedgerDatabaseGroup](../../../aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabaseGroup.Local.png) |




## AmazonQuantumLedgerDatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonQuantumLedgerDatabase
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')

' renders the element
AmazonQuantumLedgerDatabase('AmazonQuantumLedgerDatabase', 'Amazon Quantum Ledger Database', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonQuantumLedgerDatabase
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')

' renders the element
AmazonQuantumLedgerDatabase('AmazonQuantumLedgerDatabase', 'Amazon Quantum Ledger Database', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonQuantumLedgerDatabaseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonQuantumLedgerDatabaseCard
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')

' renders the element
AmazonQuantumLedgerDatabaseCard('AmazonQuantumLedgerDatabaseCard', 'Amazon Quantum Ledger Database Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonQuantumLedgerDatabaseCard
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')

' renders the element
AmazonQuantumLedgerDatabaseCard('AmazonQuantumLedgerDatabaseCard', 'Amazon Quantum Ledger Database Card', 'an optional description')
@enduml
```

## AmazonQuantumLedgerDatabaseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonQuantumLedgerDatabaseGroup
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')

' renders the element
AmazonQuantumLedgerDatabaseGroup('AmazonQuantumLedgerDatabaseGroup', 'Amazon Quantum Ledger Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonQuantumLedgerDatabaseGroup
include('aws-q3-2022/Architecture/Database/AmazonQuantumLedgerDatabase')

' renders the element
AmazonQuantumLedgerDatabaseGroup('AmazonQuantumLedgerDatabaseGroup', 'Amazon Quantum Ledger Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

