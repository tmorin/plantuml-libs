# Servers


```text
aws-q1-2023/Resource/GeneralIcons/Servers
```

```text
include('aws-q1-2023/Resource/GeneralIcons/Servers')
```



| Illustration | Servers | ServersCard | ServersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/GeneralIcons/Servers.png) | ![illustration for Servers](../../../aws-q1-2023/Resource/GeneralIcons/Servers.Local.png) | ![illustration for ServersCard](../../../aws-q1-2023/Resource/GeneralIcons/ServersCard.Local.png) | ![illustration for ServersGroup](../../../aws-q1-2023/Resource/GeneralIcons/ServersGroup.Local.png) |




## Servers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element Servers
include('aws-q1-2023/Resource/GeneralIcons/Servers')

' renders the element
Servers('Servers', 'Servers', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element Servers
include('aws-q1-2023/Resource/GeneralIcons/Servers')

' renders the element
Servers('Servers', 'Servers', 'an optional tech label', 'an optional description')
@enduml
```

## ServersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServersCard
include('aws-q1-2023/Resource/GeneralIcons/Servers')

' renders the element
ServersCard('ServersCard', 'Servers Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServersCard
include('aws-q1-2023/Resource/GeneralIcons/Servers')

' renders the element
ServersCard('ServersCard', 'Servers Card', 'an optional description')
@enduml
```

## ServersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServersGroup
include('aws-q1-2023/Resource/GeneralIcons/Servers')

' renders the element
ServersGroup('ServersGroup', 'Servers Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element ServersGroup
include('aws-q1-2023/Resource/GeneralIcons/Servers')

' renders the element
ServersGroup('ServersGroup', 'Servers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

