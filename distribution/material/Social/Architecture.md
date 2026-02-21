# Architecture


```text
material/Social/Architecture
```

```text
include('material/Social/Architecture')
```



| Illustration | Architecture |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Architecture.png) | ![illustration for Architecture](../../material/Social/Architecture.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchitectureXs>`
- `<$ArchitectureSm>`
- `<$ArchitectureMd>`
- `<$ArchitectureLg>`





## Architecture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Architecture
include('material/Social/Architecture')

' renders the element
Architecture('Architecture', 'Architecture', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Architecture
include('material/Social/Architecture')

' renders the element
Architecture('Architecture', 'Architecture', 'an optional tech label', 'an optional description')
@enduml
```

