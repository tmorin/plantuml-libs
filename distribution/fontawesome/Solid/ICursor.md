# ICursor


```text
fontawesome/Solid/ICursor
```

```text
include('fontawesome/Solid/ICursor')
```



| Illustration | ICursor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ICursor.png) | ![illustration for ICursor](../../fontawesome/Solid/ICursor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ICursorXs>`
- `<$ICursorSm>`
- `<$ICursorMd>`
- `<$ICursorLg>`





## ICursor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ICursor
include('fontawesome/Solid/ICursor')

' renders the element
ICursor('ICursor', 'I Cursor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ICursor
include('fontawesome/Solid/ICursor')

' renders the element
ICursor('ICursor', 'I Cursor', 'an optional tech label', 'an optional description')
@enduml
```

