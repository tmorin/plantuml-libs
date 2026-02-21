# Looks6


```text
material/Image/Looks6
```

```text
include('material/Image/Looks6')
```



| Illustration | Looks6 |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Looks6.png) | ![illustration for Looks6](../../material/Image/Looks6.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Looks6Xs>`
- `<$Looks6Sm>`
- `<$Looks6Md>`
- `<$Looks6Lg>`





## Looks6

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Looks6
include('material/Image/Looks6')

' renders the element
Looks6('Looks6', 'Looks6', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Looks6
include('material/Image/Looks6')

' renders the element
Looks6('Looks6', 'Looks6', 'an optional tech label', 'an optional description')
@enduml
```

