# Suckless


```text
simpleicons/S/Suckless
```

```text
include('simpleicons/S/Suckless')
```



| Illustration | Suckless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Suckless.png) | ![illustration for Suckless](../../simpleicons/S/Suckless.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SucklessXs>`
- `<$SucklessSm>`
- `<$SucklessMd>`
- `<$SucklessLg>`





## Suckless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Suckless
include('simpleicons/S/Suckless')

' renders the element
Suckless('Suckless', 'Suckless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suckless
include('simpleicons/S/Suckless')

' renders the element
Suckless('Suckless', 'Suckless', 'an optional tech label', 'an optional description')
@enduml
```

