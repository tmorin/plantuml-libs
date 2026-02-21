# Dota2


```text
simpleicons-14/D/Dota2
```

```text
include('simpleicons-14/D/Dota2')
```



| Illustration | Dota2 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dota2.png) | ![illustration for Dota2](../../simpleicons-14/D/Dota2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Dota2Xs>`
- `<$Dota2Sm>`
- `<$Dota2Md>`
- `<$Dota2Lg>`





## Dota2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dota2
include('simpleicons-14/D/Dota2')

' renders the element
Dota2('Dota2', 'Dota2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dota2
include('simpleicons-14/D/Dota2')

' renders the element
Dota2('Dota2', 'Dota2', 'an optional tech label', 'an optional description')
@enduml
```

