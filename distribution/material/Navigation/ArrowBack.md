# ArrowBack


```text
material/Navigation/ArrowBack
```

```text
include('material/Navigation/ArrowBack')
```



| Illustration | ArrowBack |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ArrowBack.png) | ![illustration for ArrowBack](../../material/Navigation/ArrowBack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowBackXs>`
- `<$ArrowBackSm>`
- `<$ArrowBackMd>`
- `<$ArrowBackLg>`





## ArrowBack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ArrowBack
include('material/Navigation/ArrowBack')

' renders the element
ArrowBack('ArrowBack', 'Arrow Back', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowBack
include('material/Navigation/ArrowBack')

' renders the element
ArrowBack('ArrowBack', 'Arrow Back', 'an optional tech label', 'an optional description')
@enduml
```

