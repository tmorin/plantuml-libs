# AwsWafFilteringRule


```text
aws/Resource/SecurityIdentity/AwsWafFilteringRule
```

```text
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')
```



| Illustration | AwsWafFilteringRule | AwsWafFilteringRuleCard | AwsWafFilteringRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/SecurityIdentity/AwsWafFilteringRule.png) | ![illustration for AwsWafFilteringRule](../../../aws/Resource/SecurityIdentity/AwsWafFilteringRule.Local.png) | ![illustration for AwsWafFilteringRuleCard](../../../aws/Resource/SecurityIdentity/AwsWafFilteringRuleCard.Local.png) | ![illustration for AwsWafFilteringRuleGroup](../../../aws/Resource/SecurityIdentity/AwsWafFilteringRuleGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsWafFilteringRuleXs>`
- `<$AwsWafFilteringRuleSm>`
- `<$AwsWafFilteringRuleMd>`
- `<$AwsWafFilteringRuleLg>`





## AwsWafFilteringRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRule
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRule
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRuleCard
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRuleCard
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRuleGroup
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafFilteringRuleGroup
include('aws/Resource/SecurityIdentity/AwsWafFilteringRule')

' renders the element
AwsWafFilteringRuleGroup('AwsWafFilteringRuleGroup', 'Aws Waf Filtering Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

