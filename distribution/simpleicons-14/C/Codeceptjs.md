# Codeceptjs


```text
simpleicons-14/C/Codeceptjs
```

```text
include('simpleicons-14/C/Codeceptjs')
```



| Illustration | Codeceptjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codeceptjs.png) | ![illustration for Codeceptjs](../../simpleicons-14/C/Codeceptjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeceptjsXs>`
- `<$CodeceptjsSm>`
- `<$CodeceptjsMd>`
- `<$CodeceptjsLg>`





## Codeceptjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codeceptjs
include('simpleicons-14/C/Codeceptjs')

' renders the element
Codeceptjs('Codeceptjs', 'Codeceptjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codeceptjs
include('simpleicons-14/C/Codeceptjs')

' renders the element
Codeceptjs('Codeceptjs', 'Codeceptjs', 'an optional tech label', 'an optional description')
@enduml
```

