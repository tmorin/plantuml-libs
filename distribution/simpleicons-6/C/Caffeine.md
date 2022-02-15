# Caffeine


```text
simpleicons-6/C/Caffeine
```

```text
include('simpleicons-6/C/Caffeine')
```



| Illustration | Caffeine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Caffeine.png) | ![illustration for Caffeine](../../simpleicons-6/C/Caffeine.Local.png) |




## Caffeine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Caffeine
include('simpleicons-6/C/Caffeine')

' renders the element
Caffeine('Caffeine', 'Caffeine', 'an optional tech label')
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

' loads the Item which embeds the element Caffeine
include('simpleicons-6/C/Caffeine')

' renders the element
Caffeine('Caffeine', 'Caffeine', 'an optional tech label')
@enduml
```

