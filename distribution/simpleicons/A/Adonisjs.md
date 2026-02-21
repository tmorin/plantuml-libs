# Adonisjs


```text
simpleicons/A/Adonisjs
```

```text
include('simpleicons/A/Adonisjs')
```



| Illustration | Adonisjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Adonisjs.png) | ![illustration for Adonisjs](../../simpleicons/A/Adonisjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdonisjsXs>`
- `<$AdonisjsSm>`
- `<$AdonisjsMd>`
- `<$AdonisjsLg>`





## Adonisjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Adonisjs
include('simpleicons/A/Adonisjs')

' renders the element
Adonisjs('Adonisjs', 'Adonisjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adonisjs
include('simpleicons/A/Adonisjs')

' renders the element
Adonisjs('Adonisjs', 'Adonisjs', 'an optional tech label', 'an optional description')
@enduml
```

