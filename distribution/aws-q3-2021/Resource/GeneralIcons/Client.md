# Client


```text
aws-q3-2021/Resource/GeneralIcons/Client
```

```text
include('aws-q3-2021/Resource/GeneralIcons/Client')
```



| Illustration | Client | ClientCard | ClientGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/GeneralIcons/Client.png) | ![illustration for Client](../../../aws-q3-2021/Resource/GeneralIcons/Client.Local.png) | ![illustration for ClientCard](../../../aws-q3-2021/Resource/GeneralIcons/ClientCard.Local.png) | ![illustration for ClientGroup](../../../aws-q3-2021/Resource/GeneralIcons/ClientGroup.Local.png) |




## Client

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Client
include('aws-q3-2021/Resource/GeneralIcons/Client')

' renders the element
Client('Client', 'Client', 'an optional tech label')
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

' loads the Item which embeds the element Client
include('aws-q3-2021/Resource/GeneralIcons/Client')

' renders the element
Client('Client', 'Client', 'an optional tech label')
@enduml
```

## ClientCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ClientCard
include('aws-q3-2021/Resource/GeneralIcons/Client')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ClientCard
include('aws-q3-2021/Resource/GeneralIcons/Client')

' renders the element
ClientCard('ClientCard', 'Client Card', 'an optional description')
@enduml
```

## ClientGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ClientGroup
include('aws-q3-2021/Resource/GeneralIcons/Client')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ClientGroup
include('aws-q3-2021/Resource/GeneralIcons/Client')

' renders the element
ClientGroup('ClientGroup', 'Client Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

