# Linuxmint


```text
simpleicons-14/L/Linuxmint
```

```text
include('simpleicons-14/L/Linuxmint')
```



| Illustration | Linuxmint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Linuxmint.png) | ![illustration for Linuxmint](../../simpleicons-14/L/Linuxmint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinuxmintXs>`
- `<$LinuxmintSm>`
- `<$LinuxmintMd>`
- `<$LinuxmintLg>`





## Linuxmint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Linuxmint
include('simpleicons-14/L/Linuxmint')

' renders the element
Linuxmint('Linuxmint', 'Linuxmint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linuxmint
include('simpleicons-14/L/Linuxmint')

' renders the element
Linuxmint('Linuxmint', 'Linuxmint', 'an optional tech label', 'an optional description')
@enduml
```

