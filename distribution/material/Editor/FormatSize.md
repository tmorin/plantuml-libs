# FormatSize


```text
material/Editor/FormatSize
```

```text
include('material/Editor/FormatSize')
```



| Illustration | FormatSize |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatSize.png) | ![illustration for FormatSize](../../material/Editor/FormatSize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatSizeXs>`
- `<$FormatSizeSm>`
- `<$FormatSizeMd>`
- `<$FormatSizeLg>`





## FormatSize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatSize
include('material/Editor/FormatSize')

' renders the element
FormatSize('FormatSize', 'Format Size', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatSize
include('material/Editor/FormatSize')

' renders the element
FormatSize('FormatSize', 'Format Size', 'an optional tech label', 'an optional description')
@enduml
```

