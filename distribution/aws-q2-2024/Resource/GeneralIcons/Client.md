# Client


```text
aws-q2-2024/Resource/GeneralIcons/Client
```

```text
include('aws-q2-2024/Resource/GeneralIcons/Client')
```



| Illustration | Client | ClientCard | ClientGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/GeneralIcons/Client.png) | ![illustration for Client](../../../aws-q2-2024/Resource/GeneralIcons/Client.Local.png) | ![illustration for ClientCard](../../../aws-q2-2024/Resource/GeneralIcons/ClientCard.Local.png) | ![illustration for ClientGroup](../../../aws-q2-2024/Resource/GeneralIcons/ClientGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClientXs>`
- `<$ClientSm>`
- `<$ClientMd>`
- `<$ClientLg>`





## Client

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element Client
include('aws-q2-2024/Resource/GeneralIcons/Client')

' renders the element
Client('Client', 'Client', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Client
include('aws-q2-2024/Resource/GeneralIcons/Client')

' renders the element
Client('Client', 'Client', 'an optional tech label', 'an optional description')
@enduml
```

## ClientCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element ClientCard
include('aws-q2-2024/Resource/GeneralIcons/Client')

' renders the element
ClientCard('ClientCard', 'Client Card', 'an optional description')
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

' loads the Item which embeds the element ClientCard
include('aws-q2-2024/Resource/GeneralIcons/Client')

' renders the element
ClientCard('ClientCard', 'Client Card', 'an optional description')
@enduml
```

## ClientGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element ClientGroup
include('aws-q2-2024/Resource/GeneralIcons/Client')

' renders the element
ClientGroup('ClientGroup', 'Client Group', 'an optional tech label') {
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

' loads the Item which embeds the element ClientGroup
include('aws-q2-2024/Resource/GeneralIcons/Client')

' renders the element
ClientGroup('ClientGroup', 'Client Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

