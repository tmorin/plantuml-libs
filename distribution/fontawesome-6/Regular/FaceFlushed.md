# FaceFlushed


```text
fontawesome-6/Regular/FaceFlushed
```

```text
include('fontawesome-6/Regular/FaceFlushed')
```



| Illustration | FaceFlushed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceFlushed.png) | ![illustration for FaceFlushed](../../fontawesome-6/Regular/FaceFlushed.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceFlushed
include('fontawesome-6/Regular/FaceFlushed')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceFlushed
include('fontawesome-6/Regular/FaceFlushed')

' renders the element
FaceFlushed('FaceFlushed', 'Face Flushed', 'an optional tech label', 'an optional description')
@enduml
```

