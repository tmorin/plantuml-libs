# Sentry


```text
simpleicons-8/S/Sentry
```

```text
include('simpleicons-8/S/Sentry')
```



| Illustration | Sentry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sentry.png) | ![illustration for Sentry](../../simpleicons-8/S/Sentry.Local.png) |




## Sentry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sentry
include('simpleicons-8/S/Sentry')

' renders the element
Sentry('Sentry', 'Sentry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sentry
include('simpleicons-8/S/Sentry')

' renders the element
Sentry('Sentry', 'Sentry', 'an optional tech label', 'an optional description')
@enduml
```

