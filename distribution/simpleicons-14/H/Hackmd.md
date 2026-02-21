# Hackmd


```text
simpleicons-14/H/Hackmd
```

```text
include('simpleicons-14/H/Hackmd')
```



| Illustration | Hackmd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hackmd.png) | ![illustration for Hackmd](../../simpleicons-14/H/Hackmd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackmdXs>`
- `<$HackmdSm>`
- `<$HackmdMd>`
- `<$HackmdLg>`





## Hackmd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hackmd
include('simpleicons-14/H/Hackmd')

' renders the element
Hackmd('Hackmd', 'Hackmd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackmd
include('simpleicons-14/H/Hackmd')

' renders the element
Hackmd('Hackmd', 'Hackmd', 'an optional tech label', 'an optional description')
@enduml
```

