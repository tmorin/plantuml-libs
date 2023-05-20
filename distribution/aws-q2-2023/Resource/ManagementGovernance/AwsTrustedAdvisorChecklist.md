# AwsTrustedAdvisorChecklist


```text
aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist
```

```text
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')
```



| Illustration | AwsTrustedAdvisorChecklist | AwsTrustedAdvisorChecklistCard | AwsTrustedAdvisorChecklistGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist.png) | ![illustration for AwsTrustedAdvisorChecklist](../../../aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist.Local.png) | ![illustration for AwsTrustedAdvisorChecklistCard](../../../aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklistCard.Local.png) | ![illustration for AwsTrustedAdvisorChecklistGroup](../../../aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklistGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsTrustedAdvisorChecklistXs>`
- `<$AwsTrustedAdvisorChecklistSm>`
- `<$AwsTrustedAdvisorChecklistMd>`
- `<$AwsTrustedAdvisorChecklistLg>`





## AwsTrustedAdvisorChecklist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorChecklist
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')

' renders the element
AwsTrustedAdvisorChecklist('AwsTrustedAdvisorChecklist', 'Aws Trusted Advisor Checklist', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorChecklist
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')

' renders the element
AwsTrustedAdvisorChecklist('AwsTrustedAdvisorChecklist', 'Aws Trusted Advisor Checklist', 'an optional tech label', 'an optional description')
@enduml
```

## AwsTrustedAdvisorChecklistCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorChecklistCard
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')

' renders the element
AwsTrustedAdvisorChecklistCard('AwsTrustedAdvisorChecklistCard', 'Aws Trusted Advisor Checklist Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorChecklistCard
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')

' renders the element
AwsTrustedAdvisorChecklistCard('AwsTrustedAdvisorChecklistCard', 'Aws Trusted Advisor Checklist Card', 'an optional description')
@enduml
```

## AwsTrustedAdvisorChecklistGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorChecklistGroup
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')

' renders the element
AwsTrustedAdvisorChecklistGroup('AwsTrustedAdvisorChecklistGroup', 'Aws Trusted Advisor Checklist Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrustedAdvisorChecklistGroup
include('aws-q2-2023/Resource/ManagementGovernance/AwsTrustedAdvisorChecklist')

' renders the element
AwsTrustedAdvisorChecklistGroup('AwsTrustedAdvisorChecklistGroup', 'Aws Trusted Advisor Checklist Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

