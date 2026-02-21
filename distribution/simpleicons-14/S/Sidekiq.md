# Sidekiq


```text
simpleicons-14/S/Sidekiq
```

```text
include('simpleicons-14/S/Sidekiq')
```



| Illustration | Sidekiq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sidekiq.png) | ![illustration for Sidekiq](../../simpleicons-14/S/Sidekiq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SidekiqXs>`
- `<$SidekiqSm>`
- `<$SidekiqMd>`
- `<$SidekiqLg>`





## Sidekiq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sidekiq
include('simpleicons-14/S/Sidekiq')

' renders the element
Sidekiq('Sidekiq', 'Sidekiq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sidekiq
include('simpleicons-14/S/Sidekiq')

' renders the element
Sidekiq('Sidekiq', 'Sidekiq', 'an optional tech label', 'an optional description')
@enduml
```

