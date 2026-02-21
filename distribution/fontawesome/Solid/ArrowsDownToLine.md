# ArrowsDownToLine


```text
fontawesome/Solid/ArrowsDownToLine
```

```text
include('fontawesome/Solid/ArrowsDownToLine')
```



| Illustration | ArrowsDownToLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsDownToLine.png) | ![illustration for ArrowsDownToLine](../../fontawesome/Solid/ArrowsDownToLine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsDownToLineXs>`
- `<$ArrowsDownToLineSm>`
- `<$ArrowsDownToLineMd>`
- `<$ArrowsDownToLineLg>`





## ArrowsDownToLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsDownToLine
include('fontawesome/Solid/ArrowsDownToLine')

' renders the element
ArrowsDownToLine('ArrowsDownToLine', 'Arrows Down To Line', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsDownToLine
include('fontawesome/Solid/ArrowsDownToLine')

' renders the element
ArrowsDownToLine('ArrowsDownToLine', 'Arrows Down To Line', 'an optional tech label', 'an optional description')
@enduml
```

