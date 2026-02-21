# TextHeight


```text
fontawesome/Solid/TextHeight
```

```text
include('fontawesome/Solid/TextHeight')
```



| Illustration | TextHeight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TextHeight.png) | ![illustration for TextHeight](../../fontawesome/Solid/TextHeight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextHeightXs>`
- `<$TextHeightSm>`
- `<$TextHeightMd>`
- `<$TextHeightLg>`





## TextHeight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TextHeight
include('fontawesome/Solid/TextHeight')

' renders the element
TextHeight('TextHeight', 'Text Height', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextHeight
include('fontawesome/Solid/TextHeight')

' renders the element
TextHeight('TextHeight', 'Text Height', 'an optional tech label', 'an optional description')
@enduml
```

