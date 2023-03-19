# Hackerone


```text
simpleicons-8/H/Hackerone
```

```text
include('simpleicons-8/H/Hackerone')
```



| Illustration | Hackerone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hackerone.png) | ![illustration for Hackerone](../../simpleicons-8/H/Hackerone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackeroneXs>`
- `<$HackeroneSm>`
- `<$HackeroneMd>`
- `<$HackeroneLg>`





## Hackerone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hackerone
include('simpleicons-8/H/Hackerone')

' renders the element
Hackerone('Hackerone', 'Hackerone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackerone
include('simpleicons-8/H/Hackerone')

' renders the element
Hackerone('Hackerone', 'Hackerone', 'an optional tech label', 'an optional description')
@enduml
```

