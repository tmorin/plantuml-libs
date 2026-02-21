# Preview


```text
material/Action/Preview
```

```text
include('material/Action/Preview')
```



| Illustration | Preview |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Preview.png) | ![illustration for Preview](../../material/Action/Preview.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PreviewXs>`
- `<$PreviewSm>`
- `<$PreviewMd>`
- `<$PreviewLg>`





## Preview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Preview
include('material/Action/Preview')

' renders the element
Preview('Preview', 'Preview', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Preview
include('material/Action/Preview')

' renders the element
Preview('Preview', 'Preview', 'an optional tech label', 'an optional description')
@enduml
```

