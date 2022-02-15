# Tokyometro


```text
simpleicons-6/T/Tokyometro
```

```text
include('simpleicons-6/T/Tokyometro')
```



| Illustration | Tokyometro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tokyometro.png) | ![illustration for Tokyometro](../../simpleicons-6/T/Tokyometro.Local.png) |




## Tokyometro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tokyometro
include('simpleicons-6/T/Tokyometro')

' renders the element
Tokyometro('Tokyometro', 'Tokyometro', 'an optional tech label')
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

' loads the Item which embeds the element Tokyometro
include('simpleicons-6/T/Tokyometro')

' renders the element
Tokyometro('Tokyometro', 'Tokyometro', 'an optional tech label')
@enduml
```

