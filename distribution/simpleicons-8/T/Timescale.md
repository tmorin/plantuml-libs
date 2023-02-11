# Timescale


```text
simpleicons-8/T/Timescale
```

```text
include('simpleicons-8/T/Timescale')
```



| Illustration | Timescale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Timescale.png) | ![illustration for Timescale](../../simpleicons-8/T/Timescale.Local.png) |




## Timescale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Timescale
include('simpleicons-8/T/Timescale')

' renders the element
Timescale('Timescale', 'Timescale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Timescale
include('simpleicons-8/T/Timescale')

' renders the element
Timescale('Timescale', 'Timescale', 'an optional tech label', 'an optional description')
@enduml
```

