# Isro


```text
simpleicons-14/I/Isro
```

```text
include('simpleicons-14/I/Isro')
```



| Illustration | Isro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Isro.png) | ![illustration for Isro](../../simpleicons-14/I/Isro.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Isro
include('simpleicons-14/I/Isro')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Isro
include('simpleicons-14/I/Isro')

' renders the element
Isro('Isro', 'Isro', 'an optional tech label', 'an optional description')
@enduml
```

