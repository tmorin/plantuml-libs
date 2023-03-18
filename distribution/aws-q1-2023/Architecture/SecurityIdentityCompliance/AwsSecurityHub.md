# AwsSecurityHub


```text
aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub
```

```text
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')
```



| Illustration | AwsSecurityHub | AwsSecurityHubCard | AwsSecurityHubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub.png) | ![illustration for AwsSecurityHub](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub.Local.png) | ![illustration for AwsSecurityHubCard](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHubCard.Local.png) | ![illustration for AwsSecurityHubGroup](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHubGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsSecurityHubXs>`
- `<$AwsSecurityHubSm>`
- `<$AwsSecurityHubMd>`
- `<$AwsSecurityHubLg>`





## AwsSecurityHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSecurityHub
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')

' renders the element
AwsSecurityHub('AwsSecurityHub', 'Aws Security Hub', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSecurityHub
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')

' renders the element
AwsSecurityHub('AwsSecurityHub', 'Aws Security Hub', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSecurityHubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSecurityHubCard
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')

' renders the element
AwsSecurityHubCard('AwsSecurityHubCard', 'Aws Security Hub Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSecurityHubCard
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')

' renders the element
AwsSecurityHubCard('AwsSecurityHubCard', 'Aws Security Hub Card', 'an optional description')
@enduml
```

## AwsSecurityHubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSecurityHubGroup
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')

' renders the element
AwsSecurityHubGroup('AwsSecurityHubGroup', 'Aws Security Hub Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSecurityHubGroup
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AwsSecurityHub')

' renders the element
AwsSecurityHubGroup('AwsSecurityHubGroup', 'Aws Security Hub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

