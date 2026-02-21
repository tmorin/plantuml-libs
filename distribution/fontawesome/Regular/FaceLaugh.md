# FaceLaugh


```text
fontawesome/Regular/FaceLaugh
```

```text
include('fontawesome/Regular/FaceLaugh')
```



| Illustration | FaceLaugh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceLaugh.png) | ![illustration for FaceLaugh](../../fontawesome/Regular/FaceLaugh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceLaughXs>`
- `<$FaceLaughSm>`
- `<$FaceLaughMd>`
- `<$FaceLaughLg>`





## FaceLaugh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceLaugh
include('fontawesome/Regular/FaceLaugh')

' renders the element
FaceLaugh('FaceLaugh', 'Face Laugh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceLaugh
include('fontawesome/Regular/FaceLaugh')

' renders the element
FaceLaugh('FaceLaugh', 'Face Laugh', 'an optional tech label', 'an optional description')
@enduml
```

