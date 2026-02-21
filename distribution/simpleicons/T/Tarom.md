# Tarom


```text
simpleicons/T/Tarom
```

```text
include('simpleicons/T/Tarom')
```



| Illustration | Tarom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tarom.png) | ![illustration for Tarom](../../simpleicons/T/Tarom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TaromXs>`
- `<$TaromSm>`
- `<$TaromMd>`
- `<$TaromLg>`





## Tarom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tarom
include('simpleicons/T/Tarom')

' renders the element
Tarom('Tarom', 'Tarom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tarom
include('simpleicons/T/Tarom')

' renders the element
Tarom('Tarom', 'Tarom', 'an optional tech label', 'an optional description')
@enduml
```

