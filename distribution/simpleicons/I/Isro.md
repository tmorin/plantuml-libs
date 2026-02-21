# Isro


```text
simpleicons/I/Isro
```

```text
include('simpleicons/I/Isro')
```



| Illustration | Isro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Isro.png) | ![illustration for Isro](../../simpleicons/I/Isro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IsroXs>`
- `<$IsroSm>`
- `<$IsroMd>`
- `<$IsroLg>`





## Isro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Isro
include('simpleicons/I/Isro')

' renders the element
Isro('Isro', 'Isro', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Isro
include('simpleicons/I/Isro')

' renders the element
Isro('Isro', 'Isro', 'an optional tech label', 'an optional description')
@enduml
```

