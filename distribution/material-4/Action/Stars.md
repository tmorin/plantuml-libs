# Stars


```text
material-4/Action/Stars
```

```text
include('material-4/Action/Stars')
```



| Illustration | Stars |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Stars.png) | ![illustration for Stars](../../material-4/Action/Stars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarsXs>`
- `<$StarsSm>`
- `<$StarsMd>`
- `<$StarsLg>`





## Stars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Stars
include('material-4/Action/Stars')

' renders the element
Stars('Stars', 'Stars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stars
include('material-4/Action/Stars')

' renders the element
Stars('Stars', 'Stars', 'an optional tech label', 'an optional description')
@enduml
```

