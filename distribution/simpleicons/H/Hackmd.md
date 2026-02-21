# Hackmd


```text
simpleicons/H/Hackmd
```

```text
include('simpleicons/H/Hackmd')
```



| Illustration | Hackmd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hackmd.png) | ![illustration for Hackmd](../../simpleicons/H/Hackmd.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hackmd
include('simpleicons/H/Hackmd')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hackmd
include('simpleicons/H/Hackmd')

' renders the element
Hackmd('Hackmd', 'Hackmd', 'an optional tech label', 'an optional description')
@enduml
```

