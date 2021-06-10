# DumpsterFire


```text
fontawesome-5/Solid/DumpsterFire
```

```text
include('fontawesome-5/Solid/DumpsterFire')
```



| Illustration | DumpsterFire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DumpsterFire.png) | ![illustration for DumpsterFire](../../fontawesome-5/Solid/DumpsterFire.Local.png) |




## DumpsterFire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DumpsterFire
include('fontawesome-5/Solid/DumpsterFire')

' renders the element
DumpsterFire('DumpsterFire', 'Dumpster Fire', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DumpsterFire
include('fontawesome-5/Solid/DumpsterFire')

' renders the element
DumpsterFire('DumpsterFire', 'Dumpster Fire', 'an optional tech label')
@enduml
```

