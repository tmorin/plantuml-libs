# SslPadlock


```text
aws/Resource/GeneralIcons/SslPadlock
```

```text
include('aws/Resource/GeneralIcons/SslPadlock')
```



| Illustration | SslPadlock | SslPadlockCard | SslPadlockGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/GeneralIcons/SslPadlock.png) | ![illustration for SslPadlock](../../../aws/Resource/GeneralIcons/SslPadlock.Local.png) | ![illustration for SslPadlockCard](../../../aws/Resource/GeneralIcons/SslPadlockCard.Local.png) | ![illustration for SslPadlockGroup](../../../aws/Resource/GeneralIcons/SslPadlockGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SslPadlockXs>`
- `<$SslPadlockSm>`
- `<$SslPadlockMd>`
- `<$SslPadlockLg>`





## SslPadlock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element SslPadlock
include('aws/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlock('SslPadlock', 'Ssl Padlock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SslPadlock
include('aws/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlock('SslPadlock', 'Ssl Padlock', 'an optional tech label', 'an optional description')
@enduml
```

## SslPadlockCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element SslPadlockCard
include('aws/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlockCard('SslPadlockCard', 'Ssl Padlock Card', 'an optional description')
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

' loads the Item which embeds the element SslPadlockCard
include('aws/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlockCard('SslPadlockCard', 'Ssl Padlock Card', 'an optional description')
@enduml
```

## SslPadlockGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element SslPadlockGroup
include('aws/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlockGroup('SslPadlockGroup', 'Ssl Padlock Group', 'an optional tech label') {
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

' loads the Item which embeds the element SslPadlockGroup
include('aws/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlockGroup('SslPadlockGroup', 'Ssl Padlock Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

