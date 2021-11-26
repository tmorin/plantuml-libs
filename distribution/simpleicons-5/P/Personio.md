# Personio


```text
simpleicons-5/P/Personio
```

```text
include('simpleicons-5/P/Personio')
```



| Illustration | Personio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Personio.png) | ![illustration for Personio](../../simpleicons-5/P/Personio.Local.png) |




## Personio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Personio
include('simpleicons-5/P/Personio')

' renders the element
Personio('Personio', 'Personio', 'an optional tech label')
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

' loads the Item which embeds the element Personio
include('simpleicons-5/P/Personio')

' renders the element
Personio('Personio', 'Personio', 'an optional tech label')
@enduml
```

