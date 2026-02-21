# Parrotsecurity


```text
simpleicons/P/Parrotsecurity
```

```text
include('simpleicons/P/Parrotsecurity')
```



| Illustration | Parrotsecurity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Parrotsecurity.png) | ![illustration for Parrotsecurity](../../simpleicons/P/Parrotsecurity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParrotsecurityXs>`
- `<$ParrotsecuritySm>`
- `<$ParrotsecurityMd>`
- `<$ParrotsecurityLg>`





## Parrotsecurity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Parrotsecurity
include('simpleicons/P/Parrotsecurity')

' renders the element
Parrotsecurity('Parrotsecurity', 'Parrotsecurity', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Parrotsecurity
include('simpleicons/P/Parrotsecurity')

' renders the element
Parrotsecurity('Parrotsecurity', 'Parrotsecurity', 'an optional tech label', 'an optional description')
@enduml
```

