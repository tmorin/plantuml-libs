# Julia


```text
fontawesome/Brands/Julia
```

```text
include('fontawesome/Brands/Julia')
```



| Illustration | Julia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Julia.png) | ![illustration for Julia](../../fontawesome/Brands/Julia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JuliaXs>`
- `<$JuliaSm>`
- `<$JuliaMd>`
- `<$JuliaLg>`





## Julia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Julia
include('fontawesome/Brands/Julia')

' renders the element
Julia('Julia', 'Julia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Julia
include('fontawesome/Brands/Julia')

' renders the element
Julia('Julia', 'Julia', 'an optional tech label', 'an optional description')
@enduml
```

