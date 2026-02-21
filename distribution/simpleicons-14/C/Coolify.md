# Coolify


```text
simpleicons-14/C/Coolify
```

```text
include('simpleicons-14/C/Coolify')
```



| Illustration | Coolify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coolify.png) | ![illustration for Coolify](../../simpleicons-14/C/Coolify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoolifyXs>`
- `<$CoolifySm>`
- `<$CoolifyMd>`
- `<$CoolifyLg>`





## Coolify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coolify
include('simpleicons-14/C/Coolify')

' renders the element
Coolify('Coolify', 'Coolify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coolify
include('simpleicons-14/C/Coolify')

' renders the element
Coolify('Coolify', 'Coolify', 'an optional tech label', 'an optional description')
@enduml
```

