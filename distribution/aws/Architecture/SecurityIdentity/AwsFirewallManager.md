# AwsFirewallManager


```text
aws/Architecture/SecurityIdentity/AwsFirewallManager
```

```text
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')
```



| Illustration | AwsFirewallManager | AwsFirewallManagerCard | AwsFirewallManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/SecurityIdentity/AwsFirewallManager.png) | ![illustration for AwsFirewallManager](../../../aws/Architecture/SecurityIdentity/AwsFirewallManager.Local.png) | ![illustration for AwsFirewallManagerCard](../../../aws/Architecture/SecurityIdentity/AwsFirewallManagerCard.Local.png) | ![illustration for AwsFirewallManagerGroup](../../../aws/Architecture/SecurityIdentity/AwsFirewallManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsFirewallManagerXs>`
- `<$AwsFirewallManagerSm>`
- `<$AwsFirewallManagerMd>`
- `<$AwsFirewallManagerLg>`





## AwsFirewallManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsFirewallManager
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')

' renders the element
AwsFirewallManager('AwsFirewallManager', 'Aws Firewall Manager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsFirewallManager
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')

' renders the element
AwsFirewallManager('AwsFirewallManager', 'Aws Firewall Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsFirewallManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsFirewallManagerCard
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')

' renders the element
AwsFirewallManagerCard('AwsFirewallManagerCard', 'Aws Firewall Manager Card', 'an optional description')
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

' loads the Item which embeds the element AwsFirewallManagerCard
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')

' renders the element
AwsFirewallManagerCard('AwsFirewallManagerCard', 'Aws Firewall Manager Card', 'an optional description')
@enduml
```

## AwsFirewallManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsFirewallManagerGroup
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')

' renders the element
AwsFirewallManagerGroup('AwsFirewallManagerGroup', 'Aws Firewall Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsFirewallManagerGroup
include('aws/Architecture/SecurityIdentity/AwsFirewallManager')

' renders the element
AwsFirewallManagerGroup('AwsFirewallManagerGroup', 'Aws Firewall Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

