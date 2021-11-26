# Laravel


```text
simpleicons-5/L/Laravel
```

```text
include('simpleicons-5/L/Laravel')
```



| Illustration | Laravel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Laravel.png) | ![illustration for Laravel](../../simpleicons-5/L/Laravel.Local.png) |




## Laravel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Laravel
include('simpleicons-5/L/Laravel')

' renders the element
Laravel('Laravel', 'Laravel', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Laravel
include('simpleicons-5/L/Laravel')

' renders the element
Laravel('Laravel', 'Laravel', 'an optional tech label')
@enduml
```

