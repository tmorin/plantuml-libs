# Protonmail


```text
simpleicons-5/P/Protonmail
```

```text
include('simpleicons-5/P/Protonmail')
```



| Illustration | Protonmail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Protonmail.png) | ![illustration for Protonmail](../../simpleicons-5/P/Protonmail.Local.png) |




## Protonmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Protonmail
include('simpleicons-5/P/Protonmail')

' renders the element
Protonmail('Protonmail', 'Protonmail', 'an optional tech label')
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

' loads the Item which embeds the element Protonmail
include('simpleicons-5/P/Protonmail')

' renders the element
Protonmail('Protonmail', 'Protonmail', 'an optional tech label')
@enduml
```

