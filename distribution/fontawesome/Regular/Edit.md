# Edit


```text
fontawesome/Regular/Edit
```

```text
include('fontawesome/Regular/Edit')
```



| Illustration | Edit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Edit.png) | ![illustration for Edit](../../fontawesome/Regular/Edit.Local.png) |



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
include('fontawesome/Regular/Edit')

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
include('fontawesome/Regular/Edit')

' renders the element
Edit('Edit', 'Edit', 'an optional tech label', 'an optional description')
@enduml
```

