# WrapText


```text
material/Editor/WrapText
```

```text
include('material/Editor/WrapText')
```



| Illustration | WrapText |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/WrapText.png) | ![illustration for WrapText](../../material/Editor/WrapText.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WrapTextXs>`
- `<$WrapTextSm>`
- `<$WrapTextMd>`
- `<$WrapTextLg>`





## WrapText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WrapText
include('material/Editor/WrapText')

' renders the element
WrapText('WrapText', 'Wrap Text', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WrapText
include('material/Editor/WrapText')

' renders the element
WrapText('WrapText', 'Wrap Text', 'an optional tech label', 'an optional description')
@enduml
```

