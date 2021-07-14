# Pool


```text
material-4/Places/Pool
```

```text
include('material-4/Places/Pool')
```



| Illustration | Pool |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Pool.png) | ![illustration for Pool](../../material-4/Places/Pool.Local.png) |




## Pool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Pool
include('material-4/Places/Pool')

' renders the element
Pool('Pool', 'Pool', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Pool
include('material-4/Places/Pool')

' renders the element
Pool('Pool', 'Pool', 'an optional tech label')
@enduml
```

