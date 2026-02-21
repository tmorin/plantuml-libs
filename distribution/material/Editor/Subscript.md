# Subscript


```text
material/Editor/Subscript
```

```text
include('material/Editor/Subscript')
```



| Illustration | Subscript |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Subscript.png) | ![illustration for Subscript](../../material/Editor/Subscript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubscriptXs>`
- `<$SubscriptSm>`
- `<$SubscriptMd>`
- `<$SubscriptLg>`





## Subscript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Subscript
include('material/Editor/Subscript')

' renders the element
Subscript('Subscript', 'Subscript', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Subscript
include('material/Editor/Subscript')

' renders the element
Subscript('Subscript', 'Subscript', 'an optional tech label', 'an optional description')
@enduml
```

