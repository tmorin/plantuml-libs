# Matrix


```text
simpleicons-14/M/Matrix
```

```text
include('simpleicons-14/M/Matrix')
```



| Illustration | Matrix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Matrix.png) | ![illustration for Matrix](../../simpleicons-14/M/Matrix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MatrixXs>`
- `<$MatrixSm>`
- `<$MatrixMd>`
- `<$MatrixLg>`





## Matrix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Matrix
include('simpleicons-14/M/Matrix')

' renders the element
Matrix('Matrix', 'Matrix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Matrix
include('simpleicons-14/M/Matrix')

' renders the element
Matrix('Matrix', 'Matrix', 'an optional tech label', 'an optional description')
@enduml
```

