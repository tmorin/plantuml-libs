# Zap


```text
simpleicons-14/Z/Zap
```

```text
include('simpleicons-14/Z/Zap')
```



| Illustration | Zap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zap.png) | ![illustration for Zap](../../simpleicons-14/Z/Zap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZapXs>`
- `<$ZapSm>`
- `<$ZapMd>`
- `<$ZapLg>`





## Zap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zap
include('simpleicons-14/Z/Zap')

' renders the element
Zap('Zap', 'Zap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zap
include('simpleicons-14/Z/Zap')

' renders the element
Zap('Zap', 'Zap', 'an optional tech label', 'an optional description')
@enduml
```

