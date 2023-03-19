# StarHalf


```text
material-4/Toggle/StarHalf
```

```text
include('material-4/Toggle/StarHalf')
```



| Illustration | StarHalf |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/StarHalf.png) | ![illustration for StarHalf](../../material-4/Toggle/StarHalf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarHalfXs>`
- `<$StarHalfSm>`
- `<$StarHalfMd>`
- `<$StarHalfLg>`





## StarHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StarHalf
include('material-4/Toggle/StarHalf')

' renders the element
StarHalf('StarHalf', 'Star Half', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarHalf
include('material-4/Toggle/StarHalf')

' renders the element
StarHalf('StarHalf', 'Star Half', 'an optional tech label', 'an optional description')
@enduml
```

