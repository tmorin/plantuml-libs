# FaceFlushed


```text
fontawesome/Solid/FaceFlushed
```

```text
include('fontawesome/Solid/FaceFlushed')
```



| Illustration | FaceFlushed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceFlushed.png) | ![illustration for FaceFlushed](../../fontawesome/Solid/FaceFlushed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceFlushedXs>`
- `<$FaceFlushedSm>`
- `<$FaceFlushedMd>`
- `<$FaceFlushedLg>`





## FaceFlushed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceFlushed
include('fontawesome/Solid/FaceFlushed')

' renders the element
FaceFlushed('FaceFlushed', 'Face Flushed', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceFlushed
include('fontawesome/Solid/FaceFlushed')

' renders the element
FaceFlushed('FaceFlushed', 'Face Flushed', 'an optional tech label', 'an optional description')
@enduml
```

