# Mariadbfoundation


```text
simpleicons/M/Mariadbfoundation
```

```text
include('simpleicons/M/Mariadbfoundation')
```



| Illustration | Mariadbfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mariadbfoundation.png) | ![illustration for Mariadbfoundation](../../simpleicons/M/Mariadbfoundation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MariadbfoundationXs>`
- `<$MariadbfoundationSm>`
- `<$MariadbfoundationMd>`
- `<$MariadbfoundationLg>`





## Mariadbfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mariadbfoundation
include('simpleicons/M/Mariadbfoundation')

' renders the element
Mariadbfoundation('Mariadbfoundation', 'Mariadbfoundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mariadbfoundation
include('simpleicons/M/Mariadbfoundation')

' renders the element
Mariadbfoundation('Mariadbfoundation', 'Mariadbfoundation', 'an optional tech label', 'an optional description')
@enduml
```

