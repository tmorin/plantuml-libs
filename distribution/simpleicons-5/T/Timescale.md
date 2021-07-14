# Timescale


```text
simpleicons-5/T/Timescale
```

```text
include('simpleicons-5/T/Timescale')
```



| Illustration | Timescale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Timescale.png) | ![illustration for Timescale](../../simpleicons-5/T/Timescale.Local.png) |




## Timescale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Timescale
include('simpleicons-5/T/Timescale')

' renders the element
Timescale('Timescale', 'Timescale', 'an optional tech label')
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

' loads the Item which embeds the element Timescale
include('simpleicons-5/T/Timescale')

' renders the element
Timescale('Timescale', 'Timescale', 'an optional tech label')
@enduml
```

