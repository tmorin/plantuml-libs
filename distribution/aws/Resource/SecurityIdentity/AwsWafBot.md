# AwsWafBot


```text
aws/Resource/SecurityIdentity/AwsWafBot
```

```text
include('aws/Resource/SecurityIdentity/AwsWafBot')
```



| Illustration | AwsWafBot | AwsWafBotCard | AwsWafBotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/SecurityIdentity/AwsWafBot.png) | ![illustration for AwsWafBot](../../../aws/Resource/SecurityIdentity/AwsWafBot.Local.png) | ![illustration for AwsWafBotCard](../../../aws/Resource/SecurityIdentity/AwsWafBotCard.Local.png) | ![illustration for AwsWafBotGroup](../../../aws/Resource/SecurityIdentity/AwsWafBotGroup.Local.png) |



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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafBot
include('aws/Resource/SecurityIdentity/AwsWafBot')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafBot
include('aws/Resource/SecurityIdentity/AwsWafBot')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafBotCard
include('aws/Resource/SecurityIdentity/AwsWafBot')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafBotCard
include('aws/Resource/SecurityIdentity/AwsWafBot')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafBotGroup
include('aws/Resource/SecurityIdentity/AwsWafBot')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsWafBotGroup
include('aws/Resource/SecurityIdentity/AwsWafBot')

' renders the element
AwsWafBotGroup('AwsWafBotGroup', 'Aws Waf Bot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

