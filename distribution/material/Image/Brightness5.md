# Brightness5


```text
material/Image/Brightness5
```

```text
include('material/Image/Brightness5')
```



| Illustration | Brightness5 |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Brightness5.png) | ![illustration for Brightness5](../../material/Image/Brightness5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Brightness5Xs>`
- `<$Brightness5Sm>`
- `<$Brightness5Md>`
- `<$Brightness5Lg>`





## Brightness5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Brightness5
include('material/Image/Brightness5')

' renders the element
Brightness5('Brightness5', 'Brightness5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brightness5
include('material/Image/Brightness5')

' renders the element
Brightness5('Brightness5', 'Brightness5', 'an optional tech label', 'an optional description')
@enduml
```

