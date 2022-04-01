# AwsWafManagedRule


```text
aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule
```

```text
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')
```



| Illustration | AwsWafManagedRule | AwsWafManagedRuleCard | AwsWafManagedRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule.png) | ![illustration for AwsWafManagedRule](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule.Local.png) | ![illustration for AwsWafManagedRuleCard](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRuleCard.Local.png) | ![illustration for AwsWafManagedRuleGroup](../../../aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRuleGroup.Local.png) |




## AwsWafManagedRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafManagedRule
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRule('AwsWafManagedRule', 'Aws Waf Managed Rule', 'an optional tech label')
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

' loads the Item which embeds the element AwsWafManagedRule
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRule('AwsWafManagedRule', 'Aws Waf Managed Rule', 'an optional tech label')
@enduml
```

## AwsWafManagedRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafManagedRuleCard
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRuleCard('AwsWafManagedRuleCard', 'Aws Waf Managed Rule Card', 'an optional description')
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

' loads the Item which embeds the element AwsWafManagedRuleCard
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRuleCard('AwsWafManagedRuleCard', 'Aws Waf Managed Rule Card', 'an optional description')
@enduml
```

## AwsWafManagedRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsWafManagedRuleGroup
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRuleGroup('AwsWafManagedRuleGroup', 'Aws Waf Managed Rule Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsWafManagedRuleGroup
include('aws-q1-2022/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRuleGroup('AwsWafManagedRuleGroup', 'Aws Waf Managed Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

