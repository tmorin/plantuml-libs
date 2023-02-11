# Cpanel


```text
simpleicons-8/C/Cpanel
```

```text
include('simpleicons-8/C/Cpanel')
```



| Illustration | Cpanel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cpanel.png) | ![illustration for Cpanel](../../simpleicons-8/C/Cpanel.Local.png) |




## Cpanel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cpanel
include('simpleicons-8/C/Cpanel')

' renders the element
Cpanel('Cpanel', 'Cpanel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cpanel
include('simpleicons-8/C/Cpanel')

' renders the element
Cpanel('Cpanel', 'Cpanel', 'an optional tech label', 'an optional description')
@enduml
```

