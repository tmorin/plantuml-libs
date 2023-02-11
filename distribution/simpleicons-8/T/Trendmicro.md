# Trendmicro


```text
simpleicons-8/T/Trendmicro
```

```text
include('simpleicons-8/T/Trendmicro')
```



| Illustration | Trendmicro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Trendmicro.png) | ![illustration for Trendmicro](../../simpleicons-8/T/Trendmicro.Local.png) |




## Trendmicro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Trendmicro
include('simpleicons-8/T/Trendmicro')

' renders the element
Trendmicro('Trendmicro', 'Trendmicro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trendmicro
include('simpleicons-8/T/Trendmicro')

' renders the element
Trendmicro('Trendmicro', 'Trendmicro', 'an optional tech label', 'an optional description')
@enduml
```

