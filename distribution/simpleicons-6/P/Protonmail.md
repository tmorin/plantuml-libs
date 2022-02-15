# Protonmail


```text
simpleicons-6/P/Protonmail
```

```text
include('simpleicons-6/P/Protonmail')
```



| Illustration | Protonmail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Protonmail.png) | ![illustration for Protonmail](../../simpleicons-6/P/Protonmail.Local.png) |




## Protonmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Protonmail
include('simpleicons-6/P/Protonmail')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Protonmail
include('simpleicons-6/P/Protonmail')

' renders the element
Protonmail('Protonmail', 'Protonmail', 'an optional tech label')
@enduml
```

