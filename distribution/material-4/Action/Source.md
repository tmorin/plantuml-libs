# Source


```text
material-4/Action/Source
```

```text
include('material-4/Action/Source')
```



| Illustration | Source |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Source.png) | ![illustration for Source](../../material-4/Action/Source.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element Source
include('material-4/Action/Source')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Source
include('material-4/Action/Source')

' renders the element
Source('Source', 'Source', 'an optional tech label', 'an optional description')
@enduml
```

