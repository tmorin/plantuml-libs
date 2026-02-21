# Save


```text
material/Content/Save
```

```text
include('material/Content/Save')
```



| Illustration | Save |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Save.png) | ![illustration for Save](../../material/Content/Save.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaveXs>`
- `<$SaveSm>`
- `<$SaveMd>`
- `<$SaveLg>`





## Save

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Save
include('material/Content/Save')

' renders the element
Save('Save', 'Save', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Save
include('material/Content/Save')

' renders the element
Save('Save', 'Save', 'an optional tech label', 'an optional description')
@enduml
```

