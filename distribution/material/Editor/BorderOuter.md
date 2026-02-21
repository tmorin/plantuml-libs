# BorderOuter


```text
material/Editor/BorderOuter
```

```text
include('material/Editor/BorderOuter')
```



| Illustration | BorderOuter |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BorderOuter.png) | ![illustration for BorderOuter](../../material/Editor/BorderOuter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderOuterXs>`
- `<$BorderOuterSm>`
- `<$BorderOuterMd>`
- `<$BorderOuterLg>`





## BorderOuter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BorderOuter
include('material/Editor/BorderOuter')

' renders the element
BorderOuter('BorderOuter', 'Border Outer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderOuter
include('material/Editor/BorderOuter')

' renders the element
BorderOuter('BorderOuter', 'Border Outer', 'an optional tech label', 'an optional description')
@enduml
```

