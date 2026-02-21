# TextWidth


```text
fontawesome/Solid/TextWidth
```

```text
include('fontawesome/Solid/TextWidth')
```



| Illustration | TextWidth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TextWidth.png) | ![illustration for TextWidth](../../fontawesome/Solid/TextWidth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextWidthXs>`
- `<$TextWidthSm>`
- `<$TextWidthMd>`
- `<$TextWidthLg>`





## TextWidth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TextWidth
include('fontawesome/Solid/TextWidth')

' renders the element
TextWidth('TextWidth', 'Text Width', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextWidth
include('fontawesome/Solid/TextWidth')

' renders the element
TextWidth('TextWidth', 'Text Width', 'an optional tech label', 'an optional description')
@enduml
```

