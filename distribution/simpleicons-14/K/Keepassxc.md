# Keepassxc


```text
simpleicons-14/K/Keepassxc
```

```text
include('simpleicons-14/K/Keepassxc')
```



| Illustration | Keepassxc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Keepassxc.png) | ![illustration for Keepassxc](../../simpleicons-14/K/Keepassxc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeepassxcXs>`
- `<$KeepassxcSm>`
- `<$KeepassxcMd>`
- `<$KeepassxcLg>`





## Keepassxc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Keepassxc
include('simpleicons-14/K/Keepassxc')

' renders the element
Keepassxc('Keepassxc', 'Keepassxc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keepassxc
include('simpleicons-14/K/Keepassxc')

' renders the element
Keepassxc('Keepassxc', 'Keepassxc', 'an optional tech label', 'an optional description')
@enduml
```

