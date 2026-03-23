# WindowClose


```text
fontawesome/Regular/WindowClose
```

```text
include('fontawesome/Regular/WindowClose')
```



| Illustration | WindowClose |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/WindowClose.png) | ![illustration for WindowClose](../../fontawesome/Regular/WindowClose.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindowCloseXs>`
- `<$WindowCloseSm>`
- `<$WindowCloseMd>`
- `<$WindowCloseLg>`





## WindowClose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WindowClose
include('fontawesome/Regular/WindowClose')

' renders the element
WindowClose('WindowClose', 'Window Close', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WindowClose
include('fontawesome/Regular/WindowClose')

' renders the element
WindowClose('WindowClose', 'Window Close', 'an optional tech label', 'an optional description')
@enduml
```

