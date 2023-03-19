# Looks4


```text
material-4/Image/Looks4
```

```text
include('material-4/Image/Looks4')
```



| Illustration | Looks4 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Looks4.png) | ![illustration for Looks4](../../material-4/Image/Looks4.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Looks4Xs>`
- `<$Looks4Sm>`
- `<$Looks4Md>`
- `<$Looks4Lg>`





## Looks4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Looks4
include('material-4/Image/Looks4')

' renders the element
Looks4('Looks4', 'Looks4', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Looks4
include('material-4/Image/Looks4')

' renders the element
Looks4('Looks4', 'Looks4', 'an optional tech label', 'an optional description')
@enduml
```

