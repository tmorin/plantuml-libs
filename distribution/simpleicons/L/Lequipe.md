# Lequipe


```text
simpleicons/L/Lequipe
```

```text
include('simpleicons/L/Lequipe')
```



| Illustration | Lequipe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lequipe.png) | ![illustration for Lequipe](../../simpleicons/L/Lequipe.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lequipe
include('simpleicons/L/Lequipe')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lequipe
include('simpleicons/L/Lequipe')

' renders the element
Lequipe('Lequipe', 'Lequipe', 'an optional tech label', 'an optional description')
@enduml
```

