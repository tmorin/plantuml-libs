# Wish


```text
simpleicons/W/Wish
```

```text
include('simpleicons/W/Wish')
```



| Illustration | Wish |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wish.png) | ![illustration for Wish](../../simpleicons/W/Wish.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WishXs>`
- `<$WishSm>`
- `<$WishMd>`
- `<$WishLg>`





## Wish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wish
include('simpleicons/W/Wish')

' renders the element
Wish('Wish', 'Wish', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wish
include('simpleicons/W/Wish')

' renders the element
Wish('Wish', 'Wish', 'an optional tech label', 'an optional description')
@enduml
```

