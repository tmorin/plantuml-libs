# Fdroid


```text
simpleicons-8/F/Fdroid
```

```text
include('simpleicons-8/F/Fdroid')
```



| Illustration | Fdroid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fdroid.png) | ![illustration for Fdroid](../../simpleicons-8/F/Fdroid.Local.png) |




## Fdroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fdroid
include('simpleicons-8/F/Fdroid')

' renders the element
Fdroid('Fdroid', 'Fdroid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fdroid
include('simpleicons-8/F/Fdroid')

' renders the element
Fdroid('Fdroid', 'Fdroid', 'an optional tech label', 'an optional description')
@enduml
```

