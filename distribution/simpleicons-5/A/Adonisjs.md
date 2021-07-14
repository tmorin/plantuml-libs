# Adonisjs


```text
simpleicons-5/A/Adonisjs
```

```text
include('simpleicons-5/A/Adonisjs')
```



| Illustration | Adonisjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adonisjs.png) | ![illustration for Adonisjs](../../simpleicons-5/A/Adonisjs.Local.png) |




## Adonisjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adonisjs
include('simpleicons-5/A/Adonisjs')

' renders the element
Adonisjs('Adonisjs', 'Adonisjs', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adonisjs
include('simpleicons-5/A/Adonisjs')

' renders the element
Adonisjs('Adonisjs', 'Adonisjs', 'an optional tech label')
@enduml
```

