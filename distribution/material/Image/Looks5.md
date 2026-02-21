# Looks5


```text
material/Image/Looks5
```

```text
include('material/Image/Looks5')
```



| Illustration | Looks5 |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Looks5.png) | ![illustration for Looks5](../../material/Image/Looks5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Looks5Xs>`
- `<$Looks5Sm>`
- `<$Looks5Md>`
- `<$Looks5Lg>`





## Looks5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Looks5
include('material/Image/Looks5')

' renders the element
Looks5('Looks5', 'Looks5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Looks5
include('material/Image/Looks5')

' renders the element
Looks5('Looks5', 'Looks5', 'an optional tech label', 'an optional description')
@enduml
```

