# Maserati


```text
simpleicons-7/M/Maserati
```

```text
include('simpleicons-7/M/Maserati')
```



| Illustration | Maserati |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Maserati.png) | ![illustration for Maserati](../../simpleicons-7/M/Maserati.Local.png) |




## Maserati

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Maserati
include('simpleicons-7/M/Maserati')

' renders the element
Maserati('Maserati', 'Maserati', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Maserati
include('simpleicons-7/M/Maserati')

' renders the element
Maserati('Maserati', 'Maserati', 'an optional tech label', 'an optional description')
@enduml
```

