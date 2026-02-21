# Posthog


```text
simpleicons-14/P/Posthog
```

```text
include('simpleicons-14/P/Posthog')
```



| Illustration | Posthog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Posthog.png) | ![illustration for Posthog](../../simpleicons-14/P/Posthog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PosthogXs>`
- `<$PosthogSm>`
- `<$PosthogMd>`
- `<$PosthogLg>`





## Posthog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Posthog
include('simpleicons-14/P/Posthog')

' renders the element
Posthog('Posthog', 'Posthog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Posthog
include('simpleicons-14/P/Posthog')

' renders the element
Posthog('Posthog', 'Posthog', 'an optional tech label', 'an optional description')
@enduml
```

