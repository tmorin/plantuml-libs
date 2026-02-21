# Edit


```text
material/Image/Edit
```

```text
include('material/Image/Edit')
```



| Illustration | Edit |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Edit.png) | ![illustration for Edit](../../material/Image/Edit.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Edit
include('material/Image/Edit')

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
include('material/bootstrap')

' loads the Item which embeds the element Edit
include('material/Image/Edit')

' renders the element
Edit('Edit', 'Edit', 'an optional tech label', 'an optional description')
@enduml
```

