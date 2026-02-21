# RectangleXmark


```text
fontawesome/Regular/RectangleXmark
```

```text
include('fontawesome/Regular/RectangleXmark')
```



| Illustration | RectangleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/RectangleXmark.png) | ![illustration for RectangleXmark](../../fontawesome/Regular/RectangleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RectangleXmarkXs>`
- `<$RectangleXmarkSm>`
- `<$RectangleXmarkMd>`
- `<$RectangleXmarkLg>`





## RectangleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RectangleXmark
include('fontawesome/Regular/RectangleXmark')

' renders the element
RectangleXmark('RectangleXmark', 'Rectangle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RectangleXmark
include('fontawesome/Regular/RectangleXmark')

' renders the element
RectangleXmark('RectangleXmark', 'Rectangle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

