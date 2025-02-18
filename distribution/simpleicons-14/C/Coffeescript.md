# Coffeescript


```text
simpleicons-14/C/Coffeescript
```

```text
include('simpleicons-14/C/Coffeescript')
```



| Illustration | Coffeescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coffeescript.png) | ![illustration for Coffeescript](../../simpleicons-14/C/Coffeescript.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coffeescript
include('simpleicons-14/C/Coffeescript')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coffeescript
include('simpleicons-14/C/Coffeescript')

' renders the element
Coffeescript('Coffeescript', 'Coffeescript', 'an optional tech label', 'an optional description')
@enduml
```

