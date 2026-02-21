# FormatPaint


```text
material/Editor/FormatPaint
```

```text
include('material/Editor/FormatPaint')
```



| Illustration | FormatPaint |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatPaint.png) | ![illustration for FormatPaint](../../material/Editor/FormatPaint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatPaintXs>`
- `<$FormatPaintSm>`
- `<$FormatPaintMd>`
- `<$FormatPaintLg>`





## FormatPaint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatPaint
include('material/Editor/FormatPaint')

' renders the element
FormatPaint('FormatPaint', 'Format Paint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatPaint
include('material/Editor/FormatPaint')

' renders the element
FormatPaint('FormatPaint', 'Format Paint', 'an optional tech label', 'an optional description')
@enduml
```

