# AmazonManagedBlockchain


```text
aws/Architecture/Blockchain/AmazonManagedBlockchain
```

```text
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')
```



| Illustration | AmazonManagedBlockchain | AmazonManagedBlockchainCard | AmazonManagedBlockchainGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/Blockchain/AmazonManagedBlockchain.png) | ![illustration for AmazonManagedBlockchain](../../../aws/Architecture/Blockchain/AmazonManagedBlockchain.Local.png) | ![illustration for AmazonManagedBlockchainCard](../../../aws/Architecture/Blockchain/AmazonManagedBlockchainCard.Local.png) | ![illustration for AmazonManagedBlockchainGroup](../../../aws/Architecture/Blockchain/AmazonManagedBlockchainGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonManagedBlockchainXs>`
- `<$AmazonManagedBlockchainSm>`
- `<$AmazonManagedBlockchainMd>`
- `<$AmazonManagedBlockchainLg>`





## AmazonManagedBlockchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedBlockchain
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')

' renders the element
AmazonManagedBlockchain('AmazonManagedBlockchain', 'Amazon Managed Blockchain', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedBlockchain
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')

' renders the element
AmazonManagedBlockchain('AmazonManagedBlockchain', 'Amazon Managed Blockchain', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonManagedBlockchainCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedBlockchainCard
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')

' renders the element
AmazonManagedBlockchainCard('AmazonManagedBlockchainCard', 'Amazon Managed Blockchain Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedBlockchainCard
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')

' renders the element
AmazonManagedBlockchainCard('AmazonManagedBlockchainCard', 'Amazon Managed Blockchain Card', 'an optional description')
@enduml
```

## AmazonManagedBlockchainGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedBlockchainGroup
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')

' renders the element
AmazonManagedBlockchainGroup('AmazonManagedBlockchainGroup', 'Amazon Managed Blockchain Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedBlockchainGroup
include('aws/Architecture/Blockchain/AmazonManagedBlockchain')

' renders the element
AmazonManagedBlockchainGroup('AmazonManagedBlockchainGroup', 'Amazon Managed Blockchain Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

