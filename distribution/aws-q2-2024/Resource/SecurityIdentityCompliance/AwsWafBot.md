# AwsWafBot


```text
aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot
```

```text
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')
```



| Illustration | AwsWafBot | AwsWafBotCard | AwsWafBotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot.png) | ![illustration for AwsWafBot](../../../aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot.Local.png) | ![illustration for AwsWafBotCard](../../../aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBotCard.Local.png) | ![illustration for AwsWafBotGroup](../../../aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBotGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsWafBotXs>`
- `<$AwsWafBotSm>`
- `<$AwsWafBotMd>`
- `<$AwsWafBotLg>`





## AwsWafBot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsWafBot
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')

' renders the element
AwsWafBot('AwsWafBot', 'Aws Waf Bot', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsWafBot
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')

' renders the element
AwsWafBot('AwsWafBot', 'Aws Waf Bot', 'an optional tech label', 'an optional description')
@enduml
```

## AwsWafBotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsWafBotCard
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')

' renders the element
AwsWafBotCard('AwsWafBotCard', 'Aws Waf Bot Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsWafBotCard
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')

' renders the element
AwsWafBotCard('AwsWafBotCard', 'Aws Waf Bot Card', 'an optional description')
@enduml
```

## AwsWafBotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsWafBotGroup
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')

' renders the element
AwsWafBotGroup('AwsWafBotGroup', 'Aws Waf Bot Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsWafBotGroup
include('aws-q2-2024/Resource/SecurityIdentityCompliance/AwsWafBot')

' renders the element
AwsWafBotGroup('AwsWafBotGroup', 'Aws Waf Bot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

