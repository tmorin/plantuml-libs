# Pandas


```text
simpleicons-7/P/Pandas
```

```text
include('simpleicons-7/P/Pandas')
```



| Illustration | Pandas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pandas.png) | ![illustration for Pandas](../../simpleicons-7/P/Pandas.Local.png) |




## Pandas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pandas
include('simpleicons-7/P/Pandas')

' renders the element
Pandas('Pandas', 'Pandas', 'an optional tech label')
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

' loads the Item which embeds the element Pandas
include('simpleicons-7/P/Pandas')

' renders the element
Pandas('Pandas', 'Pandas', 'an optional tech label')
@enduml
```

