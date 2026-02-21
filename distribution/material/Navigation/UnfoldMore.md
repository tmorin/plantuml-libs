# UnfoldMore


```text
material/Navigation/UnfoldMore
```

```text
include('material/Navigation/UnfoldMore')
```



| Illustration | UnfoldMore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/UnfoldMore.png) | ![illustration for UnfoldMore](../../material/Navigation/UnfoldMore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnfoldMoreXs>`
- `<$UnfoldMoreSm>`
- `<$UnfoldMoreMd>`
- `<$UnfoldMoreLg>`





## UnfoldMore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element UnfoldMore
include('material/Navigation/UnfoldMore')

' renders the element
UnfoldMore('UnfoldMore', 'Unfold More', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UnfoldMore
include('material/Navigation/UnfoldMore')

' renders the element
UnfoldMore('UnfoldMore', 'Unfold More', 'an optional tech label', 'an optional description')
@enduml
```

