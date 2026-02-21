# FaceLaughWink


```text
fontawesome/Regular/FaceLaughWink
```

```text
include('fontawesome/Regular/FaceLaughWink')
```



| Illustration | FaceLaughWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceLaughWink.png) | ![illustration for FaceLaughWink](../../fontawesome/Regular/FaceLaughWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceLaughWinkXs>`
- `<$FaceLaughWinkSm>`
- `<$FaceLaughWinkMd>`
- `<$FaceLaughWinkLg>`





## FaceLaughWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceLaughWink
include('fontawesome/Regular/FaceLaughWink')

' renders the element
FaceLaughWink('FaceLaughWink', 'Face Laugh Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceLaughWink
include('fontawesome/Regular/FaceLaughWink')

' renders the element
FaceLaughWink('FaceLaughWink', 'Face Laugh Wink', 'an optional tech label', 'an optional description')
@enduml
```

