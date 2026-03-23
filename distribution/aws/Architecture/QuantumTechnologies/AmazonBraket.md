# AmazonBraket


```text
aws/Architecture/QuantumTechnologies/AmazonBraket
```

```text
include('aws/Architecture/QuantumTechnologies/AmazonBraket')
```



| Illustration | AmazonBraket | AmazonBraketCard | AmazonBraketGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/QuantumTechnologies/AmazonBraket.png) | ![illustration for AmazonBraket](../../../aws/Architecture/QuantumTechnologies/AmazonBraket.Local.png) | ![illustration for AmazonBraketCard](../../../aws/Architecture/QuantumTechnologies/AmazonBraketCard.Local.png) | ![illustration for AmazonBraketGroup](../../../aws/Architecture/QuantumTechnologies/AmazonBraketGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonBraketXs>`
- `<$AmazonBraketSm>`
- `<$AmazonBraketMd>`
- `<$AmazonBraketLg>`





## AmazonBraket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonBraket
include('aws/Architecture/QuantumTechnologies/AmazonBraket')

' renders the element
AmazonBraket('AmazonBraket', 'Amazon Braket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonBraket
include('aws/Architecture/QuantumTechnologies/AmazonBraket')

' renders the element
AmazonBraket('AmazonBraket', 'Amazon Braket', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonBraketCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonBraketCard
include('aws/Architecture/QuantumTechnologies/AmazonBraket')

' renders the element
AmazonBraketCard('AmazonBraketCard', 'Amazon Braket Card', 'an optional description')
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

' loads the Item which embeds the element AmazonBraketCard
include('aws/Architecture/QuantumTechnologies/AmazonBraket')

' renders the element
AmazonBraketCard('AmazonBraketCard', 'Amazon Braket Card', 'an optional description')
@enduml
```

## AmazonBraketGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonBraketGroup
include('aws/Architecture/QuantumTechnologies/AmazonBraket')

' renders the element
AmazonBraketGroup('AmazonBraketGroup', 'Amazon Braket Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonBraketGroup
include('aws/Architecture/QuantumTechnologies/AmazonBraket')

' renders the element
AmazonBraketGroup('AmazonBraketGroup', 'Amazon Braket Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

