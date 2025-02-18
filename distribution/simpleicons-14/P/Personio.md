# Personio


```text
simpleicons-14/P/Personio
```

```text
include('simpleicons-14/P/Personio')
```



| Illustration | Personio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Personio.png) | ![illustration for Personio](../../simpleicons-14/P/Personio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonioXs>`
- `<$PersonioSm>`
- `<$PersonioMd>`
- `<$PersonioLg>`





## Personio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Personio
include('simpleicons-14/P/Personio')

' renders the element
Personio('Personio', 'Personio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Personio
include('simpleicons-14/P/Personio')

' renders the element
Personio('Personio', 'Personio', 'an optional tech label', 'an optional description')
@enduml
```

