# Adonisjs


```text
simpleicons-6/A/Adonisjs
```

```text
include('simpleicons-6/A/Adonisjs')
```



| Illustration | Adonisjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Adonisjs.png) | ![illustration for Adonisjs](../../simpleicons-6/A/Adonisjs.Local.png) |




## Adonisjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adonisjs
include('simpleicons-6/A/Adonisjs')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adonisjs
include('simpleicons-6/A/Adonisjs')

' renders the element
Adonisjs('Adonisjs', 'Adonisjs', 'an optional tech label')
@enduml
```

