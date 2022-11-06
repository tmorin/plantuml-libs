# Bun


```text
simpleicons-7/B/Bun
```

```text
include('simpleicons-7/B/Bun')
```



| Illustration | Bun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bun.png) | ![illustration for Bun](../../simpleicons-7/B/Bun.Local.png) |




## Bun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bun
include('simpleicons-7/B/Bun')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bun
include('simpleicons-7/B/Bun')

' renders the element
Bun('Bun', 'Bun', 'an optional tech label', 'an optional description')
@enduml
```

