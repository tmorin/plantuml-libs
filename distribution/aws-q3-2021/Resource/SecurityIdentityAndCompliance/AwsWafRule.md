# AwsWafRule


```text
aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule
```

```text
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')
```



| Illustration | AwsWafRule | AwsWafRuleCard | AwsWafRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule.png) | ![illustration for AwsWafRule](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule.Local.png) | ![illustration for AwsWafRuleCard](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRuleCard.Local.png) | ![illustration for AwsWafRuleGroup](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRuleGroup.Local.png) |




## AwsWafRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafRule
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRule('AwsWafRule', 'Aws Waf Rule', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafRule
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRule('AwsWafRule', 'Aws Waf Rule', 'an optional tech label')
@enduml
```

## AwsWafRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafRuleCard
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRuleCard('AwsWafRuleCard', 'Aws Waf Rule Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafRuleCard
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRuleCard('AwsWafRuleCard', 'Aws Waf Rule Card', 'an optional description')
@enduml
```

## AwsWafRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafRuleGroup
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRuleGroup('AwsWafRuleGroup', 'Aws Waf Rule Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafRuleGroup
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRuleGroup('AwsWafRuleGroup', 'Aws Waf Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

