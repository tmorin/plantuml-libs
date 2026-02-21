# Looks3


```text
material/Image/Looks3
```

```text
include('material/Image/Looks3')
```



| Illustration | Looks3 |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Looks3.png) | ![illustration for Looks3](../../material/Image/Looks3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Looks3Xs>`
- `<$Looks3Sm>`
- `<$Looks3Md>`
- `<$Looks3Lg>`





## Looks3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Looks3
include('material/Image/Looks3')

' renders the element
Looks3('Looks3', 'Looks3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Looks3
include('material/Image/Looks3')

' renders the element
Looks3('Looks3', 'Looks3', 'an optional tech label', 'an optional description')
@enduml
```

