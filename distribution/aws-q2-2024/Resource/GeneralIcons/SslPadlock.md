# SslPadlock


```text
aws-q2-2024/Resource/GeneralIcons/SslPadlock
```

```text
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')
```



| Illustration | SslPadlock | SslPadlockCard | SslPadlockGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/GeneralIcons/SslPadlock.png) | ![illustration for SslPadlock](../../../aws-q2-2024/Resource/GeneralIcons/SslPadlock.Local.png) | ![illustration for SslPadlockCard](../../../aws-q2-2024/Resource/GeneralIcons/SslPadlockCard.Local.png) | ![illustration for SslPadlockGroup](../../../aws-q2-2024/Resource/GeneralIcons/SslPadlockGroup.Local.png) |



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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element SslPadlock
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element SslPadlock
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element SslPadlockCard
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element SslPadlockCard
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element SslPadlockGroup
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element SslPadlockGroup
include('aws-q2-2024/Resource/GeneralIcons/SslPadlock')

' renders the element
SslPadlockGroup('SslPadlockGroup', 'Ssl Padlock Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

