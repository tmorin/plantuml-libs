# Fdroid


```text
simpleicons-5/F/Fdroid
```

```text
include('simpleicons-5/F/Fdroid')
```



| Illustration | Fdroid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fdroid.png) | ![illustration for Fdroid](../../simpleicons-5/F/Fdroid.Local.png) |




## Fdroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fdroid
include('simpleicons-5/F/Fdroid')

' renders the element
Fdroid('Fdroid', 'Fdroid', 'an optional tech label')
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

' loads the Item which embeds the element Fdroid
include('simpleicons-5/F/Fdroid')

' renders the element
Fdroid('Fdroid', 'Fdroid', 'an optional tech label')
@enduml
```

