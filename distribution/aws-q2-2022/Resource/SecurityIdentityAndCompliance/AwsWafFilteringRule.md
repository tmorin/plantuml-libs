# AwsWafFilteringRule


```text
aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule
```

```text
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')
```



| Illustration | AwsWafFilteringRule | AwsWafFilteringRuleCard | AwsWafFilteringRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule.png) | ![illustration for AwsWafFilteringRule](../../../aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule.Local.png) | ![illustration for AwsWafFilteringRuleCard](../../../aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRuleCard.Local.png) | ![illustration for AwsWafFilteringRuleGroup](../../../aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRuleGroup.Local.png) |




## AwsWafFilteringRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRule
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRule('AwsWafFilteringRule', 'Aws Waf Filtering Rule', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsWafFilteringRule
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRule('AwsWafFilteringRule', 'Aws Waf Filtering Rule', 'an optional tech label', 'an optional description')
@enduml
```

## AwsWafFilteringRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRuleCard
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRuleCard('AwsWafFilteringRuleCard', 'Aws Waf Filtering Rule Card', 'an optional description')
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

' loads the Item which embeds the element AwsWafFilteringRuleCard
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRuleCard('AwsWafFilteringRuleCard', 'Aws Waf Filtering Rule Card', 'an optional description')
@enduml
```

## AwsWafFilteringRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRuleGroup
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRuleGroup('AwsWafFilteringRuleGroup', 'Aws Waf Filtering Rule Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsWafFilteringRuleGroup
include('aws-q2-2022/Resource/SecurityIdentityAndCompliance/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRuleGroup('AwsWafFilteringRuleGroup', 'Aws Waf Filtering Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

