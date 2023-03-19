# Bugsnag


```text
simpleicons-8/B/Bugsnag
```

```text
include('simpleicons-8/B/Bugsnag')
```



| Illustration | Bugsnag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bugsnag.png) | ![illustration for Bugsnag](../../simpleicons-8/B/Bugsnag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BugsnagXs>`
- `<$BugsnagSm>`
- `<$BugsnagMd>`
- `<$BugsnagLg>`





## Bugsnag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bugsnag
include('simpleicons-8/B/Bugsnag')

' renders the element
Bugsnag('Bugsnag', 'Bugsnag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bugsnag
include('simpleicons-8/B/Bugsnag')

' renders the element
Bugsnag('Bugsnag', 'Bugsnag', 'an optional tech label', 'an optional description')
@enduml
```

