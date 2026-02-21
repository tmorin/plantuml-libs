# Lequipe


```text
simpleicons-14/L/Lequipe
```

```text
include('simpleicons-14/L/Lequipe')
```



| Illustration | Lequipe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lequipe.png) | ![illustration for Lequipe](../../simpleicons-14/L/Lequipe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LequipeXs>`
- `<$LequipeSm>`
- `<$LequipeMd>`
- `<$LequipeLg>`





## Lequipe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lequipe
include('simpleicons-14/L/Lequipe')

' renders the element
Lequipe('Lequipe', 'Lequipe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lequipe
include('simpleicons-14/L/Lequipe')

' renders the element
Lequipe('Lequipe', 'Lequipe', 'an optional tech label', 'an optional description')
@enduml
```

