# DumpsterFire


```text
fontawesome-6/Solid/DumpsterFire
```

```text
include('fontawesome-6/Solid/DumpsterFire')
```



| Illustration | DumpsterFire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DumpsterFire.png) | ![illustration for DumpsterFire](../../fontawesome-6/Solid/DumpsterFire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DumpsterFireXs>`
- `<$DumpsterFireSm>`
- `<$DumpsterFireMd>`
- `<$DumpsterFireLg>`





## DumpsterFire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DumpsterFire
include('fontawesome-6/Solid/DumpsterFire')

' renders the element
DumpsterFire('DumpsterFire', 'Dumpster Fire', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DumpsterFire
include('fontawesome-6/Solid/DumpsterFire')

' renders the element
DumpsterFire('DumpsterFire', 'Dumpster Fire', 'an optional tech label', 'an optional description')
@enduml
```

