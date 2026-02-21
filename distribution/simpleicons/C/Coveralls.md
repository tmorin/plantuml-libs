# Coveralls


```text
simpleicons/C/Coveralls
```

```text
include('simpleicons/C/Coveralls')
```



| Illustration | Coveralls |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coveralls.png) | ![illustration for Coveralls](../../simpleicons/C/Coveralls.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoverallsXs>`
- `<$CoverallsSm>`
- `<$CoverallsMd>`
- `<$CoverallsLg>`





## Coveralls

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coveralls
include('simpleicons/C/Coveralls')

' renders the element
Coveralls('Coveralls', 'Coveralls', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coveralls
include('simpleicons/C/Coveralls')

' renders the element
Coveralls('Coveralls', 'Coveralls', 'an optional tech label', 'an optional description')
@enduml
```

