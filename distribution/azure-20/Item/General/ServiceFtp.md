# ServiceFtp


```text
azure-20/Item/General/ServiceFtp
```

```text
include('azure-20/Item/General/ServiceFtp')
```



| Illustration | ServiceFtp | ServiceFtpCard | ServiceFtpGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServiceFtp.png) | ![illustration for ServiceFtp](../../../azure-20/Item/General/ServiceFtp.Local.png) | ![illustration for ServiceFtpCard](../../../azure-20/Item/General/ServiceFtpCard.Local.png) | ![illustration for ServiceFtpGroup](../../../azure-20/Item/General/ServiceFtpGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceFtpXs>`
- `<$ServiceFtpSm>`
- `<$ServiceFtpMd>`
- `<$ServiceFtpLg>`





## ServiceFtp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFtp
include('azure-20/Item/General/ServiceFtp')

' renders the element
ServiceFtp('ServiceFtp', 'Service Ftp', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFtp
include('azure-20/Item/General/ServiceFtp')

' renders the element
ServiceFtp('ServiceFtp', 'Service Ftp', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFtpCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFtpCard
include('azure-20/Item/General/ServiceFtp')

' renders the element
ServiceFtpCard('ServiceFtpCard', 'Service Ftp Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFtpCard
include('azure-20/Item/General/ServiceFtp')

' renders the element
ServiceFtpCard('ServiceFtpCard', 'Service Ftp Card', 'an optional description')
@enduml
```

## ServiceFtpGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFtpGroup
include('azure-20/Item/General/ServiceFtp')

' renders the element
ServiceFtpGroup('ServiceFtpGroup', 'Service Ftp Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFtpGroup
include('azure-20/Item/General/ServiceFtp')

' renders the element
ServiceFtpGroup('ServiceFtpGroup', 'Service Ftp Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

