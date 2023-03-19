# Coop


```text
simpleicons-8/C/Coop
```

```text
include('simpleicons-8/C/Coop')
```



| Illustration | Coop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Coop.png) | ![illustration for Coop](../../simpleicons-8/C/Coop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoopXs>`
- `<$CoopSm>`
- `<$CoopMd>`
- `<$CoopLg>`





## Coop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Coop
include('simpleicons-8/C/Coop')

' renders the element
Coop('Coop', 'Coop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coop
include('simpleicons-8/C/Coop')

' renders the element
Coop('Coop', 'Coop', 'an optional tech label', 'an optional description')
@enduml
```

