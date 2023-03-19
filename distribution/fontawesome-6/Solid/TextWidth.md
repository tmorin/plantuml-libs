# TextWidth


```text
fontawesome-6/Solid/TextWidth
```

```text
include('fontawesome-6/Solid/TextWidth')
```



| Illustration | TextWidth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TextWidth.png) | ![illustration for TextWidth](../../fontawesome-6/Solid/TextWidth.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TextWidth
include('fontawesome-6/Solid/TextWidth')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TextWidth
include('fontawesome-6/Solid/TextWidth')

' renders the element
TextWidth('TextWidth', 'Text Width', 'an optional tech label', 'an optional description')
@enduml
```

