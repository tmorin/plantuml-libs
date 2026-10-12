# AmazonMacie


```text
aws/Architecture/SecurityIdentity/AmazonMacie
```

```text
include('aws/Architecture/SecurityIdentity/AmazonMacie')
```



| Illustration | AmazonMacie | AmazonMacieCard | AmazonMacieGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/SecurityIdentity/AmazonMacie.png) | ![illustration for AmazonMacie](../../../aws/Architecture/SecurityIdentity/AmazonMacie.Local.png) | ![illustration for AmazonMacieCard](../../../aws/Architecture/SecurityIdentity/AmazonMacieCard.Local.png) | ![illustration for AmazonMacieGroup](../../../aws/Architecture/SecurityIdentity/AmazonMacieGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonMacieXs>`
- `<$AmazonMacieSm>`
- `<$AmazonMacieMd>`
- `<$AmazonMacieLg>`





## AmazonMacie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonMacie
include('aws/Architecture/SecurityIdentity/AmazonMacie')

' renders the element
AmazonMacie('AmazonMacie', 'Amazon Macie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonMacie
include('aws/Architecture/SecurityIdentity/AmazonMacie')

' renders the element
AmazonMacie('AmazonMacie', 'Amazon Macie', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonMacieCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonMacieCard
include('aws/Architecture/SecurityIdentity/AmazonMacie')

' renders the element
AmazonMacieCard('AmazonMacieCard', 'Amazon Macie Card', 'an optional description')
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

' loads the Item which embeds the element AmazonMacieCard
include('aws/Architecture/SecurityIdentity/AmazonMacie')

' renders the element
AmazonMacieCard('AmazonMacieCard', 'Amazon Macie Card', 'an optional description')
@enduml
```

## AmazonMacieGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonMacieGroup
include('aws/Architecture/SecurityIdentity/AmazonMacie')

' renders the element
AmazonMacieGroup('AmazonMacieGroup', 'Amazon Macie Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonMacieGroup
include('aws/Architecture/SecurityIdentity/AmazonMacie')

' renders the element
AmazonMacieGroup('AmazonMacieGroup', 'Amazon Macie Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

