# AwsWafRule


```text
aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule
```

```text
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')
```



| Illustration | AwsWafRule | AwsWafRuleCard | AwsWafRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule.png) | ![illustration for AwsWafRule](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule.Local.png) | ![illustration for AwsWafRuleCard](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRuleCard.Local.png) | ![illustration for AwsWafRuleGroup](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRuleGroup.Local.png) |




## AwsWafRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafRule
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRule('AwsWafRule', 'Aws Waf Rule', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafRule
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRule('AwsWafRule', 'Aws Waf Rule', 'an optional tech label', 'an optional description')
@enduml
```

## AwsWafRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafRuleCard
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')

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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafRuleCard
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRuleCard('AwsWafRuleCard', 'Aws Waf Rule Card', 'an optional description')
@enduml
```

## AwsWafRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafRuleGroup
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')

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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafRuleGroup
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafRule')

' renders the element
AwsWafRuleGroup('AwsWafRuleGroup', 'Aws Waf Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

