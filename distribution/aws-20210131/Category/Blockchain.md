# Blockchain


```text
aws-20210131/Category/Blockchain
```

```text
include('aws-20210131/Category/Blockchain')
```



| Illustration | Blockchain | BlockchainCard | BlockchainGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Category/Blockchain.png) | ![illustration for Blockchain](../../aws-20210131/Category/Blockchain.Local.png) | ![illustration for BlockchainCard](../../aws-20210131/Category/BlockchainCard.Local.png) | ![illustration for BlockchainGroup](../../aws-20210131/Category/BlockchainGroup.Local.png) |




## Blockchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Blockchain
include('aws-20210131/Category/Blockchain')

' renders the element
Blockchain('Blockchain', 'Blockchain', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Blockchain
include('aws-20210131/Category/Blockchain')

' renders the element
Blockchain('Blockchain', 'Blockchain', 'an optional tech label')
@enduml
```

## BlockchainCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BlockchainCard
include('aws-20210131/Category/Blockchain')

' renders the element
BlockchainCard('BlockchainCard', 'Blockchain Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BlockchainCard
include('aws-20210131/Category/Blockchain')

' renders the element
BlockchainCard('BlockchainCard', 'Blockchain Card', 'an optional description')
@enduml
```

## BlockchainGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BlockchainGroup
include('aws-20210131/Category/Blockchain')

' renders the element
BlockchainGroup('BlockchainGroup', 'Blockchain Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BlockchainGroup
include('aws-20210131/Category/Blockchain')

' renders the element
BlockchainGroup('BlockchainGroup', 'Blockchain Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

