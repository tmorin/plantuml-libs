# Yale


```text
simpleicons-14/Y/Yale
```

```text
include('simpleicons-14/Y/Yale')
```



| Illustration | Yale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yale.png) | ![illustration for Yale](../../simpleicons-14/Y/Yale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YaleXs>`
- `<$YaleSm>`
- `<$YaleMd>`
- `<$YaleLg>`





## Yale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yale
include('simpleicons-14/Y/Yale')

' renders the element
Yale('Yale', 'Yale', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yale
include('simpleicons-14/Y/Yale')

' renders the element
Yale('Yale', 'Yale', 'an optional tech label', 'an optional description')
@enduml
```

