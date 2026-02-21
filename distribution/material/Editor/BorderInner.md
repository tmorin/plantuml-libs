# BorderInner


```text
material/Editor/BorderInner
```

```text
include('material/Editor/BorderInner')
```



| Illustration | BorderInner |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BorderInner.png) | ![illustration for BorderInner](../../material/Editor/BorderInner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderInnerXs>`
- `<$BorderInnerSm>`
- `<$BorderInnerMd>`
- `<$BorderInnerLg>`





## BorderInner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BorderInner
include('material/Editor/BorderInner')

' renders the element
BorderInner('BorderInner', 'Border Inner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderInner
include('material/Editor/BorderInner')

' renders the element
BorderInner('BorderInner', 'Border Inner', 'an optional tech label', 'an optional description')
@enduml
```

