# Neon


```text
simpleicons/N/Neon
```

```text
include('simpleicons/N/Neon')
```



| Illustration | Neon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Neon.png) | ![illustration for Neon](../../simpleicons/N/Neon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeonXs>`
- `<$NeonSm>`
- `<$NeonMd>`
- `<$NeonLg>`





## Neon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Neon
include('simpleicons/N/Neon')

' renders the element
Neon('Neon', 'Neon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Neon
include('simpleicons/N/Neon')

' renders the element
Neon('Neon', 'Neon', 'an optional tech label', 'an optional description')
@enduml
```

