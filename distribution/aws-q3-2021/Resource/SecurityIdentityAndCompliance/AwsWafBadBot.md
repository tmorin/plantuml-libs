# AwsWafBadBot


```text
aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot
```

```text
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')
```



| Illustration | AwsWafBadBot | AwsWafBadBotCard | AwsWafBadBotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot.png) | ![illustration for AwsWafBadBot](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot.Local.png) | ![illustration for AwsWafBadBotCard](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBotCard.Local.png) | ![illustration for AwsWafBadBotGroup](../../../aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBotGroup.Local.png) |




## AwsWafBadBot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafBadBot
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')

' renders the element
AwsWafBadBot('AwsWafBadBot', 'Aws Waf Bad Bot', 'an optional tech label')
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

' loads the Item which embeds the element AwsWafBadBot
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')

' renders the element
AwsWafBadBot('AwsWafBadBot', 'Aws Waf Bad Bot', 'an optional tech label')
@enduml
```

## AwsWafBadBotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafBadBotCard
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')

' renders the element
AwsWafBadBotCard('AwsWafBadBotCard', 'Aws Waf Bad Bot Card', 'an optional description')
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

' loads the Item which embeds the element AwsWafBadBotCard
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')

' renders the element
AwsWafBadBotCard('AwsWafBadBotCard', 'Aws Waf Bad Bot Card', 'an optional description')
@enduml
```

## AwsWafBadBotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWafBadBotGroup
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')

' renders the element
AwsWafBadBotGroup('AwsWafBadBotGroup', 'Aws Waf Bad Bot Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsWafBadBotGroup
include('aws-q3-2021/Resource/SecurityIdentityAndCompliance/AwsWafBadBot')

' renders the element
AwsWafBadBotGroup('AwsWafBadBotGroup', 'Aws Waf Bad Bot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

