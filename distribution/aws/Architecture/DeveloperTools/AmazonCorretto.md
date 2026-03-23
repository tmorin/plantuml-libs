# AmazonCorretto


```text
aws/Architecture/DeveloperTools/AmazonCorretto
```

```text
include('aws/Architecture/DeveloperTools/AmazonCorretto')
```



| Illustration | AmazonCorretto | AmazonCorrettoCard | AmazonCorrettoGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/DeveloperTools/AmazonCorretto.png) | ![illustration for AmazonCorretto](../../../aws/Architecture/DeveloperTools/AmazonCorretto.Local.png) | ![illustration for AmazonCorrettoCard](../../../aws/Architecture/DeveloperTools/AmazonCorrettoCard.Local.png) | ![illustration for AmazonCorrettoGroup](../../../aws/Architecture/DeveloperTools/AmazonCorrettoGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonCorrettoXs>`
- `<$AmazonCorrettoSm>`
- `<$AmazonCorrettoMd>`
- `<$AmazonCorrettoLg>`





## AmazonCorretto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonCorretto
include('aws/Architecture/DeveloperTools/AmazonCorretto')

' renders the element
AmazonCorretto('AmazonCorretto', 'Amazon Corretto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonCorretto
include('aws/Architecture/DeveloperTools/AmazonCorretto')

' renders the element
AmazonCorretto('AmazonCorretto', 'Amazon Corretto', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonCorrettoCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonCorrettoCard
include('aws/Architecture/DeveloperTools/AmazonCorretto')

' renders the element
AmazonCorrettoCard('AmazonCorrettoCard', 'Amazon Corretto Card', 'an optional description')
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

' loads the Item which embeds the element AmazonCorrettoCard
include('aws/Architecture/DeveloperTools/AmazonCorretto')

' renders the element
AmazonCorrettoCard('AmazonCorrettoCard', 'Amazon Corretto Card', 'an optional description')
@enduml
```

## AmazonCorrettoGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonCorrettoGroup
include('aws/Architecture/DeveloperTools/AmazonCorretto')

' renders the element
AmazonCorrettoGroup('AmazonCorrettoGroup', 'Amazon Corretto Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonCorrettoGroup
include('aws/Architecture/DeveloperTools/AmazonCorretto')

' renders the element
AmazonCorrettoGroup('AmazonCorrettoGroup', 'Amazon Corretto Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

