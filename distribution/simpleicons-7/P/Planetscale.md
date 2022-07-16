# Planetscale


```text
simpleicons-7/P/Planetscale
```

```text
include('simpleicons-7/P/Planetscale')
```



| Illustration | Planetscale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Planetscale.png) | ![illustration for Planetscale](../../simpleicons-7/P/Planetscale.Local.png) |




## Planetscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Planetscale
include('simpleicons-7/P/Planetscale')

' renders the element
Planetscale('Planetscale', 'Planetscale', 'an optional tech label')
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

' loads the Item which embeds the element Planetscale
include('simpleicons-7/P/Planetscale')

' renders the element
Planetscale('Planetscale', 'Planetscale', 'an optional tech label')
@enduml
```

