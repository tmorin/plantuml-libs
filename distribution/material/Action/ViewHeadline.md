# ViewHeadline


```text
material/Action/ViewHeadline
```

```text
include('material/Action/ViewHeadline')
```



| Illustration | ViewHeadline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ViewHeadline.png) | ![illustration for ViewHeadline](../../material/Action/ViewHeadline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewHeadlineXs>`
- `<$ViewHeadlineSm>`
- `<$ViewHeadlineMd>`
- `<$ViewHeadlineLg>`





## ViewHeadline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ViewHeadline
include('material/Action/ViewHeadline')

' renders the element
ViewHeadline('ViewHeadline', 'View Headline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewHeadline
include('material/Action/ViewHeadline')

' renders the element
ViewHeadline('ViewHeadline', 'View Headline', 'an optional tech label', 'an optional description')
@enduml
```

