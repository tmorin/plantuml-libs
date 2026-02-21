# UnfoldLess


```text
material/Navigation/UnfoldLess
```

```text
include('material/Navigation/UnfoldLess')
```



| Illustration | UnfoldLess |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/UnfoldLess.png) | ![illustration for UnfoldLess](../../material/Navigation/UnfoldLess.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnfoldLessXs>`
- `<$UnfoldLessSm>`
- `<$UnfoldLessMd>`
- `<$UnfoldLessLg>`





## UnfoldLess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element UnfoldLess
include('material/Navigation/UnfoldLess')

' renders the element
UnfoldLess('UnfoldLess', 'Unfold Less', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UnfoldLess
include('material/Navigation/UnfoldLess')

' renders the element
UnfoldLess('UnfoldLess', 'Unfold Less', 'an optional tech label', 'an optional description')
@enduml
```

