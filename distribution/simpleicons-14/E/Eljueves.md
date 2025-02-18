# Eljueves


```text
simpleicons-14/E/Eljueves
```

```text
include('simpleicons-14/E/Eljueves')
```



| Illustration | Eljueves |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eljueves.png) | ![illustration for Eljueves](../../simpleicons-14/E/Eljueves.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EljuevesXs>`
- `<$EljuevesSm>`
- `<$EljuevesMd>`
- `<$EljuevesLg>`





## Eljueves

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eljueves
include('simpleicons-14/E/Eljueves')

' renders the element
Eljueves('Eljueves', 'Eljueves', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eljueves
include('simpleicons-14/E/Eljueves')

' renders the element
Eljueves('Eljueves', 'Eljueves', 'an optional tech label', 'an optional description')
@enduml
```

