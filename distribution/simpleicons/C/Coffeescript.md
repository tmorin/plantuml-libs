# Coffeescript


```text
simpleicons/C/Coffeescript
```

```text
include('simpleicons/C/Coffeescript')
```



| Illustration | Coffeescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coffeescript.png) | ![illustration for Coffeescript](../../simpleicons/C/Coffeescript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoffeescriptXs>`
- `<$CoffeescriptSm>`
- `<$CoffeescriptMd>`
- `<$CoffeescriptLg>`





## Coffeescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coffeescript
include('simpleicons/C/Coffeescript')

' renders the element
Coffeescript('Coffeescript', 'Coffeescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coffeescript
include('simpleicons/C/Coffeescript')

' renders the element
Coffeescript('Coffeescript', 'Coffeescript', 'an optional tech label', 'an optional description')
@enduml
```

