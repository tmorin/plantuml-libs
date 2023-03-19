# Pm2


```text
simpleicons-8/P/Pm2
```

```text
include('simpleicons-8/P/Pm2')
```



| Illustration | Pm2 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pm2.png) | ![illustration for Pm2](../../simpleicons-8/P/Pm2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Pm2Xs>`
- `<$Pm2Sm>`
- `<$Pm2Md>`
- `<$Pm2Lg>`





## Pm2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pm2
include('simpleicons-8/P/Pm2')

' renders the element
Pm2('Pm2', 'Pm2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pm2
include('simpleicons-8/P/Pm2')

' renders the element
Pm2('Pm2', 'Pm2', 'an optional tech label', 'an optional description')
@enduml
```

