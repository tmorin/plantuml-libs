# Checkmk


```text
simpleicons-14/C/Checkmk
```

```text
include('simpleicons-14/C/Checkmk')
```



| Illustration | Checkmk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Checkmk.png) | ![illustration for Checkmk](../../simpleicons-14/C/Checkmk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckmkXs>`
- `<$CheckmkSm>`
- `<$CheckmkMd>`
- `<$CheckmkLg>`





## Checkmk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Checkmk
include('simpleicons-14/C/Checkmk')

' renders the element
Checkmk('Checkmk', 'Checkmk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Checkmk
include('simpleicons-14/C/Checkmk')

' renders the element
Checkmk('Checkmk', 'Checkmk', 'an optional tech label', 'an optional description')
@enduml
```

