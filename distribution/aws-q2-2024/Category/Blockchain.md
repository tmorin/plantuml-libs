# Blockchain


```text
aws-q2-2024/Category/Blockchain
```

```text
include('aws-q2-2024/Category/Blockchain')
```



| Illustration | Blockchain | BlockchainCard | BlockchainGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2024/Category/Blockchain.png) | ![illustration for Blockchain](../../aws-q2-2024/Category/Blockchain.Local.png) | ![illustration for BlockchainCard](../../aws-q2-2024/Category/BlockchainCard.Local.png) | ![illustration for BlockchainGroup](../../aws-q2-2024/Category/BlockchainGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlockchainXs>`
- `<$BlockchainSm>`
- `<$BlockchainMd>`
- `<$BlockchainLg>`





## Blockchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element Blockchain
include('aws-q2-2024/Category/Blockchain')

' renders the element
Blockchain('Blockchain', 'Blockchain', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element Blockchain
include('aws-q2-2024/Category/Blockchain')

' renders the element
Blockchain('Blockchain', 'Blockchain', 'an optional tech label', 'an optional description')
@enduml
```

## BlockchainCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element BlockchainCard
include('aws-q2-2024/Category/Blockchain')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element BlockchainCard
include('aws-q2-2024/Category/Blockchain')

' renders the element
BlockchainCard('BlockchainCard', 'Blockchain Card', 'an optional description')
@enduml
```

## BlockchainGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element BlockchainGroup
include('aws-q2-2024/Category/Blockchain')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element BlockchainGroup
include('aws-q2-2024/Category/Blockchain')

' renders the element
BlockchainGroup('BlockchainGroup', 'Blockchain Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

