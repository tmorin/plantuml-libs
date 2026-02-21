# Bento


```text
material/Places/Bento
```

```text
include('material/Places/Bento')
```



| Illustration | Bento |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Bento.png) | ![illustration for Bento](../../material/Places/Bento.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BentoXs>`
- `<$BentoSm>`
- `<$BentoMd>`
- `<$BentoLg>`





## Bento

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Bento
include('material/Places/Bento')

' renders the element
Bento('Bento', 'Bento', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bento
include('material/Places/Bento')

' renders the element
Bento('Bento', 'Bento', 'an optional tech label', 'an optional description')
@enduml
```

