# Renren


```text
simpleicons-8/R/Renren
```

```text
include('simpleicons-8/R/Renren')
```



| Illustration | Renren |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Renren.png) | ![illustration for Renren](../../simpleicons-8/R/Renren.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RenrenXs>`
- `<$RenrenSm>`
- `<$RenrenMd>`
- `<$RenrenLg>`





## Renren

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Renren
include('simpleicons-8/R/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Renren
include('simpleicons-8/R/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label', 'an optional description')
@enduml
```

