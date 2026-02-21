# Rakutenkobo


```text
simpleicons-14/R/Rakutenkobo
```

```text
include('simpleicons-14/R/Rakutenkobo')
```



| Illustration | Rakutenkobo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rakutenkobo.png) | ![illustration for Rakutenkobo](../../simpleicons-14/R/Rakutenkobo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RakutenkoboXs>`
- `<$RakutenkoboSm>`
- `<$RakutenkoboMd>`
- `<$RakutenkoboLg>`





## Rakutenkobo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rakutenkobo
include('simpleicons-14/R/Rakutenkobo')

' renders the element
Rakutenkobo('Rakutenkobo', 'Rakutenkobo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rakutenkobo
include('simpleicons-14/R/Rakutenkobo')

' renders the element
Rakutenkobo('Rakutenkobo', 'Rakutenkobo', 'an optional tech label', 'an optional description')
@enduml
```

