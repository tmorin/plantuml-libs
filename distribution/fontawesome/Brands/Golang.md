# Golang


```text
fontawesome/Brands/Golang
```

```text
include('fontawesome/Brands/Golang')
```



| Illustration | Golang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Golang.png) | ![illustration for Golang](../../fontawesome/Brands/Golang.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GolangXs>`
- `<$GolangSm>`
- `<$GolangMd>`
- `<$GolangLg>`





## Golang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Golang
include('fontawesome/Brands/Golang')

' renders the element
Golang('Golang', 'Golang', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Golang
include('fontawesome/Brands/Golang')

' renders the element
Golang('Golang', 'Golang', 'an optional tech label', 'an optional description')
@enduml
```

