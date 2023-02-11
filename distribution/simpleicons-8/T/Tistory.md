# Tistory


```text
simpleicons-8/T/Tistory
```

```text
include('simpleicons-8/T/Tistory')
```



| Illustration | Tistory |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tistory.png) | ![illustration for Tistory](../../simpleicons-8/T/Tistory.Local.png) |




## Tistory

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tistory
include('simpleicons-8/T/Tistory')

' renders the element
Tistory('Tistory', 'Tistory', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tistory
include('simpleicons-8/T/Tistory')

' renders the element
Tistory('Tistory', 'Tistory', 'an optional tech label', 'an optional description')
@enduml
```

