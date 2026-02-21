# Ejs


```text
simpleicons-14/E/Ejs
```

```text
include('simpleicons-14/E/Ejs')
```



| Illustration | Ejs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ejs.png) | ![illustration for Ejs](../../simpleicons-14/E/Ejs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EjsXs>`
- `<$EjsSm>`
- `<$EjsMd>`
- `<$EjsLg>`





## Ejs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ejs
include('simpleicons-14/E/Ejs')

' renders the element
Ejs('Ejs', 'Ejs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ejs
include('simpleicons-14/E/Ejs')

' renders the element
Ejs('Ejs', 'Ejs', 'an optional tech label', 'an optional description')
@enduml
```

