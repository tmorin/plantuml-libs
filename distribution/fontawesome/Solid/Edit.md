# Edit


```text
fontawesome/Solid/Edit
```

```text
include('fontawesome/Solid/Edit')
```



| Illustration | Edit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Edit.png) | ![illustration for Edit](../../fontawesome/Solid/Edit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EditXs>`
- `<$EditSm>`
- `<$EditMd>`
- `<$EditLg>`





## Edit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Edit
include('fontawesome/Solid/Edit')

' renders the element
Edit('Edit', 'Edit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Edit
include('fontawesome/Solid/Edit')

' renders the element
Edit('Edit', 'Edit', 'an optional tech label', 'an optional description')
@enduml
```

