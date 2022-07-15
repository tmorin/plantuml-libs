# AmazonMacie


```text
aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie
```

```text
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')
```



| Illustration | AmazonMacie | AmazonMacieCard | AmazonMacieGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie.png) | ![illustration for AmazonMacie](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie.Local.png) | ![illustration for AmazonMacieCard](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacieCard.Local.png) | ![illustration for AmazonMacieGroup](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacieGroup.Local.png) |




## AmazonMacie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonMacie
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')

' renders the element
AmazonMacie('AmazonMacie', 'Amazon Macie', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonMacie
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')

' renders the element
AmazonMacie('AmazonMacie', 'Amazon Macie', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonMacieCard
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonMacieCard
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonMacieGroup
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')

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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonMacieGroup
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AmazonMacie')

' renders the element
AmazonMacieGroup('AmazonMacieGroup', 'Amazon Macie Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

