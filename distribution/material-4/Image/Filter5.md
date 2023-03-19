# Filter5


```text
material-4/Image/Filter5
```

```text
include('material-4/Image/Filter5')
```



| Illustration | Filter5 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter5.png) | ![illustration for Filter5](../../material-4/Image/Filter5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Filter5Xs>`
- `<$Filter5Sm>`
- `<$Filter5Md>`
- `<$Filter5Lg>`





## Filter5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter5
include('material-4/Image/Filter5')

' renders the element
Filter5('Filter5', 'Filter5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filter5
include('material-4/Image/Filter5')

' renders the element
Filter5('Filter5', 'Filter5', 'an optional tech label', 'an optional description')
@enduml
```

