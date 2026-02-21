# Mocha


```text
simpleicons/M/Mocha
```

```text
include('simpleicons/M/Mocha')
```



| Illustration | Mocha |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mocha.png) | ![illustration for Mocha](../../simpleicons/M/Mocha.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MochaXs>`
- `<$MochaSm>`
- `<$MochaMd>`
- `<$MochaLg>`





## Mocha

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mocha
include('simpleicons/M/Mocha')

' renders the element
Mocha('Mocha', 'Mocha', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mocha
include('simpleicons/M/Mocha')

' renders the element
Mocha('Mocha', 'Mocha', 'an optional tech label', 'an optional description')
@enduml
```

