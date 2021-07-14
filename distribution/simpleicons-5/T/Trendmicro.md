# Trendmicro


```text
simpleicons-5/T/Trendmicro
```

```text
include('simpleicons-5/T/Trendmicro')
```



| Illustration | Trendmicro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Trendmicro.png) | ![illustration for Trendmicro](../../simpleicons-5/T/Trendmicro.Local.png) |




## Trendmicro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trendmicro
include('simpleicons-5/T/Trendmicro')

' renders the element
Trendmicro('Trendmicro', 'Trendmicro', 'an optional tech label')
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

' loads the Item which embeds the element Trendmicro
include('simpleicons-5/T/Trendmicro')

' renders the element
Trendmicro('Trendmicro', 'Trendmicro', 'an optional tech label')
@enduml
```

