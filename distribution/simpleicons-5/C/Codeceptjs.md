# Codeceptjs


```text
simpleicons-5/C/Codeceptjs
```

```text
include('simpleicons-5/C/Codeceptjs')
```



| Illustration | Codeceptjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codeceptjs.png) | ![illustration for Codeceptjs](../../simpleicons-5/C/Codeceptjs.Local.png) |




## Codeceptjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codeceptjs
include('simpleicons-5/C/Codeceptjs')

' renders the element
Codeceptjs('Codeceptjs', 'Codeceptjs', 'an optional tech label')
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

' loads the Item which embeds the element Codeceptjs
include('simpleicons-5/C/Codeceptjs')

' renders the element
Codeceptjs('Codeceptjs', 'Codeceptjs', 'an optional tech label')
@enduml
```

