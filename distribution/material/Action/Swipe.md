# Swipe


```text
material/Action/Swipe
```

```text
include('material/Action/Swipe')
```



| Illustration | Swipe |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Swipe.png) | ![illustration for Swipe](../../material/Action/Swipe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwipeXs>`
- `<$SwipeSm>`
- `<$SwipeMd>`
- `<$SwipeLg>`





## Swipe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Swipe
include('material/Action/Swipe')

' renders the element
Swipe('Swipe', 'Swipe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swipe
include('material/Action/Swipe')

' renders the element
Swipe('Swipe', 'Swipe', 'an optional tech label', 'an optional description')
@enduml
```

