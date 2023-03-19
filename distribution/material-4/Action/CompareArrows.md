# CompareArrows


```text
material-4/Action/CompareArrows
```

```text
include('material-4/Action/CompareArrows')
```



| Illustration | CompareArrows |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CompareArrows.png) | ![illustration for CompareArrows](../../material-4/Action/CompareArrows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompareArrowsXs>`
- `<$CompareArrowsSm>`
- `<$CompareArrowsMd>`
- `<$CompareArrowsLg>`





## CompareArrows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CompareArrows
include('material-4/Action/CompareArrows')

' renders the element
CompareArrows('CompareArrows', 'Compare Arrows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CompareArrows
include('material-4/Action/CompareArrows')

' renders the element
CompareArrows('CompareArrows', 'Compare Arrows', 'an optional tech label', 'an optional description')
@enduml
```

