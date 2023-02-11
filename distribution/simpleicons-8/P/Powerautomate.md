# Powerautomate


```text
simpleicons-8/P/Powerautomate
```

```text
include('simpleicons-8/P/Powerautomate')
```



| Illustration | Powerautomate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Powerautomate.png) | ![illustration for Powerautomate](../../simpleicons-8/P/Powerautomate.Local.png) |




## Powerautomate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Powerautomate
include('simpleicons-8/P/Powerautomate')

' renders the element
Powerautomate('Powerautomate', 'Powerautomate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerautomate
include('simpleicons-8/P/Powerautomate')

' renders the element
Powerautomate('Powerautomate', 'Powerautomate', 'an optional tech label', 'an optional description')
@enduml
```

