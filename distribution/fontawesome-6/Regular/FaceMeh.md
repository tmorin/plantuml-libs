# FaceMeh


```text
fontawesome-6/Regular/FaceMeh
```

```text
include('fontawesome-6/Regular/FaceMeh')
```



| Illustration | FaceMeh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceMeh.png) | ![illustration for FaceMeh](../../fontawesome-6/Regular/FaceMeh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceMehXs>`
- `<$FaceMehSm>`
- `<$FaceMehMd>`
- `<$FaceMehLg>`





## FaceMeh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceMeh
include('fontawesome-6/Regular/FaceMeh')

' renders the element
FaceMeh('FaceMeh', 'Face Meh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceMeh
include('fontawesome-6/Regular/FaceMeh')

' renders the element
FaceMeh('FaceMeh', 'Face Meh', 'an optional tech label', 'an optional description')
@enduml
```

