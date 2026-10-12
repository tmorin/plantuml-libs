# AwsTrustedAdvisor


```text
aws/Architecture/ManagementTools/AwsTrustedAdvisor
```

```text
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')
```



| Illustration | AwsTrustedAdvisor | AwsTrustedAdvisorCard | AwsTrustedAdvisorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ManagementTools/AwsTrustedAdvisor.png) | ![illustration for AwsTrustedAdvisor](../../../aws/Architecture/ManagementTools/AwsTrustedAdvisor.Local.png) | ![illustration for AwsTrustedAdvisorCard](../../../aws/Architecture/ManagementTools/AwsTrustedAdvisorCard.Local.png) | ![illustration for AwsTrustedAdvisorGroup](../../../aws/Architecture/ManagementTools/AwsTrustedAdvisorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsTrustedAdvisorXs>`
- `<$AwsTrustedAdvisorSm>`
- `<$AwsTrustedAdvisorMd>`
- `<$AwsTrustedAdvisorLg>`





## AwsTrustedAdvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisor
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')

' renders the element
AwsTrustedAdvisor('AwsTrustedAdvisor', 'Aws Trusted Advisor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsTrustedAdvisor
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')

' renders the element
AwsTrustedAdvisor('AwsTrustedAdvisor', 'Aws Trusted Advisor', 'an optional tech label', 'an optional description')
@enduml
```

## AwsTrustedAdvisorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorCard
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')

' renders the element
AwsTrustedAdvisorCard('AwsTrustedAdvisorCard', 'Aws Trusted Advisor Card', 'an optional description')
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

' loads the Item which embeds the element AwsTrustedAdvisorCard
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')

' renders the element
AwsTrustedAdvisorCard('AwsTrustedAdvisorCard', 'Aws Trusted Advisor Card', 'an optional description')
@enduml
```

## AwsTrustedAdvisorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorGroup
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')

' renders the element
AwsTrustedAdvisorGroup('AwsTrustedAdvisorGroup', 'Aws Trusted Advisor Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsTrustedAdvisorGroup
include('aws/Architecture/ManagementTools/AwsTrustedAdvisor')

' renders the element
AwsTrustedAdvisorGroup('AwsTrustedAdvisorGroup', 'Aws Trusted Advisor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

