# Kirby


```text
simpleicons-6/K/Kirby
```

```text
include('simpleicons-6/K/Kirby')
```



| Illustration | Kirby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kirby.png) | ![illustration for Kirby](../../simpleicons-6/K/Kirby.Local.png) |




## Kirby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kirby
include('simpleicons-6/K/Kirby')

' renders the element
Kirby('Kirby', 'Kirby', 'an optional tech label')
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

' loads the Item which embeds the element Kirby
include('simpleicons-6/K/Kirby')

' renders the element
Kirby('Kirby', 'Kirby', 'an optional tech label')
@enduml
```

