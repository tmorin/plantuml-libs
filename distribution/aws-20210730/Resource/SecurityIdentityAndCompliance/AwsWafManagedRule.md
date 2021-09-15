# AwsWafManagedRule


```text
aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule
```

```text
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')
```



| Illustration | AwsWafManagedRule | AwsWafManagedRuleCard | AwsWafManagedRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule.png) | ![illustration for AwsWafManagedRule](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule.Local.png) | ![illustration for AwsWafManagedRuleCard](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRuleCard.Local.png) | ![illustration for AwsWafManagedRuleGroup](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRuleGroup.Local.png) |




## AwsWafManagedRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafManagedRule
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafManagedRule
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRule('AwsWafManagedRule', 'Aws Waf Managed Rule', 'an optional tech label')
@enduml
```

## AwsWafManagedRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafManagedRuleCard
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafManagedRuleCard
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRuleCard('AwsWafManagedRuleCard', 'Aws Waf Managed Rule Card', 'an optional description')
@enduml
```

## AwsWafManagedRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafManagedRuleGroup
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafManagedRuleGroup
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafManagedRule')

' renders the element
AwsWafManagedRuleGroup('AwsWafManagedRuleGroup', 'Aws Waf Managed Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

