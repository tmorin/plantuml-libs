# Konami


```text
simpleicons-8/K/Konami
```

```text
include('simpleicons-8/K/Konami')
```



| Illustration | Konami |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Konami.png) | ![illustration for Konami](../../simpleicons-8/K/Konami.Local.png) |




## Konami

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Konami
include('simpleicons-8/K/Konami')

' renders the element
Konami('Konami', 'Konami', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Konami
include('simpleicons-8/K/Konami')

' renders the element
Konami('Konami', 'Konami', 'an optional tech label', 'an optional description')
@enduml
```

