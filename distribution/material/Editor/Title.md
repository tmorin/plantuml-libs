# Title


```text
material/Editor/Title
```

```text
include('material/Editor/Title')
```



| Illustration | Title |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Title.png) | ![illustration for Title](../../material/Editor/Title.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TitleXs>`
- `<$TitleSm>`
- `<$TitleMd>`
- `<$TitleLg>`





## Title

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Title
include('material/Editor/Title')

' renders the element
Title('Title', 'Title', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Title
include('material/Editor/Title')

' renders the element
Title('Title', 'Title', 'an optional tech label', 'an optional description')
@enduml
```

