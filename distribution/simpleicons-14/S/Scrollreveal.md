# Scrollreveal


```text
simpleicons-14/S/Scrollreveal
```

```text
include('simpleicons-14/S/Scrollreveal')
```



| Illustration | Scrollreveal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scrollreveal.png) | ![illustration for Scrollreveal](../../simpleicons-14/S/Scrollreveal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrollrevealXs>`
- `<$ScrollrevealSm>`
- `<$ScrollrevealMd>`
- `<$ScrollrevealLg>`





## Scrollreveal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scrollreveal
include('simpleicons-14/S/Scrollreveal')

' renders the element
Scrollreveal('Scrollreveal', 'Scrollreveal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scrollreveal
include('simpleicons-14/S/Scrollreveal')

' renders the element
Scrollreveal('Scrollreveal', 'Scrollreveal', 'an optional tech label', 'an optional description')
@enduml
```

