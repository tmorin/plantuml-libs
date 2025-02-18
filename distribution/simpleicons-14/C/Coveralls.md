# Coveralls


```text
simpleicons-14/C/Coveralls
```

```text
include('simpleicons-14/C/Coveralls')
```



| Illustration | Coveralls |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coveralls.png) | ![illustration for Coveralls](../../simpleicons-14/C/Coveralls.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coveralls
include('simpleicons-14/C/Coveralls')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coveralls
include('simpleicons-14/C/Coveralls')

' renders the element
Coveralls('Coveralls', 'Coveralls', 'an optional tech label', 'an optional description')
@enduml
```

