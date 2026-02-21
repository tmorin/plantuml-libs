# Redwoodjs


```text
simpleicons/R/Redwoodjs
```

```text
include('simpleicons/R/Redwoodjs')
```



| Illustration | Redwoodjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redwoodjs.png) | ![illustration for Redwoodjs](../../simpleicons/R/Redwoodjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedwoodjsXs>`
- `<$RedwoodjsSm>`
- `<$RedwoodjsMd>`
- `<$RedwoodjsLg>`





## Redwoodjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redwoodjs
include('simpleicons/R/Redwoodjs')

' renders the element
Redwoodjs('Redwoodjs', 'Redwoodjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redwoodjs
include('simpleicons/R/Redwoodjs')

' renders the element
Redwoodjs('Redwoodjs', 'Redwoodjs', 'an optional tech label', 'an optional description')
@enduml
```

