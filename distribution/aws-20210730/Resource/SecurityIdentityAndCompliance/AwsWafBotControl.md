# AwsWafBotControl


```text
aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl
```

```text
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')
```



| Illustration | AwsWafBotControl | AwsWafBotControlCard | AwsWafBotControlGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl.png) | ![illustration for AwsWafBotControl](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl.Local.png) | ![illustration for AwsWafBotControlCard](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControlCard.Local.png) | ![illustration for AwsWafBotControlGroup](../../../aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControlGroup.Local.png) |




## AwsWafBotControl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafBotControl
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')

' renders the element
AwsWafBotControl('AwsWafBotControl', 'Aws Waf Bot Control', 'an optional tech label')
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

' loads the Item which embeds the element AwsWafBotControl
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')

' renders the element
AwsWafBotControl('AwsWafBotControl', 'Aws Waf Bot Control', 'an optional tech label')
@enduml
```

## AwsWafBotControlCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafBotControlCard
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')

' renders the element
AwsWafBotControlCard('AwsWafBotControlCard', 'Aws Waf Bot Control Card', 'an optional description')
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

' loads the Item which embeds the element AwsWafBotControlCard
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')

' renders the element
AwsWafBotControlCard('AwsWafBotControlCard', 'Aws Waf Bot Control Card', 'an optional description')
@enduml
```

## AwsWafBotControlGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWafBotControlGroup
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')

' renders the element
AwsWafBotControlGroup('AwsWafBotControlGroup', 'Aws Waf Bot Control Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsWafBotControlGroup
include('aws-20210730/Resource/SecurityIdentityAndCompliance/AwsWafBotControl')

' renders the element
AwsWafBotControlGroup('AwsWafBotControlGroup', 'Aws Waf Bot Control Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

