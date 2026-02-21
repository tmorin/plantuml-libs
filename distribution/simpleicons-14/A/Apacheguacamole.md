# Apacheguacamole


```text
simpleicons-14/A/Apacheguacamole
```

```text
include('simpleicons-14/A/Apacheguacamole')
```



| Illustration | Apacheguacamole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apacheguacamole.png) | ![illustration for Apacheguacamole](../../simpleicons-14/A/Apacheguacamole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheguacamoleXs>`
- `<$ApacheguacamoleSm>`
- `<$ApacheguacamoleMd>`
- `<$ApacheguacamoleLg>`





## Apacheguacamole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apacheguacamole
include('simpleicons-14/A/Apacheguacamole')

' renders the element
Apacheguacamole('Apacheguacamole', 'Apacheguacamole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apacheguacamole
include('simpleicons-14/A/Apacheguacamole')

' renders the element
Apacheguacamole('Apacheguacamole', 'Apacheguacamole', 'an optional tech label', 'an optional description')
@enduml
```

