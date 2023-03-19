# FaceTired


```text
fontawesome-6/Regular/FaceTired
```

```text
include('fontawesome-6/Regular/FaceTired')
```



| Illustration | FaceTired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceTired.png) | ![illustration for FaceTired](../../fontawesome-6/Regular/FaceTired.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceTiredXs>`
- `<$FaceTiredSm>`
- `<$FaceTiredMd>`
- `<$FaceTiredLg>`





## FaceTired

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceTired
include('fontawesome-6/Regular/FaceTired')

' renders the element
FaceTired('FaceTired', 'Face Tired', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceTired
include('fontawesome-6/Regular/FaceTired')

' renders the element
FaceTired('FaceTired', 'Face Tired', 'an optional tech label', 'an optional description')
@enduml
```

