# Source


```text
material/Action/Source
```

```text
include('material/Action/Source')
```



| Illustration | Source |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Source.png) | ![illustration for Source](../../material/Action/Source.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SourceXs>`
- `<$SourceSm>`
- `<$SourceMd>`
- `<$SourceLg>`





## Source

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Source
include('material/Action/Source')

' renders the element
Source('Source', 'Source', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Source
include('material/Action/Source')

' renders the element
Source('Source', 'Source', 'an optional tech label', 'an optional description')
@enduml
```

