# Linux


```text
simpleicons-14/L/Linux
```

```text
include('simpleicons-14/L/Linux')
```



| Illustration | Linux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Linux.png) | ![illustration for Linux](../../simpleicons-14/L/Linux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinuxXs>`
- `<$LinuxSm>`
- `<$LinuxMd>`
- `<$LinuxLg>`





## Linux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Linux
include('simpleicons-14/L/Linux')

' renders the element
Linux('Linux', 'Linux', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Linux
include('simpleicons-14/L/Linux')

' renders the element
Linux('Linux', 'Linux', 'an optional tech label', 'an optional description')
@enduml
```

