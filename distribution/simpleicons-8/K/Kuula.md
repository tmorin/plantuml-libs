# Kuula


```text
simpleicons-8/K/Kuula
```

```text
include('simpleicons-8/K/Kuula')
```



| Illustration | Kuula |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kuula.png) | ![illustration for Kuula](../../simpleicons-8/K/Kuula.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kuula
include('simpleicons-8/K/Kuula')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kuula
include('simpleicons-8/K/Kuula')

' renders the element
Kuula('Kuula', 'Kuula', 'an optional tech label', 'an optional description')
@enduml
```

