# Theplanetarysociety


```text
simpleicons/T/Theplanetarysociety
```

```text
include('simpleicons/T/Theplanetarysociety')
```



| Illustration | Theplanetarysociety |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Theplanetarysociety.png) | ![illustration for Theplanetarysociety](../../simpleicons/T/Theplanetarysociety.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheplanetarysocietyXs>`
- `<$TheplanetarysocietySm>`
- `<$TheplanetarysocietyMd>`
- `<$TheplanetarysocietyLg>`





## Theplanetarysociety

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Theplanetarysociety
include('simpleicons/T/Theplanetarysociety')

' renders the element
Theplanetarysociety('Theplanetarysociety', 'Theplanetarysociety', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Theplanetarysociety
include('simpleicons/T/Theplanetarysociety')

' renders the element
Theplanetarysociety('Theplanetarysociety', 'Theplanetarysociety', 'an optional tech label', 'an optional description')
@enduml
```

