# AwsIoTRule


```text
aws-q1-2025/Resource/IoT/AwsIoTRule
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTRule')
```



| Illustration | AwsIoTRule | AwsIoTRuleCard | AwsIoTRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTRule.png) | ![illustration for AwsIoTRule](../../../aws-q1-2025/Resource/IoT/AwsIoTRule.Local.png) | ![illustration for AwsIoTRuleCard](../../../aws-q1-2025/Resource/IoT/AwsIoTRuleCard.Local.png) | ![illustration for AwsIoTRuleGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTRuleGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTRuleXs>`
- `<$AwsIoTRuleSm>`
- `<$AwsIoTRuleMd>`
- `<$AwsIoTRuleLg>`





## AwsIoTRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTRule
include('aws-q1-2025/Resource/IoT/AwsIoTRule')

' renders the element
AwsIoTRule('AwsIoTRule', 'Aws Io T Rule', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTRule
include('aws-q1-2025/Resource/IoT/AwsIoTRule')

' renders the element
AwsIoTRule('AwsIoTRule', 'Aws Io T Rule', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTRuleCard
include('aws-q1-2025/Resource/IoT/AwsIoTRule')

' renders the element
AwsIoTRuleCard('AwsIoTRuleCard', 'Aws Io T Rule Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTRuleCard
include('aws-q1-2025/Resource/IoT/AwsIoTRule')

' renders the element
AwsIoTRuleCard('AwsIoTRuleCard', 'Aws Io T Rule Card', 'an optional description')
@enduml
```

## AwsIoTRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTRuleGroup
include('aws-q1-2025/Resource/IoT/AwsIoTRule')

' renders the element
AwsIoTRuleGroup('AwsIoTRuleGroup', 'Aws Io T Rule Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTRuleGroup
include('aws-q1-2025/Resource/IoT/AwsIoTRule')

' renders the element
AwsIoTRuleGroup('AwsIoTRuleGroup', 'Aws Io T Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

