# Kuula


```text
simpleicons/K/Kuula
```

```text
include('simpleicons/K/Kuula')
```



| Illustration | Kuula |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kuula.png) | ![illustration for Kuula](../../simpleicons/K/Kuula.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KuulaXs>`
- `<$KuulaSm>`
- `<$KuulaMd>`
- `<$KuulaLg>`





## Kuula

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kuula
include('simpleicons/K/Kuula')

' renders the element
Kuula('Kuula', 'Kuula', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kuula
include('simpleicons/K/Kuula')

' renders the element
Kuula('Kuula', 'Kuula', 'an optional tech label', 'an optional description')
@enduml
```

