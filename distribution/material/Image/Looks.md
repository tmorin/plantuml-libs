# Looks


```text
material/Image/Looks
```

```text
include('material/Image/Looks')
```



| Illustration | Looks |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Looks.png) | ![illustration for Looks](../../material/Image/Looks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LooksXs>`
- `<$LooksSm>`
- `<$LooksMd>`
- `<$LooksLg>`





## Looks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Looks
include('material/Image/Looks')

' renders the element
Looks('Looks', 'Looks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Looks
include('material/Image/Looks')

' renders the element
Looks('Looks', 'Looks', 'an optional tech label', 'an optional description')
@enduml
```

