# Bun


```text
simpleicons-8/B/Bun
```

```text
include('simpleicons-8/B/Bun')
```



| Illustration | Bun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bun.png) | ![illustration for Bun](../../simpleicons-8/B/Bun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BunXs>`
- `<$BunSm>`
- `<$BunMd>`
- `<$BunLg>`





## Bun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bun
include('simpleicons-8/B/Bun')

' renders the element
Bun('Bun', 'Bun', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bun
include('simpleicons-8/B/Bun')

' renders the element
Bun('Bun', 'Bun', 'an optional tech label', 'an optional description')
@enduml
```

