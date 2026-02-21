# Link


```text
material/Content/Link
```

```text
include('material/Content/Link')
```



| Illustration | Link |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Link.png) | ![illustration for Link](../../material/Content/Link.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkXs>`
- `<$LinkSm>`
- `<$LinkMd>`
- `<$LinkLg>`





## Link

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Link
include('material/Content/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Link
include('material/Content/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label', 'an optional description')
@enduml
```

